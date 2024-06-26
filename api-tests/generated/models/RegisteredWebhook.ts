/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * ID of a registered webhook or error messages explaining why a webhook wasn't registered.
 */
export type RegisteredWebhook = {
  /**
   * The ID of the webhook. Returned if the webhook is created.
   */
  createdWebhookId?: number;
  /**
   * Error messages specifying why the webhook creation failed.
   */
  errors?: Array<string>;
};

