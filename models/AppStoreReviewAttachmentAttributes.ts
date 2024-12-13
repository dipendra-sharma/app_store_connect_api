
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

/**
 * 
 * @export
 * @interface AppStoreReviewAttachmentAttributes
 */
export interface AppStoreReviewAttachmentAttributes {
    /**
     * 
     * @type {number}
     * @memberof AppStoreReviewAttachmentAttributes
     */
    fileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentAttributes
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof AppStoreReviewAttachmentAttributes
     */
    sourceFileChecksum?: string;
    /**
     * 
     * @type {Array<UploadOperation>}
     * @memberof AppStoreReviewAttachmentAttributes
     */
    uploadOperations?: Array<UploadOperation>;
    /**
     * 
     * @type {AppMediaAssetState}
     * @memberof AppStoreReviewAttachmentAttributes
     */
    assetDeliveryState?: AppMediaAssetState;
}

/**
 * Check if a given object implements the AppStoreReviewAttachmentAttributes interface.
 */
export function instanceOfAppStoreReviewAttachmentAttributes(value: object): value is AppStoreReviewAttachmentAttributes {
    return true;
}

export function AppStoreReviewAttachmentAttributesFromJSON(json: any): AppStoreReviewAttachmentAttributes {
    return AppStoreReviewAttachmentAttributesFromJSONTyped(json, false);
}

export function AppStoreReviewAttachmentAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreReviewAttachmentAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'fileSize': json['fileSize'] == null ? undefined : json['fileSize'],
        'fileName': json['fileName'] == null ? undefined : json['fileName'],
        'sourceFileChecksum': json['sourceFileChecksum'] == null ? undefined : json['sourceFileChecksum'],
        'uploadOperations': json['uploadOperations'] == null ? undefined : ((json['uploadOperations'] as Array<any>).map(UploadOperationFromJSON)),
        'assetDeliveryState': json['assetDeliveryState'] == null ? undefined : AppMediaAssetStateFromJSON(json['assetDeliveryState']),
    };
}

export function AppStoreReviewAttachmentAttributesToJSON(json: any): AppStoreReviewAttachmentAttributes {
    return AppStoreReviewAttachmentAttributesToJSONTyped(json, false);
}

export function AppStoreReviewAttachmentAttributesToJSONTyped(value?: AppStoreReviewAttachmentAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileSize': value['fileSize'],
        'fileName': value['fileName'],
        'sourceFileChecksum': value['sourceFileChecksum'],
        'uploadOperations': value['uploadOperations'] == null ? undefined : ((value['uploadOperations'] as Array<any>).map(UploadOperationToJSON)),
        'assetDeliveryState': AppMediaAssetStateToJSON(value['assetDeliveryState']),
    };
}
