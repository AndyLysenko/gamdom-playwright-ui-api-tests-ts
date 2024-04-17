/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowTransitionProperty } from '../models/WorkflowTransitionProperty';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkflowTransitionPropertiesService {
  /**
   * Delete workflow transition property
   * Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
   * @param key The name of the transition property to delete, also known as the name of the property.
   * @param workflowName The name of the workflow that the transition belongs to.
   * @param workflowMode The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.
   * @returns any 200 response
   * @throws ApiError
   */
  public static deleteWorkflowTransitionProperty(
    transitionId: number,
    key: string,
    workflowName: string,
    workflowMode?: 'live' | 'draft',
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/workflow/transitions/{transitionId}/properties',
      path: {
        'transitionId': transitionId,
      },
      query: {
        'key': key,
        'workflowName': workflowName,
        'workflowMode': workflowMode,
      },
      errors: {
        304: `Returned if no changes were made by the request. For example, trying to delete a property that cannot be found.`,
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow transition is not found.`,
      },
    });
  }
  /**
   * Get workflow transition properties
   * Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
   * @param workflowName The name of the workflow that the transition belongs to.
   * @param includeReservedKeys Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*.
   * @param key The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.
   * @param workflowMode The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows.
   * @returns WorkflowTransitionProperty 200 response
   * @throws ApiError
   */
  public static getWorkflowTransitionProperties(
    transitionId: number,
    workflowName: string,
    includeReservedKeys: boolean = false,
    key?: string,
    workflowMode: 'live' | 'draft' = 'live',
  ): CancelablePromise<WorkflowTransitionProperty> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflow/transitions/{transitionId}/properties',
      path: {
        'transitionId': transitionId,
      },
      query: {
        'includeReservedKeys': includeReservedKeys,
        'key': key,
        'workflowName': workflowName,
        'workflowMode': workflowMode,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have admin permission`,
        404: `Returned if the workflow transition or property is not found.`,
      },
    });
  }
  /**
   * Create workflow transition property
   * Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
   * @param key The key of the property being added, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
   * @param workflowName The name of the workflow that the transition belongs to.
   * @param requestBody
   * @param workflowMode The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited.
   * @returns WorkflowTransitionProperty 200 response
   * @throws ApiError
   */
  public static createWorkflowTransitionProperty(
    transitionId: number,
    key: string,
    workflowName: string,
    requestBody: WorkflowTransitionProperty,
    workflowMode: 'live' | 'draft' = 'live',
  ): CancelablePromise<WorkflowTransitionProperty> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/workflow/transitions/{transitionId}/properties',
      path: {
        'transitionId': transitionId,
      },
      query: {
        'key': key,
        'workflowName': workflowName,
        'workflowMode': workflowMode,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if a workflow property with the same key is present on the transition.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow transition is not found.`,
      },
    });
  }
  /**
   * Update workflow transition property
   * Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
   * @param key The key of the property being updated, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
   * @param workflowName The name of the workflow that the transition belongs to.
   * @param requestBody
   * @param workflowMode The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.
   * @returns WorkflowTransitionProperty 200 response
   * @throws ApiError
   */
  public static updateWorkflowTransitionProperty(
    transitionId: number,
    key: string,
    workflowName: string,
    requestBody: WorkflowTransitionProperty,
    workflowMode?: 'live' | 'draft',
  ): CancelablePromise<WorkflowTransitionProperty> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflow/transitions/{transitionId}/properties',
      path: {
        'transitionId': transitionId,
      },
      query: {
        'key': key,
        'workflowName': workflowName,
        'workflowMode': workflowMode,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        304: `Returned if no changes were made by the request. For example, attempting to update a property with its current value.`,
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the workflow transition is not found.`,
      },
    });
  }
}
