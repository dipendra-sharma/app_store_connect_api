
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
 * @interface AppEventLocalizationCreateRequestDataAttributes
 */
export interface AppEventLocalizationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationCreateRequestDataAttributes
     */
    locale: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationCreateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationCreateRequestDataAttributes
     */
    shortDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof AppEventLocalizationCreateRequestDataAttributes
     */
    longDescription?: string;
}

/**
 * Check if a given object implements the AppEventLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfAppEventLocalizationCreateRequestDataAttributes(value: object): value is AppEventLocalizationCreateRequestDataAttributes {
    if (!('locale' in value) || value['locale'] === undefined) return false;
    return true;
}

export function AppEventLocalizationCreateRequestDataAttributesFromJSON(json: any): AppEventLocalizationCreateRequestDataAttributes {
    return AppEventLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppEventLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'locale': json['locale'],
        'name': json['name'] == null ? undefined : json['name'],
        'shortDescription': json['shortDescription'] == null ? undefined : json['shortDescription'],
        'longDescription': json['longDescription'] == null ? undefined : json['longDescription'],
    };
}

export function AppEventLocalizationCreateRequestDataAttributesToJSON(json: any): AppEventLocalizationCreateRequestDataAttributes {
    return AppEventLocalizationCreateRequestDataAttributesToJSONTyped(json, false);
}

export function AppEventLocalizationCreateRequestDataAttributesToJSONTyped(value?: AppEventLocalizationCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'locale': value['locale'],
        'name': value['name'],
        'shortDescription': value['shortDescription'],
        'longDescription': value['longDescription'],
    };
}
