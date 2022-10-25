export type InputType = 'text' | 'number' | 'longText'

export interface InputBase {
  key: string
  label: string
  type: InputType
}

export interface TextInput extends InputBase {
  type: 'text'
  initialValue?: string
}

export interface NumberInput extends InputBase {
  type: 'number'
  initialValue?: number
}

export interface LongTextInput extends InputBase {
  type: 'longText',
  initialValue?: string
  maxLength?: number
}

export type InputNode = TextInput | NumberInput | LongTextInput
