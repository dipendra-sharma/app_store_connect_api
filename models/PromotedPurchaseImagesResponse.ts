
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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
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
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';

/**
 * 
 * @export
 * @interface PromotedPurchaseImagesResponse
 */
export interface PromotedPurchaseImagesResponse {
    /**
     * 
     * @type {Array<PromotedPurchaseImage>}
     * @memberof PromotedPurchaseImagesResponse
     */
    data: Array<PromotedPurchaseImage>;
    /**
     * 
     * @type {Array<PromotedPurchase>}
     * @memberof PromotedPurchaseImagesResponse
     */
    included?: Array<PromotedPurchase>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof PromotedPurchaseImagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof PromotedPurchaseImagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the PromotedPurchaseImagesResponse interface.
 */
export function instanceOfPromotedPurchaseImagesResponse(value: object): value is PromotedPurchaseImagesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function PromotedPurchaseImagesResponseFromJSON(json: any): PromotedPurchaseImagesResponse {
    return PromotedPurchaseImagesResponseFromJSONTyped(json, false);
}

export function PromotedPurchaseImagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseImagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(PromotedPurchaseImageFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(PromotedPurchaseFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function PromotedPurchaseImagesResponseToJSON(json: any): PromotedPurchaseImagesResponse {
    return PromotedPurchaseImagesResponseToJSONTyped(json, false);
}

export function PromotedPurchaseImagesResponseToJSONTyped(value?: PromotedPurchaseImagesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(PromotedPurchaseImageToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(PromotedPurchaseToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}
