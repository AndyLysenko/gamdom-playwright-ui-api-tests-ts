/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AddNotificationsDetails } from '../models/AddNotificationsDetails';
import type { CreateNotificationSchemeDetails } from '../models/CreateNotificationSchemeDetails';
import type { NotificationScheme } from '../models/NotificationScheme';
import type { NotificationSchemeId } from '../models/NotificationSchemeId';
import type { PageBeanNotificationScheme } from '../models/PageBeanNotificationScheme';
import type { PageBeanNotificationSchemeAndProjectMappingJsonBean } from '../models/PageBeanNotificationSchemeAndProjectMappingJsonBean';
import type { UpdateNotificationSchemeDetails } from '../models/UpdateNotificationSchemeDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueNotificationSchemesService {
  /**
   * Get notification schemes paginated
   * Returns a [paginated](#pagination) list of [notification schemes](https://confluence.atlassian.com/x/8YdKLg) ordered by the display name.
   *
   * *Note that you should allow for events without recipients to appear in responses.*
   *
   * **[Permissions](#permissions) required:** Permission to access Jira, however, the user must have permission to administer at least one project associated with a notification scheme for it to be returned.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of notification schemes IDs to be filtered by
   * @param projectId The list of projects IDs to be filtered by
   * @param onlyDefault When set to true, returns only the default notification scheme. If you provide project IDs not associated with the default, returns an empty page. The default value is false.
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `all` Returns all expandable information
   * *  `field` Returns information about any custom fields assigned to receive an event
   * *  `group` Returns information about any groups assigned to receive an event
   * *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information
   * *  `projectRole` Returns information about any project roles assigned to receive an event
   * *  `user` Returns information about any users assigned to receive an event
   * @returns PageBeanNotificationScheme Returned if the request is successful. Only returns notification schemes that the user has permission to access. An empty list is returned if the user lacks permission to access all notification schemes.
   * @throws ApiError
   */
  public static getNotificationSchemes(
    startAt: string = '0',
    maxResults: string = '50',
    id?: Array<string>,
    projectId?: Array<string>,
    onlyDefault: boolean = false,
    expand?: string,
  ): CancelablePromise<PageBeanNotificationScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/notificationscheme',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'projectId': projectId,
        'onlyDefault': onlyDefault,
        'expand': expand,
      },
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Create notification scheme
   * Creates a notification scheme with notifications. You can create up to 1000 notifications per request.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns NotificationSchemeId Returned if the request is successful.
   * @throws ApiError
   */
  public static createNotificationScheme(
    requestBody: CreateNotificationSchemeDetails,
  ): CancelablePromise<NotificationSchemeId> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/notificationscheme',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
      },
    });
  }
  /**
   * Get projects using notification schemes paginated
   * Returns a [paginated](#pagination) mapping of project that have notification scheme assigned. You can provide either one or multiple notification scheme IDs or project IDs to filter by. If you don't provide any, this will return a list of all mappings. Note that only company-managed (classic) projects are supported. This is because team-managed projects don't have a concept of a default notification scheme. The mappings are ordered by projectId.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param notificationSchemeId The list of notifications scheme IDs to be filtered out
   * @param projectId The list of project IDs to be filtered out
   * @returns PageBeanNotificationSchemeAndProjectMappingJsonBean Returned if the request is successful.
   * @throws ApiError
   */
  public static getNotificationSchemeToProjectMappings(
    startAt: string = '0',
    maxResults: string = '50',
    notificationSchemeId?: Array<string>,
    projectId?: Array<string>,
  ): CancelablePromise<PageBeanNotificationSchemeAndProjectMappingJsonBean> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/notificationscheme/project',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'notificationSchemeId': notificationSchemeId,
        'projectId': projectId,
      },
      errors: {
        400: `Returned if search criteria are invalid, strings vs numbers for projectId, notificationSchemeId, startAt and maxResult`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get notification scheme
   * Returns a [notification scheme](https://confluence.atlassian.com/x/8YdKLg), including the list of events and the recipients who will receive notifications for those events.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira, however, the user must have permission to administer at least one project associated with the notification scheme.
   * @param id The ID of the notification scheme. Use [Get notification schemes paginated](#api-rest-api-2-notificationscheme-get) to get a list of notification scheme IDs.
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `all` Returns all expandable information
   * *  `field` Returns information about any custom fields assigned to receive an event
   * *  `group` Returns information about any groups assigned to receive an event
   * *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information
   * *  `projectRole` Returns information about any project roles assigned to receive an event
   * *  `user` Returns information about any users assigned to receive an event
   * @returns NotificationScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getNotificationScheme(
    id: number,
    expand?: string,
  ): CancelablePromise<NotificationScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/notificationscheme/{id}',
      path: {
        'id': id,
      },
      query: {
        'expand': expand,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the notification scheme is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Update notification scheme
   * Updates a notification scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the notification scheme.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateNotificationScheme(
    id: string,
    requestBody: UpdateNotificationSchemeDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/notificationscheme/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the notification scheme isn't found.`,
      },
    });
  }
  /**
   * Add notifications to notification scheme
   * Adds notifications to a notification scheme. You can add up to 1000 notifications per request.
   *
   * *Deprecated: The notification type `EmailAddress` is no longer supported in Cloud. Refer to the [changelog](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-1031) for more details.*
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the notification scheme.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static addNotifications(
    id: string,
    requestBody: AddNotificationsDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/notificationscheme/{id}/notification',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the notification scheme isn't found.`,
      },
    });
  }
  /**
   * Delete notification scheme
   * Deletes a notification scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param notificationSchemeId The ID of the notification scheme.
   * @returns void
   * @throws ApiError
   */
  public static deleteNotificationScheme(
    notificationSchemeId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/notificationscheme/{notificationSchemeId}',
      path: {
        'notificationSchemeId': notificationSchemeId,
      },
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the notification scheme isn't found.`,
      },
    });
  }
  /**
   * Remove notification from notification scheme
   * Removes a notification from a notification scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param notificationSchemeId The ID of the notification scheme.
   * @param notificationId The ID of the notification.
   * @returns void
   * @throws ApiError
   */
  public static removeNotificationFromNotificationScheme(
    notificationSchemeId: string,
    notificationId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/notificationscheme/{notificationSchemeId}/notification/{notificationId}',
      path: {
        'notificationSchemeId': notificationSchemeId,
        'notificationId': notificationId,
      },
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if either the notification scheme or notification isn't found.`,
      },
    });
  }
}
