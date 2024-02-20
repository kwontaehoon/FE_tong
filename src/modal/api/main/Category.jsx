import React from 'react'
import { ModalSideContainer, ModalSideSubContainer } from '../../../layout/ModalContainer'
import { useCategoryStore } from '../../../store/main/Category';

const Category = () => {

  const categoryModal = useCategoryStore((state) => state.open);
  console.log("categoryModal: ", categoryModal);

  const openCategoryModal = useCategoryStore((state) => state.setOpen);

  return (
    <ModalSideContainer $show={categoryModal}>
        <ModalSideSubContainer>
            <div onClick={()=>openCategoryModal(false)}>123</div>
        </ModalSideSubContainer>
    </ModalSideContainer>
  )
}

export default Category