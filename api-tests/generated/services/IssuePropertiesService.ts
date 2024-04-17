/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { BulkIssuePropertyUpdateRequest } from '../models/BulkIssuePropertyUpdateRequest';
import type { EntityProperty } from '../models/EntityProperty';
import type { IssueEntityProperties } from '../models/IssueEntityProperties';
import type { IssueFilterForBulkPropertyDelete } from '../models/IssueFilterForBulkPropertyDelete';
import type { MultiIssueEntityProperties } from '../models/MultiIssueEntityProperties';
import type { PropertyKeys } from '../models/PropertyKeys';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssuePropertiesService {
  /**
   * Bulk set issues properties by list
   * Sets or updates a list of entity property values on issues. A list of up to 10 entity properties can be specified along with up to 10,000 issues on which to set or update that list of entity properties.
   *
   * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON. The maximum length of single issue property value is 32768 characters. This operation can be accessed anonymously.
   *
   * This operation is:
   *
   * *  transactional, either all properties are updated in all eligible issues or, when errors occur, no properties are updated.
   * *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param requestBody Issue properties to be set or updated with values.
   * @returns void
   * @throws ApiError
   */
  public static bulkSetIssuesPropertiesList(
    requestBody: IssueEntityProperties,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/properties',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        303: `Returned if the operation is successful.`,
        400: `Return if the request is invalid or the user does not have the necessary permission.`,
        401: `Returned if the authentication credentials are incorrect.`,
      },
    });
  }
  /**
   * Bulk set issue properties by issue
   * Sets or updates entity property values on issues. Up to 10 entity properties can be specified for each issue and up to 100 issues included in the request.
   *
   * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON.
   *
   * This operation is:
   *
   * *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates.
   * *  non-transactional. Updating some entities may fail. Such information will available in the task result.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param requestBody Details of the issue properties to be set or updated. Note that if an issue is not found, it is ignored.
   * @returns void
   * @throws ApiError
   */
  public static bulkSetIssuePropertiesByIssue(
    requestBody: MultiIssueEntityProperties,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/properties/multi',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        303: `Returned if the operation is successful.`,
        400: `Return if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect.`,
        403: `Return if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Bulk delete issue property
   * Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.
   *
   * The criteria the filter used to identify eligible issues are:
   *
   * *  `entityIds` Only issues from this list are eligible.
   * *  `currentValue` Only issues with the property set to this value are eligible.
   *
   * If both criteria is specified, they are joined with the logical *AND*: only issues that satisfy both criteria are considered eligible.
   *
   * If no filter criteria are specified, all the issues visible to the user and where the user has the EDIT\_ISSUES permission for the issue are considered eligible.
   *
   * This operation is:
   *
   * *  transactional, either the property is deleted from all eligible issues or, when errors occur, no properties are deleted.
   * *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [ project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.
   * @param propertyKey The key of the property.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static bulkDeleteIssueProperty(
    propertyKey: string,
    requestBody: IssueFilterForBulkPropertyDelete,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issue/properties/{propertyKey}',
      path: {
        'propertyKey': propertyKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        303: `Returned if the request is successful.`,
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Bulk set issue property
   * Sets a property value on multiple issues.
   *
   * The value set can be a constant or determined by a [Jira expression](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/). Expressions must be computable with constant complexity when applied to a set of issues. Expressions must also comply with the [restrictions](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions) that apply to all Jira expressions.
   *
   * The issues to be updated can be specified by a filter.
   *
   * The filter identifies issues eligible for update using these criteria:
   *
   * *  `entityIds` Only issues from this list are eligible.
   * *  `currentValue` Only issues with the property set to this value are eligible.
   * *  `hasProperty`:
   *
   * *  If *true*, only issues with the property are eligible.
   * *  If *false*, only issues without the property are eligible.
   *
   * If more than one criteria is specified, they are joined with the logical *AND*: only issues that satisfy all criteria are eligible.
   *
   * If an invalid combination of criteria is provided, an error is returned. For example, specifying a `currentValue` and `hasProperty` as *false* would not match any issues (because without the property the property cannot have a value).
   *
   * The filter is optional. Without the filter all the issues visible to the user and where the user has the EDIT\_ISSUES permission for the issue are considered eligible.
   *
   * This operation is:
   *
   * *  transactional, either all eligible issues are updated or, when errors occur, none are updated.
   * *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for each project containing issues.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for each issue.
   * @param propertyKey The key of the property. The maximum length is 255 characters.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static bulkSetIssueProperty(
    propertyKey: string,
    requestBody: BulkIssuePropertyUpdateRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issue/properties/{propertyKey}',
      path: {
        'propertyKey': propertyKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        303: `Returned if the request is successful.`,
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get issue property keys
   * Returns the URLs and keys of an issue's properties.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** Property details are only returned where the user has:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The key or ID of the issue.
   * @returns PropertyKeys Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssuePropertyKeys(
    issueIdOrKey: string,
  ): CancelablePromise<PropertyKeys> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/properties',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      errors: {
        404: `Returned if the issue is not found or the user does not have permissions to view the issue.`,
      },
    });
  }
  /**
   * Delete issue property
   * Deletes an issue's property.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The key or ID of the issue.
   * @param propertyKey The key of the property.
   * @returns void
   * @throws ApiError
   */
  public static deleteIssueProperty(
    issueIdOrKey: string,
    propertyKey: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issue/{issueIdOrKey}/properties/{propertyKey}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'propertyKey': propertyKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the issue or property is not found, or the user does not have permission to edit the issue.`,
      },
    });
  }
  /**
   * Get issue property
   * Returns the key and value of an issue's property.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The key or ID of the issue.
   * @param propertyKey The key of the property.
   * @returns EntityProperty Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssueProperty(
    issueIdOrKey: string,
    propertyKey: string,
  ): CancelablePromise<EntityProperty> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/properties/{propertyKey}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'propertyKey': propertyKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the issue or property is not found or the user does not have permission to see the issue.`,
      },
    });
  }
  /**
   * Set issue property
   * Sets the value of an issue's property. Use this resource to store custom data against an issue.
   *
   * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Edit issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param propertyKey The key of the issue property. The maximum length is 255 characters.
   * @param requestBody The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
   * @returns any Returned if the issue property is updated.
   * @throws ApiError
   */
  public static setIssueProperty(
    issueIdOrKey: string,
    propertyKey: string,
    requestBody: any,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issue/{issueIdOrKey}/properties/{propertyKey}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'propertyKey': propertyKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to edit the issue.`,
        404: `Returned if the issue is not found or the user does not have permission to view the issue.`,
      },
    });
  }
}
