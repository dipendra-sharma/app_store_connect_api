
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
import type { AppStoreVersionRelationshipsGameCenterAppVersionData } from './AppStoreVersionRelationshipsGameCenterAppVersionData';
import {
    AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSON,
    AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSONTyped,
    AppStoreVersionRelationshipsGameCenterAppVersionDataToJSON,
    AppStoreVersionRelationshipsGameCenterAppVersionDataToJSONTyped,
} from './AppStoreVersionRelationshipsGameCenterAppVersionData';

/**
 * 
 * @export
 * @interface GameCenterAppVersionCompatibilityVersionsLinkagesRequest
 */
export interface GameCenterAppVersionCompatibilityVersionsLinkagesRequest {
    /**
     * 
     * @type {Array<AppStoreVersionRelationshipsGameCenterAppVersionData>}
     * @memberof GameCenterAppVersionCompatibilityVersionsLinkagesRequest
     */
    data: Array<AppStoreVersionRelationshipsGameCenterAppVersionData>;
}

/**
 * Check if a given object implements the GameCenterAppVersionCompatibilityVersionsLinkagesRequest interface.
 */
export function instanceOfGameCenterAppVersionCompatibilityVersionsLinkagesRequest(value: object): value is GameCenterAppVersionCompatibilityVersionsLinkagesRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GameCenterAppVersionCompatibilityVersionsLinkagesRequestFromJSON(json: any): GameCenterAppVersionCompatibilityVersionsLinkagesRequest {
    return GameCenterAppVersionCompatibilityVersionsLinkagesRequestFromJSONTyped(json, false);
}

export function GameCenterAppVersionCompatibilityVersionsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAppVersionCompatibilityVersionsLinkagesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppStoreVersionRelationshipsGameCenterAppVersionDataFromJSON)),
    };
}

export function GameCenterAppVersionCompatibilityVersionsLinkagesRequestToJSON(json: any): GameCenterAppVersionCompatibilityVersionsLinkagesRequest {
    return GameCenterAppVersionCompatibilityVersionsLinkagesRequestToJSONTyped(json, false);
}

export function GameCenterAppVersionCompatibilityVersionsLinkagesRequestToJSONTyped(value?: GameCenterAppVersionCompatibilityVersionsLinkagesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppStoreVersionRelationshipsGameCenterAppVersionDataToJSON)),
    };
}

