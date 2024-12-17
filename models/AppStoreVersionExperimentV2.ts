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
import type { AppStoreVersionExperimentV2Relationships } from './AppStoreVersionExperimentV2Relationships';
import {
    AppStoreVersionExperimentV2RelationshipsFromJSON,
    AppStoreVersionExperimentV2RelationshipsFromJSONTyped,
    AppStoreVersionExperimentV2RelationshipsToJSON,
    AppStoreVersionExperimentV2RelationshipsToJSONTyped,
} from './AppStoreVersionExperimentV2Relationships';
import type { AppStoreVersionExperimentV2Attributes } from './AppStoreVersionExperimentV2Attributes';
import {
    AppStoreVersionExperimentV2AttributesFromJSON,
    AppStoreVersionExperimentV2AttributesFromJSONTyped,
    AppStoreVersionExperimentV2AttributesToJSON,
    AppStoreVersionExperimentV2AttributesToJSONTyped,
} from './AppStoreVersionExperimentV2Attributes';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentV2
 */
export interface AppStoreVersionExperimentV2 {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentV2
     */
    type: AppStoreVersionExperimentV2TypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentV2
     */
    id: string;
    /**
     * 
     * @type {AppStoreVersionExperimentV2Attributes}
     * @memberof AppStoreVersionExperimentV2
     */
    attributes?: AppStoreVersionExperimentV2Attributes;
    /**
     * 
     * @type {AppStoreVersionExperimentV2Relationships}
     * @memberof AppStoreVersionExperimentV2
     */
    relationships?: AppStoreVersionExperimentV2Relationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreVersionExperimentV2
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreVersionExperimentV2TypeEnum = {
    AppStoreVersionExperiments: 'appStoreVersionExperiments'
} as const;
export type AppStoreVersionExperimentV2TypeEnum = typeof AppStoreVersionExperimentV2TypeEnum[keyof typeof AppStoreVersionExperimentV2TypeEnum];


/**
 * Check if a given object implements the AppStoreVersionExperimentV2 interface.
 */
export function instanceOfAppStoreVersionExperimentV2(value: object): value is AppStoreVersionExperimentV2 {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppStoreVersionExperimentV2FromJSON(json: any): AppStoreVersionExperimentV2 {
    return AppStoreVersionExperimentV2FromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppStoreVersionExperimentV2AttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppStoreVersionExperimentV2RelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionExperimentV2ToJSON(json: any): AppStoreVersionExperimentV2 {
    return AppStoreVersionExperimentV2ToJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2ToJSONTyped(value?: AppStoreVersionExperimentV2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppStoreVersionExperimentV2AttributesToJSON(value['attributes']),
        'relationships': AppStoreVersionExperimentV2RelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

