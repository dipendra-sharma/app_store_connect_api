
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
 * @interface BetaGroupCreateRequestDataRelationshipsBetaTesters
 */
export interface BetaGroupCreateRequestDataRelationshipsBetaTesters {
    /**
     * 
     * @type {Array<BetaGroupRelationshipsBetaTestersDataInner>}
     * @memberof BetaGroupCreateRequestDataRelationshipsBetaTesters
     */
    data?: Array<BetaGroupRelationshipsBetaTestersDataInner>;
}

/**
 * Check if a given object implements the BetaGroupCreateRequestDataRelationshipsBetaTesters interface.
 */
export function instanceOfBetaGroupCreateRequestDataRelationshipsBetaTesters(value: object): value is BetaGroupCreateRequestDataRelationshipsBetaTesters {
    return true;
}

export function BetaGroupCreateRequestDataRelationshipsBetaTestersFromJSON(json: any): BetaGroupCreateRequestDataRelationshipsBetaTesters {
    return BetaGroupCreateRequestDataRelationshipsBetaTestersFromJSONTyped(json, false);
}

export function BetaGroupCreateRequestDataRelationshipsBetaTestersFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupCreateRequestDataRelationshipsBetaTesters {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerFromJSON)),
    };
}

export function BetaGroupCreateRequestDataRelationshipsBetaTestersToJSON(json: any): BetaGroupCreateRequestDataRelationshipsBetaTesters {
    return BetaGroupCreateRequestDataRelationshipsBetaTestersToJSONTyped(json, false);
}

export function BetaGroupCreateRequestDataRelationshipsBetaTestersToJSONTyped(value?: BetaGroupCreateRequestDataRelationshipsBetaTesters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(BetaGroupRelationshipsBetaTestersDataInnerToJSON)),
    };
}
