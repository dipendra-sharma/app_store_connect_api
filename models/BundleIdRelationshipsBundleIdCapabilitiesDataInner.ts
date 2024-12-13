
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
 * @interface BundleIdRelationshipsBundleIdCapabilitiesDataInner
 */
export interface BundleIdRelationshipsBundleIdCapabilitiesDataInner {
    /**
     * 
     * @type {string}
     * @memberof BundleIdRelationshipsBundleIdCapabilitiesDataInner
     */
    type: BundleIdRelationshipsBundleIdCapabilitiesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BundleIdRelationshipsBundleIdCapabilitiesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const BundleIdRelationshipsBundleIdCapabilitiesDataInnerTypeEnum = {
    BundleIdCapabilities: 'bundleIdCapabilities'
} as const;
export type BundleIdRelationshipsBundleIdCapabilitiesDataInnerTypeEnum = typeof BundleIdRelationshipsBundleIdCapabilitiesDataInnerTypeEnum[keyof typeof BundleIdRelationshipsBundleIdCapabilitiesDataInnerTypeEnum];


/**
 * Check if a given object implements the BundleIdRelationshipsBundleIdCapabilitiesDataInner interface.
 */
export function instanceOfBundleIdRelationshipsBundleIdCapabilitiesDataInner(value: object): value is BundleIdRelationshipsBundleIdCapabilitiesDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSON(json: any): BundleIdRelationshipsBundleIdCapabilitiesDataInner {
    return BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSONTyped(json, false);
}

export function BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdRelationshipsBundleIdCapabilitiesDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BundleIdRelationshipsBundleIdCapabilitiesDataInnerToJSON(json: any): BundleIdRelationshipsBundleIdCapabilitiesDataInner {
    return BundleIdRelationshipsBundleIdCapabilitiesDataInnerToJSONTyped(json, false);
}

export function BundleIdRelationshipsBundleIdCapabilitiesDataInnerToJSONTyped(value?: BundleIdRelationshipsBundleIdCapabilitiesDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
