
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
import type { GameCenterAppVersionRelationships } from './GameCenterAppVersionRelationships';
import {
    GameCenterAppVersionRelationshipsFromJSON,
    GameCenterAppVersionRelationshipsFromJSONTyped,
    GameCenterAppVersionRelationshipsToJSON,
    GameCenterAppVersionRelationshipsToJSONTyped,
} from './GameCenterAppVersionRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { GameCenterAppVersionAttributes } from './GameCenterAppVersionAttributes';
import {
    GameCenterAppVersionAttributesFromJSON,
    GameCenterAppVersionAttributesFromJSONTyped,
    GameCenterAppVersionAttributesToJSON,
    GameCenterAppVersionAttributesToJSONTyped,
} from './GameCenterAppVersionAttributes';

/**
 * 
 * @export
 * @interface GameCenterAppVersion
 */
export interface GameCenterAppVersion {
    /**
     * 
     * @type {string}
     * @memberof GameCenterAppVersion
     */
    type: GameCenterAppVersionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterAppVersion
     */
    id: string;
    /**
     * 
     * @type {GameCenterAppVersionAttributes}
     * @memberof GameCenterAppVersion
     */
    attributes?: GameCenterAppVersionAttributes;
    /**
     * 
     * @type {GameCenterAppVersionRelationships}
     * @memberof GameCenterAppVersion
     */
    relationships?: GameCenterAppVersionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterAppVersion
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterAppVersionTypeEnum = {
    GameCenterAppVersions: 'gameCenterAppVersions'
} as const;
export type GameCenterAppVersionTypeEnum = typeof GameCenterAppVersionTypeEnum[keyof typeof GameCenterAppVersionTypeEnum];


/**
 * Check if a given object implements the GameCenterAppVersion interface.
 */
export function instanceOfGameCenterAppVersion(value: object): value is GameCenterAppVersion {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function GameCenterAppVersionFromJSON(json: any): GameCenterAppVersion {
    return GameCenterAppVersionFromJSONTyped(json, false);
}

export function GameCenterAppVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAppVersion {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : GameCenterAppVersionAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : GameCenterAppVersionRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterAppVersionToJSON(json: any): GameCenterAppVersion {
    return GameCenterAppVersionToJSONTyped(json, false);
}

export function GameCenterAppVersionToJSONTyped(value?: GameCenterAppVersion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': GameCenterAppVersionAttributesToJSON(value['attributes']),
        'relationships': GameCenterAppVersionRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
