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
import type { BundleIdRelationshipsBundleIdCapabilitiesDataInner } from './BundleIdRelationshipsBundleIdCapabilitiesDataInner';
import {
    BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSON,
    BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSONTyped,
    BundleIdRelationshipsBundleIdCapabilitiesDataInnerToJSON,
    BundleIdRelationshipsBundleIdCapabilitiesDataInnerToJSONTyped,
} from './BundleIdRelationshipsBundleIdCapabilitiesDataInner';

/**
 * 
 * @export
 * @interface BundleIdRelationshipsBundleIdCapabilities
 */
export interface BundleIdRelationshipsBundleIdCapabilities {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<BundleIdRelationshipsBundleIdCapabilitiesDataInner>}
     * @memberof BundleIdRelationshipsBundleIdCapabilities
     */
    data?: Array<BundleIdRelationshipsBundleIdCapabilitiesDataInner>;
}

/**
 * Check if a given object implements the BundleIdRelationshipsBundleIdCapabilities interface.
 */
export function instanceOfBundleIdRelationshipsBundleIdCapabilities(value: object): value is BundleIdRelationshipsBundleIdCapabilities {
    return true;
}

export function BundleIdRelationshipsBundleIdCapabilitiesFromJSON(json: any): BundleIdRelationshipsBundleIdCapabilities {
    return BundleIdRelationshipsBundleIdCapabilitiesFromJSONTyped(json, false);
}

export function BundleIdRelationshipsBundleIdCapabilitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdRelationshipsBundleIdCapabilities {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(BundleIdRelationshipsBundleIdCapabilitiesDataInnerFromJSON)),
    };
}

export function BundleIdRelationshipsBundleIdCapabilitiesToJSON(json: any): BundleIdRelationshipsBundleIdCapabilities {
    return BundleIdRelationshipsBundleIdCapabilitiesToJSONTyped(json, false);
}

export function BundleIdRelationshipsBundleIdCapabilitiesToJSONTyped(value?: BundleIdRelationshipsBundleIdCapabilities | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(BundleIdRelationshipsBundleIdCapabilitiesDataInnerToJSON)),
    };
}

