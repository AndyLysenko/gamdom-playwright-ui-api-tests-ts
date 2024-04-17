/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { UserBeanAvatarUrls } from './UserBeanAvatarUrls';
export type UserBean = {
  /**
   * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
   */
  accountId?: string;
  /**
   * Whether the user is active.
   */
  active?: boolean;
  /**
   * The avatars of the user.
   */
  avatarUrls?: UserBeanAvatarUrls;
  /**
   * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
   */
  displayName?: string;
  /**
   * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * The key of the user.
   */
  key?: string;
  /**
   * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * The username of the user.
   */
  name?: string;
  /**
   * The URL of the user.
   */
  self?: string;
};

