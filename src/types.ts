export type InputType = 'text' | 'number' | 'longText'

export interface InputBase {
  key: string
  validation?: RegExp
  type: InputType
}

export interface TextInput extends InputBase {
  type: 'text'
}

export interface NumberInput extends InputBase {
  type: 'number'
}

export interface LongTextInput extends InputBase {
  type: 'longText',
  maxLength?: number
}

export type InputNode = TextInput | NumberInput | LongTextInput
