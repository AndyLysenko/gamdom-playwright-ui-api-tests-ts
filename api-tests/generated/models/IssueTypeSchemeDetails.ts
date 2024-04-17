/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details of an issue type scheme and its associated issue types.
 */
export type IssueTypeSchemeDetails = {
  /**
   * The ID of the default issue type of the issue type scheme. This ID must be included in `issueTypeIds`.
   */
  defaultIssueTypeId?: string;
  /**
   * The description of the issue type scheme. The maximum length is 4000 characters.
   */
  description?: string;
  /**
   * The list of issue types IDs of the issue type scheme. At least one standard issue type ID is required.
   */
  issueTypeIds: Array<string>;
  /**
   * The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.
   */
  name: string;
};

