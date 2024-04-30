import React, { useState } from 'react'
import { ModalContainer, ModalSubContainer } from '../../layout/ModalContainer'
import { useLocation } from 'react-router-dom'
import { useAdminUserModifyStore, useAdminBoardModifyStore } from '../../store/Admin';
import { FaInfoCircle } from "react-icons/fa";
import { freeBoardTabText } from '../../constants/text/api/Board';
import { adminBoardCategoryText } from '../../constants/text/admin/Board';
import { useBoardModifyMutation } from '../../hooks/queries/admin/Board';

const index = () => {

    const pathName = useLocation().pathname;

    const setOpenAdminBoardModifyModal = useAdminBoardModifyStore((state) => state.setOpen);

    const infoadminUserModifyModal = useAdminBoardModifyStore((state) => state.info);

    const [searchSelect, setSearchSelect] = useState({
        category: false,
        subCategory: false
    }); // 검색어 모달

    const [info, setInfo] = useState(infoadminUserModifyModal);
    console.log("info: ", info);

    const { mutate: modify } = useBoardModifyMutation();

    return (
        <ModalContainer $admin={pathName.includes('admin')}>
            <ModalSubContainer $admin={pathName.includes('admin')} $font={"12px"}>
                <div className='flex justify-end'>
                    <img src="/svg/close.svg" className='cursor-pointer' onClick={() => setOpenAdminBoardModifyModal(false)} />
                </div>

                <div className='flex mb-5 items-center'>
                    <FaInfoCircle className='mb-1' style={{ color: "#3d76b3" }} />
                    <div className='ml-2 font-extrabold'>게시판 수정</div>
                </div>

                <div style={{ minWidth: "500px" }}>
                    <div className='border-y-2 border-grey04'>
                        <div className='flex border-b border-grey06 items-center'>
                            <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>제목</div>
                            <input className='ml-2 pl-2 border rounded py-1' value={info.title} onChange={(e)=>setInfo({...info, title: e.target.value})}></input>
                        </div>
                        <div className='flex border-b border-grey06 items-center'>
                            <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>내용</div>
                            <input className='ml-2 pl-2 border rounded py-1' value={info.content} onChange={(e)=>setInfo({...info, content: e.target.value})}></input>
                        </div>
                        <div className='flex border-b border-grey06 items-center'>
                            <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>조회수</div>
                            <input className='ml-2 pl-2 border rounded py-1' value={info.hits} onChange={(e)=>setInfo({...info, hits: e.target.value})}></input>
                        </div>
                        <div className='flex border-b border-grey06 items-center'>
                            <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>카테고리</div>
                            <div className='pl-2 flex'>
                                <div className='border py-1 px-2 w-32 rounded flex items-center relative cursor-pointer' onClick={() => setSearchSelect({...searchSelect, category: !searchSelect.category})}>
                                    {searchSelect.category && <div className='absolute shadow-custom rounded-lg bg-white top-8 left-0 flex-col z-50 w-full flex justify-center p-2'>
                                        {adminBoardCategoryText.slice(1, freeBoardTabText.length).map(x => {
                                            return (
                                                <div key={x.id} className='py-1' onClick={() => {
                                                    setSearchSelect({...searchSelect, category: true});
                                                    setInfo({ ...info, category: x.content });
                                                }}>{x.content}
                                                </div>
                                            )
                                        })}
                                    </div>}
                                    <div className='flex-1'>{info.category}</div>
                                    <img src="/svg/Arrow_bottom.svg" className='w-3 ml-5' />
                                </div>
                            </div>
                        </div>
                        {info.category == "자유" && <div className='flex border-b border-grey06 items-center'>
                            <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>서브 카테고리</div>
                            <div className='pl-2 flex'>
                                <div className='border py-1 px-2 w-32 rounded flex items-center relative cursor-pointer' onClick={() => setSearchSelect({...searchSelect, subCategory: !searchSelect.subCategory})}>
                                    {searchSelect.subCategory && <div className='absolute shadow-custom rounded-lg bg-white top-8 left-0 flex-col z-50 w-full flex justify-center p-2'>
                                        {freeBoardTabText.slice(1, freeBoardTabText.length).map(x => {
                                            return (
                                                <div key={x.id} className='py-1' onClick={() => {
                                                    setSearchSelect({...searchSelect, subCategory: true});
                                                    setInfo({ ...info, sub_category: x.content });
                                                }}>{x.content}
                                                </div>
                                            )
                                        })}
                                    </div>}
                                    <div className='flex-1'>{info.sub_category}</div>
                                    <img src="/svg/Arrow_bottom.svg" className='w-3 ml-5' />
                                </div>
                            </div>
                        </div>}
                    </div>

                    <div className='my-5 flex justify-center text-xs'>
                        <div className='mr-1 px-2 py-1 bg-m rounded text-white cursor-pointer' 
                            onClick={()=>{ modify(info); }}>수정
                        </div>
                        <div className='ml-1 px-2 py-1 rounded border border-grey06 cursor-pointer' 
                            onClick={()=>setOpenAdminBoardModifyModal(false)}>취소
                        </div>
                    </div>
                </div>
            </ModalSubContainer>
        </ModalContainer>
    )
}

export default index