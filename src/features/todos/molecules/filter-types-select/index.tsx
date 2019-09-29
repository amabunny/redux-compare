import React, { Fragment, useMemo, useCallback } from 'react'
import { Select } from 'antd'
import { SelectValue } from 'antd/lib/select'
import { TodoFilterTypes, TodoFilterTypesTranslates } from '../../types'

interface IProps {
  value: TodoFilterTypes
  onChange: (filterType: TodoFilterTypes) => void
}

export const FilterTypesSelect = ({ value, onChange }: IProps) => {
  const selectStyle = useMemo(
    (): React.CSSProperties => ({
      width: '200px'
    }),
    []
  )

  const onSelectChange = useCallback(
    (value: SelectValue) => {
      if (typeof value === 'string') {
        const castedValue = value as TodoFilterTypes
        onChange(castedValue)
      }
    },
    [onChange]
  )

  return (
    <Fragment>
      <Select
        value={value}
        style={selectStyle}
        onChange={onSelectChange}
      >
        {Object.values(TodoFilterTypes).map(key =>
          <Select.Option
            key={key}
            value={key}
          >
            {TodoFilterTypesTranslates[key]}
          </Select.Option>
        )}
      </Select>
    </Fragment>
  )
}
