'use client'

import * as React from 'react'
import { toast } from 'sonner'
import { Plus, Trash2, Copy } from 'lucide-react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Field,
  FieldLabel,
  Input,
  Textarea,
  Button,
  HelpText,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableActionButton,
  Dropdown,
  StatusPill
} from '@contentstack/venuscn'
import { projectSettings, lyticsUsers, accessTokens, roleOptions } from '@/data/lytics-settings'

export default function SettingsPage() {
  // General tab state
  const [projectName, setProjectName] = React.useState(projectSettings.name)
  const [projectDescription, setProjectDescription] = React.useState(projectSettings.description)

  // Users tab state
  const [showInviteForm, setShowInviteForm] = React.useState(false)
  const [inviteEmail, setInviteEmail] = React.useState('')
  const [inviteRole, setInviteRole] = React.useState('Viewer')

  // Keys tab state
  const [tokens, setTokens] = React.useState(accessTokens)

  // Handlers for General tab
  const handleSaveGeneral = () => {
    toast.success('Settings saved successfully')
  }

  const handleDeleteProject = () => {
    if (confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      toast.success('Project deletion initiated')
    }
  }

  // Handlers for Users tab
  const handleInviteUser = () => {
    if (!inviteEmail) {
      toast.error('Please enter an email address')
      return
    }
    toast.success(`Invitation sent to ${inviteEmail}`)
    setInviteEmail('')
    setInviteRole('Viewer')
    setShowInviteForm(false)
  }

  const handleUserAction = (email: string) => {
    // TODO: Implement user actions
  }

  // Handlers for Keys tab
  const handleCreateToken = () => {
    toast.success('New access token created')
  }

  const handleCopyToken = (token: string) => {
    navigator.clipboard.writeText(token)
    toast.success('Access token copied to clipboard')
  }

  const handleDeleteToken = (tokenId: string, tokenName: string) => {
    if (confirm(`Are you sure you want to delete "${tokenName}"? This action cannot be undone.`)) {
      setTokens(tokens.filter(token => token.id !== tokenId))
      toast.success('Access token deleted successfully')
    }
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Page Header - 90px tall */}
      <div className="bg-[#F7F9FC] h-[90px] border-b border-gray-200 flex items-center px-4">
        <h1 className="text-xl font-semibold text-black">Settings</h1>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 p-6 overflow-y-auto bg-white">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="keys">Keys</TabsTrigger>
          </TabsList>

          {/* General Tab */}
          <TabsContent value="general" className="space-y-6">
            <div className="max-w-[600px] space-y-6">
              <Field>
                <FieldLabel required>Project Name</FieldLabel>
                <Input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name"
                />
                <HelpText>The name of your Lytics project</HelpText>
              </Field>

              <Field>
                <FieldLabel>Description</FieldLabel>
                <Textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Enter project description"
                  rows={4}
                />
                <HelpText>A brief description of what this project is used for</HelpText>
              </Field>

              <Field>
                <FieldLabel>Project ID</FieldLabel>
                <Input
                  value={projectSettings.id}
                  readOnly
                  disabled
                />
                <HelpText>Your unique project identifier (read-only)</HelpText>
              </Field>

              <Field>
                <FieldLabel>Created</FieldLabel>
                <Input
                  value={projectSettings.createdAt}
                  readOnly
                  disabled
                />
              </Field>

              <Field>
                <FieldLabel>Region</FieldLabel>
                <Input
                  value={projectSettings.region}
                  readOnly
                  disabled
                />
              </Field>

              <div className="flex gap-3 pt-4">
                <Button variant="primary" onClick={handleSaveGeneral}>
                  Save Changes
                </Button>
                <Button variant="secondary">
                  Cancel
                </Button>
              </div>

              {/* Danger Zone */}
              <div className="pt-8 mt-8 border-t border-gray-200">
                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <h3 className="text-base font-semibold text-red-900 mb-2">Danger Zone</h3>
                  <p className="text-sm text-red-700 mb-4">
                    Once you delete a project, there is no going back. Please be certain.
                  </p>
                  <Button variant="danger" onClick={handleDeleteProject}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Project
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            {/* Invite User Section */}
            <div className="max-w-[800px]">
              {!showInviteForm ? (
                <Button variant="primary" onClick={() => setShowInviteForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Invite User
                </Button>
              ) : (
                <div className="bg-[#F9FAFB] border border-gray-200 rounded p-4 space-y-4">
                  <h3 className="text-base font-semibold text-[color:var(--color-title)]">
                    Invite New User
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel required>Email Address</FieldLabel>
                      <Input
                        type="email"
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)}
                        placeholder="user@example.com"
                      />
                    </Field>
                    <Field>
                      <FieldLabel required>Role</FieldLabel>
                      <Dropdown
                        items={roleOptions}
                        value={inviteRole}
                        onChange={setInviteRole}
                        version="v2"
                      />
                    </Field>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="primary" onClick={handleInviteUser}>
                      Send Invitation
                    </Button>
                    <Button variant="secondary" onClick={() => setShowInviteForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Users Table */}
            <div className="border border-gray-200 rounded overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Invited</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="w-12">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lyticsUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <StatusPill
                          status={user.status === 'active' ? 'published' : 'draft'}
                        />
                      </TableCell>
                      <TableCell>{user.dateInvited}</TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>
                        <TableActionButton
                          onClick={() => handleUserAction(user.email)}
                          label={`Actions for ${user.email}`}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Keys Tab */}
          <TabsContent value="keys" className="space-y-6">
            <div className="max-w-[1000px]">
              {/* Action Buttons */}
              <div className="flex gap-2 mb-6">
                <Button variant="primary" onClick={handleCreateToken}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Access Token
                </Button>
              </div>

              {/* Access Tokens Table */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Key</TableHead>
                      <TableHead>Date Created</TableHead>
                      <TableHead>Last Used</TableHead>
                      <TableHead>Expiration</TableHead>
                      <TableHead className="w-12">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tokens.length > 0 ? (
                      tokens.map((token) => (
                        <TableRow key={token.id}>
                          <TableCell className="font-medium">{token.name}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                                {token.key}
                              </code>
                              <button
                                onClick={() => handleCopyToken(token.key)}
                                className="p-1 hover:bg-gray-100 rounded transition-colors"
                                aria-label="Copy token"
                              >
                                <Copy className="h-4 w-4 text-gray-500" />
                              </button>
                            </div>
                          </TableCell>
                          <TableCell>{token.created}</TableCell>
                          <TableCell>{token.lastUsed}</TableCell>
                          <TableCell>{token.expiration}</TableCell>
                          <TableCell>
                            <TableActionButton
                              onClick={() => handleDeleteToken(token.id, token.name)}
                              label={`Delete ${token.name}`}
                            />
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-[color:var(--color-body)]">
                          No access tokens yet. Create one to get started.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Security Notice */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-1">Security Best Practices</h4>
                <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                  <li>Never share your access tokens publicly</li>
                  <li>Rotate tokens regularly to maintain security</li>
                  <li>Use different tokens for development and production environments</li>
                  <li>Revoke any tokens that may have been compromised</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
