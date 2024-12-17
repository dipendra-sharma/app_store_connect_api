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
import type { AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageData } from './AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageData';
import {
    AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataFromJSON,
    AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataFromJSONTyped,
    AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataToJSON,
    AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataToJSONTyped,
} from './AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageData';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage
 */
export interface AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage {
    /**
     * 
     * @type {AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageData}
     * @memberof AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage
     */
    data?: AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageData;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage interface.
 */
export function instanceOfAlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage(value: object): value is AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage {
    return true;
}

export function AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageFromJSON(json: any): AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage {
    return AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataFromJSON(json['data']),
    };
}

export function AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageToJSON(json: any): AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage {
    return AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageToJSONTyped(json, false);
}

export function AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageToJSONTyped(value?: AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AlternativeDistributionPackageVersionRelationshipsAlternativeDistributionPackageDataToJSON(value['data']),
    };
}

