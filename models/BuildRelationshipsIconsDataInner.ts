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
 * @interface BuildRelationshipsIconsDataInner
 */
export interface BuildRelationshipsIconsDataInner {
    /**
     * 
     * @type {string}
     * @memberof BuildRelationshipsIconsDataInner
     */
    type: BuildRelationshipsIconsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildRelationshipsIconsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const BuildRelationshipsIconsDataInnerTypeEnum = {
    BuildIcons: 'buildIcons'
} as const;
export type BuildRelationshipsIconsDataInnerTypeEnum = typeof BuildRelationshipsIconsDataInnerTypeEnum[keyof typeof BuildRelationshipsIconsDataInnerTypeEnum];


/**
 * Check if a given object implements the BuildRelationshipsIconsDataInner interface.
 */
export function instanceOfBuildRelationshipsIconsDataInner(value: object): value is BuildRelationshipsIconsDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BuildRelationshipsIconsDataInnerFromJSON(json: any): BuildRelationshipsIconsDataInner {
    return BuildRelationshipsIconsDataInnerFromJSONTyped(json, false);
}

export function BuildRelationshipsIconsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsIconsDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BuildRelationshipsIconsDataInnerToJSON(json: any): BuildRelationshipsIconsDataInner {
    return BuildRelationshipsIconsDataInnerToJSONTyped(json, false);
}

export function BuildRelationshipsIconsDataInnerToJSONTyped(value?: BuildRelationshipsIconsDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

