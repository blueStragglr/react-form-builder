export interface InputBase {
  key: string
  validation?: RegExp
}

export interface TextInput extends InputBase {
  type: 'text'
}

export interface NumberInput extends InputBase {
  type: 'number'
}

export type InputNode = TextInput | NumberInput
