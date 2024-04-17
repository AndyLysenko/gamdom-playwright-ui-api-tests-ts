/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectRoleGroup } from './ProjectRoleGroup';
import type { ProjectRoleUser } from './ProjectRoleUser';
/**
 * Details about a user assigned to a project role.
 */
export type RoleActor = {
  readonly actorGroup?: ProjectRoleGroup;
  readonly actorUser?: ProjectRoleUser;
  /**
   * The avatar of the role actor.
   */
  readonly avatarUrl?: string;
  /**
   * The display name of the role actor. For users, depending on the user’s privacy setting, this may return an alternative value for the user's name.
   */
  readonly displayName?: string;
  /**
   * The ID of the role actor.
   */
  readonly id?: number;
  /**
   * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   */
  readonly name?: string;
  /**
   * The type of role actor.
   */
  readonly type?: 'atlassian-group-role-actor' | 'atlassian-user-role-actor';
};

