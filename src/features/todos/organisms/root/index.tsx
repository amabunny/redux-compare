import React, { useEffect } from 'react'
import { Row, Col, Spin } from 'antd'
import { useThunkDispatch, useSelector } from 'features/store'
import { Form } from '../form'
import { List } from '../list'
import { loadTasks } from '../../store/actions'

export const TodosRoot = () => {
  const dispatch = useThunkDispatch()
  const loading = useSelector(state => state.todos.loading)

  useEffect(
    () => {
      dispatch(loadTasks())
    },
    [dispatch]
  )

  return (
    <Spin spinning={loading}>
      <Row type='flex'>
        <Col span={18}>
          <List />
        </Col>

        <Col span={6}>
          <Form />
        </Col>
      </Row>
    </Spin>
  )
}
