
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.7.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AnalyticsReportInstanceAttributes } from './AnalyticsReportInstanceAttributes';
import {
    AnalyticsReportInstanceAttributesFromJSON,
    AnalyticsReportInstanceAttributesFromJSONTyped,
    AnalyticsReportInstanceAttributesToJSON,
    AnalyticsReportInstanceAttributesToJSONTyped,
} from './AnalyticsReportInstanceAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { AnalyticsReportInstanceRelationships } from './AnalyticsReportInstanceRelationships';
import {
    AnalyticsReportInstanceRelationshipsFromJSON,
    AnalyticsReportInstanceRelationshipsFromJSONTyped,
    AnalyticsReportInstanceRelationshipsToJSON,
    AnalyticsReportInstanceRelationshipsToJSONTyped,
} from './AnalyticsReportInstanceRelationships';

/**
 * 
 * @export
 * @interface AnalyticsReportInstance
 */
export interface AnalyticsReportInstance {
    /**
     * 
     * @type {string}
     * @memberof AnalyticsReportInstance
     */
    type: AnalyticsReportInstanceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AnalyticsReportInstance
     */
    id: string;
    /**
     * 
     * @type {AnalyticsReportInstanceAttributes}
     * @memberof AnalyticsReportInstance
     */
    attributes?: AnalyticsReportInstanceAttributes;
    /**
     * 
     * @type {AnalyticsReportInstanceRelationships}
     * @memberof AnalyticsReportInstance
     */
    relationships?: AnalyticsReportInstanceRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AnalyticsReportInstance
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AnalyticsReportInstanceTypeEnum = {
    AnalyticsReportInstances: 'analyticsReportInstances'
} as const;
export type AnalyticsReportInstanceTypeEnum = typeof AnalyticsReportInstanceTypeEnum[keyof typeof AnalyticsReportInstanceTypeEnum];


/**
 * Check if a given object implements the AnalyticsReportInstance interface.
 */
export function instanceOfAnalyticsReportInstance(value: object): value is AnalyticsReportInstance {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AnalyticsReportInstanceFromJSON(json: any): AnalyticsReportInstance {
    return AnalyticsReportInstanceFromJSONTyped(json, false);
}

export function AnalyticsReportInstanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportInstance {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AnalyticsReportInstanceAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AnalyticsReportInstanceRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AnalyticsReportInstanceToJSON(json: any): AnalyticsReportInstance {
    return AnalyticsReportInstanceToJSONTyped(json, false);
}

export function AnalyticsReportInstanceToJSONTyped(value?: AnalyticsReportInstance | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AnalyticsReportInstanceAttributesToJSON(value['attributes']),
        'relationships': AnalyticsReportInstanceRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
