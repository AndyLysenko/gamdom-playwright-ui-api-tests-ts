/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { NotificationSchemeEvent } from './NotificationSchemeEvent';
import type { Scope } from './Scope';
/**
 * Details about a notification scheme.
 */
export type NotificationScheme = {
  /**
   * The description of the notification scheme.
   */
  description?: string;
  /**
   * Expand options that include additional notification scheme details in the response.
   */
  expand?: string;
  /**
   * The ID of the notification scheme.
   */
  id?: number;
  /**
   * The name of the notification scheme.
   */
  name?: string;
  /**
   * The notification events and associated recipients.
   */
  notificationSchemeEvents?: Array<NotificationSchemeEvent>;
  /**
   * The list of project IDs associated with the notification scheme.
   */
  projects?: Array<number>;
  /**
   * The scope of the notification scheme.
   */
  scope?: Scope;
  self?: string;
};

