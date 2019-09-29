import React, { useState, useCallback } from 'react'
import { useThunkDispatch } from 'features/store'
import { Form as AntdForm, Input, Button, Typography } from 'antd'
import { addTaskThunk } from '../../store/actions'

export const Form = () => {
  const dispatch = useThunkDispatch()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const onNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value)
    },
    []
  )

  const onDescriptionChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value)
    },
    []
  )

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      dispatch(
        addTaskThunk(name, description)
      )

      setName('')
      setDescription('')
    },
    [dispatch, description, name]
  )

  return (
    <AntdForm onSubmit={onSubmit}>
      <Typography.Title level={4}>
        Добавить задачу:
      </Typography.Title>

      <AntdForm.Item label='Название'>
        <Input
          value={name}
          onChange={onNameChange}
        />
      </AntdForm.Item>

      <AntdForm.Item label='Описание'>
        <Input.TextArea
          value={description}
          onChange={onDescriptionChange}
        />
      </AntdForm.Item>

      <AntdForm.Item>
        <Button type='primary' htmlType='submit'>
          Добавить
        </Button>
      </AntdForm.Item>
    </AntdForm>
  )
}
