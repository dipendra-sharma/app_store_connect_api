
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
import type { AppScreenshotRelationshipsAppScreenshotSet } from './AppScreenshotRelationshipsAppScreenshotSet';
import {
    AppScreenshotRelationshipsAppScreenshotSetFromJSON,
    AppScreenshotRelationshipsAppScreenshotSetFromJSONTyped,
    AppScreenshotRelationshipsAppScreenshotSetToJSON,
    AppScreenshotRelationshipsAppScreenshotSetToJSONTyped,
} from './AppScreenshotRelationshipsAppScreenshotSet';

/**
 * 
 * @export
 * @interface AppScreenshotRelationships
 */
export interface AppScreenshotRelationships {
    /**
     * 
     * @type {AppScreenshotRelationshipsAppScreenshotSet}
     * @memberof AppScreenshotRelationships
     */
    appScreenshotSet?: AppScreenshotRelationshipsAppScreenshotSet;
}

/**
 * Check if a given object implements the AppScreenshotRelationships interface.
 */
export function instanceOfAppScreenshotRelationships(value: object): value is AppScreenshotRelationships {
    return true;
}

export function AppScreenshotRelationshipsFromJSON(json: any): AppScreenshotRelationships {
    return AppScreenshotRelationshipsFromJSONTyped(json, false);
}

export function AppScreenshotRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appScreenshotSet': json['appScreenshotSet'] == null ? undefined : AppScreenshotRelationshipsAppScreenshotSetFromJSON(json['appScreenshotSet']),
    };
}

export function AppScreenshotRelationshipsToJSON(json: any): AppScreenshotRelationships {
    return AppScreenshotRelationshipsToJSONTyped(json, false);
}

export function AppScreenshotRelationshipsToJSONTyped(value?: AppScreenshotRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appScreenshotSet': AppScreenshotRelationshipsAppScreenshotSetToJSON(value['appScreenshotSet']),
    };
}
