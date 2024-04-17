/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowCondition } from './WorkflowCondition';
/**
 * A compound workflow transition rule condition. This object returns `nodeType` as `compound`.
 */
export type WorkflowCompoundCondition = {
  /**
   * The list of workflow conditions.
   */
  conditions: Array<WorkflowCondition>;
  nodeType: 'compound';
  /**
   * The compound condition operator.
   */
  operator: 'AND' | 'OR';
};

