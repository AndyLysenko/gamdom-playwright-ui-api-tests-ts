/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { RuleConfiguration } from './RuleConfiguration';
import type { WorkflowTransition } from './WorkflowTransition';
/**
 * A workflow transition rule.
 */
export type AppWorkflowTransitionRule = {
  configuration: RuleConfiguration;
  /**
   * The ID of the transition rule.
   */
  id: string;
  /**
   * The key of the rule, as defined in the Connect or the Forge app descriptor.
   */
  readonly key: string;
  readonly transition?: WorkflowTransition;
};

