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
import type { BetaGroupRelationshipsBetaTestersDataInner } from './BetaGroupRelationshipsBetaTestersDataInner';
import {
    BetaGroupRelationshipsBetaTestersDataInnerFromJSON,
    BetaGroupRelationshipsBetaTestersDataInnerFromJSONTyped,
    BetaGroupRelationshipsBetaTestersDataInnerToJSON,
    BetaGroupRelationshipsBetaTestersDataInnerToJSONTyped,
} from './BetaGroupRelationshipsBetaTestersDataInner';

/**
 * 
 * @export
 * @interface BetaGroupBetaTestersLinkagesRequest
 */
export interface BetaGroupBetaTestersLinkagesRequest {
    /**
     * 
     * @type {Array<BetaGroupRelationshipsBetaTestersDataInner>}
     * @memberof BetaGroupBetaTestersLinkagesRequest
     */
    data: Array<BetaGroupRelationshipsBetaTestersDataInner>;
}

/**
 * Check if a given object implements the BetaGroupBetaTestersLinkagesRequest interface.
 */
export function instanceOfBetaGroupBetaTestersLinkagesRequest(value: object): value is BetaGroupBetaTestersLinkagesRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BetaGroupBetaTestersLinkagesRequestFromJSON(json: any): BetaGroupBetaTestersLinkagesRequest {
    return BetaGroupBetaTestersLinkagesRequestFromJSONTyped(json, false);
}

export function BetaGroupBetaTestersLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupBetaTestersLinkagesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerFromJSON)),
    };
}

export function BetaGroupBetaTestersLinkagesRequestToJSON(json: any): BetaGroupBetaTestersLinkagesRequest {
    return BetaGroupBetaTestersLinkagesRequestToJSONTyped(json, false);
}

export function BetaGroupBetaTestersLinkagesRequestToJSONTyped(value?: BetaGroupBetaTestersLinkagesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerToJSON)),
    };
}

