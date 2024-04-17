/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectIssueTypes } from './ProjectIssueTypes';
import type { StatusScope } from './StatusScope';
import type { WorkflowUsages } from './WorkflowUsages';
/**
 * Details of a status.
 */
export type JiraStatus = {
  /**
   * The description of the status.
   */
  description?: string;
  /**
   * The ID of the status.
   */
  id?: string;
  /**
   * The name of the status.
   */
  name?: string;
  scope?: StatusScope;
  /**
   * The category of the status.
   */
  statusCategory?: 'TODO' | 'IN_PROGRESS' | 'DONE';
  /**
   * Projects and issue types where the status is used. Only available if the `usages` expand is requested.
   */
  usages?: Array<ProjectIssueTypes>;
  /**
   * The workflows that use this status. Only available if the `workflowUsages` expand is requested.
   */
  workflowUsages?: Array<WorkflowUsages>;
};

