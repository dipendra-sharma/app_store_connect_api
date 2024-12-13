
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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { AnalyticsReportRelationships } from './AnalyticsReportRelationships';
import {
    AnalyticsReportRelationshipsFromJSON,
    AnalyticsReportRelationshipsFromJSONTyped,
    AnalyticsReportRelationshipsToJSON,
    AnalyticsReportRelationshipsToJSONTyped,
} from './AnalyticsReportRelationships';
import type { AnalyticsReportAttributes } from './AnalyticsReportAttributes';
import {
    AnalyticsReportAttributesFromJSON,
    AnalyticsReportAttributesFromJSONTyped,
    AnalyticsReportAttributesToJSON,
    AnalyticsReportAttributesToJSONTyped,
} from './AnalyticsReportAttributes';

/**
 * 
 * @export
 * @interface AnalyticsReport
 */
export interface AnalyticsReport {
    /**
     * 
     * @type {string}
     * @memberof AnalyticsReport
     */
    type: AnalyticsReportTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AnalyticsReport
     */
    id: string;
    /**
     * 
     * @type {AnalyticsReportAttributes}
     * @memberof AnalyticsReport
     */
    attributes?: AnalyticsReportAttributes;
    /**
     * 
     * @type {AnalyticsReportRelationships}
     * @memberof AnalyticsReport
     */
    relationships?: AnalyticsReportRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AnalyticsReport
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AnalyticsReportTypeEnum = {
    AnalyticsReports: 'analyticsReports'
} as const;
export type AnalyticsReportTypeEnum = typeof AnalyticsReportTypeEnum[keyof typeof AnalyticsReportTypeEnum];


/**
 * Check if a given object implements the AnalyticsReport interface.
 */
export function instanceOfAnalyticsReport(value: object): value is AnalyticsReport {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AnalyticsReportFromJSON(json: any): AnalyticsReport {
    return AnalyticsReportFromJSONTyped(json, false);
}

export function AnalyticsReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReport {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AnalyticsReportAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AnalyticsReportRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AnalyticsReportToJSON(json: any): AnalyticsReport {
    return AnalyticsReportToJSONTyped(json, false);
}

export function AnalyticsReportToJSONTyped(value?: AnalyticsReport | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AnalyticsReportAttributesToJSON(value['attributes']),
        'relationships': AnalyticsReportRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

