
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
import type { ProfileRelationships } from './ProfileRelationships';
import {
    ProfileRelationshipsFromJSON,
    ProfileRelationshipsFromJSONTyped,
    ProfileRelationshipsToJSON,
    ProfileRelationshipsToJSONTyped,
} from './ProfileRelationships';
import type { ProfileAttributes } from './ProfileAttributes';
import {
    ProfileAttributesFromJSON,
    ProfileAttributesFromJSONTyped,
    ProfileAttributesToJSON,
    ProfileAttributesToJSONTyped,
} from './ProfileAttributes';
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
 * @interface Profile
 */
export interface Profile {
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    type: ProfileTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    id: string;
    /**
     * 
     * @type {ProfileAttributes}
     * @memberof Profile
     */
    attributes?: ProfileAttributes;
    /**
     * 
     * @type {ProfileRelationships}
     * @memberof Profile
     */
    relationships?: ProfileRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof Profile
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const ProfileTypeEnum = {
    Profiles: 'profiles'
} as const;
export type ProfileTypeEnum = typeof ProfileTypeEnum[keyof typeof ProfileTypeEnum];


/**
 * Check if a given object implements the Profile interface.
 */
export function instanceOfProfile(value: object): value is Profile {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ProfileFromJSON(json: any): Profile {
    return ProfileFromJSONTyped(json, false);
}

export function ProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): Profile {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : ProfileAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : ProfileRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function ProfileToJSON(json: any): Profile {
    return ProfileToJSONTyped(json, false);
}

export function ProfileToJSONTyped(value?: Profile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': ProfileAttributesToJSON(value['attributes']),
        'relationships': ProfileRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
