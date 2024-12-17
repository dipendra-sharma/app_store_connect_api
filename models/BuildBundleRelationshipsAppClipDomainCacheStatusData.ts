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
 * @interface BuildBundleRelationshipsAppClipDomainCacheStatusData
 */
export interface BuildBundleRelationshipsAppClipDomainCacheStatusData {
    /**
     * 
     * @type {string}
     * @memberof BuildBundleRelationshipsAppClipDomainCacheStatusData
     */
    type: BuildBundleRelationshipsAppClipDomainCacheStatusDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildBundleRelationshipsAppClipDomainCacheStatusData
     */
    id: string;
}


/**
 * @export
 */
export const BuildBundleRelationshipsAppClipDomainCacheStatusDataTypeEnum = {
    AppClipDomainStatuses: 'appClipDomainStatuses'
} as const;
export type BuildBundleRelationshipsAppClipDomainCacheStatusDataTypeEnum = typeof BuildBundleRelationshipsAppClipDomainCacheStatusDataTypeEnum[keyof typeof BuildBundleRelationshipsAppClipDomainCacheStatusDataTypeEnum];


/**
 * Check if a given object implements the BuildBundleRelationshipsAppClipDomainCacheStatusData interface.
 */
export function instanceOfBuildBundleRelationshipsAppClipDomainCacheStatusData(value: object): value is BuildBundleRelationshipsAppClipDomainCacheStatusData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BuildBundleRelationshipsAppClipDomainCacheStatusDataFromJSON(json: any): BuildBundleRelationshipsAppClipDomainCacheStatusData {
    return BuildBundleRelationshipsAppClipDomainCacheStatusDataFromJSONTyped(json, false);
}

export function BuildBundleRelationshipsAppClipDomainCacheStatusDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBundleRelationshipsAppClipDomainCacheStatusData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BuildBundleRelationshipsAppClipDomainCacheStatusDataToJSON(json: any): BuildBundleRelationshipsAppClipDomainCacheStatusData {
    return BuildBundleRelationshipsAppClipDomainCacheStatusDataToJSONTyped(json, false);
}

export function BuildBundleRelationshipsAppClipDomainCacheStatusDataToJSONTyped(value?: BuildBundleRelationshipsAppClipDomainCacheStatusData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

