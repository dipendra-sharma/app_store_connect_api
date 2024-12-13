
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
import type { AppPriceScheduleRelationships } from './AppPriceScheduleRelationships';
import {
    AppPriceScheduleRelationshipsFromJSON,
    AppPriceScheduleRelationshipsFromJSONTyped,
    AppPriceScheduleRelationshipsToJSON,
    AppPriceScheduleRelationshipsToJSONTyped,
} from './AppPriceScheduleRelationships';

/**
 * 
 * @export
 * @interface AppPriceSchedule
 */
export interface AppPriceSchedule {
    /**
     * 
     * @type {string}
     * @memberof AppPriceSchedule
     */
    type: AppPriceScheduleTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPriceSchedule
     */
    id: string;
    /**
     * 
     * @type {AppPriceScheduleRelationships}
     * @memberof AppPriceSchedule
     */
    relationships?: AppPriceScheduleRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppPriceSchedule
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppPriceScheduleTypeEnum = {
    AppPriceSchedules: 'appPriceSchedules'
} as const;
export type AppPriceScheduleTypeEnum = typeof AppPriceScheduleTypeEnum[keyof typeof AppPriceScheduleTypeEnum];


/**
 * Check if a given object implements the AppPriceSchedule interface.
 */
export function instanceOfAppPriceSchedule(value: object): value is AppPriceSchedule {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppPriceScheduleFromJSON(json: any): AppPriceSchedule {
    return AppPriceScheduleFromJSONTyped(json, false);
}

export function AppPriceScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceSchedule {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'relationships': json['relationships'] == null ? undefined : AppPriceScheduleRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppPriceScheduleToJSON(json: any): AppPriceSchedule {
    return AppPriceScheduleToJSONTyped(json, false);
}

export function AppPriceScheduleToJSONTyped(value?: AppPriceSchedule | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'relationships': AppPriceScheduleRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

