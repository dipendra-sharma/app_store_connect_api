
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
 * @interface AppClipAdvancedExperienceImageCreateRequestDataAttributes
 */
export interface AppClipAdvancedExperienceImageCreateRequestDataAttributes {
    /**
     * 
     * @type {number}
     * @memberof AppClipAdvancedExperienceImageCreateRequestDataAttributes
     */
    fileSize: number;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceImageCreateRequestDataAttributes
     */
    fileName: string;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceImageCreateRequestDataAttributes interface.
 */
export function instanceOfAppClipAdvancedExperienceImageCreateRequestDataAttributes(value: object): value is AppClipAdvancedExperienceImageCreateRequestDataAttributes {
    if (!('fileSize' in value) || value['fileSize'] === undefined) return false;
    if (!('fileName' in value) || value['fileName'] === undefined) return false;
    return true;
}

export function AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json: any): AppClipAdvancedExperienceImageCreateRequestDataAttributes {
    return AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceImageCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'fileSize': json['fileSize'],
        'fileName': json['fileName'],
    };
}

export function AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(json: any): AppClipAdvancedExperienceImageCreateRequestDataAttributes {
    return AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSONTyped(value?: AppClipAdvancedExperienceImageCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileSize': value['fileSize'],
        'fileName': value['fileName'],
    };
}

