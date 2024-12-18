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
import type { AppPricePointV3Attributes } from './AppPricePointV3Attributes';
import {
    AppPricePointV3AttributesFromJSON,
    AppPricePointV3AttributesFromJSONTyped,
    AppPricePointV3AttributesToJSON,
    AppPricePointV3AttributesToJSONTyped,
} from './AppPricePointV3Attributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { InAppPurchasePricePointRelationships } from './InAppPurchasePricePointRelationships';
import {
    InAppPurchasePricePointRelationshipsFromJSON,
    InAppPurchasePricePointRelationshipsFromJSONTyped,
    InAppPurchasePricePointRelationshipsToJSON,
    InAppPurchasePricePointRelationshipsToJSONTyped,
} from './InAppPurchasePricePointRelationships';

/**
 * 
 * @export
 * @interface InAppPurchasePricePoint
 */
export interface InAppPurchasePricePoint {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchasePricePoint
     */
    type: InAppPurchasePricePointTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchasePricePoint
     */
    id: string;
    /**
     * 
     * @type {AppPricePointV3Attributes}
     * @memberof InAppPurchasePricePoint
     */
    attributes?: AppPricePointV3Attributes;
    /**
     * 
     * @type {InAppPurchasePricePointRelationships}
     * @memberof InAppPurchasePricePoint
     */
    relationships?: InAppPurchasePricePointRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchasePricePoint
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchasePricePointTypeEnum = {
    InAppPurchasePricePoints: 'inAppPurchasePricePoints'
} as const;
export type InAppPurchasePricePointTypeEnum = typeof InAppPurchasePricePointTypeEnum[keyof typeof InAppPurchasePricePointTypeEnum];


/**
 * Check if a given object implements the InAppPurchasePricePoint interface.
 */
export function instanceOfInAppPurchasePricePoint(value: object): value is InAppPurchasePricePoint {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function InAppPurchasePricePointFromJSON(json: any): InAppPurchasePricePoint {
    return InAppPurchasePricePointFromJSONTyped(json, false);
}

export function InAppPurchasePricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePricePoint {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppPricePointV3AttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : InAppPurchasePricePointRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchasePricePointToJSON(json: any): InAppPurchasePricePoint {
    return InAppPurchasePricePointToJSONTyped(json, false);
}

export function InAppPurchasePricePointToJSONTyped(value?: InAppPurchasePricePoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppPricePointV3AttributesToJSON(value['attributes']),
        'relationships': InAppPurchasePricePointRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

