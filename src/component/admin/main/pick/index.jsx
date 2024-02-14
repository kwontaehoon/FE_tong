import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { usePickListQuery, usePickModifyMutation } from '../../../../hooks/queries/admin/Main';

const index = () => {

    const count = Array.from({ length: 5 }, () => "");
    const { data, isSuccess, refetch } = usePickListQuery();
    console.log("pick: ", data);
    const [info, setInfo] = useState(data);
    const { mutateAsync: modify } = usePickModifyMutation();

    useEffect(() => {
        setInfo(data);
    }, [isSuccess]);

    return isSuccess && (
        <div>
            <div className='flex mb-5'>
                <div className='font-bold text-xl flex-1'>Pick</div>
                <Button sx={{backgroundColor: '#007CFF'}} variant="contained"
                    onClick={async()=>{
                        await modify(info);
                        window.alert("수정했습니다.");
                        refetch();
                    }}>수정하기
                </Button>
            </div>
            {count.map((_, index) => {
                return <div key={index}>
                    <div className='mb-2'>내용{index+1}</div>
                    <input className='mb-5 p-3 border rounded w-full'
                         placeholder={data[index]?.content} 
                         onChange={(e)=>{
                            let contents = [...info];
                            contents[index].content = e.target.value;
                            setInfo(contents);
                         }}/>
                </div>
            })}
        </div>
    )
}

export default index