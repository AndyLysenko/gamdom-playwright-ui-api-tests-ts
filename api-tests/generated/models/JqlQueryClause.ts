/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CompoundClause } from './CompoundClause';
import type { FieldChangedClause } from './FieldChangedClause';
import type { FieldValueClause } from './FieldValueClause';
import type { FieldWasClause } from './FieldWasClause';
/**
 * A JQL query clause.
 */
export type JqlQueryClause = (CompoundClause | FieldValueClause | FieldWasClause | FieldChangedClause);

