import React from 'react'
import { Card, Row, Col } from 'antd'
import { useSelector } from 'react-redux'
import { IState } from 'features/store'
import { ITodo } from '../../types'

export const List = () => {
  const todos = useSelector<IState, ITodo[]>(state => state.todos.data)

  return (
    <Row type='flex' gutter={16}>
      {todos.map(({ name, description }) =>
        <Col span={6}>
          <Card
            title={name}
            size='small'
          >
            {description}
          </Card>
        </Col>
      )}
    </Row>
  )
}
