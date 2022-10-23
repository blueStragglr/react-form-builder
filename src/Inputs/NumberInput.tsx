import React from 'react';
import InputPropsBase from './InputPropsBase'

const NumberInput: React.FC<InputPropsBase<HTMLInputElement>> = (props ) => {

  const onChangeHandler = (e: any) => {
    props.nodeUpdateHandler(props.nodeKey, e.target.value)
  }

  return (<input onChange={onChangeHandler} type="number"/>)
}

export default NumberInput
