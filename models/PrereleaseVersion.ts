
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
import type { PrereleaseVersionRelationships } from './PrereleaseVersionRelationships';
import {
    PrereleaseVersionRelationshipsFromJSON,
    PrereleaseVersionRelationshipsFromJSONTyped,
    PrereleaseVersionRelationshipsToJSON,
    PrereleaseVersionRelationshipsToJSONTyped,
} from './PrereleaseVersionRelationships';
import type { PrereleaseVersionAttributes } from './PrereleaseVersionAttributes';
import {
    PrereleaseVersionAttributesFromJSON,
    PrereleaseVersionAttributesFromJSONTyped,
    PrereleaseVersionAttributesToJSON,
    PrereleaseVersionAttributesToJSONTyped,
} from './PrereleaseVersionAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface PrereleaseVersion
 */
export interface PrereleaseVersion {
    /**
     * 
     * @type {string}
     * @memberof PrereleaseVersion
     */
    type: PrereleaseVersionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PrereleaseVersion
     */
    id: string;
    /**
     * 
     * @type {PrereleaseVersionAttributes}
     * @memberof PrereleaseVersion
     */
    attributes?: PrereleaseVersionAttributes;
    /**
     * 
     * @type {PrereleaseVersionRelationships}
     * @memberof PrereleaseVersion
     */
    relationships?: PrereleaseVersionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof PrereleaseVersion
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const PrereleaseVersionTypeEnum = {
    PreReleaseVersions: 'preReleaseVersions'
} as const;
export type PrereleaseVersionTypeEnum = typeof PrereleaseVersionTypeEnum[keyof typeof PrereleaseVersionTypeEnum];


/**
 * Check if a given object implements the PrereleaseVersion interface.
 */
export function instanceOfPrereleaseVersion(value: object): value is PrereleaseVersion {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function PrereleaseVersionFromJSON(json: any): PrereleaseVersion {
    return PrereleaseVersionFromJSONTyped(json, false);
}

export function PrereleaseVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrereleaseVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : PrereleaseVersionAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : PrereleaseVersionRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function PrereleaseVersionToJSON(json: any): PrereleaseVersion {
    return PrereleaseVersionToJSONTyped(json, false);
}

export function PrereleaseVersionToJSONTyped(value?: PrereleaseVersion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': PrereleaseVersionAttributesToJSON(value['attributes']),
        'relationships': PrereleaseVersionRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
