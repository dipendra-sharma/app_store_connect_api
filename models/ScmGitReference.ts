
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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { ScmGitReferenceAttributes } from './ScmGitReferenceAttributes';
import {
    ScmGitReferenceAttributesFromJSON,
    ScmGitReferenceAttributesFromJSONTyped,
    ScmGitReferenceAttributesToJSON,
    ScmGitReferenceAttributesToJSONTyped,
} from './ScmGitReferenceAttributes';
import type { ScmGitReferenceRelationships } from './ScmGitReferenceRelationships';
import {
    ScmGitReferenceRelationshipsFromJSON,
    ScmGitReferenceRelationshipsFromJSONTyped,
    ScmGitReferenceRelationshipsToJSON,
    ScmGitReferenceRelationshipsToJSONTyped,
} from './ScmGitReferenceRelationships';

/**
 * 
 * @export
 * @interface ScmGitReference
 */
export interface ScmGitReference {
    /**
     * 
     * @type {string}
     * @memberof ScmGitReference
     */
    type: ScmGitReferenceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ScmGitReference
     */
    id: string;
    /**
     * 
     * @type {ScmGitReferenceAttributes}
     * @memberof ScmGitReference
     */
    attributes?: ScmGitReferenceAttributes;
    /**
     * 
     * @type {ScmGitReferenceRelationships}
     * @memberof ScmGitReference
     */
    relationships?: ScmGitReferenceRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof ScmGitReference
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const ScmGitReferenceTypeEnum = {
    ScmGitReferences: 'scmGitReferences'
} as const;
export type ScmGitReferenceTypeEnum = typeof ScmGitReferenceTypeEnum[keyof typeof ScmGitReferenceTypeEnum];


/**
 * Check if a given object implements the ScmGitReference interface.
 */
export function instanceOfScmGitReference(value: object): value is ScmGitReference {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ScmGitReferenceFromJSON(json: any): ScmGitReference {
    return ScmGitReferenceFromJSONTyped(json, false);
}

export function ScmGitReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmGitReference {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : ScmGitReferenceAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : ScmGitReferenceRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function ScmGitReferenceToJSON(json: any): ScmGitReference {
    return ScmGitReferenceToJSONTyped(json, false);
}

export function ScmGitReferenceToJSONTyped(value?: ScmGitReference | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': ScmGitReferenceAttributesToJSON(value['attributes']),
        'relationships': ScmGitReferenceRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

