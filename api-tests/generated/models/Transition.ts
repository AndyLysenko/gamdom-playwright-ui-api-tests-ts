/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { TransitionScreenDetails } from './TransitionScreenDetails';
import type { WorkflowRules } from './WorkflowRules';
/**
 * Details of a workflow transition.
 */
export type Transition = {
  /**
   * The description of the transition.
   */
  description: string;
  /**
   * The statuses the transition can start from.
   */
  from: Array<string>;
  /**
   * The ID of the transition.
   */
  id: string;
  /**
   * The name of the transition.
   */
  name: string;
  /**
   * The properties of the transition.
   */
  properties?: Record<string, any>;
  rules?: WorkflowRules;
  screen?: TransitionScreenDetails;
  /**
   * The status the transition goes to.
   */
  to: string;
  /**
   * The type of the transition.
   */
  type: 'global' | 'initial' | 'directed';
};

