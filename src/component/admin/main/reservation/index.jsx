import React, { useRef, useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { useReservationListQuery } from '../../../../hooks/queries/admin/Main';

const index = () => {

    const imgRef = useRef();
    const { data, isSuccess } = useReservationListQuery();
    const [info, setInfo] = useState(data);
    console.log("info : ", info);
    const [imgFile, setImgFile] = useState([]); // 이미지 파일 리스트, formData로 보낼정보
    console.log('imgFile: ', imgFile);
    const [imgFileList, setImgFileList] = useState([]); // 이미지 리스트, 썸네일 배열
    console.log('imgFileList: ', imgFileList);

    useEffect(() => {
        setInfo(data);
    }, [isSuccess]);

    return isSuccess && (
        <div>
            <div className='flex mb-5'>
                <div className='font-bold text-xl flex-1'>예약</div>
                <Button sx={{ backgroundColor: '#007CFF' }} variant="contained"
                    onClick={() => {
                        let formData = new FormData();
                        let arr = [];
                        formData.append("files", e.target.files[0]);
                        formData.append("title");
                        formData.append("subTitle");
                        formData.append("location");
                        formData.append("score");
                        arr.push(formData);
                        window.alert("수정했습니다.");
                    }}>수정하기</Button>
            </div>
            <div>
                {info?.map((x, index) => {
                    return <div key={index}>
                        <div className='mb-2'>이미지</div>

                        <label className="border border-grey200 mr-5 w-20 h-20 rounded flex cursor-pointer" htmlFor="reviewImage" />
                        <input
                            type="file"
                            accept="image/*"
                            id="reviewImage"
                            ref={imgRef}
                            style={{ display: 'none' }}
                            onChange={(e) => {
                                const file = imgRef.current.files[0];
                                const reader = new FileReader();
                                reader.readAsDataURL(file);
                                reader.onloadend = () => {
                                    e.target.value = "";
                                };
                            }}
                        />
                        <div className='w-full mt-5'>
                            <div className='mb-5'>
                                <div>제목</div>
                                <input className='border p-3 w-full rounded mt-2' placeholder={x.title}
                                    onChange={(e) => {
                                        const arr = [...info];
                                        arr[index].title = e.target.value;
                                        setInfo(arr);
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>서브 제목</div>
                                <input className='border p-3 w-full rounded mt-2' placeholder={x.subTitle}
                                    onChange={(e) => {
                                        const arr = [...info];
                                        arr[index].subTitle = e.target.value;
                                        setInfo(arr);
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>위치</div>
                                <input className='border p-3 w-full rounded mt-2' placeholder={x.location}
                                    onChange={(e) => {
                                        const arr = [...info];
                                        arr[index].location = e.target.value;
                                        setInfo(arr);
                                    }} />
                            </div>
                            <div className='mb-5'>
                                <div>평점</div>
                                <input className='border p-3 w-full rounded mt-2' type='number' placeholder={x.score}
                                    onChange={(e) => {
                                        const arr = [...info];
                                        arr[index].score = e.target.value;
                                        setInfo(arr);
                                    }} />
                            </div>
                        </div>
                    </div>
                })}
                <div className='flex justify-end'>
                    <Button sx={{ backgroundColor: '#007CFF' }} variant="contained"
                        onClick={() => {
                            const arr = [...info];
                            arr.push({
                                title: "",
                                subTitle: "",
                                location: "",
                                peopleCount: "",
                                score: ""
                            });
                            setInfo(arr);
                        }}>추가
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default index