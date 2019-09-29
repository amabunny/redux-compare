import React, { useEffect, useCallback } from 'react'
import { Row, Col, Spin } from 'antd'
import { useThunkDispatch, useSelector } from 'features/store'
import { Form } from '../form'
import { List } from '../list'
import { FilterTypesSelect } from '../../molecules/filter-types-select'
import { loadTasks, changeFilterType } from '../../store/actions'
import { TodoFilterTypes } from '../../types'

export const TodosRoot = () => {
  const dispatch = useThunkDispatch()

  const { loading, filterType } = useSelector(state => ({
    loading: state.todos.loading,
    filterType: state.todos.filterType
  }))

  const onFilterTypeChange = useCallback(
    (filterType: TodoFilterTypes) => {
      dispatch(changeFilterType(filterType))
    },
    [dispatch]
  )

  useEffect(
    () => {
      dispatch(loadTasks())
    },
    [dispatch]
  )

  return (
    <Spin spinning={loading}>
      <Row type='flex' gutter={32}>
        <Col span={18}>
          <div className='mb-30'>
            <FilterTypesSelect
              value={filterType}
              onChange={onFilterTypeChange}
            />
          </div>

          <List />
        </Col>

        <Col span={6}>
          <Form />
        </Col>
      </Row>
    </Spin>
  )
}
