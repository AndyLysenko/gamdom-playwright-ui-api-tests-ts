/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { IssueTypeDetails } from './IssueTypeDetails';
import type { Priority } from './Priority';
import type { StatusDetails } from './StatusDetails';
import type { TimeTrackingDetails } from './TimeTrackingDetails';
import type { UserDetails } from './UserDetails';
/**
 * Key fields from the linked issue.
 */
export type Fields = {
  /**
   * The assignee of the linked issue.
   */
  readonly assignee?: UserDetails;
  /**
   * The type of the linked issue.
   */
  readonly issueType?: IssueTypeDetails;
  /**
   * The type of the linked issue.
   */
  issuetype?: IssueTypeDetails;
  /**
   * The priority of the linked issue.
   */
  readonly priority?: Priority;
  /**
   * The status of the linked issue.
   */
  readonly status?: StatusDetails;
  /**
   * The summary description of the linked issue.
   */
  readonly summary?: string;
  /**
   * The time tracking of the linked issue.
   */
  readonly timetracking?: TimeTrackingDetails;
};

