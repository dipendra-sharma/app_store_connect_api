
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
import type { WinBackOfferAttributes } from './WinBackOfferAttributes';
import {
    WinBackOfferAttributesFromJSON,
    WinBackOfferAttributesFromJSONTyped,
    WinBackOfferAttributesToJSON,
    WinBackOfferAttributesToJSONTyped,
} from './WinBackOfferAttributes';
import type { WinBackOfferRelationships } from './WinBackOfferRelationships';
import {
    WinBackOfferRelationshipsFromJSON,
    WinBackOfferRelationshipsFromJSONTyped,
    WinBackOfferRelationshipsToJSON,
    WinBackOfferRelationshipsToJSONTyped,
} from './WinBackOfferRelationships';

/**
 * 
 * @export
 * @interface WinBackOffer
 */
export interface WinBackOffer {
    /**
     * 
     * @type {string}
     * @memberof WinBackOffer
     */
    type: WinBackOfferTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof WinBackOffer
     */
    id: string;
    /**
     * 
     * @type {WinBackOfferAttributes}
     * @memberof WinBackOffer
     */
    attributes?: WinBackOfferAttributes;
    /**
     * 
     * @type {WinBackOfferRelationships}
     * @memberof WinBackOffer
     */
    relationships?: WinBackOfferRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof WinBackOffer
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const WinBackOfferTypeEnum = {
    WinBackOffers: 'winBackOffers'
} as const;
export type WinBackOfferTypeEnum = typeof WinBackOfferTypeEnum[keyof typeof WinBackOfferTypeEnum];


/**
 * Check if a given object implements the WinBackOffer interface.
 */
export function instanceOfWinBackOffer(value: object): value is WinBackOffer {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function WinBackOfferFromJSON(json: any): WinBackOffer {
    return WinBackOfferFromJSONTyped(json, false);
}

export function WinBackOfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): WinBackOffer {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : WinBackOfferAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : WinBackOfferRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function WinBackOfferToJSON(json: any): WinBackOffer {
    return WinBackOfferToJSONTyped(json, false);
}

export function WinBackOfferToJSONTyped(value?: WinBackOffer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': WinBackOfferAttributesToJSON(value['attributes']),
        'relationships': WinBackOfferRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
