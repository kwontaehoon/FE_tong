import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';

const index = () => {

    const count = Array.from({ length: 5 }, () => "");
    const imgRef = useRef();
    const [imgFile, setImgFile] = useState([]); // 이미지 파일 리스트, formData로 보낼정보
    console.log('imgFile: ', imgFile);
    const [imgFileList, setImgFileList] = useState([]); // 이미지 리스트, 썸네일 배열
    console.log('imgFileList: ', imgFileList);

    // 파일 데이터를 읽고 Blob 객체 생성하는 함수
    const readFileAsBlob = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(new Blob([reader.result], { type: file.type }));
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsArrayBuffer(file);
        });
    };

    // 파일 URL 생성하는 함수
    const getFileUrl = (file) => {
        return new Promise((resolve, reject) => {
            readFileAsBlob(file)
                .then((blob) => {
                    const url = URL.createObjectURL(blob);
                    resolve(url);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    return (
        <div>
            <div className='flex mb-5'>
                <div className='font-bold text-xl flex-1'>배너</div>
                <Button sx={{ backgroundColor: '#007CFF' }} variant="contained" onClick={() => window.alert("수정했습니다.")}>수정하기</Button>
            </div>
            <div className='mb-2'>이미지</div>
            <div className='flex flex-wrap'>
                {count.map((x, index) => {
                    return <div key={index} className='w-full lg:w-52'>
                        <label className="border border-grey200 mr-5 mb-5 h-52 rounded flex cursor-pointer" htmlFor="reviewImage">
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            id="reviewImage"
                            ref={imgRef}
                            style={{ display: 'none' }}
                            onChange={(e) => {
                                console.log("aaaaaa: ", e.target.files[0]);

                                getFileUrl(e.target.files[0])
                                    .then((url) => {
                                        console.log("File URL:", url);
                                        // 여기서 URL을 사용할 수 있습니다.
                                    })
                                    .catch((error) => {
                                        console.error("Error reading file:", error);
                                    });
                            }}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}

export default index