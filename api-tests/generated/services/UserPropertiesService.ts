/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { EntityProperty } from '../models/EntityProperty';
import type { PropertyKeys } from '../models/PropertyKeys';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserPropertiesService {
  /**
   * Get user property keys
   * Returns the keys of all properties for a user.
   *
   * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to access the property keys on any user.
   * *  Access to Jira, to access the calling user's property keys.
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
   * @param userKey This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @returns PropertyKeys Returned if the request is successful.
   * @throws ApiError
   */
  public static getUserPropertyKeys(
    accountId?: string,
    userKey?: string,
    username?: string,
  ): CancelablePromise<PropertyKeys> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/user/properties',
      query: {
        'accountId': accountId,
        'userKey': userKey,
        'username': username,
      },
      errors: {
        400: `Returned if \`accountId\` is missing.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission or is not accessing their user record.`,
        404: `Returned if the user is not found.`,
      },
    });
  }
  /**
   * Delete user property
   * Deletes a property from a user.
   *
   * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to delete a property from any user.
   * *  Access to Jira, to delete a property from the calling user's record.
   * @param propertyKey The key of the user's property.
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
   * @param userKey This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @returns void
   * @throws ApiError
   */
  public static deleteUserProperty(
    propertyKey: string,
    accountId?: string,
    userKey?: string,
    username?: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/user/properties/{propertyKey}',
      path: {
        'propertyKey': propertyKey,
      },
      query: {
        'accountId': accountId,
        'userKey': userKey,
        'username': username,
      },
      errors: {
        400: `Returned if \`accountId\` is missing.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission or is not accessing their user record.`,
        404: `Returned if the user or the property is not found.`,
      },
    });
  }
  /**
   * Get user property
   * Returns the value of a user's property. If no property key is provided [Get user property keys](#api-rest-api-2-user-properties-get) is called.
   *
   * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to get a property from any user.
   * *  Access to Jira, to get a property from the calling user's record.
   * @param propertyKey The key of the user's property.
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
   * @param userKey This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @returns EntityProperty Returned if the request is successful.
   * @throws ApiError
   */
  public static getUserProperty(
    propertyKey: string,
    accountId?: string,
    userKey?: string,
    username?: string,
  ): CancelablePromise<EntityProperty> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/user/properties/{propertyKey}',
      path: {
        'propertyKey': propertyKey,
      },
      query: {
        'accountId': accountId,
        'userKey': userKey,
        'username': username,
      },
      errors: {
        400: `Returned if \`accountId\` is missing.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission or is not accessing their user record.`,
        404: `Returned if the user is not found.`,
      },
    });
  }
  /**
   * Set user property
   * Sets the value of a user's property. Use this resource to store custom data against a user.
   *
   * Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set a property on any user.
   * *  Access to Jira, to set a property on the calling user's record.
   * @param propertyKey The key of the user's property. The maximum length is 255 characters.
   * @param requestBody The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
   * @param userKey This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @returns any Returned if the user property is updated.
   * @throws ApiError
   */
  public static setUserProperty(
    propertyKey: string,
    requestBody: any,
    accountId?: string,
    userKey?: string,
    username?: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/user/properties/{propertyKey}',
      path: {
        'propertyKey': propertyKey,
      },
      query: {
        'accountId': accountId,
        'userKey': userKey,
        'username': username,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if \`accountId\` is missing.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission or is not accessing their user record.`,
        404: `Returned if the user is not found.`,
        405: `Returned if the property key is not specified.`,
      },
    });
  }
}
