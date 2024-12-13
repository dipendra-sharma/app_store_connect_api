
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
import type { BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData } from './BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData';
import {
    BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSON,
    BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSONTyped,
    BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataToJSON,
    BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataToJSONTyped,
} from './BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocation
 */
export interface BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocation {
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData}
     * @memberof BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocation
     */
    data?: BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationData;
}

/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocation interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocation(value: object): value is BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocation {
    return true;
}

export function BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationFromJSON(json: any): BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocation {
    return BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocation {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataFromJSON(json['data']),
    };
}

export function BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationToJSON(json: any): BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocation {
    return BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationToJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationToJSONTyped(value?: BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaAppClipInvocationLocalizationInlineCreateRelationshipsBetaAppClipInvocationDataToJSON(value['data']),
    };
}
