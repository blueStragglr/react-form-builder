import React from 'react'

interface InputNodeWrapperProps {
  nodeLabel: string
  children: React.ReactNode
}

const InputNodeWrapper: React.FC<InputNodeWrapperProps> = ({ nodeLabel, children }) => {
  return (<div>
    <h3>
      { nodeLabel }
    </h3>
    { children }
  </div>)
}

export default InputNodeWrapper
