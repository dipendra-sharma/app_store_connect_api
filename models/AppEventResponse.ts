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
import type { AppEvent } from './AppEvent';
import {
    AppEventFromJSON,
    AppEventFromJSONTyped,
    AppEventToJSON,
    AppEventToJSONTyped,
} from './AppEvent';
import type { AppEventLocalization } from './AppEventLocalization';
import {
    AppEventLocalizationFromJSON,
    AppEventLocalizationFromJSONTyped,
    AppEventLocalizationToJSON,
    AppEventLocalizationToJSONTyped,
} from './AppEventLocalization';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface AppEventResponse
 */
export interface AppEventResponse {
    /**
     * 
     * @type {AppEvent}
     * @memberof AppEventResponse
     */
    data: AppEvent;
    /**
     * 
     * @type {Array<AppEventLocalization>}
     * @memberof AppEventResponse
     */
    included?: Array<AppEventLocalization>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppEventResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppEventResponse interface.
 */
export function instanceOfAppEventResponse(value: object): value is AppEventResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppEventResponseFromJSON(json: any): AppEventResponse {
    return AppEventResponseFromJSONTyped(json, false);
}

export function AppEventResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppEventFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppEventLocalizationFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppEventResponseToJSON(json: any): AppEventResponse {
    return AppEventResponseToJSONTyped(json, false);
}

export function AppEventResponseToJSONTyped(value?: AppEventResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppEventToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppEventLocalizationToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

