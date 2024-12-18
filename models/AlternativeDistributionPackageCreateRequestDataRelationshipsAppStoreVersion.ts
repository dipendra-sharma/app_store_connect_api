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
import type { AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData } from './AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData';
import {
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSONTyped,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSONTyped,
} from './AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion
 */
export interface AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion {
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData}
     * @memberof AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion
     */
    data: AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion interface.
 */
export function instanceOfAlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion(value: object): value is AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSON(json: any): AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion {
    return AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON(json['data']),
    };
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSON(json: any): AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion {
    return AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSONTyped(value?: AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON(value['data']),
    };
}

