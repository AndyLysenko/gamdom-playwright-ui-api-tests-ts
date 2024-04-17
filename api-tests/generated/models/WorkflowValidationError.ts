/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowElementReference } from './WorkflowElementReference';
/**
 * The details about a workflow validation error.
 */
export type WorkflowValidationError = {
  /**
   * An error code.
   */
  code?: string;
  elementReference?: WorkflowElementReference;
  /**
   * The validation error level.
   */
  level?: 'WARNING' | 'ERROR';
  /**
   * An error message.
   */
  message?: string;
  /**
   * The type of element the error or warning references.
   */
  type?: 'RULE' | 'STATUS' | 'STATUS_LAYOUT' | 'STATUS_PROPERTY' | 'WORKFLOW' | 'TRANSITION' | 'TRANSITION_PROPERTY' | 'SCOPE' | 'STATUS_MAPPING' | 'TRIGGER';
};

