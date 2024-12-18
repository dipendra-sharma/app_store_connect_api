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
import type { AppClipDomainStatusAttributes } from './AppClipDomainStatusAttributes';
import {
    AppClipDomainStatusAttributesFromJSON,
    AppClipDomainStatusAttributesFromJSONTyped,
    AppClipDomainStatusAttributesToJSON,
    AppClipDomainStatusAttributesToJSONTyped,
} from './AppClipDomainStatusAttributes';
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
 * @interface AppClipDomainStatus
 */
export interface AppClipDomainStatus {
    /**
     * 
     * @type {string}
     * @memberof AppClipDomainStatus
     */
    type: AppClipDomainStatusTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipDomainStatus
     */
    id: string;
    /**
     * 
     * @type {AppClipDomainStatusAttributes}
     * @memberof AppClipDomainStatus
     */
    attributes?: AppClipDomainStatusAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppClipDomainStatus
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppClipDomainStatusTypeEnum = {
    AppClipDomainStatuses: 'appClipDomainStatuses'
} as const;
export type AppClipDomainStatusTypeEnum = typeof AppClipDomainStatusTypeEnum[keyof typeof AppClipDomainStatusTypeEnum];


/**
 * Check if a given object implements the AppClipDomainStatus interface.
 */
export function instanceOfAppClipDomainStatus(value: object): value is AppClipDomainStatus {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppClipDomainStatusFromJSON(json: any): AppClipDomainStatus {
    return AppClipDomainStatusFromJSONTyped(json, false);
}

export function AppClipDomainStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDomainStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppClipDomainStatusAttributesFromJSON(json['attributes']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppClipDomainStatusToJSON(json: any): AppClipDomainStatus {
    return AppClipDomainStatusToJSONTyped(json, false);
}

export function AppClipDomainStatusToJSONTyped(value?: AppClipDomainStatus | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppClipDomainStatusAttributesToJSON(value['attributes']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

