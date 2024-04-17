/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JiraWorkflow } from './JiraWorkflow';
import type { JiraWorkflowStatus } from './JiraWorkflowStatus';
/**
 * Details of the created workflows and statuses.
 */
export type WorkflowCreateResponse = {
  /**
   * List of created statuses.
   */
  statuses?: Array<JiraWorkflowStatus>;
  /**
   * List of created workflows.
   */
  workflows?: Array<JiraWorkflow>;
};

