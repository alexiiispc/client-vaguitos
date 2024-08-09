import React from 'react'

const ButtonGoogle = ({onClick=()=>{alert('Default Function')},text="Default"}) => {
    return (
        <button className='btnLoginGoogle' onClick={onClick}>
            <img src="/img/google.svg" alt="" />
            {text}
        </button>
    )
}

export default ButtonGoogle