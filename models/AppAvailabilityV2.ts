
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
import type { AppAvailabilityV2Attributes } from './AppAvailabilityV2Attributes';
import {
    AppAvailabilityV2AttributesFromJSON,
    AppAvailabilityV2AttributesFromJSONTyped,
    AppAvailabilityV2AttributesToJSON,
    AppAvailabilityV2AttributesToJSONTyped,
} from './AppAvailabilityV2Attributes';
import type { AppAvailabilityV2Relationships } from './AppAvailabilityV2Relationships';
import {
    AppAvailabilityV2RelationshipsFromJSON,
    AppAvailabilityV2RelationshipsFromJSONTyped,
    AppAvailabilityV2RelationshipsToJSON,
    AppAvailabilityV2RelationshipsToJSONTyped,
} from './AppAvailabilityV2Relationships';
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
 * @interface AppAvailabilityV2
 */
export interface AppAvailabilityV2 {
    /**
     * 
     * @type {string}
     * @memberof AppAvailabilityV2
     */
    type: AppAvailabilityV2TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppAvailabilityV2
     */
    id: string;
    /**
     * 
     * @type {AppAvailabilityV2Attributes}
     * @memberof AppAvailabilityV2
     */
    attributes?: AppAvailabilityV2Attributes;
    /**
     * 
     * @type {AppAvailabilityV2Relationships}
     * @memberof AppAvailabilityV2
     */
    relationships?: AppAvailabilityV2Relationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppAvailabilityV2
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppAvailabilityV2TypeEnum = {
    AppAvailabilities: 'appAvailabilities'
} as const;
export type AppAvailabilityV2TypeEnum = typeof AppAvailabilityV2TypeEnum[keyof typeof AppAvailabilityV2TypeEnum];


/**
 * Check if a given object implements the AppAvailabilityV2 interface.
 */
export function instanceOfAppAvailabilityV2(value: object): value is AppAvailabilityV2 {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppAvailabilityV2FromJSON(json: any): AppAvailabilityV2 {
    return AppAvailabilityV2FromJSONTyped(json, false);
}

export function AppAvailabilityV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppAvailabilityV2AttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppAvailabilityV2RelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppAvailabilityV2ToJSON(json: any): AppAvailabilityV2 {
    return AppAvailabilityV2ToJSONTyped(json, false);
}

export function AppAvailabilityV2ToJSONTyped(value?: AppAvailabilityV2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppAvailabilityV2AttributesToJSON(value['attributes']),
        'relationships': AppAvailabilityV2RelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

