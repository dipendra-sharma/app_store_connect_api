
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
 * @interface AppStoreVersionExperimentV2UpdateRequestDataAttributes
 */
export interface AppStoreVersionExperimentV2UpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentV2UpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof AppStoreVersionExperimentV2UpdateRequestDataAttributes
     */
    trafficProportion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AppStoreVersionExperimentV2UpdateRequestDataAttributes
     */
    started?: boolean;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentV2UpdateRequestDataAttributes interface.
 */
export function instanceOfAppStoreVersionExperimentV2UpdateRequestDataAttributes(value: object): value is AppStoreVersionExperimentV2UpdateRequestDataAttributes {
    return true;
}

export function AppStoreVersionExperimentV2UpdateRequestDataAttributesFromJSON(json: any): AppStoreVersionExperimentV2UpdateRequestDataAttributes {
    return AppStoreVersionExperimentV2UpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2UpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2UpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'trafficProportion': json['trafficProportion'] == null ? undefined : json['trafficProportion'],
        'started': json['started'] == null ? undefined : json['started'],
    };
}

export function AppStoreVersionExperimentV2UpdateRequestDataAttributesToJSON(json: any): AppStoreVersionExperimentV2UpdateRequestDataAttributes {
    return AppStoreVersionExperimentV2UpdateRequestDataAttributesToJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2UpdateRequestDataAttributesToJSONTyped(value?: AppStoreVersionExperimentV2UpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'trafficProportion': value['trafficProportion'],
        'started': value['started'],
    };
}

