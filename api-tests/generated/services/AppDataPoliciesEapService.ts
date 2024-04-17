/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectDataPolicies } from '../models/ProjectDataPolicies';
import type { WorkspaceDataPolicy } from '../models/WorkspaceDataPolicy';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AppDataPoliciesEapService {
  /**
   * Get data policy for the workspace (EAP)
   * Returns data policy for the workspace.
   * @returns WorkspaceDataPolicy Returned if the request is successful
   * @throws ApiError
   */
  public static getPolicy(): CancelablePromise<WorkspaceDataPolicy> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/data-policy',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the client is not authorized to make the request.`,
      },
    });
  }
  /**
   * Get data policy for projects (EAP)
   * Returns data policies for the projects specified in the request.
   * @param ids A list of project identifiers. This parameter accepts a comma-separated list.
   * @returns ProjectDataPolicies Returned if the request is successful.
   * @throws ApiError
   */
  public static getPolicies(
    ids?: string,
  ): CancelablePromise<ProjectDataPolicies> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/data-policy/project',
      query: {
        'ids': ids,
      },
      errors: {
        400: `Returned if the request is not valid or includes invalid or not-permitted project identifiers.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the client is not authorized to make the request.`,
      },
    });
  }
}
