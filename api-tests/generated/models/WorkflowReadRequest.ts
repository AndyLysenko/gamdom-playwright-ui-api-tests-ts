/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectAndIssueTypePair } from './ProjectAndIssueTypePair';
export type WorkflowReadRequest = {
  /**
   * The list of projects and issue types to query.
   */
  projectAndIssueTypes?: Array<ProjectAndIssueTypePair>;
  /**
   * The list of workflow IDs to query.
   */
  workflowIds?: Array<string>;
  /**
   * The list of workflow names to query.
   */
  workflowNames?: Array<string>;
};

