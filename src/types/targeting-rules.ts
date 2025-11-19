/** Targeting Rules Type Definitions */

/** Category types for targeting rules */
export type Category = 'audience' | 'device' | 'geographic' | 'temporal'

/** Match type for rule groups */
export type MatchType = 'all' | 'any'

/** Operator between rule groups */
export type GroupOperator = 'and' | 'or'

/** Operator types for different attribute types */
export type Operator =
  | 'equals'
  | 'not-equals'
  | 'contains'
  | 'not-contains'
  | 'starts-with'
  | 'ends-with'
  | 'in-list'
  | 'not-in-list'
  | 'greater-than'
  | 'less-than'
  | 'greater-than-or-equal'
  | 'less-than-or-equal'
  | 'between'
  | 'is-before'
  | 'is-after'
  | 'is-on'

/** Individual targeting rule */
export interface Rule {
  /** Unique identifier for the rule */
  id: string
  /** Category of the rule (audience, device, geographic, temporal) */
  category: Category
  /** The attribute being evaluated (e.g., "User Segment", "Operating System") */
  attribute: string
  /** The operator for comparison (e.g., "equals", "contains") */
  operator: Operator
  /** The value to compare against */
  value: string
}

/** Group of rules with a match condition */
export interface RuleGroup {
  /** Unique identifier for the group */
  id: string
  /** Match type: 'all' means AND logic, 'any' means OR logic */
  matchType: MatchType
  /** Array of rules in this group */
  rules: Rule[]
}

/** Complete targeting rules configuration */
export interface TargetingRules {
  /** Array of rule groups */
  groups: RuleGroup[]
}

/** Attribute option for dropdowns */
export interface AttributeOption {
  /** Display label */
  label: string
  /** Value identifier */
  value: string
  /** Category this attribute belongs to */
  category: Category
  /** Allowed operators for this attribute */
  allowedOperators: Operator[]
  /** Type of input for values ('text', 'select', 'number', 'date', 'time') */
  valueType: 'text' | 'select' | 'number' | 'date' | 'time'
  /** Predefined value options (if valueType is 'select') */
  valueOptions?: Array<{ label: string; value: string }>
}

/** Operator option for dropdowns */
export interface OperatorOption {
  /** Display label */
  label: string
  /** Value identifier */
  value: Operator
}
