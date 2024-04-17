/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ServiceRegistryTier } from './ServiceRegistryTier';
export type ServiceRegistry = {
  /**
   * service description
   */
  description?: string | null;
  /**
   * service ID
   */
  id?: string;
  /**
   * service name
   */
  name?: string;
  /**
   * organization ID
   */
  organizationId?: string;
  /**
   * service revision
   */
  revision?: string;
  serviceTier?: ServiceRegistryTier;
};

