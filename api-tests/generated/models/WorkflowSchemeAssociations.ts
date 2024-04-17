/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowScheme } from './WorkflowScheme';
/**
 * A workflow scheme along with a list of projects that use it.
 */
export type WorkflowSchemeAssociations = {
  /**
   * The list of projects that use the workflow scheme.
   */
  projectIds: Array<string>;
  /**
   * The workflow scheme.
   */
  workflowScheme: WorkflowScheme;
};

