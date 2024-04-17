/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * The Atlassian provided system rules available.
 */
export type AvailableWorkflowSystemRule = {
  /**
   * The rule description.
   */
  description: string;
  /**
   * List of rules that conflict with this one.
   */
  incompatibleRuleKeys: Array<string>;
  /**
   * Whether the rule can be added added to an initial transition.
   */
  isAvailableForInitialTransition: boolean;
  /**
   * Whether the rule is visible.
   */
  isVisible: boolean;
  /**
   * The rule name.
   */
  name: string;
  /**
   * The rule key.
   */
  ruleKey: string;
  /**
   * The rule type.
   */
  ruleType: 'Condition' | 'Validator' | 'Function' | 'Screen';
};

