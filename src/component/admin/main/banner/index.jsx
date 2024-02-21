import React, { useRef, useState } from 'react'
import { useBannerListQuery, useBannerModifyMutation } from '../../../../hooks/queries/admin/Main';

const index = () => {

    const count = Array.from({ length: 5 }, () => "");
    const imgRef = useRef();
    const { data, isSuccess, refetch } = useBannerListQuery();
    const { mutateAsync: modify } = useBannerModifyMutation();

    return isSuccess && (
        <div>
            <div className='flex mb-5'>
                <div className='font-bold text-xl flex-1'>배너</div>
            </div>
            <div className='mb-2'>이미지</div>
            <div className='mb-2'>이미지가 없는 경우 순서대로 등록해주세요.</div>

            <div className='flex flex-wrap'>
                {count.map((_, index) => {
                    return (
                        <div key={index} className={data[index]?.fileName ? ' w-full lg:w-auto' : ' w-full lg:w-52'}>
                            <label className={"lg:mr-5 mb-5 h-52 rounded flex cursor-pointer border-grey200" + ( !data[index] ? ' border' : '')} htmlFor={`reviewImage-${index}`}>
                                {!data[index] ? "" : <img src={`https://tong-bucket.s3.ap-northeast-2.amazonaws.com/${data[index].fileName}`} />}
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                id={`reviewImage-${index}`}
                                ref={imgRef}
                                style={{ display: 'none' }}
                                onChange={async(e) => {
                                    let formData = new FormData();
                                    console.log(index);
                                    let arr = [];
                                    formData.append("files", e.target.files[0]);
                                    formData.append("bannerIds", index);
                                    arr.push(formData);
                                    await modify(formData);
                                    window.alert("수정했습니다.");
                                    refetch();
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default index