
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
import type { BetaAppClipInvocationRelationships } from './BetaAppClipInvocationRelationships';
import {
    BetaAppClipInvocationRelationshipsFromJSON,
    BetaAppClipInvocationRelationshipsFromJSONTyped,
    BetaAppClipInvocationRelationshipsToJSON,
    BetaAppClipInvocationRelationshipsToJSONTyped,
} from './BetaAppClipInvocationRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { BetaAppClipInvocationAttributes } from './BetaAppClipInvocationAttributes';
import {
    BetaAppClipInvocationAttributesFromJSON,
    BetaAppClipInvocationAttributesFromJSONTyped,
    BetaAppClipInvocationAttributesToJSON,
    BetaAppClipInvocationAttributesToJSONTyped,
} from './BetaAppClipInvocationAttributes';

/**
 * 
 * @export
 * @interface BetaAppClipInvocation
 */
export interface BetaAppClipInvocation {
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocation
     */
    type: BetaAppClipInvocationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaAppClipInvocation
     */
    id: string;
    /**
     * 
     * @type {BetaAppClipInvocationAttributes}
     * @memberof BetaAppClipInvocation
     */
    attributes?: BetaAppClipInvocationAttributes;
    /**
     * 
     * @type {BetaAppClipInvocationRelationships}
     * @memberof BetaAppClipInvocation
     */
    relationships?: BetaAppClipInvocationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BetaAppClipInvocation
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BetaAppClipInvocationTypeEnum = {
    BetaAppClipInvocations: 'betaAppClipInvocations'
} as const;
export type BetaAppClipInvocationTypeEnum = typeof BetaAppClipInvocationTypeEnum[keyof typeof BetaAppClipInvocationTypeEnum];


/**
 * Check if a given object implements the BetaAppClipInvocation interface.
 */
export function instanceOfBetaAppClipInvocation(value: object): value is BetaAppClipInvocation {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BetaAppClipInvocationFromJSON(json: any): BetaAppClipInvocation {
    return BetaAppClipInvocationFromJSONTyped(json, false);
}

export function BetaAppClipInvocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppClipInvocation {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : BetaAppClipInvocationAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : BetaAppClipInvocationRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BetaAppClipInvocationToJSON(json: any): BetaAppClipInvocation {
    return BetaAppClipInvocationToJSONTyped(json, false);
}

export function BetaAppClipInvocationToJSONTyped(value?: BetaAppClipInvocation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': BetaAppClipInvocationAttributesToJSON(value['attributes']),
        'relationships': BetaAppClipInvocationRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
