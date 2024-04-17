/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JiraWorkflow } from './JiraWorkflow';
import type { JiraWorkflowStatus } from './JiraWorkflowStatus';
export type WorkflowUpdateResponse = {
  /**
   * List of updated statuses.
   */
  statuses?: Array<JiraWorkflowStatus>;
  /**
   * If there is a [asynchronous task](#async-operations) operation, as a result of this update.
   */
  taskId?: string | null;
  /**
   * List of updated workflows.
   */
  workflows?: Array<JiraWorkflow>;
};

