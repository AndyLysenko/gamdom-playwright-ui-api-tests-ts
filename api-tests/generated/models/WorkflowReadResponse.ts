/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JiraWorkflow } from './JiraWorkflow';
import type { JiraWorkflowStatus } from './JiraWorkflowStatus';
/**
 * Details of workflows and related statuses.
 */
export type WorkflowReadResponse = {
  /**
   * List of statuses.
   */
  statuses?: Array<JiraWorkflowStatus>;
  /**
   * List of workflows.
   */
  workflows?: Array<JiraWorkflow>;
};

