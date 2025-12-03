'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import {
  PageFormHeader,
  FormSidebar,
  TargetingRuleBuilder,
  Field,
  FieldLabel,
  Input,
  Textarea
} from '@contentstack/venuscn'
import { RuleGroup, GroupOperator } from '@/types/targeting-rules'

export default function NewTargetPage() {
  const router = useRouter()

  // Form state
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [groupOperator, setGroupOperator] = React.useState<GroupOperator>('and')
  const [ruleGroups, setRuleGroups] = React.useState<RuleGroup[]>([
    {
      id: '1',
      matchType: 'all',
      rules: [],
    },
  ])

  // Validation
  const isValid = name.trim().length > 0 && ruleGroups.some(group => group.rules.length > 0)

  // Handlers
  const handleBack = () => {
    router.push('/personalize/targets')
  }

  const handleCancel = () => {
    router.push('/personalize/targets')
  }

  const handleSave = () => {
    if (!isValid) {
      toast.error('Please fill in all required fields and add at least one rule')
      return
    }

    // TODO: Save to backend
    toast.success('Target saved successfully')
    router.push('/personalize/targets')
  }

  return (
    <>
      {/* Page Form Header - Sticky */}
      <PageFormHeader
        title={name || 'Untitled'}
        onBack={handleBack}
        onCancel={handleCancel}
        onSave={handleSave}
        saveDisabled={!isValid}
      />

      {/* Main Content Area with Sidebar */}
      <div className="flex h-full">
        {/* Left: Form Content - Scrollable */}
        <div className="flex-1 bg-white px-6 pt-4 pb-12 space-y-6 overflow-y-auto">
          {/* Target Name */}
          <Field className="max-w-[600px]">
            <FieldLabel required>Name</FieldLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a target name"
            />
          </Field>

          {/* Description */}
          <Field className="max-w-[600px]">
            <FieldLabel>Description</FieldLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a description"
              rows={4}
            />
          </Field>

          {/* Targeting Rules Builder */}
          <div>
            <TargetingRuleBuilder
              groups={ruleGroups}
              onChange={setRuleGroups}
              groupOperator={groupOperator}
              onGroupOperatorChange={setGroupOperator}
            />
          </div>
        </div>

        {/* Right: Sidebar */}
        <FormSidebar />
      </div>
    </>
  )
}
