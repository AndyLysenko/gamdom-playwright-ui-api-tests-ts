/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ContainerOfWorkflowSchemeAssociations } from '../models/ContainerOfWorkflowSchemeAssociations';
import type { WorkflowSchemeProjectAssociation } from '../models/WorkflowSchemeProjectAssociation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkflowSchemeProjectAssociationsService {
  /**
   * Get workflow scheme project associations
   * Returns a list of the workflow schemes associated with a list of projects. Each returned workflow scheme includes a list of the requested projects associated with it. Any team-managed or non-existent projects in the request are ignored and no errors are returned.
   *
   * If the project is associated with the `Default Workflow Scheme` no ID is returned. This is because the way the `Default Workflow Scheme` is stored means it has no ID.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectId The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, `projectId=10000&projectId=10001`.
   * @returns ContainerOfWorkflowSchemeAssociations Returned if the request is successful.
   * @throws ApiError
   */
  public static getWorkflowSchemeProjectAssociations(
    projectId: Array<number>,
  ): CancelablePromise<ContainerOfWorkflowSchemeAssociations> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflowscheme/project',
      query: {
        'projectId': projectId,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Assign workflow scheme to project
   * Assigns a workflow scheme to a project. This operation is performed only when there are no issues in the project.
   *
   * Workflow schemes can only be assigned to classic projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static assignSchemeToProject(
    requestBody: WorkflowSchemeProjectAssociation,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflowscheme/project',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the workflow scheme or the project are not found.`,
      },
    });
  }
}
