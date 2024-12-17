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
import type { BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner } from './BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner';
import {
    BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerFromJSON,
    BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerFromJSONTyped,
    BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerToJSON,
    BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerToJSONTyped,
} from './BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations
 */
export interface BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations {
    /**
     * 
     * @type {Array<BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner>}
     * @memberof BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations
     */
    data: Array<BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInner>;
}

/**
 * Check if a given object implements the BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations interface.
 */
export function instanceOfBetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations(value: object): value is BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsFromJSON(json: any): BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations {
    return BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsFromJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerFromJSON)),
    };
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsToJSON(json: any): BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations {
    return BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsToJSONTyped(json, false);
}

export function BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizationsToJSONTyped(value?: BetaAppClipInvocationCreateRequestDataRelationshipsBetaAppClipInvocationLocalizations | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(BetaAppClipInvocationRelationshipsBetaAppClipInvocationLocalizationsDataInnerToJSON)),
    };
}

