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
import type { Platform } from './Platform';
import {
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
    PlatformToJSONTyped,
} from './Platform';
import type { ImageAsset } from './ImageAsset';
import {
    ImageAssetFromJSON,
    ImageAssetFromJSONTyped,
    ImageAssetToJSON,
    ImageAssetToJSONTyped,
} from './ImageAsset';

/**
 * 
 * @export
 * @interface GameCenterEnabledVersionAttributes
 */
export interface GameCenterEnabledVersionAttributes {
    /**
     * 
     * @type {Platform}
     * @memberof GameCenterEnabledVersionAttributes
     */
    platform?: Platform;
    /**
     * 
     * @type {string}
     * @memberof GameCenterEnabledVersionAttributes
     */
    versionString?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof GameCenterEnabledVersionAttributes
     */
    iconAsset?: ImageAsset;
}



/**
 * Check if a given object implements the GameCenterEnabledVersionAttributes interface.
 */
export function instanceOfGameCenterEnabledVersionAttributes(value: object): value is GameCenterEnabledVersionAttributes {
    return true;
}

export function GameCenterEnabledVersionAttributesFromJSON(json: any): GameCenterEnabledVersionAttributes {
    return GameCenterEnabledVersionAttributesFromJSONTyped(json, false);
}

export function GameCenterEnabledVersionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterEnabledVersionAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'platform': json['platform'] == null ? undefined : PlatformFromJSON(json['platform']),
        'versionString': json['versionString'] == null ? undefined : json['versionString'],
        'iconAsset': json['iconAsset'] == null ? undefined : ImageAssetFromJSON(json['iconAsset']),
    };
}

export function GameCenterEnabledVersionAttributesToJSON(json: any): GameCenterEnabledVersionAttributes {
    return GameCenterEnabledVersionAttributesToJSONTyped(json, false);
}

export function GameCenterEnabledVersionAttributesToJSONTyped(value?: GameCenterEnabledVersionAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'platform': PlatformToJSON(value['platform']),
        'versionString': value['versionString'],
        'iconAsset': ImageAssetToJSON(value['iconAsset']),
    };
}

