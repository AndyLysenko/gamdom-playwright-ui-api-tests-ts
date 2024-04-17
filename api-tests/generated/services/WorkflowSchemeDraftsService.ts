/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { DefaultWorkflow } from '../models/DefaultWorkflow';
import type { IssueTypesWorkflowMapping } from '../models/IssueTypesWorkflowMapping';
import type { IssueTypeWorkflowMapping } from '../models/IssueTypeWorkflowMapping';
import type { PublishDraftWorkflowScheme } from '../models/PublishDraftWorkflowScheme';
import type { WorkflowScheme } from '../models/WorkflowScheme';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkflowSchemeDraftsService {
  /**
   * Create draft workflow scheme
   * Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the active workflow scheme that the draft is created from.
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static createWorkflowSchemeDraftFromParent(
    id: number,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/workflowscheme/{id}/createdraft',
      path: {
        'id': id,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Delete draft workflow scheme
   * Deletes a draft workflow scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the active workflow scheme that the draft was created from.
   * @returns void
   * @throws ApiError
   */
  public static deleteWorkflowSchemeDraft(
    id: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/workflowscheme/{id}/draft',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission..`,
        404: `Returned if:
         *  the original active workflow scheme is not found.
         *  the original active workflow scheme does not have a draft.`,
      },
    });
  }
  /**
   * Get draft workflow scheme
   * Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See [Configuring workflow schemes](https://confluence.atlassian.com/x/tohKLg) for more information.
   * Note that:
   *
   * *  Only active workflow schemes can have draft workflow schemes.
   * *  An active workflow scheme can only have one draft workflow scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the active workflow scheme that the draft was created from.
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getWorkflowSchemeDraft(
    id: number,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflowscheme/{id}/draft',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if:
         *  the original active workflow scheme is not found.
         *  the original active workflow scheme does not have a draft.`,
      },
    });
  }
  /**
   * Update draft workflow scheme
   * Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the active workflow scheme that the draft was created from.
   * @param requestBody
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static updateWorkflowSchemeDraft(
    id: number,
    requestBody: WorkflowScheme,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflowscheme/{id}/draft',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if:
         *  the original active workflow scheme is not found.
         *  the original active workflow scheme does not have a draft.`,
      },
    });
  }
  /**
   * Delete draft default workflow
   * Resets the default workflow for a workflow scheme's draft. That is, the default workflow is set to Jira's system workflow (the *jira* workflow).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme that the draft belongs to.
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static deleteDraftDefaultWorkflow(
    id: number,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/workflowscheme/{id}/draft/default',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if any of the following is true:
         *  The workflow scheme is not found.
         *  The workflow scheme does not have a draft.`,
      },
    });
  }
  /**
   * Get draft default workflow
   * Returns the default workflow for a workflow scheme's draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has *All Unassigned Issue Types* listed in its issue types for the workflow scheme in Jira.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme that the draft belongs to.
   * @returns DefaultWorkflow Returned if the request is successful.
   * @throws ApiError
   */
  public static getDraftDefaultWorkflow(
    id: number,
  ): CancelablePromise<DefaultWorkflow> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflowscheme/{id}/draft/default',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission..`,
        404: `Returned if any of the following is true:
         *  The workflow scheme is not found.
         *  The workflow scheme does not have a draft.`,
      },
    });
  }
  /**
   * Update draft default workflow
   * Sets the default workflow for a workflow scheme's draft.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme that the draft belongs to.
   * @param requestBody The object for the new default workflow.
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static updateDraftDefaultWorkflow(
    id: number,
    requestBody: DefaultWorkflow,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflowscheme/{id}/draft/default',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if any of the following is true:
         *  The workflow scheme is not found.
         *  The workflow scheme does not have a draft.`,
      },
    });
  }
  /**
   * Delete workflow for issue type in draft workflow scheme
   * Deletes the issue type-workflow mapping for an issue type in a workflow scheme's draft.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme that the draft belongs to.
   * @param issueType The ID of the issue type.
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static deleteWorkflowSchemeDraftIssueType(
    id: number,
    issueType: string,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/workflowscheme/{id}/draft/issuetype/{issueType}',
      path: {
        'id': id,
        'issueType': issueType,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme or issue type is not found.`,
      },
    });
  }
  /**
   * Get workflow for issue type in draft workflow scheme
   * Returns the issue type-workflow mapping for an issue type in a workflow scheme's draft.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme that the draft belongs to.
   * @param issueType The ID of the issue type.
   * @returns IssueTypeWorkflowMapping Returned if the request is successful.
   * @throws ApiError
   */
  public static getWorkflowSchemeDraftIssueType(
    id: number,
    issueType: string,
  ): CancelablePromise<IssueTypeWorkflowMapping> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflowscheme/{id}/draft/issuetype/{issueType}',
      path: {
        'id': id,
        'issueType': issueType,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme or issue type is not found.`,
      },
    });
  }
  /**
   * Set workflow for issue type in draft workflow scheme
   * Sets the workflow for an issue type in a workflow scheme's draft.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme that the draft belongs to.
   * @param issueType The ID of the issue type.
   * @param requestBody The issue type-project mapping.
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static setWorkflowSchemeDraftIssueType(
    id: number,
    issueType: string,
    requestBody: IssueTypeWorkflowMapping,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflowscheme/{id}/draft/issuetype/{issueType}',
      path: {
        'id': id,
        'issueType': issueType,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow scheme or issue type is not found.`,
      },
    });
  }
  /**
   * Publish draft workflow scheme
   * Publishes a draft workflow scheme.
   *
   * Where the draft workflow includes new workflow statuses for an issue type, mappings are provided to update issues with the original workflow status to the new workflow status.
   *
   * This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain updates.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme that the draft belongs to.
   * @param requestBody Details of the status mappings.
   * @param validateOnly Whether the request only performs a validation.
   * @returns void
   * @throws ApiError
   */
  public static publishDraftWorkflowScheme(
    id: number,
    requestBody: PublishDraftWorkflowScheme,
    validateOnly: boolean = false,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/workflowscheme/{id}/draft/publish',
      path: {
        'id': id,
      },
      query: {
        'validateOnly': validateOnly,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        303: `Returned if the request is successful.`,
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if any of these are true:
         *  The workflow scheme is not found.
         *  The workflow scheme does not have a draft.
         *  A new status in the draft workflow scheme is not found.`,
      },
    });
  }
  /**
   * Delete issue types for workflow in draft workflow scheme
   * Deletes the workflow-issue type mapping for a workflow in a workflow scheme's draft.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme that the draft belongs to.
   * @param workflowName The name of the workflow.
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static deleteDraftWorkflowMapping(
    id: number,
    workflowName: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/workflowscheme/{id}/draft/workflow',
      path: {
        'id': id,
      },
      query: {
        'workflowName': workflowName,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if any of the following is true:
         *  The workflow scheme is not found.
         *  The workflow scheme does not have a draft.
         *  The workflow is not found.
         *  The workflow is not specified.`,
      },
    });
  }
  /**
   * Get issue types for workflows in draft workflow scheme
   * Returns the workflow-issue type mappings for a workflow scheme's draft.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme that the draft belongs to.
   * @param workflowName The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
   * @returns IssueTypesWorkflowMapping Returned if the request is successful.
   * @throws ApiError
   */
  public static getDraftWorkflow(
    id: number,
    workflowName?: string,
  ): CancelablePromise<IssueTypesWorkflowMapping> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflowscheme/{id}/draft/workflow',
      path: {
        'id': id,
      },
      query: {
        'workflowName': workflowName,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if either the workflow scheme or workflow (if specified) is not found. session.`,
      },
    });
  }
  /**
   * Set issue types for workflow in workflow scheme
   * Sets the issue types for a workflow in a workflow scheme's draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the workflow scheme that the draft belongs to.
   * @param workflowName The name of the workflow.
   * @param requestBody
   * @returns WorkflowScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static updateDraftWorkflowMapping(
    id: number,
    workflowName: string,
    requestBody: IssueTypesWorkflowMapping,
  ): CancelablePromise<WorkflowScheme> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflowscheme/{id}/draft/workflow',
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
         *  The workflow scheme does not have a draft.
         *  The workflow is not found.
         *  The workflow is not specified.`,
      },
    });
  }
}
