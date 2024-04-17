/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { BulkEditActionError } from './BulkEditActionError';
/**
 * Details of a request to bulk edit shareable entity.
 */
export type BulkEditShareableEntityResponse = {
  /**
   * Allowed action for bulk edit shareable entity
   */
  action: 'changeOwner' | 'changePermission' | 'addPermission' | 'removePermission';
  /**
   * The mapping dashboard id to errors if any.
   */
  entityErrors?: Record<string, BulkEditActionError>;
};

