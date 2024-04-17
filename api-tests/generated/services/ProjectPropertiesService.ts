/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { EntityProperty } from '../models/EntityProperty';
import type { PropertyKeys } from '../models/PropertyKeys';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectPropertiesService {
  /**
   * Get project property keys
   * Returns all [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys for the project.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @returns PropertyKeys Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectPropertyKeys(
    projectIdOrKey: string,
  ): CancelablePromise<PropertyKeys> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/properties',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect.`,
        403: `Returned if the user does not have permission to view the project.`,
        404: `Returned if the project is not found.`,
      },
    });
  }
  /**
   * Delete project property
   * Deletes the [property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) from a project.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param propertyKey The project property key. Use [Get project property keys](#api-rest-api-2-project-projectIdOrKey-properties-get) to get a list of all project property keys.
   * @returns void
   * @throws ApiError
   */
  public static deleteProjectProperty(
    projectIdOrKey: string,
    propertyKey: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/project/{projectIdOrKey}/properties/{propertyKey}',
      path: {
        'projectIdOrKey': projectIdOrKey,
        'propertyKey': propertyKey,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect.`,
        403: `Returned if the user does not have permission to administer the project.`,
        404: `Returned if the project or property is not found.`,
      },
    });
  }
  /**
   * Get project property
   * Returns the value of a [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the property.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param propertyKey The project property key. Use [Get project property keys](#api-rest-api-2-project-projectIdOrKey-properties-get) to get a list of all project property keys.
   * @returns EntityProperty Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectProperty(
    projectIdOrKey: string,
    propertyKey: string,
  ): CancelablePromise<EntityProperty> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/properties/{propertyKey}',
      path: {
        'projectIdOrKey': projectIdOrKey,
        'propertyKey': propertyKey,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect.`,
        403: `Returned if the user does not have permission to view the project.`,
        404: `Returned if the project or property is not found.`,
      },
    });
  }
  /**
   * Set project property
   * Sets the value of the [project property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). You can use project properties to store custom data against the project.
   *
   * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the property is created.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param propertyKey The key of the project property. The maximum length is 255 characters.
   * @param requestBody The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
   * @returns any Returned if the project property is updated.
   * @throws ApiError
   */
  public static setProjectProperty(
    projectIdOrKey: string,
    propertyKey: string,
    requestBody: any,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/project/{projectIdOrKey}/properties/{propertyKey}',
      path: {
        'projectIdOrKey': projectIdOrKey,
        'propertyKey': propertyKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the project key or id is invalid.`,
        401: `Returned if the authentication credentials are incorrect.`,
        403: `Returned if the user does not have permission to administer the project.`,
        404: `Returned if the project is not found.`,
      },
    });
  }
}
