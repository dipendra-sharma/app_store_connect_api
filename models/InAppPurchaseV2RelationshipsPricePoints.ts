
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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
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
 * @interface InAppPurchaseV2RelationshipsPricePoints
 */
export interface InAppPurchaseV2RelationshipsPricePoints {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof InAppPurchaseV2RelationshipsPricePoints
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof InAppPurchaseV2RelationshipsPricePoints
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<InAppPurchasePriceRelationshipsInAppPurchasePricePointData>}
     * @memberof InAppPurchaseV2RelationshipsPricePoints
     */
    data?: Array<InAppPurchasePriceRelationshipsInAppPurchasePricePointData>;
}

/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsPricePoints interface.
 */
export function instanceOfInAppPurchaseV2RelationshipsPricePoints(value: object): value is InAppPurchaseV2RelationshipsPricePoints {
    return true;
}

export function InAppPurchaseV2RelationshipsPricePointsFromJSON(json: any): InAppPurchaseV2RelationshipsPricePoints {
    return InAppPurchaseV2RelationshipsPricePointsFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsPricePointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsPricePoints {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON)),
    };
}

export function InAppPurchaseV2RelationshipsPricePointsToJSON(json: any): InAppPurchaseV2RelationshipsPricePoints {
    return InAppPurchaseV2RelationshipsPricePointsToJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsPricePointsToJSONTyped(value?: InAppPurchaseV2RelationshipsPricePoints | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON)),
    };
}
