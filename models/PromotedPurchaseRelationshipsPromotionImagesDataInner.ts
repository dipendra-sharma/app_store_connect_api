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
 * @interface PromotedPurchaseRelationshipsPromotionImagesDataInner
 */
export interface PromotedPurchaseRelationshipsPromotionImagesDataInner {
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseRelationshipsPromotionImagesDataInner
     */
    type: PromotedPurchaseRelationshipsPromotionImagesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseRelationshipsPromotionImagesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const PromotedPurchaseRelationshipsPromotionImagesDataInnerTypeEnum = {
    PromotedPurchaseImages: 'promotedPurchaseImages'
} as const;
export type PromotedPurchaseRelationshipsPromotionImagesDataInnerTypeEnum = typeof PromotedPurchaseRelationshipsPromotionImagesDataInnerTypeEnum[keyof typeof PromotedPurchaseRelationshipsPromotionImagesDataInnerTypeEnum];


/**
 * Check if a given object implements the PromotedPurchaseRelationshipsPromotionImagesDataInner interface.
 */
export function instanceOfPromotedPurchaseRelationshipsPromotionImagesDataInner(value: object): value is PromotedPurchaseRelationshipsPromotionImagesDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function PromotedPurchaseRelationshipsPromotionImagesDataInnerFromJSON(json: any): PromotedPurchaseRelationshipsPromotionImagesDataInner {
    return PromotedPurchaseRelationshipsPromotionImagesDataInnerFromJSONTyped(json, false);
}

export function PromotedPurchaseRelationshipsPromotionImagesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseRelationshipsPromotionImagesDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function PromotedPurchaseRelationshipsPromotionImagesDataInnerToJSON(json: any): PromotedPurchaseRelationshipsPromotionImagesDataInner {
    return PromotedPurchaseRelationshipsPromotionImagesDataInnerToJSONTyped(json, false);
}

export function PromotedPurchaseRelationshipsPromotionImagesDataInnerToJSONTyped(value?: PromotedPurchaseRelationshipsPromotionImagesDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

