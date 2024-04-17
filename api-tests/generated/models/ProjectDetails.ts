/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AvatarUrlsBean } from './AvatarUrlsBean';
import type { UpdatedProjectCategory } from './UpdatedProjectCategory';
/**
 * Details about a project.
 */
export type ProjectDetails = {
  /**
   * The URLs of the project's avatars.
   */
  readonly avatarUrls?: AvatarUrlsBean;
  /**
   * The ID of the project.
   */
  id?: string;
  /**
   * The key of the project.
   */
  readonly key?: string;
  /**
   * The name of the project.
   */
  readonly name?: string;
  /**
   * The category the project belongs to.
   */
  readonly projectCategory?: UpdatedProjectCategory;
  /**
   * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
   */
  readonly projectTypeKey?: 'software' | 'service_desk' | 'business';
  /**
   * The URL of the project details.
   */
  readonly self?: string;
  /**
   * Whether or not the project is simplified.
   */
  readonly simplified?: boolean;
};

