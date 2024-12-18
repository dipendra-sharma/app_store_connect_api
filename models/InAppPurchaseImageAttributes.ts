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
 * @interface InAppPurchaseImageAttributes
 */
export interface InAppPurchaseImageAttributes {
    /**
     * 
     * @type {number}
     * @memberof InAppPurchaseImageAttributes
     */
    fileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageAttributes
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageAttributes
     */
    sourceFileChecksum?: string;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageAttributes
     */
    assetToken?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof InAppPurchaseImageAttributes
     */
    imageAsset?: ImageAsset;
    /**
     * 
     * @type {Array<UploadOperation>}
     * @memberof InAppPurchaseImageAttributes
     */
    uploadOperations?: Array<UploadOperation>;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImageAttributes
     */
    state?: InAppPurchaseImageAttributesStateEnum;
}


/**
 * @export
 */
export const InAppPurchaseImageAttributesStateEnum = {
    AwaitingUpload: 'AWAITING_UPLOAD',
    UploadComplete: 'UPLOAD_COMPLETE',
    Failed: 'FAILED',
    PrepareForSubmission: 'PREPARE_FOR_SUBMISSION',
    WaitingForReview: 'WAITING_FOR_REVIEW',
    Approved: 'APPROVED',
    Rejected: 'REJECTED'
} as const;
export type InAppPurchaseImageAttributesStateEnum = typeof InAppPurchaseImageAttributesStateEnum[keyof typeof InAppPurchaseImageAttributesStateEnum];


/**
 * Check if a given object implements the InAppPurchaseImageAttributes interface.
 */
export function instanceOfInAppPurchaseImageAttributes(value: object): value is InAppPurchaseImageAttributes {
    return true;
}

export function InAppPurchaseImageAttributesFromJSON(json: any): InAppPurchaseImageAttributes {
    return InAppPurchaseImageAttributesFromJSONTyped(json, false);
}

export function InAppPurchaseImageAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseImageAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'fileSize': json['fileSize'] == null ? undefined : json['fileSize'],
        'fileName': json['fileName'] == null ? undefined : json['fileName'],
        'sourceFileChecksum': json['sourceFileChecksum'] == null ? undefined : json['sourceFileChecksum'],
        'assetToken': json['assetToken'] == null ? undefined : json['assetToken'],
        'imageAsset': json['imageAsset'] == null ? undefined : ImageAssetFromJSON(json['imageAsset']),
        'uploadOperations': json['uploadOperations'] == null ? undefined : ((json['uploadOperations'] as Array<any>).map(UploadOperationFromJSON)),
        'state': json['state'] == null ? undefined : json['state'],
    };
}

export function InAppPurchaseImageAttributesToJSON(json: any): InAppPurchaseImageAttributes {
    return InAppPurchaseImageAttributesToJSONTyped(json, false);
}

export function InAppPurchaseImageAttributesToJSONTyped(value?: InAppPurchaseImageAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileSize': value['fileSize'],
        'fileName': value['fileName'],
        'sourceFileChecksum': value['sourceFileChecksum'],
        'assetToken': value['assetToken'],
        'imageAsset': ImageAssetToJSON(value['imageAsset']),
        'uploadOperations': value['uploadOperations'] == null ? undefined : ((value['uploadOperations'] as Array<any>).map(UploadOperationToJSON)),
        'state': value['state'],
    };
}

