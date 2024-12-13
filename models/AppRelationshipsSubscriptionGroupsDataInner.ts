
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
/**
 * 
 * @export
 * @interface AppRelationshipsSubscriptionGroupsDataInner
 */
export interface AppRelationshipsSubscriptionGroupsDataInner {
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsSubscriptionGroupsDataInner
     */
    type: AppRelationshipsSubscriptionGroupsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsSubscriptionGroupsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const AppRelationshipsSubscriptionGroupsDataInnerTypeEnum = {
    SubscriptionGroups: 'subscriptionGroups'
} as const;
export type AppRelationshipsSubscriptionGroupsDataInnerTypeEnum = typeof AppRelationshipsSubscriptionGroupsDataInnerTypeEnum[keyof typeof AppRelationshipsSubscriptionGroupsDataInnerTypeEnum];


/**
 * Check if a given object implements the AppRelationshipsSubscriptionGroupsDataInner interface.
 */
export function instanceOfAppRelationshipsSubscriptionGroupsDataInner(value: object): value is AppRelationshipsSubscriptionGroupsDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppRelationshipsSubscriptionGroupsDataInnerFromJSON(json: any): AppRelationshipsSubscriptionGroupsDataInner {
    return AppRelationshipsSubscriptionGroupsDataInnerFromJSONTyped(json, false);
}

export function AppRelationshipsSubscriptionGroupsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsSubscriptionGroupsDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppRelationshipsSubscriptionGroupsDataInnerToJSON(json: any): AppRelationshipsSubscriptionGroupsDataInner {
    return AppRelationshipsSubscriptionGroupsDataInnerToJSONTyped(json, false);
}

export function AppRelationshipsSubscriptionGroupsDataInnerToJSONTyped(value?: AppRelationshipsSubscriptionGroupsDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
