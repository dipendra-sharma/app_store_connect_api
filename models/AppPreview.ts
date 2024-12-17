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
import type { AppPreviewAttributes } from './AppPreviewAttributes';
import {
    AppPreviewAttributesFromJSON,
    AppPreviewAttributesFromJSONTyped,
    AppPreviewAttributesToJSON,
    AppPreviewAttributesToJSONTyped,
} from './AppPreviewAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { AppPreviewRelationships } from './AppPreviewRelationships';
import {
    AppPreviewRelationshipsFromJSON,
    AppPreviewRelationshipsFromJSONTyped,
    AppPreviewRelationshipsToJSON,
    AppPreviewRelationshipsToJSONTyped,
} from './AppPreviewRelationships';

/**
 * 
 * @export
 * @interface AppPreview
 */
export interface AppPreview {
    /**
     * 
     * @type {string}
     * @memberof AppPreview
     */
    type: AppPreviewTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPreview
     */
    id: string;
    /**
     * 
     * @type {AppPreviewAttributes}
     * @memberof AppPreview
     */
    attributes?: AppPreviewAttributes;
    /**
     * 
     * @type {AppPreviewRelationships}
     * @memberof AppPreview
     */
    relationships?: AppPreviewRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppPreview
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppPreviewTypeEnum = {
    AppPreviews: 'appPreviews'
} as const;
export type AppPreviewTypeEnum = typeof AppPreviewTypeEnum[keyof typeof AppPreviewTypeEnum];


/**
 * Check if a given object implements the AppPreview interface.
 */
export function instanceOfAppPreview(value: object): value is AppPreview {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppPreviewFromJSON(json: any): AppPreview {
    return AppPreviewFromJSONTyped(json, false);
}

export function AppPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreview {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppPreviewAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppPreviewRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppPreviewToJSON(json: any): AppPreview {
    return AppPreviewToJSONTyped(json, false);
}

export function AppPreviewToJSONTyped(value?: AppPreview | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppPreviewAttributesToJSON(value['attributes']),
        'relationships': AppPreviewRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

