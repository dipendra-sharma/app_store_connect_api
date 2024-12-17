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
import type { AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet } from './AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet';
import {
    AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSON,
    AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSONTyped,
    AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetToJSON,
    AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetToJSONTyped,
} from './AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet';

/**
 * 
 * @export
 * @interface AppScreenshotCreateRequestDataRelationships
 */
export interface AppScreenshotCreateRequestDataRelationships {
    /**
     * 
     * @type {AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet}
     * @memberof AppScreenshotCreateRequestDataRelationships
     */
    appScreenshotSet: AppScreenshotCreateRequestDataRelationshipsAppScreenshotSet;
}

/**
 * Check if a given object implements the AppScreenshotCreateRequestDataRelationships interface.
 */
export function instanceOfAppScreenshotCreateRequestDataRelationships(value: object): value is AppScreenshotCreateRequestDataRelationships {
    if (!('appScreenshotSet' in value) || value['appScreenshotSet'] === undefined) return false;
    return true;
}

export function AppScreenshotCreateRequestDataRelationshipsFromJSON(json: any): AppScreenshotCreateRequestDataRelationships {
    return AppScreenshotCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppScreenshotCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appScreenshotSet': AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetFromJSON(json['appScreenshotSet']),
    };
}

export function AppScreenshotCreateRequestDataRelationshipsToJSON(json: any): AppScreenshotCreateRequestDataRelationships {
    return AppScreenshotCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppScreenshotCreateRequestDataRelationshipsToJSONTyped(value?: AppScreenshotCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appScreenshotSet': AppScreenshotCreateRequestDataRelationshipsAppScreenshotSetToJSON(value['appScreenshotSet']),
    };
}

