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
import type { AppClipAdvancedExperienceLocalizationAttributes } from './AppClipAdvancedExperienceLocalizationAttributes';
import {
    AppClipAdvancedExperienceLocalizationAttributesFromJSON,
    AppClipAdvancedExperienceLocalizationAttributesFromJSONTyped,
    AppClipAdvancedExperienceLocalizationAttributesToJSON,
    AppClipAdvancedExperienceLocalizationAttributesToJSONTyped,
} from './AppClipAdvancedExperienceLocalizationAttributes';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceLocalization
 */
export interface AppClipAdvancedExperienceLocalization {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceLocalization
     */
    type: AppClipAdvancedExperienceLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceLocalization
     */
    id: string;
    /**
     * 
     * @type {AppClipAdvancedExperienceLocalizationAttributes}
     * @memberof AppClipAdvancedExperienceLocalization
     */
    attributes?: AppClipAdvancedExperienceLocalizationAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppClipAdvancedExperienceLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceLocalizationTypeEnum = {
    AppClipAdvancedExperienceLocalizations: 'appClipAdvancedExperienceLocalizations'
} as const;
export type AppClipAdvancedExperienceLocalizationTypeEnum = typeof AppClipAdvancedExperienceLocalizationTypeEnum[keyof typeof AppClipAdvancedExperienceLocalizationTypeEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceLocalization interface.
 */
export function instanceOfAppClipAdvancedExperienceLocalization(value: object): value is AppClipAdvancedExperienceLocalization {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppClipAdvancedExperienceLocalizationFromJSON(json: any): AppClipAdvancedExperienceLocalization {
    return AppClipAdvancedExperienceLocalizationFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceLocalization {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppClipAdvancedExperienceLocalizationAttributesFromJSON(json['attributes']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppClipAdvancedExperienceLocalizationToJSON(json: any): AppClipAdvancedExperienceLocalization {
    return AppClipAdvancedExperienceLocalizationToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceLocalizationToJSONTyped(value?: AppClipAdvancedExperienceLocalization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppClipAdvancedExperienceLocalizationAttributesToJSON(value['attributes']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

