'use client'

import * as React from 'react'
import { Trash2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { CategoryPill } from './category-pill'
import { Dropdown } from './dropdown'
import { Input } from './input'
import { Rule, Operator } from '../types/targeting-rules'
import {
  getAttributesByCategory,
  getAttributeByValue,
  getOperatorsForAttribute,
} from '../data/targeting-options'

export interface RuleRowProps {
  /** The rule data */
  rule: Rule
  /** Handler when rule is updated */
  onUpdate: (rule: Rule) => void
  /** Handler when rule is deleted */
  onDelete: () => void
  /** Optional custom className */
  className?: string
}

export const RuleRow = React.forwardRef<HTMLDivElement, RuleRowProps>(
  ({ rule, onUpdate, onDelete, className }, ref) => {
    // Get category-specific attributes
    const attributes = getAttributesByCategory(rule.category)
    const attributeItems = attributes.map(attr => ({
      label: attr.label,
      value: attr.value,
    }))

    // Get selected attribute details
    const selectedAttribute = getAttributeByValue(rule.attribute)

    // Get operators for selected attribute
    const operators = getOperatorsForAttribute(rule.attribute)
    const operatorItems = operators.map(op => ({
      label: op.label,
      value: op.value,
    }))

    // Get value options if attribute has predefined values
    const valueOptions = selectedAttribute?.valueOptions?.map(opt => ({
      label: opt.label,
      value: opt.value,
    })) || []

    // Handler for attribute change
    const handleAttributeChange = (value: string) => {
      const newAttribute = getAttributeByValue(value)
      onUpdate({
        ...rule,
        attribute: value,
        operator: newAttribute?.allowedOperators[0] || 'equals',
        value: '',
      })
    }

    // Handler for operator change
    const handleOperatorChange = (value: string) => {
      onUpdate({
        ...rule,
        operator: value as Operator,
      })
    }

    // Handler for value change
    const handleValueChange = (value: string) => {
      onUpdate({
        ...rule,
        value,
      })
    }

    return (
      <div
        ref={ref}
        className={cn(
          // Base container styles
          'flex items-center',
          'py-4',
          className
        )}
      >
        {/* Category Pill - fixed width container */}
        <div className="w-32 flex-shrink-0 mr-4">
          <CategoryPill variant={rule.category} />
        </div>

        {/* Attribute Dropdown */}
        <div className="w-64 flex-shrink-0">
          <Dropdown
            items={attributeItems}
            value={rule.attribute}
            onChange={handleAttributeChange}
            placeholder="Select Attribute"
            version="v2"
            className="w-full"
          />
        </div>

        {/* Operator Dropdown */}
        <div className="w-64 flex-shrink-0 ml-3">
          <Dropdown
            items={operatorItems}
            value={rule.operator}
            onChange={handleOperatorChange}
            placeholder="Select Operator"
            version="v2"
            className="w-full"
            disabled={!rule.attribute}
          />
        </div>

        {/* Value Input/Dropdown */}
        <div className="w-96 flex-shrink-0 ml-3">
          {selectedAttribute?.valueType === 'select' && valueOptions.length > 0 ? (
            <Dropdown
              items={valueOptions}
              value={rule.value}
              onChange={handleValueChange}
              placeholder="Select Value"
              version="v2"
              withSearch
              className="w-full"
              disabled={!rule.operator}
            />
          ) : (
            <Input
              type={selectedAttribute?.valueType === 'number' ? 'number' : 'text'}
              value={rule.value}
              onChange={(e) => handleValueChange(e.target.value)}
              placeholder="Enter value..."
              disabled={!rule.operator}
              className="w-full"
            />
          )}
        </div>

        {/* Spacer to push trash to the right */}
        <div className="flex-1" />

        {/* Delete Button */}
        <button
          onClick={onDelete}
          className="flex items-center justify-center h-10 w-10 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
          aria-label="Delete rule"
        >
          <Trash2 className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    )
  }
)

RuleRow.displayName = 'RuleRow'
