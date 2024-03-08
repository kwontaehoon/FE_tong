import React from 'react'
import {
    Container,
    Gimpo,
    Playground,
} from './styles'
import { useCategoryStore } from '../../../store/Category';
import { useNavigate } from 'react-router-dom';

const index = () => {

    const navigate = useNavigate();
    const openCategoryModal = useCategoryStore((state) => state.setOpen);

    return (
        <Container>
            <Gimpo>
                <Playground>
                    <img src="/svg/Logo.svg" />
                </Playground>
                    <img src="/svg/search.svg" className='w-5' style={{marginRight: "6px"}} onClick={()=>navigate("/search")}/>
                    <img src="/svg/Menu.svg" className='w-5' onClick={()=>openCategoryModal(true)} />
            </Gimpo>
        </Container>
    )
}

export default index