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
import type { BuildAudienceType } from './BuildAudienceType';
import {
    BuildAudienceTypeFromJSON,
    BuildAudienceTypeFromJSONTyped,
    BuildAudienceTypeToJSON,
    BuildAudienceTypeToJSONTyped,
} from './BuildAudienceType';
import type { ImageAsset } from './ImageAsset';
import {
    ImageAssetFromJSON,
    ImageAssetFromJSONTyped,
    ImageAssetToJSON,
    ImageAssetToJSONTyped,
} from './ImageAsset';

/**
 * 
 * @export
 * @interface BuildAttributes
 */
export interface BuildAttributes {
    /**
     * 
     * @type {string}
     * @memberof BuildAttributes
     */
    version?: string;
    /**
     * 
     * @type {Date}
     * @memberof BuildAttributes
     */
    uploadedDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BuildAttributes
     */
    expirationDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof BuildAttributes
     */
    expired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BuildAttributes
     */
    minOsVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildAttributes
     */
    lsMinimumSystemVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildAttributes
     */
    computedMinMacOsVersion?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof BuildAttributes
     */
    iconAssetToken?: ImageAsset;
    /**
     * 
     * @type {string}
     * @memberof BuildAttributes
     */
    processingState?: BuildAttributesProcessingStateEnum;
    /**
     * 
     * @type {BuildAudienceType}
     * @memberof BuildAttributes
     */
    buildAudienceType?: BuildAudienceType;
    /**
     * 
     * @type {boolean}
     * @memberof BuildAttributes
     */
    usesNonExemptEncryption?: boolean;
}


/**
 * @export
 */
export const BuildAttributesProcessingStateEnum = {
    Processing: 'PROCESSING',
    Failed: 'FAILED',
    Invalid: 'INVALID',
    Valid: 'VALID'
} as const;
export type BuildAttributesProcessingStateEnum = typeof BuildAttributesProcessingStateEnum[keyof typeof BuildAttributesProcessingStateEnum];


/**
 * Check if a given object implements the BuildAttributes interface.
 */
export function instanceOfBuildAttributes(value: object): value is BuildAttributes {
    return true;
}

export function BuildAttributesFromJSON(json: any): BuildAttributes {
    return BuildAttributesFromJSONTyped(json, false);
}

export function BuildAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'version': json['version'] == null ? undefined : json['version'],
        'uploadedDate': json['uploadedDate'] == null ? undefined : (new Date(json['uploadedDate'])),
        'expirationDate': json['expirationDate'] == null ? undefined : (new Date(json['expirationDate'])),
        'expired': json['expired'] == null ? undefined : json['expired'],
        'minOsVersion': json['minOsVersion'] == null ? undefined : json['minOsVersion'],
        'lsMinimumSystemVersion': json['lsMinimumSystemVersion'] == null ? undefined : json['lsMinimumSystemVersion'],
        'computedMinMacOsVersion': json['computedMinMacOsVersion'] == null ? undefined : json['computedMinMacOsVersion'],
        'iconAssetToken': json['iconAssetToken'] == null ? undefined : ImageAssetFromJSON(json['iconAssetToken']),
        'processingState': json['processingState'] == null ? undefined : json['processingState'],
        'buildAudienceType': json['buildAudienceType'] == null ? undefined : BuildAudienceTypeFromJSON(json['buildAudienceType']),
        'usesNonExemptEncryption': json['usesNonExemptEncryption'] == null ? undefined : json['usesNonExemptEncryption'],
    };
}

export function BuildAttributesToJSON(json: any): BuildAttributes {
    return BuildAttributesToJSONTyped(json, false);
}

export function BuildAttributesToJSONTyped(value?: BuildAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'version': value['version'],
        'uploadedDate': value['uploadedDate'] == null ? undefined : ((value['uploadedDate']).toISOString()),
        'expirationDate': value['expirationDate'] == null ? undefined : ((value['expirationDate']).toISOString()),
        'expired': value['expired'],
        'minOsVersion': value['minOsVersion'],
        'lsMinimumSystemVersion': value['lsMinimumSystemVersion'],
        'computedMinMacOsVersion': value['computedMinMacOsVersion'],
        'iconAssetToken': ImageAssetToJSON(value['iconAssetToken']),
        'processingState': value['processingState'],
        'buildAudienceType': BuildAudienceTypeToJSON(value['buildAudienceType']),
        'usesNonExemptEncryption': value['usesNonExemptEncryption'],
    };
}

