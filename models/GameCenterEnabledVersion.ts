
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
import type { GameCenterEnabledVersionRelationships } from './GameCenterEnabledVersionRelationships';
import {
    GameCenterEnabledVersionRelationshipsFromJSON,
    GameCenterEnabledVersionRelationshipsFromJSONTyped,
    GameCenterEnabledVersionRelationshipsToJSON,
    GameCenterEnabledVersionRelationshipsToJSONTyped,
} from './GameCenterEnabledVersionRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { GameCenterEnabledVersionAttributes } from './GameCenterEnabledVersionAttributes';
import {
    GameCenterEnabledVersionAttributesFromJSON,
    GameCenterEnabledVersionAttributesFromJSONTyped,
    GameCenterEnabledVersionAttributesToJSON,
    GameCenterEnabledVersionAttributesToJSONTyped,
} from './GameCenterEnabledVersionAttributes';

/**
 * 
 * @export
 * @interface GameCenterEnabledVersion
 */
export interface GameCenterEnabledVersion {
    /**
     * 
     * @type {string}
     * @memberof GameCenterEnabledVersion
     */
    type: GameCenterEnabledVersionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterEnabledVersion
     */
    id: string;
    /**
     * 
     * @type {GameCenterEnabledVersionAttributes}
     * @memberof GameCenterEnabledVersion
     */
    attributes?: GameCenterEnabledVersionAttributes;
    /**
     * 
     * @type {GameCenterEnabledVersionRelationships}
     * @memberof GameCenterEnabledVersion
     */
    relationships?: GameCenterEnabledVersionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterEnabledVersion
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterEnabledVersionTypeEnum = {
    GameCenterEnabledVersions: 'gameCenterEnabledVersions'
} as const;
export type GameCenterEnabledVersionTypeEnum = typeof GameCenterEnabledVersionTypeEnum[keyof typeof GameCenterEnabledVersionTypeEnum];


/**
 * Check if a given object implements the GameCenterEnabledVersion interface.
 */
export function instanceOfGameCenterEnabledVersion(value: object): value is GameCenterEnabledVersion {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterEnabledVersionFromJSON(json: any): GameCenterEnabledVersion {
    return GameCenterEnabledVersionFromJSONTyped(json, false);
}

export function GameCenterEnabledVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterEnabledVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterEnabledVersionAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : GameCenterEnabledVersionRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterEnabledVersionToJSON(json: any): GameCenterEnabledVersion {
    return GameCenterEnabledVersionToJSONTyped(json, false);
}

export function GameCenterEnabledVersionToJSONTyped(value?: GameCenterEnabledVersion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterEnabledVersionAttributesToJSON(value['attributes']),
        'relationships': GameCenterEnabledVersionRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

