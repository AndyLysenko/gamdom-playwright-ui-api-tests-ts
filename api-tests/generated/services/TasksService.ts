/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { TaskProgressBeanObject } from '../models/TaskProgressBeanObject';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TasksService {
  /**
   * Get task
   * Returns the status of a [long-running asynchronous task](#async).
   *
   * When a task has finished, this operation returns the JSON blob applicable to the task. See the documentation of the operation that created the task for details. Task details are not permanently retained. As of September 2019, details are retained for 14 days although this period may change without notice.
   *
   * **Deprecation notice:** The required OAuth 2.0 scopes will be updated on June 15, 2024.
   *
   * *  `read:jira-work`
   *
   * **[Permissions](#permissions) required:** either of:
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * *  Creator of the task.
   * @param taskId The ID of the task.
   * @returns TaskProgressBeanObject Returned if the request is successful.
   * @throws ApiError
   */
  public static getTask(
    taskId: string,
  ): CancelablePromise<TaskProgressBeanObject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/task/{taskId}',
      path: {
        'taskId': taskId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the task is not found.`,
      },
    });
  }
  /**
   * Cancel task
   * Cancels a task.
   *
   * **[Permissions](#permissions) required:** either of:
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * *  Creator of the task.
   * @param taskId The ID of the task.
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static cancelTask(
    taskId: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/task/{taskId}/cancel',
      path: {
        'taskId': taskId,
      },
      errors: {
        400: `Returned if cancellation of the task is not possible.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the task is not found.`,
      },
    });
  }
}
