/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AvailableWorkflowConnectRule } from './AvailableWorkflowConnectRule';
import type { AvailableWorkflowForgeRule } from './AvailableWorkflowForgeRule';
import type { AvailableWorkflowSystemRule } from './AvailableWorkflowSystemRule';
import type { AvailableWorkflowTriggers } from './AvailableWorkflowTriggers';
export type WorkflowCapabilities = {
  /**
   * The Connect provided ecosystem rules available.
   */
  connectRules?: Array<AvailableWorkflowConnectRule>;
  /**
   * The scope of the workflow capabilities. `GLOBAL` for company-managed projects and `PROJECT` for team-managed projects.
   */
  editorScope?: 'PROJECT' | 'GLOBAL';
  /**
   * The Forge provided ecosystem rules available.
   */
  forgeRules?: Array<AvailableWorkflowForgeRule>;
  /**
   * The types of projects that this capability set is available for.
   */
  projectTypes?: Array<'software' | 'service_desk' | 'product_discovery' | 'business' | 'unknown'>;
  /**
   * The Atlassian provided system rules available.
   */
  systemRules?: Array<AvailableWorkflowSystemRule>;
  /**
   * The trigger rules available.
   */
  triggerRules?: Array<AvailableWorkflowTriggers>;
};

