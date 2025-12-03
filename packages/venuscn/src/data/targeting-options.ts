import { AttributeOption, OperatorOption, Operator } from '../types/targeting-rules'

/** Common operators */
const STRING_OPERATORS: Operator[] = ['equals', 'not-equals', 'contains', 'not-contains', 'starts-with', 'ends-with']
const LIST_OPERATORS: Operator[] = ['equals', 'not-equals', 'in-list', 'not-in-list']
const NUMBER_OPERATORS: Operator[] = ['equals', 'not-equals', 'greater-than', 'less-than', 'greater-than-or-equal', 'less-than-or-equal', 'between']
const DATE_OPERATORS: Operator[] = ['equals', 'is-before', 'is-after', 'is-on', 'between']

/** Operator display labels */
export const OPERATOR_OPTIONS: OperatorOption[] = [
  { label: 'equals', value: 'equals' },
  { label: 'does not equal', value: 'not-equals' },
  { label: 'contains', value: 'contains' },
  { label: 'does not contain', value: 'not-contains' },
  { label: 'starts with', value: 'starts-with' },
  { label: 'ends with', value: 'ends-with' },
  { label: 'is in list', value: 'in-list' },
  { label: 'is not in list', value: 'not-in-list' },
  { label: 'is greater than', value: 'greater-than' },
  { label: 'is less than', value: 'less-than' },
  { label: 'is greater than or equal to', value: 'greater-than-or-equal' },
  { label: 'is less than or equal to', value: 'less-than-or-equal' },
  { label: 'is between', value: 'between' },
  { label: 'is before', value: 'is-before' },
  { label: 'is after', value: 'is-after' },
  { label: 'is on', value: 'is-on' },
]

/** Audience (Who) Attributes */
const AUDIENCE_ATTRIBUTES: AttributeOption[] = [
  {
    label: 'User Segment',
    value: 'user-segment',
    category: 'audience',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'adventure', value: 'adventure' },
      { label: 'luxury', value: 'luxury' },
      { label: 'budget', value: 'budget' },
      { label: 'family', value: 'family' },
      { label: 'business', value: 'business' },
    ],
  },
  {
    label: 'User ID',
    value: 'user-id',
    category: 'audience',
    allowedOperators: ['equals', 'not-equals'],
    valueType: 'text',
  },
  {
    label: 'Session Count',
    value: 'session-count',
    category: 'audience',
    allowedOperators: NUMBER_OPERATORS,
    valueType: 'number',
  },
  {
    label: 'Visitor Type',
    value: 'visitor-type',
    category: 'audience',
    allowedOperators: ['equals', 'not-equals'],
    valueType: 'select',
    valueOptions: [
      { label: 'New Visitor', value: 'new' },
      { label: 'Returning Visitor', value: 'returning' },
    ],
  },
  {
    label: 'User Role',
    value: 'user-role',
    category: 'audience',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'Admin', value: 'admin' },
      { label: 'Editor', value: 'editor' },
      { label: 'Viewer', value: 'viewer' },
      { label: 'Guest', value: 'guest' },
    ],
  },
  {
    label: 'Customer Lifetime Value',
    value: 'clv',
    category: 'audience',
    allowedOperators: NUMBER_OPERATORS,
    valueType: 'number',
  },
]

/** Device & Context (How) Attributes */
const DEVICE_ATTRIBUTES: AttributeOption[] = [
  {
    label: 'Operating System',
    value: 'operating-system',
    category: 'device',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'iOS', value: 'iOS' },
      { label: 'Android', value: 'Android' },
      { label: 'Windows', value: 'Windows' },
      { label: 'macOS', value: 'macOS' },
      { label: 'Linux', value: 'Linux' },
    ],
  },
  {
    label: 'Browser',
    value: 'browser',
    category: 'device',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'Chrome', value: 'chrome' },
      { label: 'Firefox', value: 'firefox' },
      { label: 'Safari', value: 'safari' },
      { label: 'Edge', value: 'edge' },
      { label: 'Opera', value: 'opera' },
    ],
  },
  {
    label: 'Device Type',
    value: 'device-type',
    category: 'device',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'Mobile', value: 'mobile' },
      { label: 'Tablet', value: 'tablet' },
      { label: 'Desktop', value: 'desktop' },
    ],
  },
  {
    label: 'Screen Width',
    value: 'screen-width',
    category: 'device',
    allowedOperators: NUMBER_OPERATORS,
    valueType: 'number',
  },
  {
    label: 'Query Parameters',
    value: 'query-parameters',
    category: 'device',
    allowedOperators: STRING_OPERATORS,
    valueType: 'text',
  },
  {
    label: 'Referrer URL',
    value: 'referrer-url',
    category: 'device',
    allowedOperators: STRING_OPERATORS,
    valueType: 'text',
  },
  {
    label: 'Connection Type',
    value: 'connection-type',
    category: 'device',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: '4G', value: '4g' },
      { label: '5G', value: '5g' },
      { label: 'WiFi', value: 'wifi' },
      { label: 'Ethernet', value: 'ethernet' },
    ],
  },
]

