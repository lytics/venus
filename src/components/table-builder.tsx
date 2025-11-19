"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { X, Plus, Trash2, Info, HelpCircle, ChevronUp, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Field {
  id: string;
  name: string;
  type: string;
  description: string;
  venusTypes: string;
  indexed: boolean;
}

interface Schema {
  id: string;
  name: string;
  documentKey: string;
  fields: Field[];
}

interface TableBuilderProps {
  onCancel?: () => void;
  onComplete?: () => void;
  showHeader?: boolean;
}

export function TableBuilder({ onCancel, onComplete, showHeader = true }: TableBuilderProps) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [tableName, setTableName] = useState("");
  const [defaultDocumentKey, setDefaultDocumentKey] = useState("");
  const [schemas, setSchemas] = useState<Schema[]>([
    {
      id: "1",
      name: "",
      documentKey: "",
      fields: [
        {
          id: "1",
          name: "",
          type: "",
          description: "",
          venusTypes: "",
          indexed: false,
        },
      ],
    },
  ]);

  const addSchema = () => {
    const newSchema: Schema = {
      id: Date.now().toString(),
      name: "",
      documentKey: "",
      fields: [
        {
          id: Date.now().toString(),
          name: "",
          type: "",
          description: "",
          venusTypes: "",
          indexed: false,
        },
      ],
    };
    setSchemas([...schemas, newSchema]);
  };

  const addField = (schemaId: string) => {
    const newField: Field = {
      id: Date.now().toString(),
      name: "",
      type: "",
      description: "",
      venusTypes: "",
      indexed: false,
    };
    setSchemas(schemas.map(schema =>
      schema.id === schemaId
        ? { ...schema, fields: [...schema.fields, newField] }
        : schema
    ));
  };

  const removeSchema = (schemaId: string) => {
    setSchemas(schemas.filter(schema => schema.id !== schemaId));
  };

  const removeField = (schemaId: string, fieldId: string) => {
    setSchemas(schemas.map(schema =>
      schema.id === schemaId
        ? { ...schema, fields: schema.fields.filter(field => field.id !== fieldId) }
        : schema
    ));
  };

  const updateSchema = (schemaId: string, updates: Partial<Schema>) => {
    setSchemas(schemas.map(schema =>
      schema.id === schemaId
        ? { ...schema, ...updates }
        : schema
    ));
  };

  const updateField = (schemaId: string, fieldId: string, updates: Partial<Field>) => {
    setSchemas(schemas.map(schema =>
      schema.id === schemaId
        ? {
            ...schema,
            fields: schema.fields.map(field =>
              field.id === fieldId
                ? { ...field, ...updates }
                : field
            )
          }
        : schema
    ));
  };

  // Validation logic
  const isFormValid = () => {
    // Check table name and default document key
    if (!tableName.trim() || !defaultDocumentKey.trim()) {
      return false;
    }

    // Check each schema
    for (const schema of schemas) {
      if (!schema.name.trim() || !schema.documentKey.trim()) {
        return false;
      }

      // Check each field in the schema
      for (const field of schema.fields) {
        if (!field.name.trim() || !field.type.trim()) {
          return false;
        }
      }
    }

    return true;
  };

  const handleComplete = () => {
    if (isFormValid()) {
      // Handle table creation logic here
      if (onComplete) {
        onComplete();
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      {showHeader && (
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Create a new table</h1>
          {onCancel && (
            <Button variant="ghost" size="icon" onClick={onCancel}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}

      {/* Table Configuration */}
      <Card>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Table Name<span className="text-primary ml-1">*</span></Label>
              <Input
                placeholder="Name"
                value={tableName}
                onChange={(e) => setTableName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label>Default Document Key<span className="text-primary ml-1">*</span></Label>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                placeholder="Key"
                value={defaultDocumentKey}
                onChange={(e) => setDefaultDocumentKey(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Schemas - Outer Container */}
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-foreground">Document Schemas</h3>
        </div>

        {/* Render Each Schema */}
        {schemas.map((schema) => (
          <Card key={schema.id}>
            <CardContent className="space-y-6">
              {/* Schema Name and Document Key */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Schema Name<span className="text-primary ml-1">*</span></Label>
                  <Input
                    placeholder="Name"
                    value={schema.name}
                    onChange={(e) => updateSchema(schema.id, { name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label>Document Key<span className="text-primary ml-1">*</span></Label>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Key"
                      className="flex-1"
                      value={schema.documentKey}
                      onChange={(e) => updateSchema(schema.id, { documentKey: e.target.value })}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeSchema(schema.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <Separator />

              {/* Fields Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">Fields</h3>
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    The _type field is reserved and will be used to determine the document type on upload.
                  </AlertDescription>
                </Alert>

                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-[300px]">Field<span className="text-primary ml-1">*</span></TableHead>
                      <TableHead className="w-[140px]">
                        <div className="flex items-center gap-1">
                          Type<span className="text-primary ml-1">*</span>
                          <HelpCircle className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="min-w-0">Description</TableHead>
                      <TableHead className="w-[280px]">
                        <div className="flex items-center gap-1">
                          Venus Types
                          <HelpCircle className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead className="w-[80px] text-center">Index?</TableHead>
                      <TableHead className="w-[80px] text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schema.fields.map((field) => (
                      <TableRow key={field.id}>
                        <TableCell className="w-[300px]">
                          <Input
                            placeholder="Name"
                            className="bg-background/50"
                            value={field.name}
                            onChange={(e) => updateField(schema.id, field.id, { name: e.target.value })}
                          />
                        </TableCell>
                        <TableCell className="w-[140px]">
                          <Select
                            value={field.type}
                            onValueChange={(value) => updateField(schema.id, field.id, { type: value })}
                          >
                            <SelectTrigger className="bg-background/50">
                              <SelectValue placeholder="Choose" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="string">String</SelectItem>
                              <SelectItem value="number">Number</SelectItem>
                              <SelectItem value="boolean">Boolean</SelectItem>
                              <SelectItem value="date">Date</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="min-w-0">
                          <Input
                            placeholder="Optional"
                            className="bg-background/50"
                            value={field.description}
                            onChange={(e) => updateField(schema.id, field.id, { description: e.target.value })}
                          />
                        </TableCell>
                        <TableCell className="w-[280px]">
                          <Input
                            placeholder="+"
                            className="bg-background/50"
                            value={field.venusTypes}
                            onChange={(e) => updateField(schema.id, field.id, { venusTypes: e.target.value })}
                          />
                        </TableCell>
                        <TableCell className="w-[80px] text-center">
                          <Checkbox
                            checked={field.indexed}
                            onCheckedChange={(checked) => updateField(schema.id, field.id, { indexed: !!checked })}
                          />
                        </TableCell>
                        <TableCell className="w-[80px] text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeField(schema.id, field.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="flex gap-3">
                  <Button
                    className="bg-primary text-primary-foreground"
                    onClick={() => addField(schema.id)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Field
                  </Button>
                  <Button variant="outline">Import from JSON</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Button
          className="bg-primary text-primary-foreground"
          onClick={addSchema}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Schema Type
        </Button>
      </div>

      {/* Advanced Mode */}
      <div className="space-y-6">
        <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
          <div className="rounded-lg border border-border p-6">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                <h3 className="text-lg font-bold text-foreground">Advanced Mode</h3>
                <span className="text-xs">
                  {isAdvancedOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </span>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="pt-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Advanced configuration options would go here...
                </p>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          className="bg-primary text-primary-foreground"
          onClick={handleComplete}
          disabled={!isFormValid()}
        >
          Create Table
        </Button>
      </div>
    </div>
  );
}