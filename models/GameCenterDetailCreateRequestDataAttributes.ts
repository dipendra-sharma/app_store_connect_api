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
/**
 * 
 * @export
 * @interface GameCenterDetailCreateRequestDataAttributes
 */
export interface GameCenterDetailCreateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterDetailCreateRequestDataAttributes
     */
    challengeEnabled?: boolean;
}

/**
 * Check if a given object implements the GameCenterDetailCreateRequestDataAttributes interface.
 */
export function instanceOfGameCenterDetailCreateRequestDataAttributes(value: object): value is GameCenterDetailCreateRequestDataAttributes {
    return true;
}

export function GameCenterDetailCreateRequestDataAttributesFromJSON(json: any): GameCenterDetailCreateRequestDataAttributes {
    return GameCenterDetailCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterDetailCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'challengeEnabled': json['challengeEnabled'] == null ? undefined : json['challengeEnabled'],
    };
}

export function GameCenterDetailCreateRequestDataAttributesToJSON(json: any): GameCenterDetailCreateRequestDataAttributes {
    return GameCenterDetailCreateRequestDataAttributesToJSONTyped(json, false);
}

export function GameCenterDetailCreateRequestDataAttributesToJSONTyped(value?: GameCenterDetailCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'challengeEnabled': value['challengeEnabled'],
    };
}

