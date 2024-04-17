/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JiraExpressionEvalContextBean } from './JiraExpressionEvalContextBean';
export type JiraExpressionEvalRequestBean = {
  /**
   * The context in which the Jira expression is evaluated.
   */
  context?: JiraExpressionEvalContextBean;
  /**
   * The Jira expression to evaluate.
   */
  expression: string;
};

