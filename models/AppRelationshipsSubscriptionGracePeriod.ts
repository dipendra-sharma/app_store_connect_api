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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
import type { AppRelationshipsSubscriptionGracePeriodData } from './AppRelationshipsSubscriptionGracePeriodData';
import {
    AppRelationshipsSubscriptionGracePeriodDataFromJSON,
    AppRelationshipsSubscriptionGracePeriodDataFromJSONTyped,
    AppRelationshipsSubscriptionGracePeriodDataToJSON,
    AppRelationshipsSubscriptionGracePeriodDataToJSONTyped,
} from './AppRelationshipsSubscriptionGracePeriodData';

/**
 * 
 * @export
 * @interface AppRelationshipsSubscriptionGracePeriod
 */
export interface AppRelationshipsSubscriptionGracePeriod {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppRelationshipsSubscriptionGracePeriod
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppRelationshipsSubscriptionGracePeriodData}
     * @memberof AppRelationshipsSubscriptionGracePeriod
     */
    data?: AppRelationshipsSubscriptionGracePeriodData;
}

/**
 * Check if a given object implements the AppRelationshipsSubscriptionGracePeriod interface.
 */
export function instanceOfAppRelationshipsSubscriptionGracePeriod(value: object): value is AppRelationshipsSubscriptionGracePeriod {
    return true;
}

export function AppRelationshipsSubscriptionGracePeriodFromJSON(json: any): AppRelationshipsSubscriptionGracePeriod {
    return AppRelationshipsSubscriptionGracePeriodFromJSONTyped(json, false);
}

export function AppRelationshipsSubscriptionGracePeriodFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsSubscriptionGracePeriod {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : AppRelationshipsSubscriptionGracePeriodDataFromJSON(json['data']),
    };
}

export function AppRelationshipsSubscriptionGracePeriodToJSON(json: any): AppRelationshipsSubscriptionGracePeriod {
    return AppRelationshipsSubscriptionGracePeriodToJSONTyped(json, false);
}

export function AppRelationshipsSubscriptionGracePeriodToJSONTyped(value?: AppRelationshipsSubscriptionGracePeriod | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': AppRelationshipsSubscriptionGracePeriodDataToJSON(value['data']),
    };
}

