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
import type { AnalyticsReportRequestCreateRequestDataRelationships } from './AnalyticsReportRequestCreateRequestDataRelationships';
import {
    AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataRelationshipsToJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsToJSONTyped,
} from './AnalyticsReportRequestCreateRequestDataRelationships';
import type { SubscriptionGroupCreateRequestDataAttributes } from './SubscriptionGroupCreateRequestDataAttributes';
import {
    SubscriptionGroupCreateRequestDataAttributesFromJSON,
    SubscriptionGroupCreateRequestDataAttributesFromJSONTyped,
    SubscriptionGroupCreateRequestDataAttributesToJSON,
    SubscriptionGroupCreateRequestDataAttributesToJSONTyped,
} from './SubscriptionGroupCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface SubscriptionGroupCreateRequestData
 */
export interface SubscriptionGroupCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionGroupCreateRequestData
     */
    type: SubscriptionGroupCreateRequestDataTypeEnum;
    /**
     * 
     * @type {SubscriptionGroupCreateRequestDataAttributes}
     * @memberof SubscriptionGroupCreateRequestData
     */
    attributes: SubscriptionGroupCreateRequestDataAttributes;
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationships}
     * @memberof SubscriptionGroupCreateRequestData
     */
    relationships: AnalyticsReportRequestCreateRequestDataRelationships;
}


/**
 * @export
 */
export const SubscriptionGroupCreateRequestDataTypeEnum = {
    SubscriptionGroups: 'subscriptionGroups'
} as const;
export type SubscriptionGroupCreateRequestDataTypeEnum = typeof SubscriptionGroupCreateRequestDataTypeEnum[keyof typeof SubscriptionGroupCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionGroupCreateRequestData interface.
 */
export function instanceOfSubscriptionGroupCreateRequestData(value: object): value is SubscriptionGroupCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function SubscriptionGroupCreateRequestDataFromJSON(json: any): SubscriptionGroupCreateRequestData {
    return SubscriptionGroupCreateRequestDataFromJSONTyped(json, false);
}

export function SubscriptionGroupCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionGroupCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': SubscriptionGroupCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function SubscriptionGroupCreateRequestDataToJSON(json: any): SubscriptionGroupCreateRequestData {
    return SubscriptionGroupCreateRequestDataToJSONTyped(json, false);
}

export function SubscriptionGroupCreateRequestDataToJSONTyped(value?: SubscriptionGroupCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': SubscriptionGroupCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AnalyticsReportRequestCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

