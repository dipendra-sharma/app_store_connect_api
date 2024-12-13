
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
import type { AppInfoLocalizationAttributes } from './AppInfoLocalizationAttributes';
import {
    AppInfoLocalizationAttributesFromJSON,
    AppInfoLocalizationAttributesFromJSONTyped,
    AppInfoLocalizationAttributesToJSON,
    AppInfoLocalizationAttributesToJSONTyped,
} from './AppInfoLocalizationAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { AppInfoLocalizationRelationships } from './AppInfoLocalizationRelationships';
import {
    AppInfoLocalizationRelationshipsFromJSON,
    AppInfoLocalizationRelationshipsFromJSONTyped,
    AppInfoLocalizationRelationshipsToJSON,
    AppInfoLocalizationRelationshipsToJSONTyped,
} from './AppInfoLocalizationRelationships';

/**
 * 
 * @export
 * @interface AppInfoLocalization
 */
export interface AppInfoLocalization {
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalization
     */
    type: AppInfoLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppInfoLocalization
     */
    id: string;
    /**
     * 
     * @type {AppInfoLocalizationAttributes}
     * @memberof AppInfoLocalization
     */
    attributes?: AppInfoLocalizationAttributes;
    /**
     * 
     * @type {AppInfoLocalizationRelationships}
     * @memberof AppInfoLocalization
     */
    relationships?: AppInfoLocalizationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppInfoLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppInfoLocalizationTypeEnum = {
    AppInfoLocalizations: 'appInfoLocalizations'
} as const;
export type AppInfoLocalizationTypeEnum = typeof AppInfoLocalizationTypeEnum[keyof typeof AppInfoLocalizationTypeEnum];


/**
 * Check if a given object implements the AppInfoLocalization interface.
 */
export function instanceOfAppInfoLocalization(value: object): value is AppInfoLocalization {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppInfoLocalizationFromJSON(json: any): AppInfoLocalization {
    return AppInfoLocalizationFromJSONTyped(json, false);
}

export function AppInfoLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoLocalization {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppInfoLocalizationAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppInfoLocalizationRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppInfoLocalizationToJSON(json: any): AppInfoLocalization {
    return AppInfoLocalizationToJSONTyped(json, false);
}

export function AppInfoLocalizationToJSONTyped(value?: AppInfoLocalization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppInfoLocalizationAttributesToJSON(value['attributes']),
        'relationships': AppInfoLocalizationRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

