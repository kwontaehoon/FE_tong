import React from 'react'
import {
    Container,
    Gimpo,
    Playground,
} from './styles'
import { useCategoryStore } from '../../../store/main/Category';
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
                    <img src="/svg/search.svg" style={{marginRight: "6px"}} onClick={()=>navigate("/search")}/>
                    <img src="/svg/Menu.svg" onClick={()=>openCategoryModal(true)} />
            </Gimpo>
        </Container>
    )
}

export default index