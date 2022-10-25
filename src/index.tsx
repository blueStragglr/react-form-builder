import React from 'react'
import './global.css'
import { InputNode } from './types'
import { createRoot } from 'react-dom/client'
import ReactFormBuilder from './app'

const inputNodes: InputNode[] = [
  {
    key: 'name',
    label: 'your name',
    type: 'text',
    initialValue: 'blue'
  },
  {
    key: 'age',
    label: 'your age',
    type: 'number'
  },
  {
    key: 'favorite number',
    label: 'your favorite number',
    type: 'number',
    initialValue: 42
  },
  {
    key: 'about',
    label: 'about yourself',
    type: 'longText'
  }
]

let $REACT_ROOT = document.getElementById('app-root')

if ($REACT_ROOT === null) {
  $REACT_ROOT = document.createElement('div')
  $REACT_ROOT.setAttribute('id', 'app-root')
}

const root = createRoot($REACT_ROOT)

root.render(
  <ReactFormBuilder
    InputNodes={ inputNodes }
    onSubmit={ (data) => {
      console.log('submit>> ', data)
    } }
    onChange={ (data) => {
      console.log('update>> ', data)
    } }
  />
)
