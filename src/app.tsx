import React from 'react'
import { InputNode } from './types'

interface ReactFormBuilderProps {
  InputNodes: InputNode[]
}

const ReactFormBuilder: React.FC<ReactFormBuilderProps> = ({InputNodes}) => {
  console.log(InputNodes)

  return (
    <div className="App">
      react form builder
    </div>
  )
}

export default ReactFormBuilder
