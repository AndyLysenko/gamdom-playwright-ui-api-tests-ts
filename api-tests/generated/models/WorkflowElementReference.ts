/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectAndIssueTypePair } from './ProjectAndIssueTypePair';
/**
 * A reference to the location of the error. This will be null if the error does not refer to a specific element.
 */
export type WorkflowElementReference = {
  /**
   * A property key.
   */
  propertyKey?: string;
  /**
   * A rule ID.
   */
  ruleId?: string;
  statusMappingReference?: ProjectAndIssueTypePair;
  /**
   * A status reference.
   */
  statusReference?: string;
  /**
   * A transition ID.
   */
  transitionId?: string;
};

