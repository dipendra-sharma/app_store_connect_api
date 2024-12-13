
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
import type { AlternativeDistributionPackageCreateRequestDataRelationships } from './AlternativeDistributionPackageCreateRequestDataRelationships';
import {
    AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped,
    AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsToJSONTyped,
} from './AlternativeDistributionPackageCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageCreateRequestData
 */
export interface AlternativeDistributionPackageCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AlternativeDistributionPackageCreateRequestData
     */
    type: AlternativeDistributionPackageCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationships}
     * @memberof AlternativeDistributionPackageCreateRequestData
     */
    relationships: AlternativeDistributionPackageCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AlternativeDistributionPackageCreateRequestDataTypeEnum = {
    AlternativeDistributionPackages: 'alternativeDistributionPackages'
} as const;
export type AlternativeDistributionPackageCreateRequestDataTypeEnum = typeof AlternativeDistributionPackageCreateRequestDataTypeEnum[keyof typeof AlternativeDistributionPackageCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequestData interface.
 */
export function instanceOfAlternativeDistributionPackageCreateRequestData(value: object): value is AlternativeDistributionPackageCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function AlternativeDistributionPackageCreateRequestDataFromJSON(json: any): AlternativeDistributionPackageCreateRequestData {
    return AlternativeDistributionPackageCreateRequestDataFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AlternativeDistributionPackageCreateRequestDataToJSON(json: any): AlternativeDistributionPackageCreateRequestData {
    return AlternativeDistributionPackageCreateRequestDataToJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestDataToJSONTyped(value?: AlternativeDistributionPackageCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'relationships': AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}
