/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details about a notification event.
 */
export type NotificationEvent = {
  /**
   * The description of the event.
   */
  description?: string;
  /**
   * The ID of the event. The event can be a [Jira system event](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or a [custom event](https://confluence.atlassian.com/x/AIlKLg).
   */
  id?: number;
  /**
   * The name of the event.
   */
  name?: string;
  /**
   * The template of the event. Only custom events configured by Jira administrators have template.
   */
  templateEvent?: NotificationEvent;
};

