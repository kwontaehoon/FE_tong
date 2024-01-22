import React from 'react'
import { useBearStore } from '../../store/test'
import { useTestQuery } from '../../hooks/queries/Test';

const index = () => {

    const bears = useBearStore((state) => state.bears);

    const { data: test } = useTestQuery();

  return (
    <>
        <div>{bears}</div>
        <div>{test}</div>
        <div>main</div>
    </>
  )
}

export default index