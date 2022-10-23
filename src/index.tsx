import React from 'react'
import './global.css'
import App from './app'
import { InputNode } from './types'
import { createRoot } from 'react-dom/client'

const inputNodes: InputNode[] = [
  {
    key: 'name',
    type: 'text'
  },
  {
    key: 'age',
    type: 'number'
  },
  {
    key: 'about',
    type: 'longText',
  },
]


let $REACT_ROOT = document.getElementById("app-root");

if ($REACT_ROOT === null){
  console.log('null!')
  $REACT_ROOT = document.createElement('div')
  $REACT_ROOT.setAttribute("id", "app-root");
  console.log($REACT_ROOT)
}

const root = createRoot($REACT_ROOT);

root.render(
  <App
    InputNodes={inputNodes}
    onSubmit={ (data) => { console.log(data) } }
  />
)
