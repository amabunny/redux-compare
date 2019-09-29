import React from 'react'
import * as classes from './style.module.css'

interface IProps {
  children: React.ReactNode
}

export const TodosTemplate = ({ children }: IProps) => {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  )
}
