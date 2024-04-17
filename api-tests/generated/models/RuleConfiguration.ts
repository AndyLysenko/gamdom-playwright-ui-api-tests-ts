/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * A rule configuration.
 */
export type RuleConfiguration = {
  /**
   * Whether the rule is disabled.
   */
  disabled?: boolean;
  /**
   * A tag used to filter rules in [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).
   */
  tag?: string;
  /**
   * Configuration of the rule, as it is stored by the Connect or the Forge app on the rule configuration page.
   */
  value: string;
};

