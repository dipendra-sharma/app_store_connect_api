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
import type { AppRelationshipsGameCenterEnabledVersions } from './AppRelationshipsGameCenterEnabledVersions';
import {
    AppRelationshipsGameCenterEnabledVersionsFromJSON,
    AppRelationshipsGameCenterEnabledVersionsFromJSONTyped,
    AppRelationshipsGameCenterEnabledVersionsToJSON,
    AppRelationshipsGameCenterEnabledVersionsToJSONTyped,
} from './AppRelationshipsGameCenterEnabledVersions';
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsApp } from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSONTyped,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';

/**
 * 
 * @export
 * @interface GameCenterEnabledVersionRelationships
 */
export interface GameCenterEnabledVersionRelationships {
    /**
     * 
     * @type {AppRelationshipsGameCenterEnabledVersions}
     * @memberof GameCenterEnabledVersionRelationships
     */
    compatibleVersions?: AppRelationshipsGameCenterEnabledVersions;
    /**
     * 
     * @type {AlternativeDistributionKeyCreateRequestDataRelationshipsApp}
     * @memberof GameCenterEnabledVersionRelationships
     */
    app?: AlternativeDistributionKeyCreateRequestDataRelationshipsApp;
}

/**
 * Check if a given object implements the GameCenterEnabledVersionRelationships interface.
 */
export function instanceOfGameCenterEnabledVersionRelationships(value: object): value is GameCenterEnabledVersionRelationships {
    return true;
}

export function GameCenterEnabledVersionRelationshipsFromJSON(json: any): GameCenterEnabledVersionRelationships {
    return GameCenterEnabledVersionRelationshipsFromJSONTyped(json, false);
}

export function GameCenterEnabledVersionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterEnabledVersionRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'compatibleVersions': json['compatibleVersions'] == null ? undefined : AppRelationshipsGameCenterEnabledVersionsFromJSON(json['compatibleVersions']),
        'app': json['app'] == null ? undefined : AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON(json['app']),
    };
}

export function GameCenterEnabledVersionRelationshipsToJSON(json: any): GameCenterEnabledVersionRelationships {
    return GameCenterEnabledVersionRelationshipsToJSONTyped(json, false);
}

export function GameCenterEnabledVersionRelationshipsToJSONTyped(value?: GameCenterEnabledVersionRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'compatibleVersions': AppRelationshipsGameCenterEnabledVersionsToJSON(value['compatibleVersions']),
        'app': AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON(value['app']),
    };
}

