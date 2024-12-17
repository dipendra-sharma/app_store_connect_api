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
import type { InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner } from './InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner';
import {
    InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerFromJSON,
    InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerFromJSONTyped,
    InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerToJSON,
    InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerToJSONTyped,
} from './InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner';

/**
 * 
 * @export
 * @interface InAppPurchaseV2RelationshipsInAppPurchaseLocalizations
 */
export interface InAppPurchaseV2RelationshipsInAppPurchaseLocalizations {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseLocalizations
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseLocalizations
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner>}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseLocalizations
     */
    data?: Array<InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner>;
}

/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsInAppPurchaseLocalizations interface.
 */
export function instanceOfInAppPurchaseV2RelationshipsInAppPurchaseLocalizations(value: object): value is InAppPurchaseV2RelationshipsInAppPurchaseLocalizations {
    return true;
}

export function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsFromJSON(json: any): InAppPurchaseV2RelationshipsInAppPurchaseLocalizations {
    return InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsInAppPurchaseLocalizations {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerFromJSON)),
    };
}

export function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsToJSON(json: any): InAppPurchaseV2RelationshipsInAppPurchaseLocalizations {
    return InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsToJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsToJSONTyped(value?: InAppPurchaseV2RelationshipsInAppPurchaseLocalizations | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerToJSON)),
    };
}

