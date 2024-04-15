import React, { useState } from 'react'
import { ModalContainer, ModalSubContainer } from '../../layout/ModalContainer'
import { useLocation } from 'react-router-dom'
import { useAdminUserModifyStore } from '../../store/AdminUsersModify';
import { FaInfoCircle } from "react-icons/fa";
import { userListSearchTypeText } from '../../constants/text/admin/User'
import moment from 'moment';
import { useUsersModifyMutation } from '../../hooks/queries/admin/Users';

const index = () => {

    const pathName = useLocation().pathname;

    const setOpenAdminUserModifyModal = useAdminUserModifyStore((state) => state.setOpen);

    const infoadminUserModifyModal = useAdminUserModifyStore((state) => state.info);

    const [searchSelect, setSearchSelect] = useState(false); // 검색어 모달

    const [info, setInfo] = useState(infoadminUserModifyModal);
    console.log("info: ", info);

    const { mutate: modify } = useUsersModifyMutation();

    return (
        <ModalContainer $admin={pathName.includes('admin')}>
            <ModalSubContainer $admin={pathName.includes('admin')} $font={"12px"}>
                <div className='flex justify-end'>
                    <img src="/svg/close.svg" className='cursor-pointer' onClick={() => setOpenAdminUserModifyModal(false)} />
                </div>

                <div className='flex mb-5 items-center'>
                    <FaInfoCircle className='mb-1' style={{ color: "#3d76b3" }} />
                    <div className='ml-2 font-extrabold'>회원 정보 수정</div>
                </div>

                <div style={{ minWidth: "500px" }}>
                    <div className='border-y-2 border-grey04'>
                        <div className='flex border-b border-grey06 items-center'>
                            <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>아이디</div>
                            <div className='ml-2 pl-2 py-1'>{info.id}</div>
                        </div>
                        <div className='flex border-b border-grey06 items-center'>
                            <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>이름</div>
                            <input className='ml-2 pl-2 border rounded py-1' value={info.name} onChange={(e)=>setInfo({...info, name: e.target.value})}></input>
                        </div>
                        <div className='flex border-b border-grey06 items-center'>
                            <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>닉네임</div>
                            <input className='ml-2 pl-2 border rounded py-1' value={info.nickName} onChange={(e)=>setInfo({...info, nickName: e.target.value})}></input>
                        </div>
                        <div className='flex border-b border-grey06 items-center'>
                            <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>회원등급</div>
                            <div className='pl-2 flex'>
                                <div className='border py-1 px-2 w-28 rounded flex items-center relative cursor-pointer' onClick={() => setSearchSelect(!searchSelect)}>
                                    {searchSelect && <div className='absolute shadow-custom rounded-lg bg-white top-8 left-0 flex-col z-50 w-full flex justify-center p-2'>
                                        {userListSearchTypeText.map(x => {
                                            return (
                                                <div key={x.id} className='py-1' onClick={() => {
                                                    setSearchSelect(false);
                                                    setInfo({ ...info, searchType: x.content });
                                                }}>{x.content}
                                                </div>
                                            )
                                        })}
                                    </div>}
                                    <div className='flex-1'>일반등급</div>
                                    <img src="/svg/Arrow_bottom.svg" className='w-3 ml-5' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='flex items-center mb-5'>
                            <FaInfoCircle className='mb-1' style={{ color: "#3d76b3" }} />
                            <div className='ml-2 font-extrabold'>가입 정보 수정</div>
                        </div>

                        <div className='border-y-2 border-grey04'>
                            <div className='flex border-b border-grey06 items-center'>
                                <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>생년월일</div>
                                <input className='ml-2 pl-2 rounded py-1 border' 
                                    placeholder='YY-MM-DD' 
                                    value={info.birth} 
                                    onChange={(e)=>setInfo({...info, birth: e.target.value})} 
                                    maxLength={6} />
                            </div>
                            <div className='flex border-b border-grey06 items-center'>
                                <div className='w-28 bg-grey07 pl-2 py-4 border-r border-grey07 font-bold'>회원가입일</div>
                                <div className='ml-2 pl-2 py-1'>{moment(info.create_date).format("YYYY-MM-DD")}</div>
                            </div>
                        </div>
                    </div>
                    <div className='my-5 flex justify-center text-xs'>
                        <div className='mr-1 px-2 py-1 bg-m rounded text-white cursor-pointer' 
                            onClick={()=>{ modify(info); window.location.reload(); }}>수정
                        </div>
                        <div className='ml-1 px-2 py-1 rounded border border-grey06 cursor-pointer' 
                            onClick={()=>setOpenAdminUserModifyModal(false)}>취소
                        </div>
                    </div>
                </div>
            </ModalSubContainer>
        </ModalContainer>
    )
}

export default index