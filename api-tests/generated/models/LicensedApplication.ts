/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details about a licensed Jira application.
 */
export type LicensedApplication = {
  /**
   * The ID of the application.
   */
  readonly id: string;
  /**
   * The licensing plan.
   */
  readonly plan: 'UNLICENSED' | 'FREE' | 'PAID';
};

