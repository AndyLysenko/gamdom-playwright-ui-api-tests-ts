/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ConditionGroupConfiguration } from './ConditionGroupConfiguration';
import type { WorkflowRuleConfiguration } from './WorkflowRuleConfiguration';
import type { WorkflowStatusAndPort } from './WorkflowStatusAndPort';
import type { WorkflowTrigger } from './WorkflowTrigger';
/**
 * The transitions of the workflow.
 */
export type WorkflowTransitions = {
  /**
   * The post-functions of the transition.
   */
  actions?: Array<WorkflowRuleConfiguration>;
  conditions?: ConditionGroupConfiguration;
  /**
   * The custom event ID of the transition.
   */
  customIssueEventId?: string | null;
  /**
   * The description of the transition.
   */
  description?: string;
  /**
   * The statuses the transition can start from.
   */
  from?: Array<WorkflowStatusAndPort>;
  /**
   * The ID of the transition.
   */
  id?: string;
  /**
   * The name of the transition.
   */
  name?: string;
  /**
   * The properties of the transition.
   */
  properties?: Record<string, string>;
  to?: WorkflowStatusAndPort;
  transitionScreen?: WorkflowRuleConfiguration;
  /**
   * The triggers of the transition.
   */
  triggers?: Array<WorkflowTrigger>;
  /**
   * The transition type.
   */
  type?: 'INITIAL' | 'GLOBAL' | 'DIRECTED';
  /**
   * The validators of the transition.
   */
  validators?: Array<WorkflowRuleConfiguration>;
};

