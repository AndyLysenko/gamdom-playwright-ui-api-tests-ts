/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Scope } from './Scope';
/**
 * Details about a project role.
 */
export type ProjectRoleDetails = {
  /**
   * Whether this role is the admin role for the project.
   */
  readonly admin?: boolean;
  /**
   * Whether this role is the default role for the project.
   */
  readonly default?: boolean;
  /**
   * The description of the project role.
   */
  readonly description?: string;
  /**
   * The ID of the project role.
   */
  readonly id?: number;
  /**
   * The name of the project role.
   */
  name?: string;
  /**
   * Whether the roles are configurable for this project.
   */
  readonly roleConfigurable?: boolean;
  /**
   * The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
   */
  readonly scope?: Scope;
  /**
   * The URL the project role details.
   */
  readonly self?: string;
  /**
   * The translated name of the project role.
   */
  translatedName?: string;
};

