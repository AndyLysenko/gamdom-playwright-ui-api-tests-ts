/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AppWorkflowTransitionRule } from './AppWorkflowTransitionRule';
import type { WorkflowId } from './WorkflowId';
/**
 * A workflow with transition rules.
 */
export type WorkflowTransitionRules = {
  /**
   * The list of conditions within the workflow.
   */
  conditions?: Array<AppWorkflowTransitionRule>;
  /**
   * The list of post functions within the workflow.
   */
  postFunctions?: Array<AppWorkflowTransitionRule>;
  /**
   * The list of validators within the workflow.
   */
  validators?: Array<AppWorkflowTransitionRule>;
  workflowId: WorkflowId;
};

