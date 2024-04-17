/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ContainerForRegisteredWebhooks } from '../models/ContainerForRegisteredWebhooks';
import type { ContainerForWebhookIDs } from '../models/ContainerForWebhookIDs';
import type { FailedWebhooks } from '../models/FailedWebhooks';
import type { PageBeanWebhook } from '../models/PageBeanWebhook';
import type { WebhookRegistrationDetails } from '../models/WebhookRegistrationDetails';
import type { WebhooksExpirationDate } from '../models/WebhooksExpirationDate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhooksService {
  /**
   * Delete webhooks by ID
   * Removes webhooks by ID. Only webhooks registered by the calling app are removed. If webhooks created by other apps are specified, they are ignored.
   *
   * **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.
   * @param requestBody
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static deleteWebhookById(
    requestBody: ContainerForWebhookIDs,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/webhook',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the list of webhook IDs is missing.`,
        403: `Returned if the caller isn't an app.`,
      },
    });
  }
  /**
   * Get dynamic webhooks for app
   * Returns a [paginated](#pagination) list of the webhooks registered by the calling app.
   *
   * **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanWebhook Returned if the request is successful.
   * @throws ApiError
   */
  public static getDynamicWebhooksForApp(
    startAt?: number,
    maxResults: number = 100,
  ): CancelablePromise<PageBeanWebhook> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/webhook',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if the caller isn't an app.`,
      },
    });
  }
  /**
   * Register dynamic webhooks
   * Registers webhooks.
   *
   * **NOTE:** for non-public OAuth apps, webhooks are delivered only if there is a match between the app owner and the user who registered a dynamic webhook.
   *
   * **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.
   * @param requestBody
   * @returns ContainerForRegisteredWebhooks Returned if the request is successful.
   * @throws ApiError
   */
  public static registerDynamicWebhooks(
    requestBody: WebhookRegistrationDetails,
  ): CancelablePromise<ContainerForRegisteredWebhooks> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/webhook',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if the caller isn't an app.`,
      },
    });
  }
  /**
   * Get failed webhooks
   * Returns webhooks that have recently failed to be delivered to the requesting app after the maximum number of retries.
   *
   * After 72 hours the failure may no longer be returned by this operation.
   *
   * The oldest failure is returned first.
   *
   * This method uses a cursor-based pagination. To request the next page use the failure time of the last webhook on the list as the `failedAfter` value or use the URL provided in `next`.
   *
   * **[Permissions](#permissions) required:** Only [Connect apps](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) can use this operation.
   * @param maxResults The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page.
   * @param after The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch.
   * @returns FailedWebhooks Returned if the request is successful.
   * @throws ApiError
   */
  public static getFailedWebhooks(
    maxResults?: number,
    after?: number,
  ): CancelablePromise<FailedWebhooks> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/webhook/failed',
      query: {
        'maxResults': maxResults,
        'after': after,
      },
      errors: {
        400: `400 response`,
        403: `Returned if the caller is not a Connect app.`,
      },
    });
  }
  /**
   * Extend webhook life
   * Extends the life of webhook. Webhooks registered through the REST API expire after 30 days. Call this operation to keep them alive.
   *
   * Unrecognized webhook IDs (those that are not found or belong to other apps) are ignored.
   *
   * **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/#connect-apps) and [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps) apps can use this operation.
   * @param requestBody
   * @returns WebhooksExpirationDate Returned if the request is successful.
   * @throws ApiError
   */
  public static refreshWebhooks(
    requestBody: ContainerForWebhookIDs,
  ): CancelablePromise<WebhooksExpirationDate> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/webhook/refresh',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if the caller isn't an app.`,
      },
    });
  }
}
