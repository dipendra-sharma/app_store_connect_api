
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

import type { App } from './App';
import {
    instanceOfApp,
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import type { GameCenterEnabledVersion } from './GameCenterEnabledVersion';
import {
    instanceOfGameCenterEnabledVersion,
    GameCenterEnabledVersionFromJSON,
    GameCenterEnabledVersionFromJSONTyped,
    GameCenterEnabledVersionToJSON,
} from './GameCenterEnabledVersion';

/**
 * @type GameCenterEnabledVersionsResponseIncludedInner
 * 
 * @export
 */
export type GameCenterEnabledVersionsResponseIncludedInner = App | GameCenterEnabledVersion;

export function GameCenterEnabledVersionsResponseIncludedInnerFromJSON(json: any): GameCenterEnabledVersionsResponseIncludedInner {
    return GameCenterEnabledVersionsResponseIncludedInnerFromJSONTyped(json, false);
}

export function GameCenterEnabledVersionsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterEnabledVersionsResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfApp(json)) {
        return AppFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterEnabledVersion(json)) {
        return GameCenterEnabledVersionFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GameCenterEnabledVersionsResponseIncludedInnerToJSON(json: any): any {
    return GameCenterEnabledVersionsResponseIncludedInnerToJSONTyped(json, false);
}

export function GameCenterEnabledVersionsResponseIncludedInnerToJSONTyped(value?: GameCenterEnabledVersionsResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfGameCenterEnabledVersion(value)) {
        return GameCenterEnabledVersionToJSON(value as GameCenterEnabledVersion);
    }

    return {};
}