/** Geographic (Where) Attributes */
const GEOGRAPHIC_ATTRIBUTES: AttributeOption[] = [
  {
    label: 'Country',
    value: 'country',
    category: 'geographic',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'United States', value: 'US' },
      { label: 'United Kingdom', value: 'GB' },
      { label: 'Canada', value: 'CA' },
      { label: 'Australia', value: 'AU' },
      { label: 'Germany', value: 'DE' },
      { label: 'France', value: 'FR' },
      { label: 'India', value: 'IN' },
      { label: 'Japan', value: 'JP' },
      { label: 'China', value: 'CN' },
      { label: 'Brazil', value: 'BR' },
      { label: 'Mexico', value: 'MX' },
      { label: 'Spain', value: 'ES' },
      { label: 'Italy', value: 'IT' },
      { label: 'Netherlands', value: 'NL' },
      { label: 'Sweden', value: 'SE' },
      { label: 'Andorra', value: 'AD' },
      { label: 'United Arab Emirates', value: 'AE' },
    ],
  },
  {
    label: 'Region',
    value: 'region',
    category: 'geographic',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'California', value: 'CA' },
      { label: 'New York', value: 'NY' },
      { label: 'Texas', value: 'TX' },
      { label: 'Florida', value: 'FL' },
      { label: 'Ontario', value: 'ON' },
      { label: 'Quebec', value: 'QC' },
    ],
  },
  {
    label: 'City',
    value: 'city',
    category: 'geographic',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'New York', value: 'new-york' },
      { label: 'Los Angeles', value: 'los-angeles' },
      { label: 'London', value: 'london' },
      { label: 'Toronto', value: 'toronto' },
      { label: 'Sydney', value: 'sydney' },
      { label: 'Mumbai', value: 'mumbai' },
    ],
  },
  {
    label: 'Timezone',
    value: 'timezone',
    category: 'geographic',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'America/New_York (EST)', value: 'America/New_York' },
      { label: 'America/Los_Angeles (PST)', value: 'America/Los_Angeles' },
      { label: 'America/Chicago (CST)', value: 'America/Chicago' },
      { label: 'Europe/London (GMT)', value: 'Europe/London' },
      { label: 'Asia/Tokyo (JST)', value: 'Asia/Tokyo' },
      { label: 'Australia/Sydney (AEST)', value: 'Australia/Sydney' },
    ],
  },
  {
    label: 'Language',
    value: 'language',
    category: 'geographic',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'English', value: 'en' },
      { label: 'Spanish', value: 'es' },
      { label: 'French', value: 'fr' },
      { label: 'German', value: 'de' },
      { label: 'Chinese', value: 'zh' },
      { label: 'Japanese', value: 'ja' },
    ],
  },
  {
    label: 'Postal Code',
    value: 'postal-code',
    category: 'geographic',
    allowedOperators: STRING_OPERATORS,
    valueType: 'text',
  },
]

/** Temporal (When) Attributes */
const TEMPORAL_ATTRIBUTES: AttributeOption[] = [
  {
    label: 'Day of Week',
    value: 'day-of-week',
    category: 'temporal',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'Monday', value: 'monday' },
      { label: 'Tuesday', value: 'tuesday' },
      { label: 'Wednesday', value: 'wednesday' },
      { label: 'Thursday', value: 'thursday' },
      { label: 'Friday', value: 'friday' },
      { label: 'Saturday', value: 'saturday' },
      { label: 'Sunday', value: 'sunday' },
    ],
  },
  {
    label: 'Time of Day',
    value: 'time-of-day',
    category: 'temporal',
    allowedOperators: ['is-before', 'is-after', 'equals', 'between'],
    valueType: 'time',
  },
  {
    label: 'Hour',
    value: 'hour',
    category: 'temporal',
    allowedOperators: NUMBER_OPERATORS,
    valueType: 'number',
  },
  {
    label: 'Date',
    value: 'date',
    category: 'temporal',
    allowedOperators: DATE_OPERATORS,
    valueType: 'date',
  },
  {
    label: 'Month',
    value: 'month',
    category: 'temporal',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'January', value: '1' },
      { label: 'February', value: '2' },
      { label: 'March', value: '3' },
      { label: 'April', value: '4' },
      { label: 'May', value: '5' },
      { label: 'June', value: '6' },
      { label: 'July', value: '7' },
      { label: 'August', value: '8' },
      { label: 'September', value: '9' },
      { label: 'October', value: '10' },
      { label: 'November', value: '11' },
      { label: 'December', value: '12' },
    ],
  },
  {
    label: 'Season',
    value: 'season',
    category: 'temporal',
    allowedOperators: LIST_OPERATORS,
    valueType: 'select',
    valueOptions: [
      { label: 'Spring', value: 'spring' },
      { label: 'Summer', value: 'summer' },
      { label: 'Fall', value: 'fall' },
      { label: 'Winter', value: 'winter' },
    ],
  },
  {
    label: 'Holiday',
    value: 'holiday',
    category: 'temporal',
    allowedOperators: ['equals', 'not-equals'],
    valueType: 'select',
    valueOptions: [
      { label: 'Christmas', value: 'christmas' },
      { label: 'New Year', value: 'new-year' },
      { label: 'Thanksgiving', value: 'thanksgiving' },
      { label: 'Black Friday', value: 'black-friday' },
      { label: 'Cyber Monday', value: 'cyber-monday' },
    ],
  },
]

/** All attributes combined */
export const ALL_ATTRIBUTES: AttributeOption[] = [
  ...AUDIENCE_ATTRIBUTES,
  ...DEVICE_ATTRIBUTES,
  ...GEOGRAPHIC_ATTRIBUTES,
  ...TEMPORAL_ATTRIBUTES,
]

/** Get attributes by category */
export const getAttributesByCategory = (category: 'audience' | 'device' | 'geographic' | 'temporal'): AttributeOption[] => {
  return ALL_ATTRIBUTES.filter(attr => attr.category === category)
}

/** Get attribute by value */
export const getAttributeByValue = (value: string): AttributeOption | undefined => {
  return ALL_ATTRIBUTES.find(attr => attr.value === value)
}

/** Get operators for an attribute */
export const getOperatorsForAttribute = (attributeValue: string): OperatorOption[] => {
  const attribute = getAttributeByValue(attributeValue)
  if (!attribute) return []

  return OPERATOR_OPTIONS.filter(op => attribute.allowedOperators.includes(op.value))
}
