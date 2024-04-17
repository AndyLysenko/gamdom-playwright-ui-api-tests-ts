/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
export type IssueLimitReportRequest = {
  /**
   * A list of fields and their respective approaching limit threshold. Required for querying issues approaching limits. Optional for querying issues breaching limits. For example: "issuesApproachingLimitParams": \{"comment": 4500\}
   */
  issuesApproachingLimitParams?: Record<string, number>;
};

