
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
import type { AppAvailabilityV2Attributes } from './AppAvailabilityV2Attributes';
import {
    AppAvailabilityV2AttributesFromJSON,
    AppAvailabilityV2AttributesFromJSONTyped,
    AppAvailabilityV2AttributesToJSON,
    AppAvailabilityV2AttributesToJSONTyped,
} from './AppAvailabilityV2Attributes';
import type { InAppPurchaseAvailabilityRelationships } from './InAppPurchaseAvailabilityRelationships';
import {
    InAppPurchaseAvailabilityRelationshipsFromJSON,
    InAppPurchaseAvailabilityRelationshipsFromJSONTyped,
    InAppPurchaseAvailabilityRelationshipsToJSON,
    InAppPurchaseAvailabilityRelationshipsToJSONTyped,
} from './InAppPurchaseAvailabilityRelationships';
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
 * @interface InAppPurchaseAvailability
 */
export interface InAppPurchaseAvailability {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAvailability
     */
    type: InAppPurchaseAvailabilityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAvailability
     */
    id: string;
    /**
     * 
     * @type {AppAvailabilityV2Attributes}
     * @memberof InAppPurchaseAvailability
     */
    attributes?: AppAvailabilityV2Attributes;
    /**
     * 
     * @type {InAppPurchaseAvailabilityRelationships}
     * @memberof InAppPurchaseAvailability
     */
    relationships?: InAppPurchaseAvailabilityRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchaseAvailability
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchaseAvailabilityTypeEnum = {
    InAppPurchaseAvailabilities: 'inAppPurchaseAvailabilities'
} as const;
export type InAppPurchaseAvailabilityTypeEnum = typeof InAppPurchaseAvailabilityTypeEnum[keyof typeof InAppPurchaseAvailabilityTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseAvailability interface.
 */
export function instanceOfInAppPurchaseAvailability(value: object): value is InAppPurchaseAvailability {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function InAppPurchaseAvailabilityFromJSON(json: any): InAppPurchaseAvailability {
    return InAppPurchaseAvailabilityFromJSONTyped(json, false);
}

export function InAppPurchaseAvailabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAvailability {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppAvailabilityV2AttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : InAppPurchaseAvailabilityRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchaseAvailabilityToJSON(json: any): InAppPurchaseAvailability {
    return InAppPurchaseAvailabilityToJSONTyped(json, false);
}

export function InAppPurchaseAvailabilityToJSONTyped(value?: InAppPurchaseAvailability | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppAvailabilityV2AttributesToJSON(value['attributes']),
        'relationships': InAppPurchaseAvailabilityRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

