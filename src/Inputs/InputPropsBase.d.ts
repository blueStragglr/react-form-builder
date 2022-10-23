import React from 'react'

export default interface InputPropsBase<T> extends React.HTMLProps<T> {
  nodeKey: string
  nodeUpdateHandler: (key: string, value: number) => void
  initialValue?: unknown
}
