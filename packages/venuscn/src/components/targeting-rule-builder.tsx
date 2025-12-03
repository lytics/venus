'use client'

import * as React from 'react'
import { Plus, HelpCircle } from 'lucide-react'
import { cn } from '../lib/utils'
import { RuleGroup } from './rule-group'
import { Button } from './button'
import { Dropdown } from './dropdown'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { RuleGroup as RuleGroupType, Rule, Category, GroupOperator } from '../types/targeting-rules'
import { getAttributesByCategory } from '../data/targeting-options'

export interface TargetingRuleBuilderProps {
  /** The rule groups */
  groups: RuleGroupType[]
  /** Handler when groups are updated */
  onChange: (groups: RuleGroupType[]) => void
  /** Operator between groups (AND/OR) */
  groupOperator?: GroupOperator
  /** Handler when group operator changes */
  onGroupOperatorChange?: (operator: GroupOperator) => void
  /** Optional custom className */
  className?: string
}

export const TargetingRuleBuilder = React.forwardRef<HTMLDivElement, TargetingRuleBuilderProps>(
  ({ groups, onChange, groupOperator = 'and', onGroupOperatorChange, className }, ref) => {
    // Generate unique ID
    const generateId = () => Math.random().toString(36).substring(2, 11)

    // Handler to add a new rule group
    const handleAddGroup = () => {
      const newGroup: RuleGroupType = {
        id: generateId(),
        matchType: 'all',
        rules: [],
      }
      onChange([...groups, newGroup])
    }

    // Handler to update a group
    const handleGroupUpdate = (groupId: string, updatedGroup: RuleGroupType) => {
      onChange(groups.map(g => g.id === groupId ? updatedGroup : g))
    }

    // Handler to delete a group
    const handleGroupDelete = (groupId: string) => {
      onChange(groups.filter(g => g.id !== groupId))
    }

    // Handler to add a rule to a specific group
    const handleAddRule = (groupId: string, category: Category) => {
      // Get first attribute for this category
      const attributes = getAttributesByCategory(category)
      const firstAttribute = attributes[0]

      const newRule: Rule = {
        id: generateId(),
        category,
        attribute: firstAttribute?.value || '',
        operator: firstAttribute?.allowedOperators[0] || 'equals',
        value: '',
      }

      const updatedGroups = groups.map(group => {
        if (group.id === groupId) {
          return {
            ...group,
            rules: [...group.rules, newRule],
          }
        }
        return group
      })

      onChange(updatedGroups)
    }

    return (
      <div ref={ref} className={cn('space-y-4', className)}>
        {/* Header */}
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-[#2D3748]">
            Target Conditions
            <span className="text-[#767676] text-sm font-normal ml-2">(required)</span>
          </h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="inline-flex items-center justify-center text-gray-500 hover:text-gray-700">
                  <HelpCircle className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Define conditions for when this content should be shown</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Rule Groups */}
        <div className="space-y-6">
          {groups.map((group, index) => (
            <React.Fragment key={group.id}>
              <RuleGroup
                group={group}
                groupNumber={index + 1}
                onUpdate={(updatedGroup) => handleGroupUpdate(group.id, updatedGroup)}
                onDelete={() => handleGroupDelete(group.id)}
                onAddRule={(category) => handleAddRule(group.id, category)}
              />

              {/* AND/OR operator between groups (not after last group) */}
              {index < groups.length - 1 && (
                <div className="flex py-2">
                  <Dropdown
                    version="v2"
                    items={[
                      { label: 'AND', value: 'and' },
                      { label: 'OR', value: 'or' }
                    ]}
                    value={groupOperator}
                    onChange={(value) => onGroupOperatorChange?.(value as GroupOperator)}
                    className="w-32 !font-bold"
                  />
                </div>
              )}
            </React.Fragment>
          ))}

          {groups.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p className="mb-4">No condition groups yet. Click "Add Condition Group" to get started.</p>
            </div>
          )}

          {/* Add Rule Group Button - below groups */}
          <Button
            variant="secondary"
            size="regular"
            onClick={handleAddGroup}
          >
            <Plus className="h-5 w-5" />
            Add Condition Group
          </Button>
        </div>
      </div>
    )
  }
)

TargetingRuleBuilder.displayName = 'TargetingRuleBuilder'
