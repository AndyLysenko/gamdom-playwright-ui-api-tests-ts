/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * The Connect provided ecosystem rules available.
 */
export type AvailableWorkflowConnectRule = {
  /**
   * The add-on providing the rule.
   */
  addonKey?: string;
  /**
   * The URL creation path segment defined in the Connect module.
   */
  createUrl?: string;
  /**
   * The rule description.
   */
  description?: string;
  /**
   * The URL edit path segment defined in the Connect module.
   */
  editUrl?: string;
  /**
   * The module providing the rule.
   */
  moduleKey?: string;
  /**
   * The rule name.
   */
  name?: string;
  /**
   * The rule key.
   */
  ruleKey?: string;
  /**
   * The rule type.
   */
  ruleType?: 'Condition' | 'Validator' | 'Function' | 'Screen';
  /**
   * The URL view path segment defined in the Connect module.
   */
  viewUrl?: string;
};

