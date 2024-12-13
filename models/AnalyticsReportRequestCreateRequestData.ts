
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
import type { AnalyticsReportRequestCreateRequestDataAttributes } from './AnalyticsReportRequestCreateRequestDataAttributes';
import {
    AnalyticsReportRequestCreateRequestDataAttributesFromJSON,
    AnalyticsReportRequestCreateRequestDataAttributesFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataAttributesToJSON,
    AnalyticsReportRequestCreateRequestDataAttributesToJSONTyped,
} from './AnalyticsReportRequestCreateRequestDataAttributes';
import type { AnalyticsReportRequestCreateRequestDataRelationships } from './AnalyticsReportRequestCreateRequestDataRelationships';
import {
    AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataRelationshipsToJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsToJSONTyped,
} from './AnalyticsReportRequestCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AnalyticsReportRequestCreateRequestData
 */
export interface AnalyticsReportRequestCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AnalyticsReportRequestCreateRequestData
     */
    type: AnalyticsReportRequestCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataAttributes}
     * @memberof AnalyticsReportRequestCreateRequestData
     */
    attributes: AnalyticsReportRequestCreateRequestDataAttributes;
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationships}
     * @memberof AnalyticsReportRequestCreateRequestData
     */
    relationships: AnalyticsReportRequestCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AnalyticsReportRequestCreateRequestDataTypeEnum = {
    AnalyticsReportRequests: 'analyticsReportRequests'
} as const;
export type AnalyticsReportRequestCreateRequestDataTypeEnum = typeof AnalyticsReportRequestCreateRequestDataTypeEnum[keyof typeof AnalyticsReportRequestCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AnalyticsReportRequestCreateRequestData interface.
 */
export function instanceOfAnalyticsReportRequestCreateRequestData(value: object): value is AnalyticsReportRequestCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function AnalyticsReportRequestCreateRequestDataFromJSON(json: any): AnalyticsReportRequestCreateRequestData {
    return AnalyticsReportRequestCreateRequestDataFromJSONTyped(json, false);
}

export function AnalyticsReportRequestCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportRequestCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AnalyticsReportRequestCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AnalyticsReportRequestCreateRequestDataToJSON(json: any): AnalyticsReportRequestCreateRequestData {
    return AnalyticsReportRequestCreateRequestDataToJSONTyped(json, false);
}

export function AnalyticsReportRequestCreateRequestDataToJSONTyped(value?: AnalyticsReportRequestCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AnalyticsReportRequestCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AnalyticsReportRequestCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}
