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
import type { ActorAttributes } from './ActorAttributes';
import {
    ActorAttributesFromJSON,
    ActorAttributesFromJSONTyped,
    ActorAttributesToJSON,
    ActorAttributesToJSONTyped,
} from './ActorAttributes';

/**
 * 
 * @export
 * @interface Actor
 */
export interface Actor {
    /**
     * 
     * @type {string}
     * @memberof Actor
     */
    type: ActorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Actor
     */
    id: string;
    /**
     * 
     * @type {ActorAttributes}
     * @memberof Actor
     */
    attributes?: ActorAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof Actor
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const ActorTypeEnum = {
    Actors: 'actors'
} as const;
export type ActorTypeEnum = typeof ActorTypeEnum[keyof typeof ActorTypeEnum];


/**
 * Check if a given object implements the Actor interface.
 */
export function instanceOfActor(value: object): value is Actor {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ActorFromJSON(json: any): Actor {
    return ActorFromJSONTyped(json, false);
}

export function ActorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Actor {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : ActorAttributesFromJSON(json['attributes']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function ActorToJSON(json: any): Actor {
    return ActorToJSONTyped(json, false);
}

export function ActorToJSONTyped(value?: Actor | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': ActorAttributesToJSON(value['attributes']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

