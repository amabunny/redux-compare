import React from 'react'
import { TodosRoot } from '../organisms/root'
import { TodosTemplate } from '../templates/todos-template'

export const TodosPage = () => {
  return (
    <TodosTemplate>
      <TodosRoot />
    </TodosTemplate>
  )
}
