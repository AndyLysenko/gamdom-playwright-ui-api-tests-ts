/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowTransitionRules } from './WorkflowTransitionRules';
/**
 * Details of workflow transition rules.
 */
export type WorkflowRulesSearchDetails = {
  /**
   * List of workflow rule IDs that do not belong to the workflow or can not be found.
   */
  invalidRules?: Array<string>;
  /**
   * List of valid workflow transition rules.
   */
  validRules?: Array<WorkflowTransitionRules>;
  /**
   * The workflow ID.
   */
  workflowEntityId?: string;
};

