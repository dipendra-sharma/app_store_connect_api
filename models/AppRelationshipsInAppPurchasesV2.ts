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
import type { AppRelationshipsInAppPurchasesDataInner } from './AppRelationshipsInAppPurchasesDataInner';
import {
    AppRelationshipsInAppPurchasesDataInnerFromJSON,
    AppRelationshipsInAppPurchasesDataInnerFromJSONTyped,
    AppRelationshipsInAppPurchasesDataInnerToJSON,
    AppRelationshipsInAppPurchasesDataInnerToJSONTyped,
} from './AppRelationshipsInAppPurchasesDataInner';

/**
 * 
 * @export
 * @interface AppRelationshipsInAppPurchasesV2
 */
export interface AppRelationshipsInAppPurchasesV2 {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppRelationshipsInAppPurchasesV2
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppRelationshipsInAppPurchasesV2
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppRelationshipsInAppPurchasesDataInner>}
     * @memberof AppRelationshipsInAppPurchasesV2
     */
    data?: Array<AppRelationshipsInAppPurchasesDataInner>;
}

/**
 * Check if a given object implements the AppRelationshipsInAppPurchasesV2 interface.
 */
export function instanceOfAppRelationshipsInAppPurchasesV2(value: object): value is AppRelationshipsInAppPurchasesV2 {
    return true;
}

export function AppRelationshipsInAppPurchasesV2FromJSON(json: any): AppRelationshipsInAppPurchasesV2 {
    return AppRelationshipsInAppPurchasesV2FromJSONTyped(json, false);
}

export function AppRelationshipsInAppPurchasesV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsInAppPurchasesV2 {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppRelationshipsInAppPurchasesDataInnerFromJSON)),
    };
}

export function AppRelationshipsInAppPurchasesV2ToJSON(json: any): AppRelationshipsInAppPurchasesV2 {
    return AppRelationshipsInAppPurchasesV2ToJSONTyped(json, false);
}

export function AppRelationshipsInAppPurchasesV2ToJSONTyped(value?: AppRelationshipsInAppPurchasesV2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppRelationshipsInAppPurchasesDataInnerToJSON)),
    };
}

