/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Application } from './Application';
import type { RemoteObject } from './RemoteObject';
/**
 * Details of an issue remote link.
 */
export type RemoteIssueLink = {
  /**
   * Details of the remote application the linked item is in.
   */
  application?: Application;
  /**
   * The global ID of the link, such as the ID of the item on the remote system.
   */
  globalId?: string;
  /**
   * The ID of the link.
   */
  id?: number;
  /**
   * Details of the item linked to.
   */
  object?: RemoteObject;
  /**
   * Description of the relationship between the issue and the linked item.
   */
  relationship?: string;
  /**
   * The URL of the link.
   */
  self?: string;
};

