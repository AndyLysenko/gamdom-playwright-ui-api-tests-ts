/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ConnectCustomFieldValues } from '../models/ConnectCustomFieldValues';
import type { EntityPropertyDetails } from '../models/EntityPropertyDetails';
import type { WorkflowRulesSearch } from '../models/WorkflowRulesSearch';
import type { WorkflowRulesSearchDetails } from '../models/WorkflowRulesSearchDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AppMigrationService {
  /**
   * Bulk update custom field value
   * Updates the value of a custom field added by Connect apps on one or more issues.
   * The values of up to 200 custom fields can be updated.
   *
   * **[Permissions](#permissions) required:** Only Connect apps can make this request
   * @param atlassianTransferId The ID of the transfer.
   * @param requestBody
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static appIssueFieldValueUpdateResourceUpdateIssueFieldsPut(
    atlassianTransferId: string,
    requestBody: ConnectCustomFieldValues,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/atlassian-connect/1/migration/field',
      headers: {
        'Atlassian-Transfer-Id': atlassianTransferId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if:
         * the transfer ID is not found.
         * the authorisation credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Bulk update entity properties
   * Updates the values of multiple entity properties for an object, up to 50 updates per request. This operation is for use by Connect apps during app migration.
   * @param atlassianTransferId The app migration transfer ID.
   * @param entityType The type indicating the object that contains the entity properties.
   * @param requestBody
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static migrationResourceUpdateEntityPropertiesValuePut(
    atlassianTransferId: string,
    entityType: 'IssueProperty' | 'CommentProperty' | 'DashboardItemProperty' | 'IssueTypeProperty' | 'ProjectProperty' | 'UserProperty' | 'WorklogProperty' | 'BoardProperty' | 'SprintProperty',
    requestBody: Array<EntityPropertyDetails>,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/atlassian-connect/1/migration/properties/{entityType}',
      path: {
        'entityType': entityType,
      },
      headers: {
        'Atlassian-Transfer-Id': atlassianTransferId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        403: `Returned if the authorisation credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get workflow transition rule configurations
   * Returns configurations for workflow transition rules migrated from server to cloud and owned by the calling Connect app.
   * @param atlassianTransferId The app migration transfer ID.
   * @param requestBody
   * @returns WorkflowRulesSearchDetails Returned if the request is successful.
   * @throws ApiError
   */
  public static migrationResourceWorkflowRuleSearchPost(
    atlassianTransferId: string,
    requestBody: WorkflowRulesSearch,
  ): CancelablePromise<WorkflowRulesSearchDetails> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/atlassian-connect/1/migration/workflow/rule/search',
      headers: {
        'Atlassian-Transfer-Id': atlassianTransferId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        403: `Returned if the authorisation credentials are incorrect or missing.`,
      },
    });
  }
}
