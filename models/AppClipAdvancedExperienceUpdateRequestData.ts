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
import type { AppClipAdvancedExperienceUpdateRequestDataAttributes } from './AppClipAdvancedExperienceUpdateRequestDataAttributes';
import {
    AppClipAdvancedExperienceUpdateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceUpdateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceUpdateRequestDataAttributesToJSON,
    AppClipAdvancedExperienceUpdateRequestDataAttributesToJSONTyped,
} from './AppClipAdvancedExperienceUpdateRequestDataAttributes';
import type { AppClipAdvancedExperienceUpdateRequestDataRelationships } from './AppClipAdvancedExperienceUpdateRequestDataRelationships';
import {
    AppClipAdvancedExperienceUpdateRequestDataRelationshipsFromJSON,
    AppClipAdvancedExperienceUpdateRequestDataRelationshipsFromJSONTyped,
    AppClipAdvancedExperienceUpdateRequestDataRelationshipsToJSON,
    AppClipAdvancedExperienceUpdateRequestDataRelationshipsToJSONTyped,
} from './AppClipAdvancedExperienceUpdateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceUpdateRequestData
 */
export interface AppClipAdvancedExperienceUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceUpdateRequestData
     */
    type: AppClipAdvancedExperienceUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceUpdateRequestDataAttributes}
     * @memberof AppClipAdvancedExperienceUpdateRequestData
     */
    attributes?: AppClipAdvancedExperienceUpdateRequestDataAttributes;
    /**
     * 
     * @type {AppClipAdvancedExperienceUpdateRequestDataRelationships}
     * @memberof AppClipAdvancedExperienceUpdateRequestData
     */
    relationships?: AppClipAdvancedExperienceUpdateRequestDataRelationships;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceUpdateRequestDataTypeEnum = {
    AppClipAdvancedExperiences: 'appClipAdvancedExperiences'
} as const;
export type AppClipAdvancedExperienceUpdateRequestDataTypeEnum = typeof AppClipAdvancedExperienceUpdateRequestDataTypeEnum[keyof typeof AppClipAdvancedExperienceUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceUpdateRequestData interface.
 */
export function instanceOfAppClipAdvancedExperienceUpdateRequestData(value: object): value is AppClipAdvancedExperienceUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppClipAdvancedExperienceUpdateRequestDataFromJSON(json: any): AppClipAdvancedExperienceUpdateRequestData {
    return AppClipAdvancedExperienceUpdateRequestDataFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppClipAdvancedExperienceUpdateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppClipAdvancedExperienceUpdateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppClipAdvancedExperienceUpdateRequestDataToJSON(json: any): AppClipAdvancedExperienceUpdateRequestData {
    return AppClipAdvancedExperienceUpdateRequestDataToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceUpdateRequestDataToJSONTyped(value?: AppClipAdvancedExperienceUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppClipAdvancedExperienceUpdateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AppClipAdvancedExperienceUpdateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

