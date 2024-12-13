
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
import type { PhasedReleaseState } from './PhasedReleaseState';
import {
    PhasedReleaseStateFromJSON,
    PhasedReleaseStateFromJSONTyped,
    PhasedReleaseStateToJSON,
    PhasedReleaseStateToJSONTyped,
} from './PhasedReleaseState';

/**
 * 
 * @export
 * @interface AppStoreVersionPhasedReleaseAttributes
 */
export interface AppStoreVersionPhasedReleaseAttributes {
    /**
     * 
     * @type {PhasedReleaseState}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    phasedReleaseState?: PhasedReleaseState;
    /**
     * 
     * @type {Date}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    startDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    totalPauseDuration?: number;
    /**
     * 
     * @type {number}
     * @memberof AppStoreVersionPhasedReleaseAttributes
     */
    currentDayNumber?: number;
}



/**
 * Check if a given object implements the AppStoreVersionPhasedReleaseAttributes interface.
 */
export function instanceOfAppStoreVersionPhasedReleaseAttributes(value: object): value is AppStoreVersionPhasedReleaseAttributes {
    return true;
}

export function AppStoreVersionPhasedReleaseAttributesFromJSON(json: any): AppStoreVersionPhasedReleaseAttributes {
    return AppStoreVersionPhasedReleaseAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionPhasedReleaseAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionPhasedReleaseAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'phasedReleaseState': json['phasedReleaseState'] == null ? undefined : PhasedReleaseStateFromJSON(json['phasedReleaseState']),
        'startDate': json['startDate'] == null ? undefined : (new Date(json['startDate'])),
        'totalPauseDuration': json['totalPauseDuration'] == null ? undefined : json['totalPauseDuration'],
        'currentDayNumber': json['currentDayNumber'] == null ? undefined : json['currentDayNumber'],
    };
}

export function AppStoreVersionPhasedReleaseAttributesToJSON(json: any): AppStoreVersionPhasedReleaseAttributes {
    return AppStoreVersionPhasedReleaseAttributesToJSONTyped(json, false);
}

export function AppStoreVersionPhasedReleaseAttributesToJSONTyped(value?: AppStoreVersionPhasedReleaseAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'phasedReleaseState': PhasedReleaseStateToJSON(value['phasedReleaseState']),
        'startDate': value['startDate'] == null ? undefined : ((value['startDate']).toISOString()),
        'totalPauseDuration': value['totalPauseDuration'],
        'currentDayNumber': value['currentDayNumber'],
    };
}

