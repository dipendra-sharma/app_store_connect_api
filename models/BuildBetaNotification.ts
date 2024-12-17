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

/**
 * 
 * @export
 * @interface BuildBetaNotification
 */
export interface BuildBetaNotification {
    /**
     * 
     * @type {string}
     * @memberof BuildBetaNotification
     */
    type: BuildBetaNotificationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildBetaNotification
     */
    id: string;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BuildBetaNotification
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BuildBetaNotificationTypeEnum = {
    BuildBetaNotifications: 'buildBetaNotifications'
} as const;
export type BuildBetaNotificationTypeEnum = typeof BuildBetaNotificationTypeEnum[keyof typeof BuildBetaNotificationTypeEnum];


/**
 * Check if a given object implements the BuildBetaNotification interface.
 */
export function instanceOfBuildBetaNotification(value: object): value is BuildBetaNotification {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BuildBetaNotificationFromJSON(json: any): BuildBetaNotification {
    return BuildBetaNotificationFromJSONTyped(json, false);
}

export function BuildBetaNotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaNotification {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BuildBetaNotificationToJSON(json: any): BuildBetaNotification {
    return BuildBetaNotificationToJSONTyped(json, false);
}

export function BuildBetaNotificationToJSONTyped(value?: BuildBetaNotification | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'links': ResourceLinksToJSON(value['links']),
    };
}

