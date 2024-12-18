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
import type { AppScreenshotRelationships } from './AppScreenshotRelationships';
import {
    AppScreenshotRelationshipsFromJSON,
    AppScreenshotRelationshipsFromJSONTyped,
    AppScreenshotRelationshipsToJSON,
    AppScreenshotRelationshipsToJSONTyped,
} from './AppScreenshotRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { AppScreenshotAttributes } from './AppScreenshotAttributes';
import {
    AppScreenshotAttributesFromJSON,
    AppScreenshotAttributesFromJSONTyped,
    AppScreenshotAttributesToJSON,
    AppScreenshotAttributesToJSONTyped,
} from './AppScreenshotAttributes';

/**
 * 
 * @export
 * @interface AppScreenshot
 */
export interface AppScreenshot {
    /**
     * 
     * @type {string}
     * @memberof AppScreenshot
     */
    type: AppScreenshotTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppScreenshot
     */
    id: string;
    /**
     * 
     * @type {AppScreenshotAttributes}
     * @memberof AppScreenshot
     */
    attributes?: AppScreenshotAttributes;
    /**
     * 
     * @type {AppScreenshotRelationships}
     * @memberof AppScreenshot
     */
    relationships?: AppScreenshotRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppScreenshot
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppScreenshotTypeEnum = {
    AppScreenshots: 'appScreenshots'
} as const;
export type AppScreenshotTypeEnum = typeof AppScreenshotTypeEnum[keyof typeof AppScreenshotTypeEnum];


/**
 * Check if a given object implements the AppScreenshot interface.
 */
export function instanceOfAppScreenshot(value: object): value is AppScreenshot {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppScreenshotFromJSON(json: any): AppScreenshot {
    return AppScreenshotFromJSONTyped(json, false);
}

export function AppScreenshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshot {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppScreenshotAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppScreenshotRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppScreenshotToJSON(json: any): AppScreenshot {
    return AppScreenshotToJSONTyped(json, false);
}

export function AppScreenshotToJSONTyped(value?: AppScreenshot | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppScreenshotAttributesToJSON(value['attributes']),
        'relationships': AppScreenshotRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

