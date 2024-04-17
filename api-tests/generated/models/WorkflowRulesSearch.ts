/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details of the workflow and its transition rules.
 */
export type WorkflowRulesSearch = {
  /**
   * Use expand to include additional information in the response. This parameter accepts `transition` which, for each rule, returns information about the transition the rule is assigned to.
   */
  expand?: string;
  /**
   * The list of workflow rule IDs.
   */
  ruleIds: Array<string>;
  /**
   * The workflow ID.
   */
  workflowEntityId: string;
};

