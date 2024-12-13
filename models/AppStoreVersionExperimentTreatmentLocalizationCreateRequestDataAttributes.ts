
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
 * @interface AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes
 */
export interface AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes
     */
    locale: string;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes(value: object): value is AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes {
    if (!('locale' in value) || value['locale'] === undefined) return false;
    return true;
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributesFromJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes {
    return AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'locale': json['locale'],
    };
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributesToJSON(json: any): AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes {
    return AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributesToJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributesToJSONTyped(value?: AppStoreVersionExperimentTreatmentLocalizationCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'locale': value['locale'],
    };
}

