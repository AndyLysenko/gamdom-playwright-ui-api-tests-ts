/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowCreate } from './WorkflowCreate';
import type { WorkflowScope } from './WorkflowScope';
import type { WorkflowStatusUpdate } from './WorkflowStatusUpdate';
/**
 * The create workflows payload.
 */
export type WorkflowCreateRequest = {
  scope: WorkflowScope;
  /**
   * The statuses to associate with the workflows.
   */
  statuses: Array<WorkflowStatusUpdate>;
  /**
   * The details of the workflows to create.
   */
  workflows: Array<WorkflowCreate>;
};

