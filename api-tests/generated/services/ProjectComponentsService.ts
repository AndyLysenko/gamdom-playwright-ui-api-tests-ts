/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ComponentIssuesCount } from '../models/ComponentIssuesCount';
import type { PageBean2ComponentJsonBean } from '../models/PageBean2ComponentJsonBean';
import type { PageBeanComponentWithIssueCount } from '../models/PageBeanComponentWithIssueCount';
import type { ProjectComponent } from '../models/ProjectComponent';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectComponentsService {
  /**
   * Find components for projects
   * Returns a [paginated](#pagination) list of all components in a project, including global (Compass) components when applicable.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param projectIdsOrKeys The project IDs and/or project keys (case sensitive).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `description` Sorts by the component description.
   * *  `name` Sorts by component name.
   * @param query Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive).
   * @returns PageBean2ComponentJsonBean Returned if the request is successful.
   * @throws ApiError
   */
  public static findComponentsForProjects(
    projectIdsOrKeys?: Array<string>,
    startAt?: number,
    maxResults: number = 50,
    orderBy?: 'description' | '-description' | '+description' | 'name' | '-name' | '+name',
    query?: string,
  ): CancelablePromise<PageBean2ComponentJsonBean> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/component',
      query: {
        'projectIdsOrKeys': projectIdsOrKeys,
        'startAt': startAt,
        'maxResults': maxResults,
        'orderBy': orderBy,
        'query': query,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Create component
   * Creates a component. Use components to provide containers for issues within a project. Use components to provide containers for issues within a project.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the component is created or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns ProjectComponent Returned if the request is successful.
   * @throws ApiError
   */
  public static createComponent(
    requestBody: ProjectComponent,
  ): CancelablePromise<ProjectComponent> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/component',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  the user is not found.
         *  \`name\` is not provided.
         *  \`name\` is over 255 characters in length.
         *  \`projectId\` is not provided.
         *  \`assigneeType\` is an invalid value.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira.`,
        404: `Returned if the project is not found or the user does not have permission to browse the project containing the component.`,
      },
    });
  }
  /**
   * Delete component
   * Deletes a component.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the component.
   * @param moveIssuesTo The ID of the component to replace the deleted component. If this value is null no replacement is made.
   * @returns void
   * @throws ApiError
   */
  public static deleteComponent(
    id: string,
    moveIssuesTo?: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/component/{id}',
      path: {
        'id': id,
      },
      query: {
        'moveIssuesTo': moveIssuesTo,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira.`,
        404: `Returned if:
         *  the component is not found.
         *  the replacement component is not found.
         *  the user does not have permission to browse the project containing the component.`,
      },
    });
  }
  /**
   * Get component
   * Returns a component.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for project containing the component.
   * @param id The ID of the component.
   * @returns ProjectComponent Returned if the request is successful.
   * @throws ApiError
   */
  public static getComponent(
    id: string,
  ): CancelablePromise<ProjectComponent> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/component/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the component is not found or the user does not have permission to browse the project containing the component.`,
      },
    });
  }
  /**
   * Update component
   * Updates a component. Any fields included in the request are overwritten. If `leadAccountId` is an empty string ("") the component lead is removed.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the component or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the component.
   * @param requestBody
   * @returns ProjectComponent Returned if the request is successful.
   * @throws ApiError
   */
  public static updateComponent(
    id: string,
    requestBody: ProjectComponent,
  ): CancelablePromise<ProjectComponent> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/component/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  the user is not found.
         *  \`assigneeType\` is an invalid value.
         *  \`name\` is over 255 characters in length.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to manage the project containing the component or does not have permission to administer Jira.`,
        404: `Returned if the component is not found or the user does not have permission to browse the project containing the component.`,
      },
    });
  }
  /**
   * Get component issues count
   * Returns the counts of issues assigned to the component.
   *
   * This operation can be accessed anonymously.
   *
   * **Deprecation notice:** The required OAuth 2.0 scopes will be updated on June 15, 2024.
   *
   * *  **Classic**: `read:jira-work`
   * *  **Granular**: `read:field:jira`, `read:project.component:jira`
   *
   * **[Permissions](#permissions) required:** None.
   * @param id The ID of the component.
   * @returns ComponentIssuesCount Returned if the request is successful.
   * @throws ApiError
   */
  public static getComponentRelatedIssues(
    id: string,
  ): CancelablePromise<ComponentIssuesCount> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/component/{id}/relatedIssueCounts',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the component is not found.`,
      },
    });
  }
  /**
   * Get project components paginated
   * Returns a [paginated](#pagination) list of all components in a project. See the [Get project components](#api-rest-api-2-project-projectIdOrKey-components-get) resource if you want to get a full list of versions without pagination.
   *
   * If your project uses Compass components, this API will return a list of Compass components that are linked to issues in that project.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `description` Sorts by the component description.
   * *  `issueCount` Sorts by the count of issues associated with the component.
   * *  `lead` Sorts by the user key of the component's project lead.
   * *  `name` Sorts by component name.
   * @param componentSource The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`.
   * @param query Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive).
   * @returns PageBeanComponentWithIssueCount Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectComponentsPaginated(
    projectIdOrKey: string,
    startAt?: number,
    maxResults: number = 50,
    orderBy?: 'description' | '-description' | '+description' | 'issueCount' | '-issueCount' | '+issueCount' | 'lead' | '-lead' | '+lead' | 'name' | '-name' | '+name',
    componentSource: 'jira' | 'compass' | 'auto' = 'jira',
    query?: string,
  ): CancelablePromise<PageBeanComponentWithIssueCount> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/component',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'orderBy': orderBy,
        'componentSource': componentSource,
        'query': query,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Get project components
   * Returns all components in a project. See the [Get project components paginated](#api-rest-api-2-project-projectIdOrKey-component-get) resource if you want to get a full list of components with pagination.
   *
   * If your project uses Compass components, this API will return a paginated list of Compass components that are linked to issues in that project.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param componentSource The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`.
   * @returns ProjectComponent Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectComponents(
    projectIdOrKey: string,
    componentSource: 'jira' | 'compass' | 'auto' = 'jira',
  ): CancelablePromise<Array<ProjectComponent>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/components',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      query: {
        'componentSource': componentSource,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project is not found or the user does not have permission to view it.`,
      },
    });
  }
}
