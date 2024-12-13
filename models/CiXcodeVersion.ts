
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
import type { CiXcodeVersionAttributes } from './CiXcodeVersionAttributes';
import {
    CiXcodeVersionAttributesFromJSON,
    CiXcodeVersionAttributesFromJSONTyped,
    CiXcodeVersionAttributesToJSON,
    CiXcodeVersionAttributesToJSONTyped,
} from './CiXcodeVersionAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { CiXcodeVersionRelationships } from './CiXcodeVersionRelationships';
import {
    CiXcodeVersionRelationshipsFromJSON,
    CiXcodeVersionRelationshipsFromJSONTyped,
    CiXcodeVersionRelationshipsToJSON,
    CiXcodeVersionRelationshipsToJSONTyped,
} from './CiXcodeVersionRelationships';

/**
 * 
 * @export
 * @interface CiXcodeVersion
 */
export interface CiXcodeVersion {
    /**
     * 
     * @type {string}
     * @memberof CiXcodeVersion
     */
    type: CiXcodeVersionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiXcodeVersion
     */
    id: string;
    /**
     * 
     * @type {CiXcodeVersionAttributes}
     * @memberof CiXcodeVersion
     */
    attributes?: CiXcodeVersionAttributes;
    /**
     * 
     * @type {CiXcodeVersionRelationships}
     * @memberof CiXcodeVersion
     */
    relationships?: CiXcodeVersionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof CiXcodeVersion
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const CiXcodeVersionTypeEnum = {
    CiXcodeVersions: 'ciXcodeVersions'
} as const;
export type CiXcodeVersionTypeEnum = typeof CiXcodeVersionTypeEnum[keyof typeof CiXcodeVersionTypeEnum];


/**
 * Check if a given object implements the CiXcodeVersion interface.
 */
export function instanceOfCiXcodeVersion(value: object): value is CiXcodeVersion {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function CiXcodeVersionFromJSON(json: any): CiXcodeVersion {
    return CiXcodeVersionFromJSONTyped(json, false);
}

export function CiXcodeVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiXcodeVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : CiXcodeVersionAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : CiXcodeVersionRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function CiXcodeVersionToJSON(json: any): CiXcodeVersion {
    return CiXcodeVersionToJSONTyped(json, false);
}

export function CiXcodeVersionToJSONTyped(value?: CiXcodeVersion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': CiXcodeVersionAttributesToJSON(value['attributes']),
        'relationships': CiXcodeVersionRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
