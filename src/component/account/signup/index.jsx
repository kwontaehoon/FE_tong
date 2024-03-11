import React, { useState, useEffect } from 'react'
import {
    Container,
    Top,
    Gimpo,
    Enterinformation,
    Information,
    Title,
    IdCheck,
    Terms,
    Signup
} from './styles'
import { signupValidation } from '../../../utill/SignupValidation';
import { checkBox } from '../../../utill/CheckBox';
import { useIdCheckMutation, useSignupMutation } from '../../../hooks/queries/api/Account';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../function/header';
import { useTermStore, usePrivacyStore } from '../../../store/Account';
import { positionText } from '../../../constants/text/api/Account';

const index = () => {

    const navigate = useNavigate();

    const state = useLocation().state;

    const openTermModal = useTermStore((state) => state.setOpen);
    const openPrivacyModal = usePrivacyStore((state) => state.setOpen);

    const [info, setInfo] = useState({
        id: '',
        password: '',
        passwordCheck: '',
        email: state ? state : '',
        user_role: 'user',
        name: '',
        birth: '',
        position: ''
    });

    const [validation, setValidation] = useState({
        id: false,
        idDuplicate: false,
        idCheck: false,
        password: false,
        passwordLength: false,
        passwordCheck: false,
        email: false,
        emailForm: false,
        name: false,
        birth: false,
        birthLength: false
    });

    const [idCheckFlag, setIdCheckFlag] = useState(false);

    const [positionCheck, setPositionCheck] = useState(Array(4).fill(false));

    const [check, setCheck] = useState(Array(4).fill(false));

    const { mutate: idCheck, data: idCheckData } = useIdCheckMutation();
    const { mutate: signup } = useSignupMutation();

    useEffect(() => {
        if (idCheckData?.data?.status == "success") {
            if(info.id.indexOf(" ") !== -1){
                setValidation({ ...validation, idDuplicate: true });
            }else setIdCheckFlag(true);
        } else if (idCheckData?.data?.status == "fail" && info.id == "") {
            setValidation({ ...validation, id: true });
        } else if (idCheckData?.data?.status == "fail" && info.id !== "") {
            setValidation({ ...validation, idDuplicate: true });
        }
    }, [idCheckData]);

    return (
        <Container>
            <Header borderB noClose padding title="회원가입" />
            <div className='px-5'>
                <Gimpo>김포 운통장에 오신걸 환영합니다!</Gimpo>
                <Enterinformation>아래 정보를 입력하여 회원가입을 완료해주세요.</Enterinformation>

                <Title>아이디</Title>
                <div className='flex'>
                    <div className='w-full relative flex items-center'>
                        <Information maxLength={20} placeholder='아이디를 입력하세요.' value={info.id}
                            onChange={(e) => {
                                setInfo({ ...info, id: e.target.value });
                                setValidation({ ...validation, id: false, idCheck: false, idDuplicate: false });
                                setIdCheckFlag(false);
                            }}>
                        </Information>
                    </div>
                    <IdCheck $flag={idCheckFlag && idCheckData?.data?.status} onClick={() => idCheckFlag ? '' : idCheck({ id: info.id })}>중복확인</IdCheck>
                </div>
                {validation.idCheck && <div className='text-xs pl-1 my-2 text-valid'>이미 가입한 아이디입니다.</div>}
                {validation.id && <div className='text-xs my-3 pl-1 text-valid'>아이디를 입력해 주세요.</div>}
                {validation.idDuplicate && <div className='text-xs my-2 pl-1 text-valid'>사용할 수 없는 아이디입니다. 다른 아이디를 입력해 주세요</div>}

                <Title>비밀번호</Title>
                <Information type="password" placeholder='비밀번호 입력하세요.'
                    onChange={(e) => {
                        setInfo({ ...info, password: e.target.value });
                        setValidation({ ...validation, password: false, passwordLength: false });
                    }}>
                </Information>
                {validation.password && <div className='text-xs my-2 pl-1 text-valid'>비밀번호를 입력해 주세요.</div>}
                {validation.passwordLength && <div className='text-xs my-2 pl-1 text-valid'>비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</div>}

                <Title>비밀번호 확인</Title>
                <Information type="password" placeholder='비밀번호를 확인'
                    onChange={(e) => {
                        setInfo({ ...info, passwordCheck: e.target.value });
                        setValidation({ ...validation, passwordCheck: false });
                    }}>
                </Information>
                {validation.passwordCheck && <div className='text-xs my-3 pl-1 text-valid'>비밀번호를 확인해 주세요.</div>}

                <Title maxLength={30}>이메일</Title>
                <div className='flex items-center text-sm text-grey05'>
                    <input className='w-full bg-bg rounded-lg' style={{ height: "46px", padding: "0px 13px" }}
                        maxLength={30}
                        placeholder={state ? state : '이메일'}
                        disabled={state ? true : false}
                        onChange={(e) => {
                            setInfo({ ...info, email: e.target.value });
                            setValidation({ ...validation, email: false, emailForm: false });
                        }}>
                    </input>
                    {/* <div className='mx-2 text-lg'>@</div> */}
                    {/* <div className='w-1/2 bg-bg rounded-lg flex items-center' style={{ height: "46px", padding: "0px 13px" }}>선택</div> */}
                </div>
                {validation.email && <div className='text-xs my-2 pl-1 text-valid'>이메일을 입력해 주세요.</div>}
                {validation.emailForm && <div className='text-xs my-2 pl-1 text-valid'>이메일을 다시 확인해주세요.</div>}

                <Title>이름</Title>
                <Information placeholder='실명을 입력해 주세요' maxLength={4}
                    onChange={(e) => {
                        setInfo({ ...info, name: e.target.value });
                        setValidation({ ...validation, name: false });
                    }}>
                </Information>
                {validation.name && <div className='text-xs my-2 pl-1 text-valid'>이름을 입력해 주세요.</div>}

                <Title>생년월일</Title>
                <Information placeholder='6자리 입력' maxLength={6}
                    onChange={(e) => {
                        setInfo({ ...info, birth: e.target.value });
                        setValidation({ ...validation, birth: false, birthLength: false });
                    }}>
                </Information>
                {validation.birth && <div className='text-xs my-2 pl-1 text-valid'>생년월일을 입력해 주세요.</div>}
                {validation.birthLength && <div className='text-xs my-2 pl-1 text-valid'>생년월일을 다시 확인해주세요.</div>}

                <Title>주 포지션</Title>
                <div className='flex items-center'>
                    {positionText.map((x, index) => {
                        return (
                            <div className='flex items-center mr-4' key={x.id}>
                                <div className='w-4 h-4 rounded-full border mr-2 flex justify-center items-center'
                                onClick={()=>{
                                    let arr = Array(4).fill(false);
                                    arr[index] = true;
                                    setPositionCheck(arr);
                                    setInfo({...info, position: index});
                                  }}>
                                    {positionCheck[index] && <div className='w-2 h-2 rounded-full bg-m'></div>}
                                </div>
                                <div className='font-sm'>{x.content}</div>
                            </div>
                        )
                    })}
                </div>

                <Terms>이용약관</Terms>
                <div className='flex text-sm text-grey04 mb-3'>
                    <div className='flex flex-1 items-center'>
                        <div className='mr-2' onClick={() => checkBox(check, setCheck, 0, true)}>
                            {check[0] ? <img src="/svg/check_blue.svg" /> : <img src="/svg/check.svg" />}
                        </div>
                        <div>모두 동의 합니다.</div>
                    </div>
                </div>
                <div className='flex text-sm text-grey05 mb-3'>
                    <div className='flex flex-1 items-center'>
                        <div className='mr-2' onClick={() => checkBox(check, setCheck, 1, false)}>
                            {check[1] ? <img src="/svg/check_blue.svg" /> : <img src="/svg/check.svg" />}
                        </div>
                        <div>(필수) 이용약관</div>
                    </div>
                    <div className='flex' onClick={() => openTermModal(true)}>
                        <div className='mr-2'>보기</div>
                        <img src="/svg/Arrow_right.svg" className='w-3' />
                    </div>
                </div>
                <div className='flex text-sm text-grey05 mb-3'>
                    <div className='flex flex-1 items-center'>
                        <div className='mr-2' onClick={() => checkBox(check, setCheck, 2, false)}>
                            {check[2] ? <img src="/svg/check_blue.svg" /> : <img src="/svg/check.svg" />}
                        </div>
                        <div>(필수) 개인정보 수집 및 동의</div>
                    </div>
                    <div className='flex' onClick={() => openPrivacyModal(true)}>
                        <div className='mr-2'>보기</div>
                        <img src="/svg/Arrow_right.svg" className='w-3 relative' />
                    </div>
                </div>

                {<Signup $ok={Object.values(info).every(value => value !== "" && check[0] || (check[1] && check[2]) && idCheckFlag && positionCheck.findIndex(x=>x).length !== 0)}
                    onClick={() => {
                        if (Object.values(info).every(value => value !== "" && check[0] || (check[1] && check[2]) && idCheckFlag && positionCheck.findIndex(x=>x).length !== 0)) {
                            window.scrollTo({
                                top: 0,
                            });
                            signupValidation(info, validation, setValidation, idCheckFlag, () => {
                                signup(info);
                                navigate("/login");
                            });
                        }
                    }}>회원가입
                </Signup>}
            </div>
        </Container>
    )
}

export default index