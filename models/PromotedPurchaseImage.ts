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
import type { PromotedPurchaseImageRelationships } from './PromotedPurchaseImageRelationships';
import {
    PromotedPurchaseImageRelationshipsFromJSON,
    PromotedPurchaseImageRelationshipsFromJSONTyped,
    PromotedPurchaseImageRelationshipsToJSON,
    PromotedPurchaseImageRelationshipsToJSONTyped,
} from './PromotedPurchaseImageRelationships';
import type { PromotedPurchaseImageAttributes } from './PromotedPurchaseImageAttributes';
import {
    PromotedPurchaseImageAttributesFromJSON,
    PromotedPurchaseImageAttributesFromJSONTyped,
    PromotedPurchaseImageAttributesToJSON,
    PromotedPurchaseImageAttributesToJSONTyped,
} from './PromotedPurchaseImageAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface PromotedPurchaseImage
 */
export interface PromotedPurchaseImage {
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImage
     */
    type: PromotedPurchaseImageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PromotedPurchaseImage
     */
    id: string;
    /**
     * 
     * @type {PromotedPurchaseImageAttributes}
     * @memberof PromotedPurchaseImage
     */
    attributes?: PromotedPurchaseImageAttributes;
    /**
     * 
     * @type {PromotedPurchaseImageRelationships}
     * @memberof PromotedPurchaseImage
     */
    relationships?: PromotedPurchaseImageRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof PromotedPurchaseImage
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const PromotedPurchaseImageTypeEnum = {
    PromotedPurchaseImages: 'promotedPurchaseImages'
} as const;
export type PromotedPurchaseImageTypeEnum = typeof PromotedPurchaseImageTypeEnum[keyof typeof PromotedPurchaseImageTypeEnum];


/**
 * Check if a given object implements the PromotedPurchaseImage interface.
 */
export function instanceOfPromotedPurchaseImage(value: object): value is PromotedPurchaseImage {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function PromotedPurchaseImageFromJSON(json: any): PromotedPurchaseImage {
    return PromotedPurchaseImageFromJSONTyped(json, false);
}

export function PromotedPurchaseImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImage {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : PromotedPurchaseImageAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : PromotedPurchaseImageRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function PromotedPurchaseImageToJSON(json: any): PromotedPurchaseImage {
    return PromotedPurchaseImageToJSONTyped(json, false);
}

export function PromotedPurchaseImageToJSONTyped(value?: PromotedPurchaseImage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': PromotedPurchaseImageAttributesToJSON(value['attributes']),
        'relationships': PromotedPurchaseImageRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

