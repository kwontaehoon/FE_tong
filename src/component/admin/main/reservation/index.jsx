import React, { useRef, useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { useReservationListQuery, useReservationModifyMutation, useReservationAddMutation } from '../../../../hooks/queries/admin/Main';

const index = () => {

    const imgRef = useRef();
    const { data, isSuccess } = useReservationListQuery();
    const [dataArr, setDataArr] = useState(data);
    const [addFlag, setAddFlag] = useState(false);
    const [info, setInfo] = useState({
        title: "",
        subTitle: "",
        location: "",
        score: "",
        peopleCount: ""
    });
    const [imgFileList, setImgFileList] = useState();
    const { mutateAsync: modify } = useReservationModifyMutation();
    const { mutateAsync: add } = useReservationAddMutation();
    const [modifyFlag, setModifyFlag] = useState([]);

    useEffect(() => {
        setDataArr(data);
        setModifyFlag(Array.from({length: data?.length}, () => false));
    }, [isSuccess]);

    const modifyButton = (index) => {
        let arr = Array.from({length: dataArr?.length}, () => false);
        arr[index] = true;
        setModifyFlag(arr);
    }

    const submit = async() => {
        let formData = new FormData();
        formData.append("files", imgFileList);
        !addFlag && formData.append("reservationId", info.reservationId);
        formData.append("title", info.title);
        formData.append("subTitle", info.subTitle);
        formData.append("location", info.location);
        formData.append("score", info.score);
        formData.append("peopleCount", info.peopleCount);

        if(addFlag){
            await add(formData);
        }else await modify(formData);

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
                        <div className='flex'>
                            <div className='flex-1'>이미지</div>
                            <Button sx={{ backgroundColor: '#007CFF' }} variant="contained"
                                onClick={()=>{
                                    if(!modifyFlag[index]){
                                        modifyButton(index);
                                        setInfo(dataArr[index].reservation);
                                    }else if(!imgFileList){
                                        window.alert("이미지는 필수입니다.");
                                    }else {
                                        submit();
                                    }
                                }}>{modifyFlag[index] ? '완료' : '수정하기'}</Button>
                        </div>
                        <label className="border border-grey200 mr-5 w-20 h-20 rounded flex cursor-pointer" htmlFor={modifyFlag[index] ? `reservationImage-${index}` : ''}>
                            {x.reservationId && <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x.reservationFiles[0].fileName}`} />}
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            id={`reservationImage-${index}`}
                            multiple
                            ref={imgRef}
                            style={{ display: 'none' }}
                            onChange={(e) => {
                                setImgFileList(e.target.files[0]);
                            }}
                        />
                        <div className='w-full mt-5'>
                            <div className='mb-5'>
                                <div>제목</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} placeholder={x.title}
                                    onChange={(e) => {
                                        setInfo({...info, title: e.target.value});
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>서브 제목</div>
                                <input className='border p-3 w-full rounded mt-2'  disabled={!modifyFlag[index]} placeholder={x.subTitle}
                                    onChange={(e) => {
                                        setInfo({...info, subTitle: e.target.value});
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>위치</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} placeholder={x.location}
                                    onChange={(e) => {
                                        setInfo({...info, location: e.target.value});
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>평점</div>
                                <input className='border p-3 w-full rounded mt-2'  disabled={!modifyFlag[index]} type='number' placeholder={x.score}
                                    onChange={(e) => {
                                        setInfo({...info, score: e.target.value});
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>인원</div>
                                <input className='border p-3 w-full rounded mt-2'  disabled={!modifyFlag[index]} type='number' placeholder={x.peopleCount}
                                    onChange={(e) => {
                                        setInfo({...info, peopleCount: e.target.value});
                                    }} />
                            </div>
                        </div>
                    </div>
                })}
                <div className='flex justify-end'>
                    <Button sx={{ backgroundColor: '#007CFF' }} variant="contained"
                        onClick={() => {
                            const arr = [...dataArr];
                            const modifyFlagArr = [...modifyFlag];
                            arr.push({
                                title: "",
                                subTitle: "",
                                location: "",
                                peopleCount: "",
                                score: ""
                            });
                            modifyFlagArr.push(true);
                            setDataArr(arr);
                            setModifyFlag(modifyFlagArr);
                            setAddFlag(true);
                        }}>추가
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default index