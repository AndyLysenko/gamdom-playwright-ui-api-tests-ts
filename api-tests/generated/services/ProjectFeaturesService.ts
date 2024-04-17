/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ContainerForProjectFeatures } from '../models/ContainerForProjectFeatures';
import type { ProjectFeatureState } from '../models/ProjectFeatureState';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectFeaturesService {
  /**
   * Get project features
   * Returns the list of features for a project.
   * @param projectIdOrKey The ID or (case-sensitive) key of the project.
   * @returns ContainerForProjectFeatures Returned if the request is successful.
   * @throws ApiError
   */
  public static getFeaturesForProject(
    projectIdOrKey: string,
  ): CancelablePromise<ContainerForProjectFeatures> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/features',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the project is not found.`,
      },
    });
  }
  /**
   * Set project feature state
   * Sets the state of a project feature.
   * @param projectIdOrKey The ID or (case-sensitive) key of the project.
   * @param featureKey The key of the feature.
   * @param requestBody Details of the feature state change.
   * @returns ContainerForProjectFeatures Returned if the request is successful.
   * @throws ApiError
   */
  public static toggleFeatureForProject(
    projectIdOrKey: string,
    featureKey: string,
    requestBody: ProjectFeatureState,
  ): CancelablePromise<ContainerForProjectFeatures> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/project/{projectIdOrKey}/features/{featureKey}',
      path: {
        'projectIdOrKey': projectIdOrKey,
        'featureKey': featureKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the project or project feature is not found.`,
      },
    });
  }
}
