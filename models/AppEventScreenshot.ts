
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
import type { AppEventScreenshotRelationships } from './AppEventScreenshotRelationships';
import {
    AppEventScreenshotRelationshipsFromJSON,
    AppEventScreenshotRelationshipsFromJSONTyped,
    AppEventScreenshotRelationshipsToJSON,
    AppEventScreenshotRelationshipsToJSONTyped,
} from './AppEventScreenshotRelationships';
import type { AppEventScreenshotAttributes } from './AppEventScreenshotAttributes';
import {
    AppEventScreenshotAttributesFromJSON,
    AppEventScreenshotAttributesFromJSONTyped,
    AppEventScreenshotAttributesToJSON,
    AppEventScreenshotAttributesToJSONTyped,
} from './AppEventScreenshotAttributes';
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
 * @interface AppEventScreenshot
 */
export interface AppEventScreenshot {
    /**
     * 
     * @type {string}
     * @memberof AppEventScreenshot
     */
    type: AppEventScreenshotTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEventScreenshot
     */
    id: string;
    /**
     * 
     * @type {AppEventScreenshotAttributes}
     * @memberof AppEventScreenshot
     */
    attributes?: AppEventScreenshotAttributes;
    /**
     * 
     * @type {AppEventScreenshotRelationships}
     * @memberof AppEventScreenshot
     */
    relationships?: AppEventScreenshotRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppEventScreenshot
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppEventScreenshotTypeEnum = {
    AppEventScreenshots: 'appEventScreenshots'
} as const;
export type AppEventScreenshotTypeEnum = typeof AppEventScreenshotTypeEnum[keyof typeof AppEventScreenshotTypeEnum];


/**
 * Check if a given object implements the AppEventScreenshot interface.
 */
export function instanceOfAppEventScreenshot(value: object): value is AppEventScreenshot {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppEventScreenshotFromJSON(json: any): AppEventScreenshot {
    return AppEventScreenshotFromJSONTyped(json, false);
}

export function AppEventScreenshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventScreenshot {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppEventScreenshotAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppEventScreenshotRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppEventScreenshotToJSON(json: any): AppEventScreenshot {
    return AppEventScreenshotToJSONTyped(json, false);
}

export function AppEventScreenshotToJSONTyped(value?: AppEventScreenshot | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppEventScreenshotAttributesToJSON(value['attributes']),
        'relationships': AppEventScreenshotRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

