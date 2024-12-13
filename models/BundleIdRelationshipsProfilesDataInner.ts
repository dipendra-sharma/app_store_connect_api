
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
 * @interface BundleIdRelationshipsProfilesDataInner
 */
export interface BundleIdRelationshipsProfilesDataInner {
    /**
     * 
     * @type {string}
     * @memberof BundleIdRelationshipsProfilesDataInner
     */
    type: BundleIdRelationshipsProfilesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BundleIdRelationshipsProfilesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const BundleIdRelationshipsProfilesDataInnerTypeEnum = {
    Profiles: 'profiles'
} as const;
export type BundleIdRelationshipsProfilesDataInnerTypeEnum = typeof BundleIdRelationshipsProfilesDataInnerTypeEnum[keyof typeof BundleIdRelationshipsProfilesDataInnerTypeEnum];


/**
 * Check if a given object implements the BundleIdRelationshipsProfilesDataInner interface.
 */
export function instanceOfBundleIdRelationshipsProfilesDataInner(value: object): value is BundleIdRelationshipsProfilesDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BundleIdRelationshipsProfilesDataInnerFromJSON(json: any): BundleIdRelationshipsProfilesDataInner {
    return BundleIdRelationshipsProfilesDataInnerFromJSONTyped(json, false);
}

export function BundleIdRelationshipsProfilesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdRelationshipsProfilesDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BundleIdRelationshipsProfilesDataInnerToJSON(json: any): BundleIdRelationshipsProfilesDataInner {
    return BundleIdRelationshipsProfilesDataInnerToJSONTyped(json, false);
}

export function BundleIdRelationshipsProfilesDataInnerToJSONTyped(value?: BundleIdRelationshipsProfilesDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

