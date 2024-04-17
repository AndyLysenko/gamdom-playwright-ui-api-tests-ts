/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { SecurityLevel } from './SecurityLevel';
/**
 * Details about a security scheme.
 */
export type SecurityScheme = {
  /**
   * The ID of the default security level.
   */
  readonly defaultSecurityLevelId?: number;
  /**
   * The description of the issue security scheme.
   */
  readonly description?: string;
  /**
   * The ID of the issue security scheme.
   */
  readonly id?: number;
  levels?: Array<SecurityLevel>;
  /**
   * The name of the issue security scheme.
   */
  readonly name?: string;
  /**
   * The URL of the issue security scheme.
   */
  readonly self?: string;
};

