/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { RegisteredWebhook } from './RegisteredWebhook';
/**
 * Container for a list of registered webhooks. Webhook details are returned in the same order as the request.
 */
export type ContainerForRegisteredWebhooks = {
  /**
   * A list of registered webhooks.
   */
  webhookRegistrationResult?: Array<RegisteredWebhook>;
};

