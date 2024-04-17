/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * The description of the page of issues loaded by the provided JQL query.
 */
export type IssuesJqlMetaDataBean = {
  /**
   * The number of issues that were loaded in this evaluation.
   */
  count: number;
  /**
   * The maximum number of issues that could be loaded in this evaluation.
   */
  maxResults: number;
  /**
   * The index of the first issue.
   */
  startAt: number;
  /**
   * The total number of issues the JQL returned.
   */
  totalCount: number;
  /**
   * Any warnings related to the JQL query. Present only if the validation mode was set to `warn`.
   */
  validationWarnings?: Array<string>;
};

