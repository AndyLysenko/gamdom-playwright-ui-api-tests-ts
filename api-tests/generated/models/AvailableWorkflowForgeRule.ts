/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * The Forge provided ecosystem rules available.
 */
export type AvailableWorkflowForgeRule = {
  /**
   * The rule description.
   */
  description?: string;
  /**
   * The unique ARI of the forge rule type.
   */
  id?: string;
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
};

