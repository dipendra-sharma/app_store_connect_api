
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
import type { AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes } from './AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes';
import {
    AppStoreVersionExperimentTreatmentUpdateRequestDataAttributesFromJSON,
    AppStoreVersionExperimentTreatmentUpdateRequestDataAttributesFromJSONTyped,
    AppStoreVersionExperimentTreatmentUpdateRequestDataAttributesToJSON,
    AppStoreVersionExperimentTreatmentUpdateRequestDataAttributesToJSONTyped,
} from './AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatmentUpdateRequestData
 */
export interface AppStoreVersionExperimentTreatmentUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentUpdateRequestData
     */
    type: AppStoreVersionExperimentTreatmentUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatmentUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes}
     * @memberof AppStoreVersionExperimentTreatmentUpdateRequestData
     */
    attributes?: AppStoreVersionExperimentTreatmentUpdateRequestDataAttributes;
}


/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentUpdateRequestDataTypeEnum = {
    AppStoreVersionExperimentTreatments: 'appStoreVersionExperimentTreatments'
} as const;
export type AppStoreVersionExperimentTreatmentUpdateRequestDataTypeEnum = typeof AppStoreVersionExperimentTreatmentUpdateRequestDataTypeEnum[keyof typeof AppStoreVersionExperimentTreatmentUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionExperimentTreatmentUpdateRequestData interface.
 */
export function instanceOfAppStoreVersionExperimentTreatmentUpdateRequestData(value: object): value is AppStoreVersionExperimentTreatmentUpdateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppStoreVersionExperimentTreatmentUpdateRequestDataFromJSON(json: any): AppStoreVersionExperimentTreatmentUpdateRequestData {
    return AppStoreVersionExperimentTreatmentUpdateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentUpdateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppStoreVersionExperimentTreatmentUpdateRequestDataAttributesFromJSON(json['attributes']),
    };
}

export function AppStoreVersionExperimentTreatmentUpdateRequestDataToJSON(json: any): AppStoreVersionExperimentTreatmentUpdateRequestData {
    return AppStoreVersionExperimentTreatmentUpdateRequestDataToJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentUpdateRequestDataToJSONTyped(value?: AppStoreVersionExperimentTreatmentUpdateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppStoreVersionExperimentTreatmentUpdateRequestDataAttributesToJSON(value['attributes']),
    };
}

