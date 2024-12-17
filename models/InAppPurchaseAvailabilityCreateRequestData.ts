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
import type { InAppPurchaseAvailabilityCreateRequestDataRelationships } from './InAppPurchaseAvailabilityCreateRequestDataRelationships';
import {
    InAppPurchaseAvailabilityCreateRequestDataRelationshipsFromJSON,
    InAppPurchaseAvailabilityCreateRequestDataRelationshipsFromJSONTyped,
    InAppPurchaseAvailabilityCreateRequestDataRelationshipsToJSON,
    InAppPurchaseAvailabilityCreateRequestDataRelationshipsToJSONTyped,
} from './InAppPurchaseAvailabilityCreateRequestDataRelationships';
import type { AppAvailabilityV2CreateRequestDataAttributes } from './AppAvailabilityV2CreateRequestDataAttributes';
import {
    AppAvailabilityV2CreateRequestDataAttributesFromJSON,
    AppAvailabilityV2CreateRequestDataAttributesFromJSONTyped,
    AppAvailabilityV2CreateRequestDataAttributesToJSON,
    AppAvailabilityV2CreateRequestDataAttributesToJSONTyped,
} from './AppAvailabilityV2CreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface InAppPurchaseAvailabilityCreateRequestData
 */
export interface InAppPurchaseAvailabilityCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAvailabilityCreateRequestData
     */
    type: InAppPurchaseAvailabilityCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppAvailabilityV2CreateRequestDataAttributes}
     * @memberof InAppPurchaseAvailabilityCreateRequestData
     */
    attributes: AppAvailabilityV2CreateRequestDataAttributes;
    /**
     * 
     * @type {InAppPurchaseAvailabilityCreateRequestDataRelationships}
     * @memberof InAppPurchaseAvailabilityCreateRequestData
     */
    relationships: InAppPurchaseAvailabilityCreateRequestDataRelationships;
}


/**
 * @export
 */
export const InAppPurchaseAvailabilityCreateRequestDataTypeEnum = {
    InAppPurchaseAvailabilities: 'inAppPurchaseAvailabilities'
} as const;
export type InAppPurchaseAvailabilityCreateRequestDataTypeEnum = typeof InAppPurchaseAvailabilityCreateRequestDataTypeEnum[keyof typeof InAppPurchaseAvailabilityCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseAvailabilityCreateRequestData interface.
 */
export function instanceOfInAppPurchaseAvailabilityCreateRequestData(value: object): value is InAppPurchaseAvailabilityCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function InAppPurchaseAvailabilityCreateRequestDataFromJSON(json: any): InAppPurchaseAvailabilityCreateRequestData {
    return InAppPurchaseAvailabilityCreateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchaseAvailabilityCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAvailabilityCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppAvailabilityV2CreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': InAppPurchaseAvailabilityCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function InAppPurchaseAvailabilityCreateRequestDataToJSON(json: any): InAppPurchaseAvailabilityCreateRequestData {
    return InAppPurchaseAvailabilityCreateRequestDataToJSONTyped(json, false);
}

export function InAppPurchaseAvailabilityCreateRequestDataToJSONTyped(value?: InAppPurchaseAvailabilityCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AppAvailabilityV2CreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': InAppPurchaseAvailabilityCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

