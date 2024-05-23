import React from 'react'

const Sub = ({ onClick, value }) => {
    return (
        <div>
            {Array.from({ length: 100 }, (_, i) => {
                if (i === 99) {
                    console.log("rendering last item: ", i);
                }
                return (
                    <div key={i} onClick={onclick}>Hello, world!</div>
                )
            })}
        </div>
    )
}

export default React.memo(Sub);