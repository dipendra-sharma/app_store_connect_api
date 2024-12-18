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
import type { InAppPurchaseImageRelationships } from './InAppPurchaseImageRelationships';
import {
    InAppPurchaseImageRelationshipsFromJSON,
    InAppPurchaseImageRelationshipsFromJSONTyped,
    InAppPurchaseImageRelationshipsToJSON,
    InAppPurchaseImageRelationshipsToJSONTyped,
} from './InAppPurchaseImageRelationships';
import type { InAppPurchaseImageAttributes } from './InAppPurchaseImageAttributes';
import {
    InAppPurchaseImageAttributesFromJSON,
    InAppPurchaseImageAttributesFromJSONTyped,
    InAppPurchaseImageAttributesToJSON,
    InAppPurchaseImageAttributesToJSONTyped,
} from './InAppPurchaseImageAttributes';
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
 * @interface InAppPurchaseImage
 */
export interface InAppPurchaseImage {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImage
     */
    type: InAppPurchaseImageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseImage
     */
    id: string;
    /**
     * 
     * @type {InAppPurchaseImageAttributes}
     * @memberof InAppPurchaseImage
     */
    attributes?: InAppPurchaseImageAttributes;
    /**
     * 
     * @type {InAppPurchaseImageRelationships}
     * @memberof InAppPurchaseImage
     */
    relationships?: InAppPurchaseImageRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchaseImage
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchaseImageTypeEnum = {
    InAppPurchaseImages: 'inAppPurchaseImages'
} as const;
export type InAppPurchaseImageTypeEnum = typeof InAppPurchaseImageTypeEnum[keyof typeof InAppPurchaseImageTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseImage interface.
 */
export function instanceOfInAppPurchaseImage(value: object): value is InAppPurchaseImage {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function InAppPurchaseImageFromJSON(json: any): InAppPurchaseImage {
    return InAppPurchaseImageFromJSONTyped(json, false);
}

export function InAppPurchaseImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseImage {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : InAppPurchaseImageAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : InAppPurchaseImageRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchaseImageToJSON(json: any): InAppPurchaseImage {
    return InAppPurchaseImageToJSONTyped(json, false);
}

export function InAppPurchaseImageToJSONTyped(value?: InAppPurchaseImage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': InAppPurchaseImageAttributesToJSON(value['attributes']),
        'relationships': InAppPurchaseImageRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

