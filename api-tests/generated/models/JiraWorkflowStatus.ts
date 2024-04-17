/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectIssueTypes } from './ProjectIssueTypes';
import type { WorkflowScope } from './WorkflowScope';
/**
 * Details of a status.
 */
export type JiraWorkflowStatus = {
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
  scope?: WorkflowScope;
  /**
   * The category of the status.
   */
  statusCategory?: 'TODO' | 'IN_PROGRESS' | 'DONE';
  /**
   * The reference of the status.
   */
  statusReference?: string;
  /**
   * The `statuses.usages` expand is an optional parameter that can be used when reading and updating statuses in Jira. It provides additional information about the projects and issue types associated with the requested statuses.
   */
  usages?: Array<ProjectIssueTypes>;
};

