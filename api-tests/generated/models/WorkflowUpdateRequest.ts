/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowStatusUpdate } from './WorkflowStatusUpdate';
import type { WorkflowUpdate } from './WorkflowUpdate';
/**
 * The update workflows payload.
 */
export type WorkflowUpdateRequest = {
  /**
   * The statuses to associate with the workflows.
   */
  statuses: Array<WorkflowStatusUpdate>;
  /**
   * The details of the workflows to update.
   */
  workflows: Array<WorkflowUpdate>;
};

