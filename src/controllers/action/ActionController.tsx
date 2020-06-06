import React, { Component } from 'react'

import { startSingleGame } from '../../actions/startSingleGame'

type PROPS = {
  children?: any,
}


class ActionController extends Component<PROPS> {
  componentDidMount() {
    document.addEventListener('click', this.handleClick)
    document.addEventListener('mousemove', this.handleMousemove)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick)
  }


  handleClick = (e:any) => {
    const { id } = e.target

    if (id === 'startSingleGame') {
      startSingleGame()
    }
  }

  handleMousemove = (e: any) => {
    const el = e.target
    const { name } = el.dataset
    if (name === 'player_battlefield') {
      const { width, height } = el.dataset

      const fieldW = el.clientWidth
      const fieldH = el.clientHeight
      
      const xCell = fieldW / width
      const yCell = fieldH / height

      const mouseX = e.offsetX
      const mouseY = e.offsetY

      const x = Math.floor(mouseX / xCell)
      const y = Math.floor(mouseY / yCell)

      console.log('x', x)
      console.log('y', y)
    }
  }


  render() {
    const {
      children
    } = this.props

    return children
  }
}

export default ActionController
