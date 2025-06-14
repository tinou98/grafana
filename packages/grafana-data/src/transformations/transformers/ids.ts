export enum DataTransformerID {
  append = 'append',
  //  rotate = 'rotate', // Columns to rows
  reduce = 'reduce',
  order = 'order',
  organize = 'organize',
  rename = 'rename',
  calculateField = 'calculateField',
  /** @deprecated use joinByField */
  seriesToColumns = 'seriesToColumns',
  seriesToRows = 'seriesToRows',
  merge = 'merge',
  concatenate = 'concatenate',
  labelsToFields = 'labelsToFields',
  filterFields = 'filterFields',
  filterFieldsByName = 'filterFieldsByName',
  filterFrames = 'filterFrames',
  filterByRefId = 'filterByRefId',
  renameByRegex = 'renameByRegex',
  filterByValue = 'filterByValue',
  noop = 'noop',
  ensureColumns = 'ensureColumns',
  groupBy = 'groupBy',
  sortBy = 'sortBy',
  histogram = 'histogram',
  configFromData = 'configFromData',
  rowsToFields = 'rowsToFields',
  prepareTimeSeries = 'prepareTimeSeries',
  convertFieldType = 'convertFieldType',
  fieldLookup = 'fieldLookup',
  fieldNameMapping = 'fieldNameMapping',
  heatmap = 'heatmap',
  spatial = 'spatial',
  joinByField = 'joinByField',
  joinByLabels = 'joinByLabels',
  extractFields = 'extractFields',
  groupingToMatrix = 'groupingToMatrix',
  limit = 'limit',
  partitionByValues = 'partitionByValues',
  timeSeriesTable = 'timeSeriesTable',
  transpose = 'transpose',
  formatTime = 'formatTime',
  formatString = 'formatString',
  regression = 'regression',
  groupToNestedTable = 'groupToNestedTable',
}
