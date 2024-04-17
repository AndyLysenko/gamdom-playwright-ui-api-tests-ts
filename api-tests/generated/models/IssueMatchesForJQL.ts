/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * A list of the issues matched to a JQL query or details of errors encountered during matching.
 */
export type IssueMatchesForJQL = {
  /**
   * A list of errors.
   */
  errors: Array<string>;
  /**
   * A list of issue IDs.
   */
  matchedIssues: Array<number>;
};

