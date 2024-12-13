
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
 * @interface AppRelationshipsBetaAppReviewDetailData
 */
export interface AppRelationshipsBetaAppReviewDetailData {
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsBetaAppReviewDetailData
     */
    type: AppRelationshipsBetaAppReviewDetailDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppRelationshipsBetaAppReviewDetailData
     */
    id: string;
}


/**
 * @export
 */
export const AppRelationshipsBetaAppReviewDetailDataTypeEnum = {
    BetaAppReviewDetails: 'betaAppReviewDetails'
} as const;
export type AppRelationshipsBetaAppReviewDetailDataTypeEnum = typeof AppRelationshipsBetaAppReviewDetailDataTypeEnum[keyof typeof AppRelationshipsBetaAppReviewDetailDataTypeEnum];


/**
 * Check if a given object implements the AppRelationshipsBetaAppReviewDetailData interface.
 */
export function instanceOfAppRelationshipsBetaAppReviewDetailData(value: object): value is AppRelationshipsBetaAppReviewDetailData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppRelationshipsBetaAppReviewDetailDataFromJSON(json: any): AppRelationshipsBetaAppReviewDetailData {
    return AppRelationshipsBetaAppReviewDetailDataFromJSONTyped(json, false);
}

export function AppRelationshipsBetaAppReviewDetailDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsBetaAppReviewDetailData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppRelationshipsBetaAppReviewDetailDataToJSON(json: any): AppRelationshipsBetaAppReviewDetailData {
    return AppRelationshipsBetaAppReviewDetailDataToJSONTyped(json, false);
}

export function AppRelationshipsBetaAppReviewDetailDataToJSONTyped(value?: AppRelationshipsBetaAppReviewDetailData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
