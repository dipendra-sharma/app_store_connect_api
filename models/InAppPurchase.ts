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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { InAppPurchaseAttributes } from './InAppPurchaseAttributes';
import {
    InAppPurchaseAttributesFromJSON,
    InAppPurchaseAttributesFromJSONTyped,
    InAppPurchaseAttributesToJSON,
    InAppPurchaseAttributesToJSONTyped,
} from './InAppPurchaseAttributes';
import type { InAppPurchaseRelationships } from './InAppPurchaseRelationships';
import {
    InAppPurchaseRelationshipsFromJSON,
    InAppPurchaseRelationshipsFromJSONTyped,
    InAppPurchaseRelationshipsToJSON,
    InAppPurchaseRelationshipsToJSONTyped,
} from './InAppPurchaseRelationships';

/**
 * 
 * @export
 * @interface InAppPurchase
 */
export interface InAppPurchase {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchase
     */
    type: InAppPurchaseTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchase
     */
    id: string;
    /**
     * 
     * @type {InAppPurchaseAttributes}
     * @memberof InAppPurchase
     */
    attributes?: InAppPurchaseAttributes;
    /**
     * 
     * @type {InAppPurchaseRelationships}
     * @memberof InAppPurchase
     */
    relationships?: InAppPurchaseRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchase
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchaseTypeEnum = {
    InAppPurchases: 'inAppPurchases'
} as const;
export type InAppPurchaseTypeEnum = typeof InAppPurchaseTypeEnum[keyof typeof InAppPurchaseTypeEnum];


/**
 * Check if a given object implements the InAppPurchase interface.
 */
export function instanceOfInAppPurchase(value: object): value is InAppPurchase {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function InAppPurchaseFromJSON(json: any): InAppPurchase {
    return InAppPurchaseFromJSONTyped(json, false);
}

export function InAppPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchase {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : InAppPurchaseAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : InAppPurchaseRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchaseToJSON(json: any): InAppPurchase {
    return InAppPurchaseToJSONTyped(json, false);
}

export function InAppPurchaseToJSONTyped(value?: InAppPurchase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': InAppPurchaseAttributesToJSON(value['attributes']),
        'relationships': InAppPurchaseRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

