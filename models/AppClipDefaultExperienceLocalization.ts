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
import type { AppClipDefaultExperienceLocalizationRelationships } from './AppClipDefaultExperienceLocalizationRelationships';
import {
    AppClipDefaultExperienceLocalizationRelationshipsFromJSON,
    AppClipDefaultExperienceLocalizationRelationshipsFromJSONTyped,
    AppClipDefaultExperienceLocalizationRelationshipsToJSON,
    AppClipDefaultExperienceLocalizationRelationshipsToJSONTyped,
} from './AppClipDefaultExperienceLocalizationRelationships';
import type { AppClipDefaultExperienceLocalizationAttributes } from './AppClipDefaultExperienceLocalizationAttributes';
import {
    AppClipDefaultExperienceLocalizationAttributesFromJSON,
    AppClipDefaultExperienceLocalizationAttributesFromJSONTyped,
    AppClipDefaultExperienceLocalizationAttributesToJSON,
    AppClipDefaultExperienceLocalizationAttributesToJSONTyped,
} from './AppClipDefaultExperienceLocalizationAttributes';
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
 * @interface AppClipDefaultExperienceLocalization
 */
export interface AppClipDefaultExperienceLocalization {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalization
     */
    type: AppClipDefaultExperienceLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperienceLocalization
     */
    id: string;
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationAttributes}
     * @memberof AppClipDefaultExperienceLocalization
     */
    attributes?: AppClipDefaultExperienceLocalizationAttributes;
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationRelationships}
     * @memberof AppClipDefaultExperienceLocalization
     */
    relationships?: AppClipDefaultExperienceLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppClipDefaultExperienceLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationTypeEnum = {
    AppClipDefaultExperienceLocalizations: 'appClipDefaultExperienceLocalizations'
} as const;
export type AppClipDefaultExperienceLocalizationTypeEnum = typeof AppClipDefaultExperienceLocalizationTypeEnum[keyof typeof AppClipDefaultExperienceLocalizationTypeEnum];


/**
 * Check if a given object implements the AppClipDefaultExperienceLocalization interface.
 */
export function instanceOfAppClipDefaultExperienceLocalization(value: object): value is AppClipDefaultExperienceLocalization {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppClipDefaultExperienceLocalizationFromJSON(json: any): AppClipDefaultExperienceLocalization {
    return AppClipDefaultExperienceLocalizationFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalization {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppClipDefaultExperienceLocalizationAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppClipDefaultExperienceLocalizationRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppClipDefaultExperienceLocalizationToJSON(json: any): AppClipDefaultExperienceLocalization {
    return AppClipDefaultExperienceLocalizationToJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationToJSONTyped(value?: AppClipDefaultExperienceLocalization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppClipDefaultExperienceLocalizationAttributesToJSON(value['attributes']),
        'relationships': AppClipDefaultExperienceLocalizationRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

