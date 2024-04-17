/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowStatusLayout } from './WorkflowStatusLayout';
/**
 * The statuses referenced in the workflow.
 */
export type WorkflowReferenceStatus = {
  /**
   * Indicates if the status is deprecated.
   */
  deprecated?: boolean;
  layout?: WorkflowStatusLayout;
  /**
   * The properties associated with the status.
   */
  properties?: Record<string, string>;
  /**
   * The reference of the status.
   */
  statusReference?: string;
};

