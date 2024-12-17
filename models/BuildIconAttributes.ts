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
import type { IconAssetType } from './IconAssetType';
import {
    IconAssetTypeFromJSON,
    IconAssetTypeFromJSONTyped,
    IconAssetTypeToJSON,
    IconAssetTypeToJSONTyped,
} from './IconAssetType';
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
 * @interface BuildIconAttributes
 */
export interface BuildIconAttributes {
    /**
     * 
     * @type {string}
     * @memberof BuildIconAttributes
     */
    name?: string;
    /**
     * 
     * @type {ImageAsset}
     * @memberof BuildIconAttributes
     */
    iconAsset?: ImageAsset;
    /**
     * 
     * @type {IconAssetType}
     * @memberof BuildIconAttributes
     */
    iconType?: IconAssetType;
}



/**
 * Check if a given object implements the BuildIconAttributes interface.
 */
export function instanceOfBuildIconAttributes(value: object): value is BuildIconAttributes {
    return true;
}

export function BuildIconAttributesFromJSON(json: any): BuildIconAttributes {
    return BuildIconAttributesFromJSONTyped(json, false);
}

export function BuildIconAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildIconAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'iconAsset': json['iconAsset'] == null ? undefined : ImageAssetFromJSON(json['iconAsset']),
        'iconType': json['iconType'] == null ? undefined : IconAssetTypeFromJSON(json['iconType']),
    };
}

export function BuildIconAttributesToJSON(json: any): BuildIconAttributes {
    return BuildIconAttributesToJSONTyped(json, false);
}

export function BuildIconAttributesToJSONTyped(value?: BuildIconAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'iconAsset': ImageAssetToJSON(value['iconAsset']),
        'iconType': IconAssetTypeToJSON(value['iconType']),
    };
}

