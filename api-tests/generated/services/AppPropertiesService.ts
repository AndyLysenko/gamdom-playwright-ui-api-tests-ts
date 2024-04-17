/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { EntityProperty } from '../models/EntityProperty';
import type { OperationMessage } from '../models/OperationMessage';
import type { PropertyKeys } from '../models/PropertyKeys';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AppPropertiesService {
  /**
   * Get app properties
   * Gets all the properties of an app.
   *
   * **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
   * Additionally, Forge apps can access Connect app properties (stored against the same `app.connect.key`).
   * @param addonKey The key of the app, as defined in its descriptor.
   * @returns PropertyKeys Returned if the request is successful.
   * @throws ApiError
   */
  public static addonPropertiesResourceGetAddonPropertiesGet(
    addonKey: string,
  ): CancelablePromise<PropertyKeys> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/atlassian-connect/1/addons/{addonKey}/properties',
      path: {
        'addonKey': addonKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Delete app property
   * Deletes an app's property.
   *
   * **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
   * Additionally, Forge apps can access Connect app properties (stored against the same `app.connect.key`).
   * @param addonKey The key of the app, as defined in its descriptor.
   * @param propertyKey The key of the property.
   * @returns void
   * @throws ApiError
   */
  public static addonPropertiesResourceDeleteAddonPropertyDelete(
    addonKey: string,
    propertyKey: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}',
      path: {
        'addonKey': addonKey,
        'propertyKey': propertyKey,
      },
      errors: {
        400: `Returned if the property key is longer than 127 characters.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the property is not found or doesn't belong to the app.`,
      },
    });
  }
  /**
   * Get app property
   * Returns the key and value of an app's property.
   *
   * **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
   * Additionally, Forge apps can access Connect app properties (stored against the same `app.connect.key`).
   * @param addonKey The key of the app, as defined in its descriptor.
   * @param propertyKey The key of the property.
   * @returns EntityProperty Returned if the request is successful.
   * @throws ApiError
   */
  public static addonPropertiesResourceGetAddonPropertyGet(
    addonKey: string,
    propertyKey: string,
  ): CancelablePromise<EntityProperty> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}',
      path: {
        'addonKey': addonKey,
        'propertyKey': propertyKey,
      },
      errors: {
        400: `Returned if the property key is longer than 127 characters.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the property is not found or doesn't belong to the app.`,
      },
    });
  }
  /**
   * Set app property
   * Sets the value of an app's property. Use this resource to store custom data for your app.
   *
   * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.
   *
   * **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.
   * Additionally, Forge apps can access Connect app properties (stored against the same `app.connect.key`).
   * @param addonKey The key of the app, as defined in its descriptor.
   * @param propertyKey The key of the property.
   * @param requestBody
   * @returns OperationMessage Returned if the property is updated.
   * @throws ApiError
   */
  public static addonPropertiesResourcePutAddonPropertyPut(
    addonKey: string,
    propertyKey: string,
    requestBody: any,
  ): CancelablePromise<OperationMessage> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}',
      path: {
        'addonKey': addonKey,
        'propertyKey': propertyKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         * the property key is longer than 127 characters.
         * the value is not valid JSON.
         * the value is longer than 32768 characters.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Delete app property (Forge)
   * Deletes a Forge app's property.
   *
   * **[Permissions](#permissions) required:** Only Forge apps can make this request.
   * @param propertyKey The key of the property.
   * @returns void
   * @throws ApiError
   */
  public static deleteForgeAppProperty(
    propertyKey: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/forge/1/app/properties/{propertyKey}',
      path: {
        'propertyKey': propertyKey,
      },
      errors: {
        400: `Returned if the property key is longer than 127 characters.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the request isn't made directly by an app or if it's an impersonated request.`,
        404: `Returned if the property isn't found or doesn't belong to the app.`,
      },
    });
  }
  /**
   * Set app property (Forge)
   * Sets the value of a Forge app's property.
   * These values can be retrieved in [Jira expressions](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/)
   * through the `app` [context variable](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#context-variables).
   *
   * For other use cases, use the [Storage API](https://developer.atlassian.com/platform/forge/runtime-reference/storage-api/).
   *
   * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.
   *
   * **[Permissions](#permissions) required:** Only Forge apps can make this request.
   * @param propertyKey The key of the property.
   * @param requestBody
   * @returns OperationMessage Returned if the property is updated.
   * @throws ApiError
   */
  public static putForgeAppProperty(
    propertyKey: string,
    requestBody: any,
  ): CancelablePromise<OperationMessage> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/forge/1/app/properties/{propertyKey}',
      path: {
        'propertyKey': propertyKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         * the property key is longer than 127 characters.
         * the value isn't valid JSON.
         * the value is longer than 32768 characters.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the request isn't made directly by an app or if it's an impersonated request.`,
      },
    });
  }
}
