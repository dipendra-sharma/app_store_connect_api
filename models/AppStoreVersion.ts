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
import type { AppStoreVersionAttributes } from './AppStoreVersionAttributes';
import {
    AppStoreVersionAttributesFromJSON,
    AppStoreVersionAttributesFromJSONTyped,
    AppStoreVersionAttributesToJSON,
    AppStoreVersionAttributesToJSONTyped,
} from './AppStoreVersionAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { AppStoreVersionRelationships } from './AppStoreVersionRelationships';
import {
    AppStoreVersionRelationshipsFromJSON,
    AppStoreVersionRelationshipsFromJSONTyped,
    AppStoreVersionRelationshipsToJSON,
    AppStoreVersionRelationshipsToJSONTyped,
} from './AppStoreVersionRelationships';

/**
 * 
 * @export
 * @interface AppStoreVersion
 */
export interface AppStoreVersion {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersion
     */
    type: AppStoreVersionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersion
     */
    id: string;
    /**
     * 
     * @type {AppStoreVersionAttributes}
     * @memberof AppStoreVersion
     */
    attributes?: AppStoreVersionAttributes;
    /**
     * 
     * @type {AppStoreVersionRelationships}
     * @memberof AppStoreVersion
     */
    relationships?: AppStoreVersionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreVersion
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreVersionTypeEnum = {
    AppStoreVersions: 'appStoreVersions'
} as const;
export type AppStoreVersionTypeEnum = typeof AppStoreVersionTypeEnum[keyof typeof AppStoreVersionTypeEnum];


/**
 * Check if a given object implements the AppStoreVersion interface.
 */
export function instanceOfAppStoreVersion(value: object): value is AppStoreVersion {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppStoreVersionFromJSON(json: any): AppStoreVersion {
    return AppStoreVersionFromJSONTyped(json, false);
}

export function AppStoreVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppStoreVersionAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppStoreVersionRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionToJSON(json: any): AppStoreVersion {
    return AppStoreVersionToJSONTyped(json, false);
}

export function AppStoreVersionToJSONTyped(value?: AppStoreVersion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppStoreVersionAttributesToJSON(value['attributes']),
        'relationships': AppStoreVersionRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

