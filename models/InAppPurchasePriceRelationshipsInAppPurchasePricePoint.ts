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
import type { InAppPurchasePriceRelationshipsInAppPurchasePricePointData } from './InAppPurchasePriceRelationshipsInAppPurchasePricePointData';
import {
    InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON,
    InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSONTyped,
    InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON,
    InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSONTyped,
} from './InAppPurchasePriceRelationshipsInAppPurchasePricePointData';

/**
 * 
 * @export
 * @interface InAppPurchasePriceRelationshipsInAppPurchasePricePoint
 */
export interface InAppPurchasePriceRelationshipsInAppPurchasePricePoint {
    /**
     * 
     * @type {InAppPurchasePriceRelationshipsInAppPurchasePricePointData}
     * @memberof InAppPurchasePriceRelationshipsInAppPurchasePricePoint
     */
    data?: InAppPurchasePriceRelationshipsInAppPurchasePricePointData;
}

/**
 * Check if a given object implements the InAppPurchasePriceRelationshipsInAppPurchasePricePoint interface.
 */
export function instanceOfInAppPurchasePriceRelationshipsInAppPurchasePricePoint(value: object): value is InAppPurchasePriceRelationshipsInAppPurchasePricePoint {
    return true;
}

export function InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSON(json: any): InAppPurchasePriceRelationshipsInAppPurchasePricePoint {
    return InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSONTyped(json, false);
}

export function InAppPurchasePriceRelationshipsInAppPurchasePricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceRelationshipsInAppPurchasePricePoint {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON(json['data']),
    };
}

export function InAppPurchasePriceRelationshipsInAppPurchasePricePointToJSON(json: any): InAppPurchasePriceRelationshipsInAppPurchasePricePoint {
    return InAppPurchasePriceRelationshipsInAppPurchasePricePointToJSONTyped(json, false);
}

export function InAppPurchasePriceRelationshipsInAppPurchasePricePointToJSONTyped(value?: InAppPurchasePriceRelationshipsInAppPurchasePricePoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON(value['data']),
    };
}

