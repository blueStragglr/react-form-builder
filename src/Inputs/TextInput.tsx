import React from 'react';
import InputPropsBase from './InputPropsBase'

const TextInput: React.FC<InputPropsBase<HTMLInputElement>> = (props ) => {

  const onChangeHandler = (e: any) => {
    props.nodeUpdateHandler(props.nodeKey, e.target.value)
  }

  return (<input onChange={onChangeHandler} type="text"/>)
}

export default TextInput
