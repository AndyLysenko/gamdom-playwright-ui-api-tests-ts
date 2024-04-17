/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
export type IssueLimitReportResponseBean = {
  /**
   * A list of ids of issues approaching the limit and their field count
   */
  issuesApproachingLimit?: Record<string, Record<string, number>>;
  /**
   * A list of ids of issues breaching the limit and their field count
   */
  issuesBreachingLimit?: Record<string, Record<string, number>>;
  /**
   * The fields and their defined limits
   */
  limits?: Record<string, number>;
};

