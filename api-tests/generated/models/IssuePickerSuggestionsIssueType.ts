/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { SuggestedIssue } from './SuggestedIssue';
/**
 * A type of issue suggested for use in auto-completion.
 */
export type IssuePickerSuggestionsIssueType = {
  /**
   * The ID of the type of issues suggested for use in auto-completion.
   */
  readonly id?: string;
  /**
   * A list of issues suggested for use in auto-completion.
   */
  readonly issues?: Array<SuggestedIssue>;
  /**
   * The label of the type of issues suggested for use in auto-completion.
   */
  readonly label?: string;
  /**
   * If no issue suggestions are found, returns a message indicating no suggestions were found,
   */
  readonly msg?: string;
  /**
   * If issue suggestions are found, returns a message indicating the number of issues suggestions found and returned.
   */
  readonly sub?: string;
};

