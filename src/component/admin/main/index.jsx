import React from 'react'
import Baneer from './banner'
import Pick from './pick'

const index = ({content}) => {
    console.log("content: ", content);
  return (
    <>
    {content == "" && <Baneer />}
    {content == "PICK" && <Pick />}
    </>
  )
}

export default index