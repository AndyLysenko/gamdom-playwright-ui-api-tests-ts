/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.
 */
export type IssueContextVariable = {
  /**
   * The issue ID.
   */
  id?: number;
  /**
   * The issue key.
   */
  key?: string;
  /**
   * Type of custom context variable.
   */
  type: 'issue';
};

