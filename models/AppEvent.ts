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
import type { AppEventAttributes } from './AppEventAttributes';
import {
    AppEventAttributesFromJSON,
    AppEventAttributesFromJSONTyped,
    AppEventAttributesToJSON,
    AppEventAttributesToJSONTyped,
} from './AppEventAttributes';
import type { AppEventRelationships } from './AppEventRelationships';
import {
    AppEventRelationshipsFromJSON,
    AppEventRelationshipsFromJSONTyped,
    AppEventRelationshipsToJSON,
    AppEventRelationshipsToJSONTyped,
} from './AppEventRelationships';
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
 * @interface AppEvent
 */
export interface AppEvent {
    /**
     * 
     * @type {string}
     * @memberof AppEvent
     */
    type: AppEventTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEvent
     */
    id: string;
    /**
     * 
     * @type {AppEventAttributes}
     * @memberof AppEvent
     */
    attributes?: AppEventAttributes;
    /**
     * 
     * @type {AppEventRelationships}
     * @memberof AppEvent
     */
    relationships?: AppEventRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppEvent
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppEventTypeEnum = {
    AppEvents: 'appEvents'
} as const;
export type AppEventTypeEnum = typeof AppEventTypeEnum[keyof typeof AppEventTypeEnum];


/**
 * Check if a given object implements the AppEvent interface.
 */
export function instanceOfAppEvent(value: object): value is AppEvent {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppEventFromJSON(json: any): AppEvent {
    return AppEventFromJSONTyped(json, false);
}

export function AppEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEvent {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppEventAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppEventRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppEventToJSON(json: any): AppEvent {
    return AppEventToJSONTyped(json, false);
}

export function AppEventToJSONTyped(value?: AppEvent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppEventAttributesToJSON(value['attributes']),
        'relationships': AppEventRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

