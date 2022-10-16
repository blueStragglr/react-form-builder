export interface InputBase {
  key: string
  validation?: RegExp
}

export interface StringInput extends InputBase {

}

export type InputNode = StringInput
