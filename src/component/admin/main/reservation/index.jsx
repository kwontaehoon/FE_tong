import React, { useRef, useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { locationText } from '../../../../constants/text/admin/Reservation';
import { useReservationAddMutation, useReservationListQuery, useReservationModifyMutation, useReservationDeleteMutation } from '../../../../hooks/queries/admin/Main';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


const index = () => {

    const imgRef = useRef();
    const { data, isSuccess } = useReservationListQuery();
    const [dataArr, setDataArr] = useState(data);
    const [addFlag, setAddFlag] = useState(false);
    const [location, setLocation] = useState('');
    const [info, setInfo] = useState({
        title: "",
        subTitle: "",
        location: "",
        score: "",
        peopleCount: "",
        deadLine: "",
        locationDetails: "",
        category1: "",
        category2: "",
        category3: ""
    });
    
    const [imgFileList, setImgFileList] = useState([]); // 업로드된 이미지 파일 저장
    const [reservationFileIds, setReservationFileIds] = useState([]); // reservationFileIds
    const { mutateAsync: modify } = useReservationModifyMutation();
    const { mutateAsync: add } = useReservationAddMutation();
    const { mutateAsync: remove } = useReservationDeleteMutation();
    const [modifyFlag, setModifyFlag] = useState([]);

    useEffect(() => {
        setDataArr(data);
        setModifyFlag(Array.from({ length: data?.length }, () => false));
    }, [isSuccess]);

    const modifyButton = (index) => {
        let arr = Array.from({ length: dataArr?.length }, () => false);
        arr[index] = true;
        setModifyFlag(arr);
    }

    const submit = async () => {
        let formData = new FormData();
        for (let i of imgFileList) {
            formData.append("files", i);
        }
        !addFlag && formData.append("reservationId", info.reservationId);
        !addFlag && formData.append("reservationFileIds", reservationFileIds);
        formData.append("title", info.title);
        formData.append("subTitle", info.subTitle);
        formData.append("location", info.location);
        formData.append("score", info.score);
        formData.append("peopleCount", info.peopleCount);
        formData.append("xCoordinate", !addFlag ? info.xcoordinate : location.x);
        formData.append("yCoordinate", !addFlag ? info.ycoordinate : location.y);
        formData.append("deadLine", info.deadLine);
        formData.append("locationDetails", info.locationDetails);
        formData.append("category1", info.category1);
        formData.append("category2", info.category2);
        formData.append("category3", info.category3);

        if (addFlag) {
            await add(formData);
        } else await modify(formData);

        window.alert("수정했습니다.");
        window.location.reload();
    }

    return isSuccess && (
        <div>
            <div className='flex mb-5'>
                <div className='font-bold text-xl flex-1'>예약</div>
            </div>
            <div>
                {dataArr?.map((x, index) => {
                    return <div key={index}>
                        <div className='flex mb-2 items-center'>
                            <div className='flex-1'>이미지</div>
                            <Button sx={{ backgroundColor: '#FF0000', marginRight: "8px" }} variant="contained"
                                onClick={() => {
                                    remove({ reservationId: x.reservationId });
                                    window.alert("삭제했습니다.");
                                    window.location.reload();
                                }}>삭제
                            </Button>
                            <Button sx={{ backgroundColor: '#007CFF' }} variant="contained"
                                onClick={() => {
                                    if (!modifyFlag[index] && !addFlag) {
                                        modifyButton(index);
                                        setInfo(dataArr[index]);
                                    } else if (imgFileList.length == 0) {
                                        window.alert("이미지는 필수입니다.");
                                    } else if (!dataArr.length == 1 && addFlag) {
                                        window.alert("추가를 완료해주세요.");
                                    } else {
                                        submit();
                                    }
                                }}>{modifyFlag[index] ? '완료' : '수정하기'}
                            </Button>
                        </div>
                        <div className='flex overflow-x-scroll'>
                            {x.reservationFiles.map((y, imgIndex) => {
                                return (<div key={imgIndex}>
                                    <label className={"border-grey200 mr-5 w-52 h-40 rounded flex cursor-pointer mb-5" + (x.reservationFiles[imgIndex].fileName == "" ? ' border' : '')} htmlFor={modifyFlag[index] ? `reservationImage-${index}-${imgIndex}` : ''}>
                                        {x.reservationFiles[imgIndex].fileName ? x.reservationFiles[imgIndex].imgPath ? <img src={x.reservationFiles[imgIndex].imgPath} /> : <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x?.reservationFiles[imgIndex]?.fileName}`} /> : <img src={x.reservationFiles[imgIndex].imgPath} />}
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id={`reservationImage-${index}-${imgIndex}`}
                                        multiple
                                        ref={imgRef}
                                        style={{ display: 'none' }}
                                        onChange={(e) => {
                                            let arr = [...imgFileList];
                                            arr[imgIndex] = e.target.files[0];

                                            const ids = [...reservationFileIds];
                                            if (!ids.includes(y.reservationFileId)) {
                                                ids.push(y.reservationFileId);
                                            }
                                            setReservationFileIds(ids);
                                            setImgFileList(arr);
                                            const reader = new FileReader();
                                            reader.readAsDataURL(e.target.files[0]);
                                            reader.onload = () => {
                                                let arr = [...dataArr];
                                                arr[index].reservationFiles[imgIndex].imgPath = reader.result;
                                                setDataArr(arr);
                                            };
                                        }}
                                    />
                                </div>)
                            })}
                        </div>
                        {modifyFlag[index] &&
                            <div className='my-5'>
                                <Button sx={{ backgroundColor: '#007CFF', marginRight: "12px" }} variant="contained"
                                    onClick={() => {
                                        const arr = [...dataArr];
                                        arr[index].reservationFiles.push({
                                            fileName: "",
                                            fileSize: "",
                                            reservationFileId: dataArr?.map(x => x.reservationFiles.length).reduce((a, b) => a + b) + 1,
                                        });
                                        setDataArr(arr);
                                    }} >이미지 추가
                                </Button>
                                {/* <Button sx={{ backgroundColor: '#007CFF' }} variant="contained"
                            onClick={()=>{
                               const arr = [...dataArr];
                               arr[index].reservationFiles.pop();
                               setDataArr(arr);
                            }} >이미지 삭제
                        </Button> */}
                            </div>}

                        {x.reservationId ? "" : <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">지역 선택</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={location}
                                label="지역 선택"
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                {locationText.map((x, index) => {
                                    return <MenuItem value={x} key={index}>{x.location}</MenuItem>
                                })}
                            </Select>
                        </FormControl>}

                        <div className='w-full mt-5'>
                            <div className='mb-5'>
                                <div>제목</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} value={x.title}
                                    onChange={(e) => {
                                        const arr = [...dataArr];
                                        arr[index].title = e.target.value;
                                        setDataArr(arr);
                                        setInfo({ ...info, title: e.target.value });
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>주소</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} value={x.subTitle}
                                    onChange={(e) => {
                                        const arr = [...dataArr];
                                        arr[index].subTitle = e.target.value;
                                        setDataArr(arr);
                                        setInfo({ ...info, subTitle: e.target.value });
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>상세 주소</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} value={x.locationDetails}
                                    onChange={(e) => {
                                        const arr = [...dataArr];
                                        arr[index].locationDetails = e.target.value;
                                        setDataArr(arr);
                                        setInfo({ ...info, locationDetails: e.target.value });
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>위치</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} value={x.location}
                                    onChange={(e) => {
                                        const arr = [...dataArr];
                                        arr[index].location = e.target.value;
                                        setDataArr(arr);
                                        setInfo({ ...info, location: e.target.value });
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>평점</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} type='number' value={x.score}
                                    onChange={(e) => {
                                        const arr = [...dataArr];
                                        arr[index].score = e.target.value;
                                        setDataArr(arr);
                                        setInfo({ ...info, score: e.target.value });
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>인원</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} type='number' value={x.peopleCount}
                                    onChange={(e) => {
                                        const arr = [...dataArr];
                                        arr[index].peopleCount = e.target.value;
                                        setDataArr(arr);
                                        setInfo({ ...info, peopleCount: e.target.value });
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>카테고리1</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} value={x.category1}
                                    onChange={(e) => {
                                        const arr = [...dataArr];
                                        arr[index].category1 = e.target.value;
                                        setDataArr(arr);
                                        setInfo({ ...info, category1: e.target.value });
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>카테고리2</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} value={x.category2}
                                    onChange={(e) => {
                                        const arr = [...dataArr];
                                        arr[index].category2 = e.target.value;
                                        setDataArr(arr);
                                        setInfo({ ...info, category2: e.target.value });
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>카테고리3</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} value={x.category3}
                                    onChange={(e) => {
                                        const arr = [...dataArr];
                                        arr[index].category3 = e.target.value;
                                        setDataArr(arr);
                                        setInfo({ ...info, category3: e.target.value });
                                    }} />
                            </div>
                            {!modifyFlag[index] ? '' : <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker onChange={(date)=>{
                                     const selectedDate = dayjs(date);
        
                                     // 선택된 날짜를 "YYYY-MM-DD" 형식의 문자열로 가공
                                     const formattedDate = selectedDate.format('YYYY-MM-DD');
                                     setInfo({...info, deadLine: formattedDate});
                                }} />
                            </LocalizationProvider>}
                        </div>
                    </div>
                })}
                <div className='flex justify-end'>
                    <Button sx={{ backgroundColor: '#007CFF' }} variant="contained"
                        onClick={() => {
                            if (modifyFlag.filter(x => x == true).length == 1) {
                                window.alert("수정을 완료해주세요.");
                            } else {
                                let arr = [...dataArr];
                                const modifyFlagArr = [...modifyFlag];
                                arr.push({
                                    title: "",
                                    subTitle: "",
                                    location: "",
                                    reservationFiles: [],
                                    peopleCount: "",
                                    score: ""
                                });
                                modifyFlagArr.push(true);
                                setDataArr(arr);
                                setModifyFlag(modifyFlagArr);
                                setAddFlag(true);
                            }
                        }}>추가
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default index