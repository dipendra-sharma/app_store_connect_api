
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
import type { AppEventLocalizationCreateRequestDataRelationshipsAppEvent } from './AppEventLocalizationCreateRequestDataRelationshipsAppEvent';
import {
    AppEventLocalizationCreateRequestDataRelationshipsAppEventFromJSON,
    AppEventLocalizationCreateRequestDataRelationshipsAppEventFromJSONTyped,
    AppEventLocalizationCreateRequestDataRelationshipsAppEventToJSON,
    AppEventLocalizationCreateRequestDataRelationshipsAppEventToJSONTyped,
} from './AppEventLocalizationCreateRequestDataRelationshipsAppEvent';

/**
 * 
 * @export
 * @interface AppEventLocalizationCreateRequestDataRelationships
 */
export interface AppEventLocalizationCreateRequestDataRelationships {
    /**
     * 
     * @type {AppEventLocalizationCreateRequestDataRelationshipsAppEvent}
     * @memberof AppEventLocalizationCreateRequestDataRelationships
     */
    appEvent: AppEventLocalizationCreateRequestDataRelationshipsAppEvent;
}

/**
 * Check if a given object implements the AppEventLocalizationCreateRequestDataRelationships interface.
 */
export function instanceOfAppEventLocalizationCreateRequestDataRelationships(value: object): value is AppEventLocalizationCreateRequestDataRelationships {
    if (!('appEvent' in value) || value['appEvent'] === undefined) return false;
    return true;
}

export function AppEventLocalizationCreateRequestDataRelationshipsFromJSON(json: any): AppEventLocalizationCreateRequestDataRelationships {
    return AppEventLocalizationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppEventLocalizationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appEvent': AppEventLocalizationCreateRequestDataRelationshipsAppEventFromJSON(json['appEvent']),
    };
}

export function AppEventLocalizationCreateRequestDataRelationshipsToJSON(json: any): AppEventLocalizationCreateRequestDataRelationships {
    return AppEventLocalizationCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppEventLocalizationCreateRequestDataRelationshipsToJSONTyped(value?: AppEventLocalizationCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appEvent': AppEventLocalizationCreateRequestDataRelationshipsAppEventToJSON(value['appEvent']),
    };
}
