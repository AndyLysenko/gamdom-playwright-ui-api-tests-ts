/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Locale } from '../models/Locale';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MyselfService {
  /**
   * Delete preference
   * Deletes a preference of the user, which restores the default value of system defined settings.
   *
   * Note that these keys are deprecated:
   *
   * *  *jira.user.locale* The locale of the user. By default, not set. The user takes the instance locale.
   * *  *jira.user.timezone* The time zone of the user. By default, not set. The user takes the instance timezone.
   *
   * Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param key The key of the preference.
   * @returns void
   * @throws ApiError
   */
  public static removePreference(
    key: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/mypreferences',
      query: {
        'key': key,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the key is not provided or not found.`,
      },
    });
  }
  /**
   * Get preference
   * Returns the value of a preference of the current user.
   *
   * Note that these keys are deprecated:
   *
   * *  *jira.user.locale* The locale of the user. By default this is not set and the user takes the locale of the instance.
   * *  *jira.user.timezone* The time zone of the user. By default this is not set and the user takes the timezone of the instance.
   *
   * These system preferences keys will be deprecated by 15/07/2024. You can still retrieve these keys, but it will not have any impact on Notification behaviour.
   *
   * *  *user.notifications.watcher* Whether the user gets notified when they are watcher.
   * *  *user.notifications.assignee* Whether the user gets notified when they are assignee.
   * *  *user.notifications.reporter* Whether the user gets notified when they are reporter.
   * *  *user.notifications.mentions* Whether the user gets notified when they are mentions.
   *
   * Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param key The key of the preference.
   * @returns string Returned if the request is successful.
   * @throws ApiError
   */
  public static getPreference(
    key: string,
  ): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/mypreferences',
      query: {
        'key': key,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the key is not provided or not found.`,
      },
    });
  }
  /**
   * Set preference
   * Creates a preference for the user or updates a preference's value by sending a plain text string. For example, `false`. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:
   *
   * *  *user.notifications.mimetype* The mime type used in notifications sent to the user. Defaults to `html`.
   * *  *user.default.share.private* Whether new [ filters](https://confluence.atlassian.com/x/eQiiLQ) are set to private. Defaults to `true`.
   * *  *user.keyboard.shortcuts.disabled* Whether keyboard shortcuts are disabled. Defaults to `false`.
   * *  *user.autowatch.disabled* Whether the user automatically watches issues they create or add a comment to. By default, not set: the user takes the instance autowatch setting.
   * *  *user.notifiy.own.changes* Whether the user gets notified of their own changes.
   *
   * Note that these keys are deprecated:
   *
   * *  *jira.user.locale* The locale of the user. By default, not set. The user takes the instance locale.
   * *  *jira.user.timezone* The time zone of the user. By default, not set. The user takes the instance timezone.
   *
   * These system preferences keys will be deprecated by 15/07/2024. You can still use these keys to create arbitrary preferences, but it will not have any impact on Notification behaviour.
   *
   * *  *user.notifications.watcher* Whether the user gets notified when they are watcher.
   * *  *user.notifications.assignee* Whether the user gets notified when they are assignee.
   * *  *user.notifications.reporter* Whether the user gets notified when they are reporter.
   * *  *user.notifications.mentions* Whether the user gets notified when they are mentions.
   *
   * Use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API to manage timezone and locale instead.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param key The key of the preference. The maximum length is 255 characters.
   * @param requestBody The value of the preference as a plain text string. The maximum length is 255 characters.
   * @returns void
   * @throws ApiError
   */
  public static setPreference(
    key: string,
    requestBody: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/mypreferences',
      query: {
        'key': key,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the key or value is not provided or invalid.`,
      },
    });
  }
  /**
   * @deprecated
   * Delete locale
   * Deprecated, use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API instead.
   *
   * Deletes the locale of the user, which restores the default setting.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @returns void
   * @throws ApiError
   */
  public static deleteLocale(): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/mypreferences/locale',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get locale
   * Returns the locale for the user.
   *
   * If the user has no language preference set (which is the default setting) or this resource is accessed anonymous, the browser locale detected by Jira is returned. Jira detects the browser locale using the *Accept-Language* header in the request. However, if this doesn't match a locale available Jira, the site default locale is returned.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None.
   * @returns Locale Returned if the request is successful.
   * @throws ApiError
   */
  public static getLocale(): CancelablePromise<Locale> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/mypreferences/locale',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * @deprecated
   * Set locale
   * Deprecated, use [ Update a user profile](https://developer.atlassian.com/cloud/admin/user-management/rest/#api-users-account-id-manage-profile-patch) from the user management REST API instead.
   *
   * Sets the locale of the user. The locale must be one supported by the instance of Jira.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param requestBody The locale defined in a LocaleBean.
   * @returns void
   * @throws ApiError
   */
  public static setLocale(
    requestBody: Locale,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/mypreferences/locale',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get current user
   * Returns details for the current user.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param expand Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `groups` Returns all groups, including nested groups, the user belongs to.
   * *  `applicationRoles` Returns the application roles the user is assigned to.
   * @returns User Returned if the request is successful.
   * @throws ApiError
   */
  public static getCurrentUser(
    expand?: string,
  ): CancelablePromise<User> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/myself',
      query: {
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
}
