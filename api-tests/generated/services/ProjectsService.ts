/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CreateProjectDetails } from '../models/CreateProjectDetails';
import type { IssueTypeWithStatus } from '../models/IssueTypeWithStatus';
import type { NotificationScheme } from '../models/NotificationScheme';
import type { PageBeanProject } from '../models/PageBeanProject';
import type { Project } from '../models/Project';
import type { ProjectIdentifiers } from '../models/ProjectIdentifiers';
import type { ProjectIssueTypeHierarchy } from '../models/ProjectIssueTypeHierarchy';
import type { StringList } from '../models/StringList';
import type { UpdateProjectDetails } from '../models/UpdateProjectDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectsService {
  /**
   * @deprecated
   * Get all projects
   * Returns all projects visible to the user. Deprecated, use [ Get projects paginated](#api-rest-api-2-project-search-get) that supports search and pagination.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** Projects are returned only where the user has *Browse Projects* or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:
   *
   * *  `description` Returns the project description.
   * *  `issueTypes` Returns all issue types associated with the project.
   * *  `lead` Returns information about the project lead.
   * *  `projectKeys` Returns all project keys associated with the project.
   * @param recent Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session.
   * @param properties A list of project properties to return for the project. This parameter accepts a comma-separated list.
   * @returns Project Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllProjects(
    expand?: string,
    recent?: number,
    properties?: Array<string>,
  ): CancelablePromise<Array<Project>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project',
      query: {
        'expand': expand,
        'recent': recent,
        'properties': properties,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Create project
   * Creates a project based on a project type template, as shown in the following table:
   *
   * | Project Type Key | Project Template Key |
   * |--|--|
   * | `business` | `com.atlassian.jira-core-project-templates:jira-core-simplified-content-management`, `com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval`, `com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking`, `com.atlassian.jira-core-project-templates:jira-core-simplified-process-control`, `com.atlassian.jira-core-project-templates:jira-core-simplified-procurement`, `com.atlassian.jira-core-project-templates:jira-core-simplified-project-management`, `com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment`, `com.atlassian.jira-core-project-templates:jira-core-simplified-task-tracking` |
   * | `service_desk` | `com.atlassian.servicedesk:simplified-it-service-management`, `com.atlassian.servicedesk:simplified-general-service-desk-it`, `com.atlassian.servicedesk:simplified-general-service-desk-business`, `com.atlassian.servicedesk:simplified-external-service-desk`, `com.atlassian.servicedesk:simplified-hr-service-desk`, `com.atlassian.servicedesk:simplified-facilities-service-desk`, `com.atlassian.servicedesk:simplified-legal-service-desk`, `com.atlassian.servicedesk:simplified-analytics-service-desk`, `com.atlassian.servicedesk:simplified-marketing-service-desk`, `com.atlassian.servicedesk:simplified-design-service-desk`, `com.atlassian.servicedesk:simplified-sales-service-desk`, `com.atlassian.servicedesk:simplified-blank-project-business`, `com.atlassian.servicedesk:simplified-blank-project-it`, `com.atlassian.servicedesk:simplified-finance-service-desk`, `com.atlassian.servicedesk:next-gen-it-service-desk`, `com.atlassian.servicedesk:next-gen-hr-service-desk`, `com.atlassian.servicedesk:next-gen-legal-service-desk`, `com.atlassian.servicedesk:next-gen-marketing-service-desk`, `com.atlassian.servicedesk:next-gen-facilities-service-desk`, `com.atlassian.servicedesk:next-gen-general-it-service-desk`, `com.atlassian.servicedesk:next-gen-general-business-service-desk`, `com.atlassian.servicedesk:next-gen-analytics-service-desk`, `com.atlassian.servicedesk:next-gen-finance-service-desk`, `com.atlassian.servicedesk:next-gen-design-service-desk`, `com.atlassian.servicedesk:next-gen-sales-service-desk` |
   * | `software` | `com.pyxis.greenhopper.jira:gh-simplified-agility-kanban`, `com.pyxis.greenhopper.jira:gh-simplified-agility-scrum`, `com.pyxis.greenhopper.jira:gh-simplified-basic`, `com.pyxis.greenhopper.jira:gh-simplified-kanban-classic`, `com.pyxis.greenhopper.jira:gh-simplified-scrum-classic` |
   * The project types are available according to the installed Jira features as follows:
   *
   * *  Jira Core, the default, enables `business` projects.
   * *  Jira Service Management enables `service_desk` projects.
   * *  Jira Software enables `software` projects.
   *
   * To determine which features are installed, go to **Jira settings** > **Apps** > **Manage apps** and review the System Apps list. To add Jira Software or Jira Service Management into a JIRA instance, use **Jira settings** > **Apps** > **Finding new apps**. For more information, see [ Managing add-ons](https://confluence.atlassian.com/x/S31NLg).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody The JSON representation of the project being created.
   * @returns ProjectIdentifiers Returned if the project is created.
   * @throws ApiError
   */
  public static createProject(
    requestBody: CreateProjectDetails,
  ): CancelablePromise<ProjectIdentifiers> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/project',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid and the project could not be created.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to create projects.`,
      },
    });
  }
  /**
   * Get recent projects
   * Returns a list of up to 20 projects recently viewed by the user that are still visible to the user.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** Projects are returned only where the user has one of:
   *
   * *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:
   *
   * *  `description` Returns the project description.
   * *  `projectKeys` Returns all project keys associated with a project.
   * *  `lead` Returns information about the project lead.
   * *  `issueTypes` Returns all issue types associated with the project.
   * *  `url` Returns the URL associated with the project.
   * *  `permissions` Returns the permissions associated with the project.
   * *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.
   * *  `*` Returns the project with all available expand options.
   * @param properties EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list. Invalid property names are ignored.
   * @returns Project Returned if the request is successful.
   * @throws ApiError
   */
  public static getRecent(
    expand?: string,
    properties?: Array<StringList>,
  ): CancelablePromise<Array<Project>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/recent',
      query: {
        'expand': expand,
        'properties': properties,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get projects paginated
   * Returns a [paginated](#pagination) list of projects visible to the user.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** Projects are returned only where the user has one of:
   *
   * *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param orderBy [Order](#ordering) the results by a field.
   *
   * *  `category` Sorts by project category. A complete list of category IDs is found using [Get all project categories](#api-rest-api-2-projectCategory-get).
   * *  `issueCount` Sorts by the total number of issues in each project.
   * *  `key` Sorts by project key.
   * *  `lastIssueUpdatedTime` Sorts by the last issue update time.
   * *  `name` Sorts by project name.
   * *  `owner` Sorts by project lead.
   * *  `archivedDate` EXPERIMENTAL. Sorts by project archived date.
   * *  `deletedDate` EXPERIMENTAL. Sorts by project deleted date.
   * @param id The project IDs to filter the results by. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. Up to 50 project IDs can be provided.
   * @param keys The project keys to filter the results by. To include multiple keys, provide an ampersand-separated list. For example, `keys=PA&keys=PB`. Up to 50 project keys can be provided.
   * @param query Filter the results using a literal string. Projects with a matching `key` or `name` are returned (case insensitive).
   * @param typeKey Orders results by the [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes). This parameter accepts a comma-separated list. Valid values are `business`, `service_desk`, and `software`.
   * @param categoryId The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-2-projectCategory-get) operation.
   * @param action Filter results by projects for which the user can:
   *
   * *  `view` the project, meaning that they have one of the following permissions:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * *  `browse` the project, meaning that they have the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  `edit` the project, meaning that they have one of the following permissions:
   *
   * *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * *  `create` the project, meaning that they have the *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue is created.
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:
   *
   * *  `description` Returns the project description.
   * *  `projectKeys` Returns all project keys associated with a project.
   * *  `lead` Returns information about the project lead.
   * *  `issueTypes` Returns all issue types associated with the project.
   * *  `url` Returns the URL associated with the project.
   * *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.
   * @param status EXPERIMENTAL. Filter results by project status:
   *
   * *  `live` Search live projects.
   * *  `archived` Search archived projects.
   * *  `deleted` Search deleted projects, those in the recycle bin.
   * @param properties EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list.
   * @param propertyQuery EXPERIMENTAL. A query string used to search properties. The query string cannot be specified using a JSON object. For example, to search for the value of `nested` from `{"something":{"nested":1,"other":2}}` use `[thepropertykey].something.nested=1`. Note that the propertyQuery key is enclosed in square brackets to enable searching where the propertyQuery key includes dot (.) or equals (=) characters. Note that `thepropertykey` is only returned when included in `properties`.
   * @returns PageBeanProject Returned if the request is successful.
   * @throws ApiError
   */
  public static searchProjects(
    startAt?: number,
    maxResults: number = 50,
    orderBy: 'category' | '-category' | '+category' | 'key' | '-key' | '+key' | 'name' | '-name' | '+name' | 'owner' | '-owner' | '+owner' | 'issueCount' | '-issueCount' | '+issueCount' | 'lastIssueUpdatedDate' | '-lastIssueUpdatedDate' | '+lastIssueUpdatedDate' | 'archivedDate' | '+archivedDate' | '-archivedDate' | 'deletedDate' | '+deletedDate' | '-deletedDate' = 'key',
    id?: Array<number>,
    keys?: Array<string>,
    query?: string,
    typeKey?: string,
    categoryId?: number,
    action: 'view' | 'browse' | 'edit' | 'create' = 'view',
    expand?: string,
    status?: Array<'live' | 'archived' | 'deleted'>,
    properties?: Array<StringList>,
    propertyQuery?: string,
  ): CancelablePromise<PageBeanProject> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/search',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'orderBy': orderBy,
        'id': id,
        'keys': keys,
        'query': query,
        'typeKey': typeKey,
        'categoryId': categoryId,
        'action': action,
        'expand': expand,
        'status': status,
        'properties': properties,
        'propertyQuery': propertyQuery,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if no projects matching the search criteria are found.`,
      },
    });
  }
  /**
   * Delete project
   * Deletes a project.
   *
   * You can't delete a project if it's archived. To delete an archived project, restore the project and then delete it. To restore a project, use the Jira UI.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param enableUndo Whether this project is placed in the Jira recycle bin where it will be available for restoration.
   * @returns void
   * @throws ApiError
   */
  public static deleteProject(
    projectIdOrKey: string,
    enableUndo: boolean = true,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/project/{projectIdOrKey}',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      query: {
        'enableUndo': enableUndo,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project is not found or the user does not have permission to delete it.`,
      },
    });
  }
  /**
   * Get project
   * Returns the [project details](https://confluence.atlassian.com/x/ahLpNw) for a project.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:
   *
   * *  `description` The project description.
   * *  `issueTypes` The issue types associated with the project.
   * *  `lead` The project lead.
   * *  `projectKeys` All project keys associated with the project.
   * *  `issueTypeHierarchy` The project issue type hierarchy.
   * @param properties A list of project properties to return for the project. This parameter accepts a comma-separated list.
   * @returns Project Returned if successful.
   * @throws ApiError
   */
  public static getProject(
    projectIdOrKey: string,
    expand?: string,
    properties?: Array<string>,
  ): CancelablePromise<Project> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      query: {
        'expand': expand,
        'properties': properties,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Update project
   * Updates the [project details](https://confluence.atlassian.com/x/ahLpNw) of a project.
   *
   * All parameters are optional in the body of the request. Schemes will only be updated if they are included in the request, any omitted schemes will be left unchanged.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). is only needed when changing the schemes or project key. Otherwise you will only need *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg)
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param requestBody The project details to be updated.
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:
   *
   * *  `description` The project description.
   * *  `issueTypes` The issue types associated with the project.
   * *  `lead` The project lead.
   * *  `projectKeys` All project keys associated with the project.
   * @returns Project Returned if the project is updated.
   * @throws ApiError
   */
  public static updateProject(
    projectIdOrKey: string,
    requestBody: UpdateProjectDetails,
    expand?: string,
  ): CancelablePromise<Project> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/project/{projectIdOrKey}',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      query: {
        'expand': expand,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if:
         *  the user does not have the necessary permission to update project details.
         *  the permission scheme is being changed and the Jira instance is Jira Core Free or Jira Software Free. Permission schemes cannot be changed on free plans.`,
        404: `Returned if the project is not found.`,
      },
    });
  }
  /**
   * Archive project
   * Archives a project. You can't delete a project if it's archived. To delete an archived project, restore the project and then delete it. To restore a project, use the Jira UI.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @returns void
   * @throws ApiError
   */
  public static archiveProject(
    projectIdOrKey: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/project/{projectIdOrKey}/archive',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permissions.`,
        404: `Returned if the project is not found.`,
      },
    });
  }
  /**
   * Delete project asynchronously
   * Deletes a project asynchronously.
   *
   * This operation is:
   *
   * *  transactional, that is, if part of the delete fails the project is not deleted.
   * *  [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @returns void
   * @throws ApiError
   */
  public static deleteProjectAsynchronously(
    projectIdOrKey: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/project/{projectIdOrKey}/delete',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      errors: {
        303: `Returned if the request is successful.`,
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project is not found or the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Restore deleted or archived project
   * Restores a project that has been archived or placed in the Jira recycle bin.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)for Company managed projects.
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project for Team managed projects.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @returns Project Returned if the request is successful.
   * @throws ApiError
   */
  public static restore(
    projectIdOrKey: string,
  ): CancelablePromise<Project> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/project/{projectIdOrKey}/restore',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project is not found or the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Get all statuses for project
   * Returns the valid statuses for a project. The statuses are grouped by issue type, as each project has a set of valid issue types and each issue type has a set of valid statuses.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @returns IssueTypeWithStatus Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllStatuses(
    projectIdOrKey: string,
  ): CancelablePromise<Array<IssueTypeWithStatus>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/statuses',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Get project issue type hierarchy
   * Get the issue type hierarchy for a next-gen project.
   *
   * The issue type hierarchy for a project consists of:
   *
   * *  *Epic* at level 1 (optional).
   * *  One or more issue types at level 0 such as *Story*, *Task*, or *Bug*. Where the issue type *Epic* is defined, these issue types are used to break down the content of an epic.
   * *  *Subtask* at level -1 (optional). This issue type enables level 0 issue types to be broken down into components. Issues based on a level -1 issue type must have a parent issue.
   *
   * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param projectId The ID of the project.
   * @returns ProjectIssueTypeHierarchy Returned if the request is successful.
   * @throws ApiError
   */
  public static getHierarchy(
    projectId: number,
  ): CancelablePromise<ProjectIssueTypeHierarchy> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectId}/hierarchy',
      path: {
        'projectId': projectId,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project is not found or the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Get project notification scheme
   * Gets a [notification scheme](https://confluence.atlassian.com/x/8YdKLg) associated with the project.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
   * @param projectKeyOrId The project ID or project key (case sensitive).
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `all` Returns all expandable information
   * *  `field` Returns information about any custom fields assigned to receive an event
   * *  `group` Returns information about any groups assigned to receive an event
   * *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information
   * *  `projectRole` Returns information about any project roles assigned to receive an event
   * *  `user` Returns information about any users assigned to receive an event
   * @returns NotificationScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getNotificationSchemeForProject(
    projectKeyOrId: string,
    expand?: string,
  ): CancelablePromise<NotificationScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectKeyOrId}/notificationscheme',
      path: {
        'projectKeyOrId': projectKeyOrId,
      },
      query: {
        'expand': expand,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project is not found or the user is not an administrator.`,
      },
    });
  }
}
