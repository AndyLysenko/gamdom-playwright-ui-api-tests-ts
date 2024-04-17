/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WebhookDetails } from './WebhookDetails';
/**
 * Details of webhooks to register.
 */
export type WebhookRegistrationDetails = {
  /**
   * The URL that specifies where to send the webhooks. This URL must use the same base URL as the Connect app. Only a single URL per app is allowed to be registered.
   */
  url: string;
  /**
   * A list of webhooks.
   */
  webhooks: Array<WebhookDetails>;
};

