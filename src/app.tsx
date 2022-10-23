import React, { useCallback, useEffect, useRef } from 'react'
import { InputNode } from './types'
import TextInput from './Inputs/TextInput'
import NumberInput from './Inputs/NumberInput'
import LongTextInput from './Inputs/LongTextInput'

interface ReactFormBuilderProps {
  InputNodes: InputNode[]
  onSubmit: (data: Record<string, unknown>) => void
  onChange?: (data: Record<string, unknown>) => void
  submitButtonText?: string
}

const ReactFormBuilder: React.FC<ReactFormBuilderProps> = ({
     InputNodes,
     onSubmit,
     onChange,
     submitButtonText
   }) => {

  const formData = useRef<Record<string, unknown>>(InputNodes.reduce((prev, current) => {
    return {
      ...prev,
      [current.key]: current.initialValue
    }
  }, {} as Record<string, unknown>))

  const submitHandler = (e: React.FormEvent) => {
    onSubmit(formData.current)
    e.preventDefault()
  }

  const nodeUpdateHandler = useCallback((key: string, value: unknown) => {
    formData.current[key] = value
    onChange?.(formData.current)
  }, [InputNodes])

  useEffect(() => {
    const keyArray: string[] = InputNodes.map((inputNode: InputNode) => inputNode.key)
    if (keyArray.some((item, index) => keyArray.indexOf(item) != index)) {
      console.error('[React-form-builder] Error: duplicated node key detected. It may cause unexpected data format of `onSubmit`.')
    }
  })

  return (
    <form className="App" onSubmit={submitHandler}>
      <>
        {InputNodes.map((inputNode: InputNode) => {
          switch (inputNode.type) {
            case 'text':
              return <TextInput
                initialValue={formData.current[inputNode.key]}
                key={inputNode.key}
                nodeKey={inputNode.key}
                nodeUpdateHandler={nodeUpdateHandler}/>
            case 'number':
              return <NumberInput
                initialValue={formData.current[inputNode.key]}
                key={inputNode.key}
                nodeKey={inputNode.key}
                nodeUpdateHandler={nodeUpdateHandler}/>
            case 'longText':
              return <LongTextInput
                initialValue={formData.current[inputNode.key]}
                key={inputNode.key}
                nodeKey={inputNode.key}
                nodeUpdateHandler={nodeUpdateHandler}/>
            default:
              return <React.Fragment>Invalid input type. ({inputNode})</React.Fragment>
          }
        })}
        <button>
          { submitButtonText || 'Submit' }
        </button>
      </>
    </form>
  )
}

export default ReactFormBuilder
