/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowCondition } from './WorkflowCondition';
import type { WorkflowTransitionRule } from './WorkflowTransitionRule';
/**
 * A collection of transition rules.
 */
export type WorkflowRules = {
  conditionsTree?: WorkflowCondition;
  /**
   * The workflow post functions.
   */
  postFunctions?: Array<WorkflowTransitionRule>;
  /**
   * The workflow validators.
   */
  validators?: Array<WorkflowTransitionRule>;
};

