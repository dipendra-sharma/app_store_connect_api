
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
import type { BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation } from './BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation';
import {
    BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSON,
    BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSONTyped,
    BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationToJSON,
    BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationToJSONTyped,
} from './BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalizationCreateRequestDataRelationships
 */
export interface BetaAppClipInvocationLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation}
     * @memberof BetaAppClipInvocationLocalizationCreateRequestDataRelationships
     */
    betaAppClipInvocation: BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocation;
}

/**
 * Check if a given object implements the BetaAppClipInvocationLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfBetaAppClipInvocationLocalizationCreateRequestDataRelationships(value: object): value is BetaAppClipInvocationLocalizationCreateRequestDataRelationships {
    if (!('betaAppClipInvocation' in value) || value['betaAppClipInvocation'] === undefined) return false;
    return true;
}

export function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSON(json: any): BetaAppClipInvocationLocalizationCreateRequestDataRelationships {
    return BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalizationCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'betaAppClipInvocation': BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationFromJSON(json['betaAppClipInvocation']),
    };
}

export function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsToJSON(json: any): BetaAppClipInvocationLocalizationCreateRequestDataRelationships {
    return BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsToJSONTyped(value?: BetaAppClipInvocationLocalizationCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'betaAppClipInvocation': BetaAppClipInvocationLocalizationCreateRequestDataRelationshipsBetaAppClipInvocationToJSON(value['betaAppClipInvocation']),
    };
}
