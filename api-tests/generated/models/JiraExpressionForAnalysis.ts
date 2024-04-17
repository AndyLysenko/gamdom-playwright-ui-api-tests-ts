/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details of Jira expressions for analysis.
 */
export type JiraExpressionForAnalysis = {
  /**
   * Context variables and their types. The type checker assumes that [common context variables](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#context-variables), such as `issue` or `project`, are available in context and sets their type. Use this property to override the default types or provide details of new variables.
   */
  contextVariables?: Record<string, string>;
  /**
   * The list of Jira expressions to analyse.
   */
  expressions: Array<string>;
};

