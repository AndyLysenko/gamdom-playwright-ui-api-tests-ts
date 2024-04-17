/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Time tracking details.
 */
export type TimeTrackingDetails = {
  /**
   * The original estimate of time needed for this issue in readable format.
   */
  readonly originalEstimate?: string;
  /**
   * The original estimate of time needed for this issue in seconds.
   */
  readonly originalEstimateSeconds?: number;
  /**
   * The remaining estimate of time needed for this issue in readable format.
   */
  readonly remainingEstimate?: string;
  /**
   * The remaining estimate of time needed for this issue in seconds.
   */
  readonly remainingEstimateSeconds?: number;
  /**
   * Time worked on this issue in readable format.
   */
  readonly timeSpent?: string;
  /**
   * Time worked on this issue in seconds.
   */
  readonly timeSpentSeconds?: number;
};

