/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CreateWorkflowTransitionRulesDetails } from './CreateWorkflowTransitionRulesDetails';
import type { CreateWorkflowTransitionScreenDetails } from './CreateWorkflowTransitionScreenDetails';
/**
 * The details of a workflow transition.
 */
export type CreateWorkflowTransitionDetails = {
  /**
   * The description of the transition. The maximum length is 1000 characters.
   */
  description?: string;
  /**
   * The statuses the transition can start from.
   */
  from?: Array<string>;
  /**
   * The name of the transition. The maximum length is 60 characters.
   */
  name: string;
  /**
   * The properties of the transition.
   */
  properties?: Record<string, string>;
  /**
   * The rules of the transition.
   */
  rules?: CreateWorkflowTransitionRulesDetails;
  /**
   * The screen of the transition.
   */
  screen?: CreateWorkflowTransitionScreenDetails;
  /**
   * The status the transition goes to.
   */
  to: string;
  /**
   * The type of the transition.
   */
  type: 'global' | 'initial' | 'directed';
};

