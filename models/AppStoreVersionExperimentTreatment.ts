
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
import type { AppStoreVersionExperimentTreatmentAttributes } from './AppStoreVersionExperimentTreatmentAttributes';
import {
    AppStoreVersionExperimentTreatmentAttributesFromJSON,
    AppStoreVersionExperimentTreatmentAttributesFromJSONTyped,
    AppStoreVersionExperimentTreatmentAttributesToJSON,
    AppStoreVersionExperimentTreatmentAttributesToJSONTyped,
} from './AppStoreVersionExperimentTreatmentAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { AppStoreVersionExperimentTreatmentRelationships } from './AppStoreVersionExperimentTreatmentRelationships';
import {
    AppStoreVersionExperimentTreatmentRelationshipsFromJSON,
    AppStoreVersionExperimentTreatmentRelationshipsFromJSONTyped,
    AppStoreVersionExperimentTreatmentRelationshipsToJSON,
    AppStoreVersionExperimentTreatmentRelationshipsToJSONTyped,
} from './AppStoreVersionExperimentTreatmentRelationships';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentTreatment
 */
export interface AppStoreVersionExperimentTreatment {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatment
     */
    type: AppStoreVersionExperimentTreatmentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionExperimentTreatment
     */
    id: string;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentAttributes}
     * @memberof AppStoreVersionExperimentTreatment
     */
    attributes?: AppStoreVersionExperimentTreatmentAttributes;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentRelationships}
     * @memberof AppStoreVersionExperimentTreatment
     */
    relationships?: AppStoreVersionExperimentTreatmentRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreVersionExperimentTreatment
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentTypeEnum = {
    AppStoreVersionExperimentTreatments: 'appStoreVersionExperimentTreatments'
} as const;
export type AppStoreVersionExperimentTreatmentTypeEnum = typeof AppStoreVersionExperimentTreatmentTypeEnum[keyof typeof AppStoreVersionExperimentTreatmentTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionExperimentTreatment interface.
 */
export function instanceOfAppStoreVersionExperimentTreatment(value: object): value is AppStoreVersionExperimentTreatment {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppStoreVersionExperimentTreatmentFromJSON(json: any): AppStoreVersionExperimentTreatment {
    return AppStoreVersionExperimentTreatmentFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatment {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppStoreVersionExperimentTreatmentAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppStoreVersionExperimentTreatmentRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionExperimentTreatmentToJSON(json: any): AppStoreVersionExperimentTreatment {
    return AppStoreVersionExperimentTreatmentToJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentToJSONTyped(value?: AppStoreVersionExperimentTreatment | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppStoreVersionExperimentTreatmentAttributesToJSON(value['attributes']),
        'relationships': AppStoreVersionExperimentTreatmentRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
