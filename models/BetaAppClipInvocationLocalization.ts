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
import type { BetaAppClipInvocationLocalizationAttributes } from './BetaAppClipInvocationLocalizationAttributes';
import {
    BetaAppClipInvocationLocalizationAttributesFromJSON,
    BetaAppClipInvocationLocalizationAttributesFromJSONTyped,
    BetaAppClipInvocationLocalizationAttributesToJSON,
    BetaAppClipInvocationLocalizationAttributesToJSONTyped,
} from './BetaAppClipInvocationLocalizationAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BetaAppClipInvocationLocalization
 */
export interface BetaAppClipInvocationLocalization {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationLocalization
     */
    type: BetaAppClipInvocationLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocationLocalization
     */
    id: string;
    /**
     * 
     * @type {BetaAppClipInvocationLocalizationAttributes}
     * @memberof BetaAppClipInvocationLocalization
     */
    attributes?: BetaAppClipInvocationLocalizationAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BetaAppClipInvocationLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BetaAppClipInvocationLocalizationTypeEnum = {
    BetaAppClipInvocationLocalizations: 'betaAppClipInvocationLocalizations'
} as const;
export type BetaAppClipInvocationLocalizationTypeEnum = typeof BetaAppClipInvocationLocalizationTypeEnum[keyof typeof BetaAppClipInvocationLocalizationTypeEnum];


/**
 * Check if a given object implements the BetaAppClipInvocationLocalization interface.
 */
export function instanceOfBetaAppClipInvocationLocalization(value: object): value is BetaAppClipInvocationLocalization {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BetaAppClipInvocationLocalizationFromJSON(json: any): BetaAppClipInvocationLocalization {
    return BetaAppClipInvocationLocalizationFromJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocationLocalization {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : BetaAppClipInvocationLocalizationAttributesFromJSON(json['attributes']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BetaAppClipInvocationLocalizationToJSON(json: any): BetaAppClipInvocationLocalization {
    return BetaAppClipInvocationLocalizationToJSONTyped(json, false);
}

export function BetaAppClipInvocationLocalizationToJSONTyped(value?: BetaAppClipInvocationLocalization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': BetaAppClipInvocationLocalizationAttributesToJSON(value['attributes']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

