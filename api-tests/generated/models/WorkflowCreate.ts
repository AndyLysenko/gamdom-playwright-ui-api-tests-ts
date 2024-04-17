/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { StatusLayoutUpdate } from './StatusLayoutUpdate';
import type { TransitionUpdateDTO } from './TransitionUpdateDTO';
import type { WorkflowLayout } from './WorkflowLayout';
/**
 * The details of the workflows to create.
 */
export type WorkflowCreate = {
  /**
   * The description of the workflow to create.
   */
  description?: string;
  /**
   * The name of the workflow to create.
   */
  name: string;
  startPointLayout?: WorkflowLayout;
  /**
   * The statuses associated with this workflow.
   */
  statuses: Array<StatusLayoutUpdate>;
  /**
   * The transitions of this workflow.
   */
  transitions: Array<TransitionUpdateDTO>;
};

