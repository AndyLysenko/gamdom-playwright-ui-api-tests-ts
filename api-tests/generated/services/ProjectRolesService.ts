/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CreateUpdateRoleRequestBean } from '../models/CreateUpdateRoleRequestBean';
import type { ProjectRole } from '../models/ProjectRole';
import type { ProjectRoleDetails } from '../models/ProjectRoleDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectRolesService {
  /**
   * Get project roles for project
   * Returns a list of [project roles](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-roles/) for the project returning the name and self URL for each role.
   *
   * Note that all project roles are shared with all projects in Jira Cloud. See [Get all project roles](#api-rest-api-2-role-get) for more information.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for any project on the site or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @returns string Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectRoles(
    projectIdOrKey: string,
  ): CancelablePromise<Record<string, string>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/role',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing or if the user lacks administrative permissions for the project.`,
        404: `Returned if the project is not found or or if the user does not have administrative permissions for the project.`,
      },
    });
  }
  /**
   * Get project role for project
   * Returns a project role's details and actors associated with the project. The list of actors is sorted by display name.
   *
   * To check whether a user belongs to a role based on their group memberships, use [Get user](#api-rest-api-2-user-get) with the `groups` expand parameter selected. Then check whether the user keys and groups match with the actors returned for the project.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project or *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param id The ID of the project role. Use [Get all project roles](#api-rest-api-2-role-get) to get a list of project role IDs.
   * @param excludeInactiveUsers Exclude inactive users.
   * @returns ProjectRole Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectRole(
    projectIdOrKey: string,
    id: number,
    excludeInactiveUsers: boolean = false,
  ): CancelablePromise<ProjectRole> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/role/{id}',
      path: {
        'projectIdOrKey': projectIdOrKey,
        'id': id,
      },
      query: {
        'excludeInactiveUsers': excludeInactiveUsers,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  the project or project role is not found.
         *  the user does not have administrative permission.`,
      },
    });
  }
  /**
   * Get project role details
   * Returns all [project roles](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-roles/) and the details for each role. Note that the list of project roles is common to all projects.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param currentMember Whether the roles should be filtered to include only those the user is assigned to.
   * @param excludeConnectAddons
   * @returns ProjectRoleDetails Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectRoleDetails(
    projectIdOrKey: string,
    currentMember: boolean = false,
    excludeConnectAddons: boolean = false,
  ): CancelablePromise<Array<ProjectRoleDetails>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/roledetails',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      query: {
        'currentMember': currentMember,
        'excludeConnectAddons': excludeConnectAddons,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project is not found or if the user does not have the necessary permissions for the project.`,
      },
    });
  }
  /**
   * Get all project roles
   * Gets a list of all project roles, complete with project role details and default actors.
   *
   * ### About project roles ###
   *
   * [Project roles](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-roles/) are a flexible way to to associate users and groups with projects. In Jira Cloud, the list of project roles is shared globally with all projects, but each project can have a different set of actors associated with it (unlike groups, which have the same membership throughout all Jira applications).
   *
   * Project roles are used in [permission schemes](#api-rest-api-2-permissionscheme-get), [email notification schemes](#api-rest-api-2-notificationscheme-get), [issue security levels](#api-rest-api-2-issuesecurityschemes-get), [comment visibility](#api-rest-api-2-comment-list-post), and workflow conditions.
   *
   * #### Members and actors ####
   *
   * In the Jira REST API, a member of a project role is called an *actor*. An *actor* is a group or user associated with a project role.
   *
   * Actors may be set as [default members](https://support.atlassian.com/jira-cloud-administration/docs/manage-project-roles/#Specifying-'default-members'-for-a-project-role) of the project role or set at the project level:
   *
   * *  Default actors: Users and groups that are assigned to the project role for all newly created projects. The default actors can be removed at the project level later if desired.
   * *  Actors: Users and groups that are associated with a project role for a project, which may differ from the default actors. This enables you to assign a user to different roles in different projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns ProjectRole Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllProjectRoles(): CancelablePromise<Array<ProjectRole>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/role',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have administrative permissions.`,
      },
    });
  }
  /**
   * Create project role
   * Creates a new project role with no [default actors](#api-rest-api-2-resolution-get). You can use the [Add default actors to project role](#api-rest-api-2-role-id-actors-post) operation to add default actors to the project role after creating it.
   *
   * *Note that although a new project role is available to all projects upon creation, any default actors that are associated with the project role are not added to projects that existed prior to the role being created.*<
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns ProjectRole Returned if the request is successful.
   * @throws ApiError
   */
  public static createProjectRole(
    requestBody: CreateUpdateRoleRequestBean,
  ): CancelablePromise<ProjectRole> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/role',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid. The \`name\` cannot be empty or start or end with whitespace.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have administrative permissions.`,
        409: `Returned if a project role with the provided name already exists.`,
      },
    });
  }
  /**
   * Delete project role
   * Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the project role to delete. Use [Get all project roles](#api-rest-api-2-role-get) to get a list of project role IDs.
   * @param swap The ID of the project role that will replace the one being deleted.
   * @returns void
   * @throws ApiError
   */
  public static deleteProjectRole(
    id: number,
    swap?: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/role/{id}',
      path: {
        'id': id,
      },
      query: {
        'swap': swap,
      },
      errors: {
        400: `Returned if the request is invalid or if the replacement project role is not found.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have administrative permissions.`,
        404: `Returned if the project role being deleted is not found.`,
        409: `Returned if the project role being deleted is in use and a replacement project role is not specified in the request.`,
      },
    });
  }
  /**
   * Get project role by ID
   * Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the project role. Use [Get all project roles](#api-rest-api-2-role-get) to get a list of project role IDs.
   * @returns ProjectRole Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectRoleById(
    id: number,
  ): CancelablePromise<ProjectRole> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/role/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have administrative permissions.`,
        404: `Returned if the project role is not found.`,
      },
    });
  }
  /**
   * Partial update project role
   * Updates either the project role's name or its description.
   *
   * You cannot update both the name and description at the same time using this operation. If you send a request with a name and a description only the name is updated.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the project role. Use [Get all project roles](#api-rest-api-2-role-get) to get a list of project role IDs.
   * @param requestBody
   * @returns ProjectRole Returned if the request is successful.
   * @throws ApiError
   */
  public static partialUpdateProjectRole(
    id: number,
    requestBody: CreateUpdateRoleRequestBean,
  ): CancelablePromise<ProjectRole> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/role/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have administrative permissions.`,
        404: `Returned if the project role is not found.`,
      },
    });
  }
  /**
   * Fully update project role
   * Updates the project role's name and description. You must include both a name and a description in the request.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the project role. Use [Get all project roles](#api-rest-api-2-role-get) to get a list of project role IDs.
   * @param requestBody
   * @returns ProjectRole Returned if the request is successful.
   * @throws ApiError
   */
  public static fullyUpdateProjectRole(
    id: number,
    requestBody: CreateUpdateRoleRequestBean,
  ): CancelablePromise<ProjectRole> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/role/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid. The \`name\` cannot be empty or start or end with whitespace.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have administrative permissions.`,
        404: `Returned if the project role is not found.`,
      },
    });
  }
}
