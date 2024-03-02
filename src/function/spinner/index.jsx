import React from 'react'
import { BeatLoader } from 'react-spinners';
import { Container } from './styles';

const index = () => {
  return (
    <Container>
      <BeatLoader color='grey' size={10} />
    </Container>
  )
}

export default index