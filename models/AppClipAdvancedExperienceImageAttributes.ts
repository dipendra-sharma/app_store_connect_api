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
import type { UploadOperation } from './UploadOperation';
import {
    UploadOperationFromJSON,
    UploadOperationFromJSONTyped,
    UploadOperationToJSON,
    UploadOperationToJSONTyped,
} from './UploadOperation';
import type { AppMediaAssetState } from './AppMediaAssetState';
import {
    AppMediaAssetStateFromJSON,
    AppMediaAssetStateFromJSONTyped,
    AppMediaAssetStateToJSON,
    AppMediaAssetStateToJSONTyped,
} from './AppMediaAssetState';
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
 * @interface AppClipAdvancedExperienceImageAttributes
 */
export interface AppClipAdvancedExperienceImageAttributes {
    /**
     * 
     * @type {number}
     * @memberof AppClipAdvancedExperienceImageAttributes
     */
    fileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceImageAttributes
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceImageAttributes
     */
    sourceFileChecksum?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof AppClipAdvancedExperienceImageAttributes
     */
    imageAsset?: ImageAsset;
    /**
     * 
     * @type {Array<UploadOperation>}
     * @memberof AppClipAdvancedExperienceImageAttributes
     */
    uploadOperations?: Array<UploadOperation>;
    /**
     * 
     * @type {AppMediaAssetState}
     * @memberof AppClipAdvancedExperienceImageAttributes
     */
    assetDeliveryState?: AppMediaAssetState;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceImageAttributes interface.
 */
export function instanceOfAppClipAdvancedExperienceImageAttributes(value: object): value is AppClipAdvancedExperienceImageAttributes {
    return true;
}

export function AppClipAdvancedExperienceImageAttributesFromJSON(json: any): AppClipAdvancedExperienceImageAttributes {
    return AppClipAdvancedExperienceImageAttributesFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceImageAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceImageAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'fileSize': json['fileSize'] == null ? undefined : json['fileSize'],
        'fileName': json['fileName'] == null ? undefined : json['fileName'],
        'sourceFileChecksum': json['sourceFileChecksum'] == null ? undefined : json['sourceFileChecksum'],
        'imageAsset': json['imageAsset'] == null ? undefined : ImageAssetFromJSON(json['imageAsset']),
        'uploadOperations': json['uploadOperations'] == null ? undefined : ((json['uploadOperations'] as Array<any>).map(UploadOperationFromJSON)),
        'assetDeliveryState': json['assetDeliveryState'] == null ? undefined : AppMediaAssetStateFromJSON(json['assetDeliveryState']),
    };
}

export function AppClipAdvancedExperienceImageAttributesToJSON(json: any): AppClipAdvancedExperienceImageAttributes {
    return AppClipAdvancedExperienceImageAttributesToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceImageAttributesToJSONTyped(value?: AppClipAdvancedExperienceImageAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileSize': value['fileSize'],
        'fileName': value['fileName'],
        'sourceFileChecksum': value['sourceFileChecksum'],
        'imageAsset': ImageAssetToJSON(value['imageAsset']),
        'uploadOperations': value['uploadOperations'] == null ? undefined : ((value['uploadOperations'] as Array<any>).map(UploadOperationToJSON)),
        'assetDeliveryState': AppMediaAssetStateToJSON(value['assetDeliveryState']),
    };
}

