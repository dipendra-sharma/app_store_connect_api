
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
import type { BuildIconAttributes } from './BuildIconAttributes';
import {
    BuildIconAttributesFromJSON,
    BuildIconAttributesFromJSONTyped,
    BuildIconAttributesToJSON,
    BuildIconAttributesToJSONTyped,
} from './BuildIconAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BuildIcon
 */
export interface BuildIcon {
    /**
     * 
     * @type {string}
     * @memberof BuildIcon
     */
    type: BuildIconTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildIcon
     */
    id: string;
    /**
     * 
     * @type {BuildIconAttributes}
     * @memberof BuildIcon
     */
    attributes?: BuildIconAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BuildIcon
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BuildIconTypeEnum = {
    BuildIcons: 'buildIcons'
} as const;
export type BuildIconTypeEnum = typeof BuildIconTypeEnum[keyof typeof BuildIconTypeEnum];


/**
 * Check if a given object implements the BuildIcon interface.
 */
export function instanceOfBuildIcon(value: object): value is BuildIcon {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BuildIconFromJSON(json: any): BuildIcon {
    return BuildIconFromJSONTyped(json, false);
}

export function BuildIconFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildIcon {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : BuildIconAttributesFromJSON(json['attributes']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BuildIconToJSON(json: any): BuildIcon {
    return BuildIconToJSONTyped(json, false);
}

export function BuildIconToJSONTyped(value?: BuildIcon | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': BuildIconAttributesToJSON(value['attributes']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
