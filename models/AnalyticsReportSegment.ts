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
import type { AnalyticsReportSegmentAttributes } from './AnalyticsReportSegmentAttributes';
import {
    AnalyticsReportSegmentAttributesFromJSON,
    AnalyticsReportSegmentAttributesFromJSONTyped,
    AnalyticsReportSegmentAttributesToJSON,
    AnalyticsReportSegmentAttributesToJSONTyped,
} from './AnalyticsReportSegmentAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AnalyticsReportSegment
 */
export interface AnalyticsReportSegment {
    /**
     * 
     * @type {string}
     * @memberof AnalyticsReportSegment
     */
    type: AnalyticsReportSegmentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AnalyticsReportSegment
     */
    id: string;
    /**
     * 
     * @type {AnalyticsReportSegmentAttributes}
     * @memberof AnalyticsReportSegment
     */
    attributes?: AnalyticsReportSegmentAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AnalyticsReportSegment
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AnalyticsReportSegmentTypeEnum = {
    AnalyticsReportSegments: 'analyticsReportSegments'
} as const;
export type AnalyticsReportSegmentTypeEnum = typeof AnalyticsReportSegmentTypeEnum[keyof typeof AnalyticsReportSegmentTypeEnum];


/**
 * Check if a given object implements the AnalyticsReportSegment interface.
 */
export function instanceOfAnalyticsReportSegment(value: object): value is AnalyticsReportSegment {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AnalyticsReportSegmentFromJSON(json: any): AnalyticsReportSegment {
    return AnalyticsReportSegmentFromJSONTyped(json, false);
}

export function AnalyticsReportSegmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportSegment {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AnalyticsReportSegmentAttributesFromJSON(json['attributes']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AnalyticsReportSegmentToJSON(json: any): AnalyticsReportSegment {
    return AnalyticsReportSegmentToJSONTyped(json, false);
}

export function AnalyticsReportSegmentToJSONTyped(value?: AnalyticsReportSegment | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AnalyticsReportSegmentAttributesToJSON(value['attributes']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

