/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Bulk operation filter details.
 */
export type IssueFilterForBulkPropertySet = {
  /**
   * The value of properties to perform the bulk operation on.
   */
  currentValue?: any;
  /**
   * List of issues to perform the bulk operation on.
   */
  entityIds?: Array<number>;
  /**
   * Whether the bulk operation occurs only when the property is present on or absent from an issue.
   */
  hasProperty?: boolean;
};

