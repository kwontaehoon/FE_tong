import React, { useRef, useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { usePickModifyMutation, usePickAddMutation, usePickListQuery, usePickDeleteMutation } from '../../../../hooks/queries/admin/Main';

const index = () => {

    const imgRef = useRef();
    const { data, isSuccess } = usePickListQuery();
    const [dataArr, setDataArr] = useState(data);
    const [addFlag, setAddFlag] = useState(false);
    const [info, setInfo] = useState({
        title: "",
        subTitle: "",
        location: "",
        score: "",
        peopleCount: ""
    });
    const [imgFileList, setImgFileList] = useState([]); // 업로드된 이미지 파일 저장
    console.log("imgFileList: ", imgFileList);
    const [pickFileIds, setPickFileIds] = useState([]); // pickFileIds
    console.log("pickFileIds: ", pickFileIds);
    const { mutateAsync: modify } = usePickModifyMutation();
    const { mutateAsync: add } = usePickAddMutation();
    const { mutateAsync: remove } = usePickDeleteMutation();
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
        for(let i of imgFileList){
            formData.append("files", i);
        }
        !addFlag && formData.append("pickId", info.pickId);
        !addFlag && formData.append("pickFileIds", pickFileIds);
        formData.append("title", info.title);
        formData.append("content", info.content);

        if (addFlag) {
            await add(formData);
        } else await modify(formData);

        window.alert("수정했습니다.");
        window.location.reload();
    }

    return isSuccess && (
        <div>
            <div className='flex mb-5'>
                <div className='font-bold text-xl flex-1'>PICK</div>
            </div>
            <div>
                {dataArr?.map((x, index) => {
                    return <div key={index}>
                        <div className='flex mb-4 items-center'>
                            <div className='flex-1 '>이미지</div>
                            <Button sx={{ backgroundColor: '#FF0000', marginRight: "8px" }} variant="contained" 
                                onClick={()=>{
                                    remove({pickId: x.pickId});
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
                        {x.pickFiles.map((y, imgIndex) => {
                            return (<div key={imgIndex}>
                                <label className={"border-grey200 mr-5 w-52 h-40 rounded flex cursor-pointer mb-5" + (x.pickFiles[imgIndex].fileName == "" ? ' border' : '')} htmlFor={modifyFlag[index] ? `pickImage-${index}-${imgIndex}` : ''}>
                                    {x.pickFiles[imgIndex].fileName ? x.pickFiles[imgIndex].imgPath ? <img src={x.pickFiles[imgIndex].imgPath}/> : <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${x?.pickFiles[imgIndex]?.fileName}`} /> : <img src={x.pickFiles[imgIndex].imgPath}/>}
                                </label>
                                <input
                                    type="file" 
                                    accept="image/*"
                                    id={`pickImage-${index}-${imgIndex}`}
                                    multiple
                                    ref={imgRef}
                                    style={{ display: 'none' }}
                                    onChange={(e) => {
                                        let arr = [...imgFileList];
                                        arr[imgIndex] = e.target.files[0]; 

                                        const ids = [...pickFileIds];
                                        if(!ids.includes(y.pickFileId)){
                                            ids.push(y.pickFileId);
                                        }
                                        setPickFileIds(ids);
                                        setImgFileList(arr);
                                        const reader = new FileReader();
                                        reader.readAsDataURL(e.target.files[0]);
                                        reader.onload = () => {
                                            let arr = [...dataArr];
                                            arr[index].pickFiles[imgIndex].imgPath = reader.result;
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
                            onClick={()=>{
                                const arr = [...dataArr];
                                arr[index].pickFiles.push({
                                    fileName: "",
                                    fileSize: "",
                                    pickFileId: dataArr?.map(x => x.pickFiles.length).reduce((a, b) => a + b)+1,
                                });
                                setDataArr(arr);
                            }} >이미지 추가
                        </Button>
                        {/* <Button sx={{ backgroundColor: '#007CFF' }} variant="contained"
                            onClick={()=>{
                               const arr = [...dataArr];
                               arr[index].pickFiles.pop();
                               setDataArr(arr);
                            }} >이미지 삭제
                        </Button> */}
                        </div>}
                        
                        <div className='w-full mt-5'>
                            <div className='mb-5'>
                                <div>제목</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} placeholder={x.title}
                                    onChange={(e) => {
                                        setInfo({ ...info, title: e.target.value });
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>내용</div>
                                <input className='border p-3 w-full rounded mt-2' disabled={!modifyFlag[index]} placeholder={x.content}
                                    onChange={(e) => {
                                        setInfo({ ...info, content: e.target.value });
                                    }} />
                            </div>
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
                                    pickFiles: [],
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