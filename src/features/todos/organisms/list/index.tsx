import React, { useMemo } from 'react'
import { Card, Row, Col, Icon } from 'antd'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { IState, useThunkDispatch } from 'features/store'
import { deleteTask } from '../../store/actions'

const todosSelector = createSelector(
  (state: IState) => ({
    todos: state.todos.data,
    filterType: state.todos.filterType
  }),
  ({ todos, filterType }) => {
    const reversedTodos = [...todos].reverse()

    switch (filterType) {
      case 'justDoneTasks':
        return reversedTodos.filter(todo => todo.isDone)

      case 'justUndoneTasks':
        return reversedTodos.filter(todo => !todo.isDone)

      default:
        return reversedTodos
    }
  }
)

export const List = () => {
  const dispatch = useThunkDispatch()
  const todos = useSelector(todosSelector)

  const colStyles = useMemo(
    (): React.CSSProperties => ({
      marginBottom: '15px'
    }),
    []
  )

  return (
    <Row type='flex' gutter={16}>
      {todos.map(({ name, description, id }) => {
        const cardExtra = (
          <Icon
            type='close'
            onClick={() => dispatch(deleteTask(id))}
          />
        )

        return (
          <Col
            span={8}
            key={id}
            style={colStyles}
          >
            <Card
              title={name}
              size='small'
              extra={cardExtra}
            >
              {description}
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}
