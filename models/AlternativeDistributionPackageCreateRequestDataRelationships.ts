
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
import type { AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion } from './AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion';
import {
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSONTyped,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSONTyped,
} from './AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion';

/**
 * 
 * @export
 * @interface AlternativeDistributionPackageCreateRequestDataRelationships
 */
export interface AlternativeDistributionPackageCreateRequestDataRelationships {
    /**
     * 
     * @type {AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion}
     * @memberof AlternativeDistributionPackageCreateRequestDataRelationships
     */
    appStoreVersion: AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersion;
}

/**
 * Check if a given object implements the AlternativeDistributionPackageCreateRequestDataRelationships interface.
 */
export function instanceOfAlternativeDistributionPackageCreateRequestDataRelationships(value: object): value is AlternativeDistributionPackageCreateRequestDataRelationships {
    if (!('appStoreVersion' in value) || value['appStoreVersion'] === undefined) return false;
    return true;
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSON(json: any): AlternativeDistributionPackageCreateRequestDataRelationships {
    return AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionPackageCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appStoreVersion': AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionFromJSON(json['appStoreVersion']),
    };
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsToJSON(json: any): AlternativeDistributionPackageCreateRequestDataRelationships {
    return AlternativeDistributionPackageCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AlternativeDistributionPackageCreateRequestDataRelationshipsToJSONTyped(value?: AlternativeDistributionPackageCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appStoreVersion': AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionToJSON(value['appStoreVersion']),
    };
}

