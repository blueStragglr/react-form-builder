import React, { useEffect, useRef } from 'react'
import InputPropsBase from './InputPropsBase'

const LongTextInput: React.FC<InputPropsBase<HTMLTextAreaElement>> = (props ) => {

  const nodeRef = useRef<HTMLTextAreaElement>(null)

  const onChangeHandler = (e: any) => {
    props.nodeUpdateHandler(props.nodeKey, e.target.value)
  }

  useEffect(() => {
    if (props.initialValue && nodeRef.current) {
      nodeRef.current.value = `${props.initialValue}`
    }
  }, [])

  return (<textarea ref={nodeRef} onChange={onChangeHandler}/>)
}

export default LongTextInput
