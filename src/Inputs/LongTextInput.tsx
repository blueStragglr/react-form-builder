import React from 'react';
import InputPropsBase from './InputPropsBase'

const LongTextInput: React.FC<InputPropsBase<HTMLTextAreaElement>> = (props ) => {

  const onChangeHandler = (e: any) => {
    props.nodeUpdateHandler(props.nodeKey, e.target.value)
  }

  return (<textarea onChange={onChangeHandler}/>)
}

export default LongTextInput
