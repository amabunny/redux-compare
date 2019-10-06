import React from 'react'
import { Card, Row, Col, Icon, Checkbox, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { IState, useThunkDispatch } from 'features/store'
import { deleteTask, toggleTodoDoneThunk } from '../../store/actions'

const dateFormatter = Intl.DateTimeFormat(undefined, {
  hour: 'numeric',
  minute: 'numeric',
  month: 'long',
  day: 'numeric'
})

const todosSelector = createSelector(
  (state: IState) => ({
    todos: state.todos.data,
    filterType: state.todos.filterType
  }),
  ({ todos, filterType }) => {
    const reversedTodos = [...todos]
      .map(item => ({
        ...item,
        date: new Date(item.timestamp),
        doneDate: item.doneTimestamp
          ? new Date(item.doneTimestamp)
          : undefined
      }))
      .reverse()

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

  return (
    <Row type='flex' gutter={16}>
      {todos.map(({
        name,
        description,
        timestamp,
        isDone,
        date,
        doneDate
      }) => {
        const cardExtra = (
          <Row type='flex' gutter={8}>
            <Col>
              <Checkbox
                checked={isDone}
                onChange={() => dispatch(toggleTodoDoneThunk(timestamp, !isDone))}
              />
            </Col>

            <Col>
              <Icon
                type='close'
                onClick={() => dispatch(deleteTask(timestamp))}
              />
            </Col>
          </Row>
        )

        return (
          <Col
            span={8}
            key={timestamp}
            style={{
              marginBottom: '15px',
              opacity: isDone ? 0.5 : 1
            }}
          >
            <Card
              title={name}
              size='small'
              extra={cardExtra}
            >
              {!!description &&
                <Typography.Paragraph style={{ whiteSpace: 'pre-line' }}>
                  {description}
                </Typography.Paragraph>
              }

              <div>
                <strong>
                  Создано:&nbsp;
                </strong>

                <span>
                  {dateFormatter.format(date)}
                </span>
              </div>

              {Boolean(doneDate) && (
                <div>
                  <strong>
                    Завершено:&nbsp;
                  </strong>

                  <span>
                    {dateFormatter.format(doneDate)}
                  </span>
                </div>
              )}
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}
