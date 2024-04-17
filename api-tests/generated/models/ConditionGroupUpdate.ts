/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowRuleConfiguration } from './WorkflowRuleConfiguration';
/**
 * The conditions group associated with the transition.
 */
export type ConditionGroupUpdate = {
  /**
   * The nested conditions of the condition group.
   */
  conditionGroups?: Array<ConditionGroupUpdate>;
  /**
   * The rules for this condition.
   */
  conditions?: Array<WorkflowRuleConfiguration>;
  /**
   * Determines how the conditions in the group are evaluated. Accepts either `ANY` or `ALL`. If `ANY` is used, at least one condition in the group must be true for the group to evaluate to true. If `ALL` is used, all conditions in the group must be true for the group to evaluate to true.
   */
  operation: 'ANY' | 'ALL';
};

