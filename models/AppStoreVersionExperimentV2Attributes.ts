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
import type { Platform } from './Platform';
import {
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
    PlatformToJSONTyped,
} from './Platform';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentV2Attributes
 */
export interface AppStoreVersionExperimentV2Attributes {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentV2Attributes
     */
    name?: string;
    /**
     * 
     * @type {Platform}
     * @memberof AppStoreVersionExperimentV2Attributes
     */
    platform?: Platform;
    /**
     * 
     * @type {number}
     * @memberof AppStoreVersionExperimentV2Attributes
     */
    trafficProportion?: number;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentV2Attributes
     */
    state?: AppStoreVersionExperimentV2AttributesStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof AppStoreVersionExperimentV2Attributes
     */
    reviewRequired?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof AppStoreVersionExperimentV2Attributes
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AppStoreVersionExperimentV2Attributes
     */
    endDate?: Date;
}


/**
 * @export
 */
export const AppStoreVersionExperimentV2AttributesStateEnum = {
    PrepareForSubmission: 'PREPARE_FOR_SUBMISSION',
    ReadyForReview: 'READY_FOR_REVIEW',
    WaitingForReview: 'WAITING_FOR_REVIEW',
    InReview: 'IN_REVIEW',
    Accepted: 'ACCEPTED',
    Approved: 'APPROVED',
    Rejected: 'REJECTED',
    Completed: 'COMPLETED',
    Stopped: 'STOPPED'
} as const;
export type AppStoreVersionExperimentV2AttributesStateEnum = typeof AppStoreVersionExperimentV2AttributesStateEnum[keyof typeof AppStoreVersionExperimentV2AttributesStateEnum];


/**
 * Check if a given object implements the AppStoreVersionExperimentV2Attributes interface.
 */
export function instanceOfAppStoreVersionExperimentV2Attributes(value: object): value is AppStoreVersionExperimentV2Attributes {
    return true;
}

export function AppStoreVersionExperimentV2AttributesFromJSON(json: any): AppStoreVersionExperimentV2Attributes {
    return AppStoreVersionExperimentV2AttributesFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2AttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2Attributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'platform': json['platform'] == null ? undefined : PlatformFromJSON(json['platform']),
        'trafficProportion': json['trafficProportion'] == null ? undefined : json['trafficProportion'],
        'state': json['state'] == null ? undefined : json['state'],
        'reviewRequired': json['reviewRequired'] == null ? undefined : json['reviewRequired'],
        'startDate': json['startDate'] == null ? undefined : (new Date(json['startDate'])),
        'endDate': json['endDate'] == null ? undefined : (new Date(json['endDate'])),
    };
}

export function AppStoreVersionExperimentV2AttributesToJSON(json: any): AppStoreVersionExperimentV2Attributes {
    return AppStoreVersionExperimentV2AttributesToJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2AttributesToJSONTyped(value?: AppStoreVersionExperimentV2Attributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'platform': PlatformToJSON(value['platform']),
        'trafficProportion': value['trafficProportion'],
        'state': value['state'],
        'reviewRequired': value['reviewRequired'],
        'startDate': value['startDate'] == null ? undefined : ((value['startDate']).toISOString()),
        'endDate': value['endDate'] == null ? undefined : ((value['endDate']).toISOString()),
    };
}

