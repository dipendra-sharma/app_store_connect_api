
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
import type { CiMacOsVersionRelationships } from './CiMacOsVersionRelationships';
import {
    CiMacOsVersionRelationshipsFromJSON,
    CiMacOsVersionRelationshipsFromJSONTyped,
    CiMacOsVersionRelationshipsToJSON,
    CiMacOsVersionRelationshipsToJSONTyped,
} from './CiMacOsVersionRelationships';
import type { CiMacOsVersionAttributes } from './CiMacOsVersionAttributes';
import {
    CiMacOsVersionAttributesFromJSON,
    CiMacOsVersionAttributesFromJSONTyped,
    CiMacOsVersionAttributesToJSON,
    CiMacOsVersionAttributesToJSONTyped,
} from './CiMacOsVersionAttributes';

/**
 * 
 * @export
 * @interface CiMacOsVersion
 */
export interface CiMacOsVersion {
    /**
     * 
     * @type {string}
     * @memberof CiMacOsVersion
     */
    type: CiMacOsVersionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiMacOsVersion
     */
    id: string;
    /**
     * 
     * @type {CiMacOsVersionAttributes}
     * @memberof CiMacOsVersion
     */
    attributes?: CiMacOsVersionAttributes;
    /**
     * 
     * @type {CiMacOsVersionRelationships}
     * @memberof CiMacOsVersion
     */
    relationships?: CiMacOsVersionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof CiMacOsVersion
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const CiMacOsVersionTypeEnum = {
    CiMacOsVersions: 'ciMacOsVersions'
} as const;
export type CiMacOsVersionTypeEnum = typeof CiMacOsVersionTypeEnum[keyof typeof CiMacOsVersionTypeEnum];


/**
 * Check if a given object implements the CiMacOsVersion interface.
 */
export function instanceOfCiMacOsVersion(value: object): value is CiMacOsVersion {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function CiMacOsVersionFromJSON(json: any): CiMacOsVersion {
    return CiMacOsVersionFromJSONTyped(json, false);
}

export function CiMacOsVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiMacOsVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : CiMacOsVersionAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : CiMacOsVersionRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function CiMacOsVersionToJSON(json: any): CiMacOsVersion {
    return CiMacOsVersionToJSONTyped(json, false);
}

export function CiMacOsVersionToJSONTyped(value?: CiMacOsVersion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': CiMacOsVersionAttributesToJSON(value['attributes']),
        'relationships': CiMacOsVersionRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
