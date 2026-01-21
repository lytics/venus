'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Plus, Layers } from 'lucide-react'
import {
  PageFormHeader,
  FormSidebar,
  Field,
  FieldLabel,
  Input,
  Textarea,
  Button
} from '@contentstack/venuscn'

export default function NewAudiencePage() {
  const router = useRouter()

  // Form state
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  // Validation
  const isValid = name.trim().length > 0

  // Handlers
  const handleBack = () => {
    router.push('/lytics/audiences')
  }

  const handleCancel = () => {
    router.push('/lytics/audiences')
  }

  const handleSave = () => {
    if (!isValid) {
      toast.error('Please fill in all required fields')
      return
    }

    // TODO: Save to backend
    toast.success('Audience saved successfully')
    router.push('/lytics/audiences')
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
          {/* Audience Name */}
          <Field className="max-w-[600px]">
            <FieldLabel required>Name</FieldLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter an audience name"
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

          {/* Segment Builder Mockup - Empty State */}
          <div className="max-w-[800px]">
            <div className="mb-3">
              <h3 className="text-base font-semibold text-[color:var(--color-title)]">
                Audience Builder
              </h3>
              <p className="text-sm text-[color:var(--color-body)] mt-1">
                Define rules to target specific user segments based on behavior, attributes, and demographics
              </p>
            </div>

            {/* Mockup of segment builder UI */}
            <div className="border border-gray-200 rounded bg-[#F9FAFB] p-6">
              {/* Empty state */}
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Layers className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="text-base font-semibold text-[color:var(--color-heading)] mb-2">
                  No rules defined yet
                </h4>
                <p className="text-sm text-[color:var(--color-body)] mb-6 max-w-md mx-auto">
                  Build your audience by adding rules. Combine conditions to create precise targeting segments.
                </p>
                <Button variant="primary" size="regular">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Rule Group
                </Button>
              </div>

              {/* Visual mockup of what rules might look like */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-white rounded border border-gray-200 p-4 opacity-40">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-[color:var(--color-heading)] uppercase">
                        Rule Group 1
                      </span>
                      <span className="text-xs text-[color:var(--color-body)]">
                        Match all of the following
                      </span>
                    </div>
                  </div>

                  {/* Example rule rows */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 bg-[#F9FAFB] rounded border border-gray-200">
                      <div className="flex-1 grid grid-cols-3 gap-2">
                        <div className="text-sm text-[color:var(--color-body)]">
                          Field: <span className="font-medium">Page URL</span>
                        </div>
                        <div className="text-sm text-[color:var(--color-body)]">
                          Operator: <span className="font-medium">contains</span>
                        </div>
                        <div className="text-sm text-[color:var(--color-body)]">
                          Value: <span className="font-medium">/products</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-[#F9FAFB] rounded border border-gray-200">
                      <div className="flex-1 grid grid-cols-3 gap-2">
                        <div className="text-sm text-[color:var(--color-body)]">
                          Field: <span className="font-medium">Location</span>
                        </div>
                        <div className="text-sm text-[color:var(--color-body)]">
                          Operator: <span className="font-medium">equals</span>
                        </div>
                        <div className="text-sm text-[color:var(--color-body)]">
                          Value: <span className="font-medium">United States</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-center text-[color:var(--color-body)] mt-4 italic">
                  Preview: Segment builder interface mockup
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Sidebar */}
        <FormSidebar />
      </div>
    </>
  )
}
