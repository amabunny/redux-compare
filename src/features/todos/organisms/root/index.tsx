import React, { useEffect, useCallback } from 'react'
import { Row, Col, Spin } from 'antd'
import { useSelector } from 'react-redux'
import { useThunkDispatch, IState } from 'features/store'
import { Form } from '../form'
import { List } from '../list'
import { FilterTypesSelect } from '../../molecules/filter-types-select'
import { loadTasksThunk, changeFilterType } from '../../store/actions'
import { TodoFilterTypes } from '../../types'

export const TodosRoot = () => {
  const dispatch = useThunkDispatch()

  const { loading, filterType } = useSelector((state: IState) => ({
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
      dispatch(loadTasksThunk())
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
