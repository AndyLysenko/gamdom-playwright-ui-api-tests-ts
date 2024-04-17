/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { DefaultWorkflow } from '../models/DefaultWorkflow';
import type { IssueTypesWorkflowMapping } from '../models/IssueTypesWorkflowMapping';
import type { IssueTypeWorkflowMapping } from '../models/IssueTypeWorkflowMapping';
import type { PageBeanWorkflowScheme } from '../models/PageBeanWorkflowScheme';
import type { WorkflowScheme } from '../models/WorkflowScheme';
import type { WorkflowSchemeReadRequest } from '../models/WorkflowSchemeReadRequest';
import type { WorkflowSchemeReadResponse } from '../models/WorkflowSchemeReadResponse';
import type { WorkflowSchemeUpdateRequest } from '../models/WorkflowSchemeUpdateRequest';
import type { WorkflowSchemeUpdateRequiredMappingsRequest } from '../models/WorkflowSchemeUpdateRequiredMappingsRequest';
import type { WorkflowSchemeUpdateRequiredMappingsResponse } from '../models/WorkflowSchemeUpdateRequiredMappingsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkflowSchemesService {
  /**
   * Get all workflow schemes
   * Returns a [paginated](#pagination) list of all workflow schemes, not including draft workflow schemes.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanWorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllWorkflowSchemes(
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanWorkflowScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflowscheme',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Create workflow scheme
   * Creates a workflow scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static createWorkflowScheme(
    requestBody: WorkflowScheme,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/workflowscheme',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Bulk get workflow schemes
   * Returns a list of workflow schemes by providing workflow scheme IDs or project IDs.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* global permission to access all, including project-scoped, workflow schemes
   * *  *Administer projects* project permissions to access project-scoped workflow schemes
   * @param requestBody
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `workflows.usages` Returns the project and issue types that each workflow in the workflow scheme is associated with.
   * @returns WorkflowSchemeReadResponse Returned if the request is successful.
   * @throws ApiError
   */
  public static readWorkflowSchemes(
    requestBody: WorkflowSchemeReadRequest,
    expand?: string,
  ): CancelablePromise<Array<WorkflowSchemeReadResponse>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/workflowscheme/read',
      query: {
        'expand': expand,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation.`,
      },
    });
  }
  /**
   * Update workflow scheme
   * Updates company-managed and team-managed project workflow schemes. This API doesn't have a concept of draft, so any changes made to a workflow scheme are immediately available. When changing the available statuses for issue types, an [asynchronous task](#async) migrates the issues as defined in the provided mappings.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* project permission to update all, including global-scoped, workflow schemes.
   * *  *Administer projects* project permission to update project-scoped workflow schemes.
   * @param requestBody
   * @returns any Returned if the request is successful and there is no asynchronous task.
   * @throws ApiError
   */
  public static updateSchemes(
    requestBody: WorkflowSchemeUpdateRequest,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/workflowscheme/update',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        303: `Returned if the request is successful and there is an asynchronous task for the migrations.`,
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation.`,
      },
    });
  }
  /**
   * Get required status mappings for workflow scheme update
   * Gets the required status mappings for the desired changes to a workflow scheme. The results are provided per issue type and workflow. When updating a workflow scheme, status mappings can be provided per issue type, per workflow, or both.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* permission to update all, including global-scoped, workflow schemes.
   * *  *Administer projects* project permission to update project-scoped workflow schemes.
   * @param requestBody
   * @returns WorkflowSchemeUpdateRequiredMappingsResponse Returned if the request is successful.
   * @throws ApiError
   */
  public static updateWorkflowSchemeMappings(
    requestBody: WorkflowSchemeUpdateRequiredMappingsRequest,
  ): CancelablePromise<WorkflowSchemeUpdateRequiredMappingsResponse> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/workflowscheme/update/mappings',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation.`,
      },
    });
  }
  /**
   * Delete workflow scheme
   * Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
   * @returns void
   * @throws ApiError
   */
  public static deleteWorkflowScheme(
    id: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/workflowscheme/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Returned if the scheme is active.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme is not found.`,
      },
    });
  }
  /**
   * Get workflow scheme
   * Returns a workflow scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
   * @param returnDraftIfExists Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getWorkflowScheme(
    id: number,
    returnDraftIfExists: boolean = false,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflowscheme/{id}',
      path: {
        'id': id,
      },
      query: {
        'returnDraftIfExists': returnDraftIfExists,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme is not found.`,
      },
    });
  }
  /**
   * Classic update workflow scheme
   * Updates a company-manged project workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that `updateDraftIfNeeded` is set to `true`.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
   * @param requestBody
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static updateWorkflowScheme(
    id: number,
    requestBody: WorkflowScheme,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflowscheme/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme is not found.`,
      },
    });
  }
  /**
   * Delete default workflow
   * Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira's system workflow (the *jira* workflow).
   *
   * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` and a draft workflow scheme is created or updated with the default workflow reset. The draft workflow scheme can be published in Jira.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme.
   * @param updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static deleteDefaultWorkflow(
    id: number,
    updateDraftIfNeeded?: boolean,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/workflowscheme/{id}/default',
      path: {
        'id': id,
      },
      query: {
        'updateDraftIfNeeded': updateDraftIfNeeded,
      },
      errors: {
        400: `Returned if the workflow scheme cannot be edited and \`updateDraftIfNeeded\` is not \`true\`.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme is not found.`,
      },
    });
  }
  /**
   * Get default workflow
   * Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue Types* listed in its issue types for the workflow scheme in Jira.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme.
   * @param returnDraftIfExists Set to `true` to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.
   * @returns DefaultWorkflow Returned if the request is successful.
   * @throws ApiError
   */
  public static getDefaultWorkflow(
    id: number,
    returnDraftIfExists: boolean = false,
  ): CancelablePromise<DefaultWorkflow> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflowscheme/{id}/default',
      path: {
        'id': id,
      },
      query: {
        'returnDraftIfExists': returnDraftIfExists,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme is not found.`,
      },
    });
  }
  /**
   * Update default workflow
   * Sets the default workflow for a workflow scheme.
   *
   * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` in the request object and a draft workflow scheme is created or updated with the new default workflow. The draft workflow scheme can be published in Jira.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme.
   * @param requestBody The new default workflow.
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static updateDefaultWorkflow(
    id: number,
    requestBody: DefaultWorkflow,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflowscheme/{id}/default',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the workflow scheme cannot be edited and \`updateDraftIfNeeded\` is not \`true\`.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme is not found.`,
      },
    });
  }
  /**
   * Delete workflow for issue type in workflow scheme
   * Deletes the issue type-workflow mapping for an issue type in a workflow scheme.
   *
   * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` and a draft workflow scheme is created or updated with the issue type-workflow mapping deleted. The draft workflow scheme can be published in Jira.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme.
   * @param issueType The ID of the issue type.
   * @param updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`.
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static deleteWorkflowSchemeIssueType(
    id: number,
    issueType: string,
    updateDraftIfNeeded: boolean = false,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/workflowscheme/{id}/issuetype/{issueType}',
      path: {
        'id': id,
        'issueType': issueType,
      },
      query: {
        'updateDraftIfNeeded': updateDraftIfNeeded,
      },
      errors: {
        400: `Returned if the workflow cannot be edited and \`updateDraftIfNeeded\` is false.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme or issue type is not found.`,
      },
    });
  }
  /**
   * Get workflow for issue type in workflow scheme
   * Returns the issue type-workflow mapping for an issue type in a workflow scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme.
   * @param issueType The ID of the issue type.
   * @param returnDraftIfExists Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
   * @returns IssueTypeWorkflowMapping Returned if the request is successful.
   * @throws ApiError
   */
  public static getWorkflowSchemeIssueType(
    id: number,
    issueType: string,
    returnDraftIfExists: boolean = false,
  ): CancelablePromise<IssueTypeWorkflowMapping> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflowscheme/{id}/issuetype/{issueType}',
      path: {
        'id': id,
        'issueType': issueType,
      },
      query: {
        'returnDraftIfExists': returnDraftIfExists,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme or issue type is not found.`,
      },
    });
  }
  /**
   * Set workflow for issue type in workflow scheme
   * Sets the workflow for an issue type in a workflow scheme.
   *
   * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` in the request body and a draft workflow scheme is created or updated with the new issue type-workflow mapping. The draft workflow scheme can be published in Jira.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme.
   * @param issueType The ID of the issue type.
   * @param requestBody The issue type-project mapping.
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static setWorkflowSchemeIssueType(
    id: number,
    issueType: string,
    requestBody: IssueTypeWorkflowMapping,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflowscheme/{id}/issuetype/{issueType}',
      path: {
        'id': id,
        'issueType': issueType,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the workflow cannot be edited and \`updateDraftIfNeeded\` is false.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme or issue type is not found.`,
      },
    });
  }
  /**
   * Delete issue types for workflow in workflow scheme
   * Deletes the workflow-issue type mapping for a workflow in a workflow scheme.
   *
   * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` and a draft workflow scheme is created or updated with the workflow-issue type mapping deleted. The draft workflow scheme can be published in Jira.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme.
   * @param workflowName The name of the workflow.
   * @param updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static deleteWorkflowMapping(
    id: number,
    workflowName: string,
    updateDraftIfNeeded: boolean = false,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/workflowscheme/{id}/workflow',
      path: {
        'id': id,
      },
      query: {
        'workflowName': workflowName,
        'updateDraftIfNeeded': updateDraftIfNeeded,
      },
      errors: {
        400: `Returned if the workflow cannot be edited and \`updateDraftIfNeeded\` is not true.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if any of the following is true:
         *  The workflow scheme is not found.
         *  The workflow is not found.
         *  The workflow is not specified.`,
      },
    });
  }
  /**
   * Get issue types for workflows in workflow scheme
   * Returns the workflow-issue type mappings for a workflow scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme.
   * @param workflowName The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
   * @param returnDraftIfExists Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
   * @returns IssueTypesWorkflowMapping Returned if the request is successful.
   * @throws ApiError
   */
  public static getWorkflow(
    id: number,
    workflowName?: string,
    returnDraftIfExists: boolean = false,
  ): CancelablePromise<IssueTypesWorkflowMapping> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflowscheme/{id}/workflow',
      path: {
        'id': id,
      },
      query: {
        'workflowName': workflowName,
        'returnDraftIfExists': returnDraftIfExists,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if either the workflow scheme or workflow is not found.`,
      },
    });
  }
  /**
   * Set issue types for workflow in workflow scheme
   * Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow.
   *
   * Note that active workflow schemes cannot be edited. If the workflow scheme is active, set `updateDraftIfNeeded` to `true` in the request body and a draft workflow scheme is created or updated with the new workflow-issue types mappings. The draft workflow scheme can be published in Jira.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme.
   * @param workflowName The name of the workflow.
   * @param requestBody
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static updateWorkflowMapping(
    id: number,
    workflowName: string,
    requestBody: IssueTypesWorkflowMapping,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflowscheme/{id}/workflow',
      path: {
        'id': id,
      },
      query: {
        'workflowName': workflowName,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if any of the following is true:
         *  The workflow scheme is not found.
         *  The workflow is not found.
         *  The workflow is not specified.`,
      },
    });
  }
}
