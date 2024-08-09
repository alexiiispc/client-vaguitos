import React from 'react'

export default function Title({text='Default text',style={},className=''}) {
  return (
    <>
        <h1 className={className} style={style}>{text}</h1>
    </>
  )
}
