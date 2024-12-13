
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
 * @interface BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData
 */
export interface BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData
     */
    type: BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData
     */
    id: string;
}


/**
 * @export
 */
export const BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataTypeEnum = {
    BuildBundles: 'buildBundles'
} as const;
export type BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataTypeEnum = typeof BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataTypeEnum[keyof typeof BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataTypeEnum];


/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData interface.
 */
export function instanceOfBetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData(value: object): value is BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSON(json: any): BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData {
    return BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataToJSON(json: any): BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData {
    return BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataToJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleDataToJSONTyped(value?: BetaAppClipInvocationCreateRequestDataRelationshipsBuildBundleData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
