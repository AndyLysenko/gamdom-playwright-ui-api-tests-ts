/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JiraExpressionComplexity } from './JiraExpressionComplexity';
import type { JiraExpressionValidationError } from './JiraExpressionValidationError';
/**
 * Details about the analysed Jira expression.
 */
export type JiraExpressionAnalysis = {
  complexity?: JiraExpressionComplexity;
  /**
   * A list of validation errors. Not included if the expression is valid.
   */
  errors?: Array<JiraExpressionValidationError>;
  /**
   * The analysed expression.
   */
  expression: string;
  /**
   * EXPERIMENTAL. The inferred type of the expression.
   */
  type?: string;
  /**
   * Whether the expression is valid and the interpreter will evaluate it. Note that the expression may fail at runtime (for example, if it executes too many expensive operations).
   */
  valid: boolean;
};

