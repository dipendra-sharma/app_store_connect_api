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
import type { BundleIdRelationships } from './BundleIdRelationships';
import {
    BundleIdRelationshipsFromJSON,
    BundleIdRelationshipsFromJSONTyped,
    BundleIdRelationshipsToJSON,
    BundleIdRelationshipsToJSONTyped,
} from './BundleIdRelationships';
import type { BundleIdAttributes } from './BundleIdAttributes';
import {
    BundleIdAttributesFromJSON,
    BundleIdAttributesFromJSONTyped,
    BundleIdAttributesToJSON,
    BundleIdAttributesToJSONTyped,
} from './BundleIdAttributes';
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
 * @interface BundleId
 */
export interface BundleId {
    /**
     * 
     * @type {string}
     * @memberof BundleId
     */
    type: BundleIdTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BundleId
     */
    id: string;
    /**
     * 
     * @type {BundleIdAttributes}
     * @memberof BundleId
     */
    attributes?: BundleIdAttributes;
    /**
     * 
     * @type {BundleIdRelationships}
     * @memberof BundleId
     */
    relationships?: BundleIdRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BundleId
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BundleIdTypeEnum = {
    BundleIds: 'bundleIds'
} as const;
export type BundleIdTypeEnum = typeof BundleIdTypeEnum[keyof typeof BundleIdTypeEnum];


/**
 * Check if a given object implements the BundleId interface.
 */
export function instanceOfBundleId(value: object): value is BundleId {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BundleIdFromJSON(json: any): BundleId {
    return BundleIdFromJSONTyped(json, false);
}

export function BundleIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleId {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : BundleIdAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : BundleIdRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BundleIdToJSON(json: any): BundleId {
    return BundleIdToJSONTyped(json, false);
}

export function BundleIdToJSONTyped(value?: BundleId | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': BundleIdAttributesToJSON(value['attributes']),
        'relationships': BundleIdRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

