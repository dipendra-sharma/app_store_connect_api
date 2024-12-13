
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
 * @interface AppEventLocalizationUpdateRequestDataAttributes
 */
export interface AppEventLocalizationUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationUpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationUpdateRequestDataAttributes
     */
    shortDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationUpdateRequestDataAttributes
     */
    longDescription?: string;
}

/**
 * Check if a given object implements the AppEventLocalizationUpdateRequestDataAttributes interface.
 */
export function instanceOfAppEventLocalizationUpdateRequestDataAttributes(value: object): value is AppEventLocalizationUpdateRequestDataAttributes {
    return true;
}

export function AppEventLocalizationUpdateRequestDataAttributesFromJSON(json: any): AppEventLocalizationUpdateRequestDataAttributes {
    return AppEventLocalizationUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppEventLocalizationUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'shortDescription': json['shortDescription'] == null ? undefined : json['shortDescription'],
        'longDescription': json['longDescription'] == null ? undefined : json['longDescription'],
    };
}

export function AppEventLocalizationUpdateRequestDataAttributesToJSON(json: any): AppEventLocalizationUpdateRequestDataAttributes {
    return AppEventLocalizationUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function AppEventLocalizationUpdateRequestDataAttributesToJSONTyped(value?: AppEventLocalizationUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'shortDescription': value['shortDescription'],
        'longDescription': value['longDescription'],
    };
}

