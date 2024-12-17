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
import type { PromotedPurchase } from './PromotedPurchase';
import {
    PromotedPurchaseFromJSON,
    PromotedPurchaseFromJSONTyped,
    PromotedPurchaseToJSON,
    PromotedPurchaseToJSONTyped,
} from './PromotedPurchase';
import type { PromotedPurchaseImage } from './PromotedPurchaseImage';
import {
    PromotedPurchaseImageFromJSON,
    PromotedPurchaseImageFromJSONTyped,
    PromotedPurchaseImageToJSON,
    PromotedPurchaseImageToJSONTyped,
} from './PromotedPurchaseImage';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface PromotedPurchaseImageResponse
 */
export interface PromotedPurchaseImageResponse {
    /**
     * 
     * @type {PromotedPurchaseImage}
     * @memberof PromotedPurchaseImageResponse
     * @deprecated
     */
    data: PromotedPurchaseImage;
    /**
     * 
     * @type {Array<PromotedPurchase>}
     * @memberof PromotedPurchaseImageResponse
     */
    included?: Array<PromotedPurchase>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof PromotedPurchaseImageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the PromotedPurchaseImageResponse interface.
 */
export function instanceOfPromotedPurchaseImageResponse(value: object): value is PromotedPurchaseImageResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function PromotedPurchaseImageResponseFromJSON(json: any): PromotedPurchaseImageResponse {
    return PromotedPurchaseImageResponseFromJSONTyped(json, false);
}

export function PromotedPurchaseImageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImageResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': PromotedPurchaseImageFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(PromotedPurchaseFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function PromotedPurchaseImageResponseToJSON(json: any): PromotedPurchaseImageResponse {
    return PromotedPurchaseImageResponseToJSONTyped(json, false);
}

export function PromotedPurchaseImageResponseToJSONTyped(value?: PromotedPurchaseImageResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': PromotedPurchaseImageToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(PromotedPurchaseToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

