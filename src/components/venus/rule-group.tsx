'use client'

import * as React from 'react'
import { Users, Smartphone, MapPin, Clock, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { RuleRow } from './rule-row'
import { Dropdown } from './dropdown'
import { Button } from './button'
import { Pill } from './pills'
import { RuleGroup as RuleGroupType, Rule, Category } from '@/types/targeting-rules'

export interface RuleGroupProps {
  /** The rule group data */
  group: RuleGroupType
  /** Group number for display (1, 2, 3, etc.) */
  groupNumber: number
  /** Handler when group is updated */
  onUpdate: (group: RuleGroupType) => void
  /** Handler when group is deleted */
  onDelete: () => void
  /** Handler when a rule is added with specific category */
  onAddRule: (category: Category) => void
  /** Optional custom className */
  className?: string
}

export const RuleGroup = React.forwardRef<HTMLDivElement, RuleGroupProps>(
  ({ group, groupNumber, onUpdate, onDelete, onAddRule, className }, ref) => {
    // Match type dropdown items
    const matchTypeItems = [
      { label: 'Match ALL conditions', value: 'all' },
      { label: 'Match ANY condition', value: 'any' },
    ]

    // Handler for match type change
    const handleMatchTypeChange = (value: string) => {
      onUpdate({
        ...group,
        matchType: value as 'all' | 'any',
      })
    }

    // Handler for rule update
    const handleRuleUpdate = (ruleId: string, updatedRule: Rule) => {
      onUpdate({
        ...group,
        rules: group.rules.map(r => r.id === ruleId ? updatedRule : r),
      })
    }

    // Handler for rule deletion
    const handleRuleDelete = (ruleId: string) => {
      onUpdate({
        ...group,
        rules: group.rules.filter(r => r.id !== ruleId),
      })
    }

    return (
      <div ref={ref} className={cn('space-y-3', className)}>
        {/* Header: Group Label + Delete - Outside the card */}
        <div className="flex items-center gap-2">
          {/* Group Label */}
          <Pill variant="label" status="default" className="text-sm font-semibold px-3.5 py-1.5">
            Group {groupNumber}
          </Pill>

          {/* Delete Group Button */}
          <button
            onClick={onDelete}
            className="flex items-center justify-center h-10 w-10 hover:bg-gray-200 rounded transition-colors flex-shrink-0 cursor-pointer"
            aria-label="Delete group"
          >
            <Trash2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Card containing match type, rules and add buttons */}
        <div
          className={cn(
            // Border container
            'border border-gray-200',
            'rounded-lg',
            'p-6',
            'bg-white',
            // Focus-within state - shows shadow when any child element is focused
            'focus-within:shadow-lg',
            'transition-shadow duration-150'
          )}
        >
          {/* Match Type Dropdown */}
          <div className="mb-6">
            <Dropdown
              items={matchTypeItems}
              value={group.matchType}
              onChange={handleMatchTypeChange}
              version="v2"
              className="w-64"
            />
          </div>

          {/* Rules */}
          <div className="mb-6">
            {group.rules.length > 0 ? (
              <div className="border border-gray-200 rounded-lg bg-white">
                {group.rules.map((rule) => (
                  <RuleRow
                    key={rule.id}
                    rule={rule}
                    onUpdate={(updatedRule) => handleRuleUpdate(rule.id, updatedRule)}
                    onDelete={() => handleRuleDelete(rule.id)}
                    className="px-4"
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-[76px] text-[#A0AEC0] text-base">
                Add a target condition below
              </div>
            )}
          </div>

        {/* Add Rule Buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          <Button
            variant="ghost"
            size="regular"
            onClick={() => onAddRule('audience')}
            className="!text-primary hover:!bg-gray-100"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#EBF5FF]">
              <Users className="h-4 w-4 text-[#4299E1]" />
            </div>
            Add Audience Target
          </Button>

          <Button
            variant="ghost"
            size="regular"
            onClick={() => onAddRule('device')}
            className="!text-primary hover:!bg-gray-100"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#ECFDF5]">
              <Smartphone className="h-4 w-4 text-[#10B981]" />
            </div>
            Add Device Target
          </Button>

          <Button
            variant="ghost"
            size="regular"
            onClick={() => onAddRule('geographic')}
            className="!text-primary hover:!bg-gray-100"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#FFF7ED]">
              <MapPin className="h-4 w-4 text-[#F97316]" />
            </div>
            Add Geographic Target
          </Button>

          <Button
            variant="ghost"
            size="regular"
            onClick={() => onAddRule('temporal')}
            className="!text-primary hover:!bg-gray-100"
          >
            <div className="flex items-center justify-center w-6 h-6 rounded bg-[#FAF5FF]">
              <Clock className="h-4 w-4 text-[#A855F7]" />
            </div>
            Add Time/Date Target
          </Button>
        </div>
        </div>
      </div>
    )
  }
)

RuleGroup.displayName = 'RuleGroup'
