
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
import type { AppCustomProductPageRelationships } from './AppCustomProductPageRelationships';
import {
    AppCustomProductPageRelationshipsFromJSON,
    AppCustomProductPageRelationshipsFromJSONTyped,
    AppCustomProductPageRelationshipsToJSON,
    AppCustomProductPageRelationshipsToJSONTyped,
} from './AppCustomProductPageRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { AppCustomProductPageAttributes } from './AppCustomProductPageAttributes';
import {
    AppCustomProductPageAttributesFromJSON,
    AppCustomProductPageAttributesFromJSONTyped,
    AppCustomProductPageAttributesToJSON,
    AppCustomProductPageAttributesToJSONTyped,
} from './AppCustomProductPageAttributes';

/**
 * 
 * @export
 * @interface AppCustomProductPage
 */
export interface AppCustomProductPage {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPage
     */
    type: AppCustomProductPageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPage
     */
    id: string;
    /**
     * 
     * @type {AppCustomProductPageAttributes}
     * @memberof AppCustomProductPage
     */
    attributes?: AppCustomProductPageAttributes;
    /**
     * 
     * @type {AppCustomProductPageRelationships}
     * @memberof AppCustomProductPage
     */
    relationships?: AppCustomProductPageRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppCustomProductPage
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppCustomProductPageTypeEnum = {
    AppCustomProductPages: 'appCustomProductPages'
} as const;
export type AppCustomProductPageTypeEnum = typeof AppCustomProductPageTypeEnum[keyof typeof AppCustomProductPageTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPage interface.
 */
export function instanceOfAppCustomProductPage(value: object): value is AppCustomProductPage {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppCustomProductPageFromJSON(json: any): AppCustomProductPage {
    return AppCustomProductPageFromJSONTyped(json, false);
}

export function AppCustomProductPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPage {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppCustomProductPageAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppCustomProductPageRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppCustomProductPageToJSON(json: any): AppCustomProductPage {
    return AppCustomProductPageToJSONTyped(json, false);
}

export function AppCustomProductPageToJSONTyped(value?: AppCustomProductPage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppCustomProductPageAttributesToJSON(value['attributes']),
        'relationships': AppCustomProductPageRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
