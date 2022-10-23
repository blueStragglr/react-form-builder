import React, { useEffect, useRef } from 'react'
import InputPropsBase from './InputPropsBase'

const NumberInput: React.FC<InputPropsBase<HTMLInputElement>> = (props ) => {

  const nodeRef = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: any) => {
    props.nodeUpdateHandler(props.nodeKey, e.target.value)
  }

  useEffect(() => {
    if (props.initialValue && nodeRef.current) {
      nodeRef.current.value = `${+props.initialValue}`
    }
  }, [])

  return (<input onChange={onChangeHandler} ref={nodeRef} type="number"/>)
}

export default NumberInput
