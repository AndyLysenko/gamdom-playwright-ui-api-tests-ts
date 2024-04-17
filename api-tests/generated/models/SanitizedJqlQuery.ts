/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ErrorCollection } from './ErrorCollection';
/**
 * Details of the sanitized JQL query.
 */
export type SanitizedJqlQuery = {
  /**
   * The account ID of the user for whom sanitization was performed.
   */
  accountId?: string | null;
  /**
   * The list of errors.
   */
  errors?: ErrorCollection;
  /**
   * The initial query.
   */
  initialQuery?: string;
  /**
   * The sanitized query, if there were no errors.
   */
  sanitizedQuery?: string | null;
};

