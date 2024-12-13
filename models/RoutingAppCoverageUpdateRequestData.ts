
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
import type { AppClipAdvancedExperienceImageUpdateRequestDataAttributes } from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON,
    AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSONTyped,
} from './AppClipAdvancedExperienceImageUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface RoutingAppCoverageUpdateRequestData
 */
export interface RoutingAppCoverageUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof RoutingAppCoverageUpdateRequestData
     */
    type: RoutingAppCoverageUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RoutingAppCoverageUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageUpdateRequestDataAttributes}
     * @memberof RoutingAppCoverageUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceImageUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const RoutingAppCoverageUpdateRequestDataTypeEnum = {
    RoutingAppCoverages: 'routingAppCoverages'
} as const;
export type RoutingAppCoverageUpdateRequestDataTypeEnum = typeof RoutingAppCoverageUpdateRequestDataTypeEnum[keyof typeof RoutingAppCoverageUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the RoutingAppCoverageUpdateRequestData interface.
 */
export function instanceOfRoutingAppCoverageUpdateRequestData(value: object): value is RoutingAppCoverageUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function RoutingAppCoverageUpdateRequestDataFromJSON(json: any): RoutingAppCoverageUpdateRequestData {
    return RoutingAppCoverageUpdateRequestDataFromJSONTyped(json, false);
}

export function RoutingAppCoverageUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverageUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppClipAdvancedExperienceImageUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function RoutingAppCoverageUpdateRequestDataToJSON(json: any): RoutingAppCoverageUpdateRequestData {
    return RoutingAppCoverageUpdateRequestDataToJSONTyped(json, false);
}

export function RoutingAppCoverageUpdateRequestDataToJSONTyped(value?: RoutingAppCoverageUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppClipAdvancedExperienceImageUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

