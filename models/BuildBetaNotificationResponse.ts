
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
import type { BuildBetaNotification } from './BuildBetaNotification';
import {
    BuildBetaNotificationFromJSON,
    BuildBetaNotificationFromJSONTyped,
    BuildBetaNotificationToJSON,
    BuildBetaNotificationToJSONTyped,
} from './BuildBetaNotification';
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
 * @interface BuildBetaNotificationResponse
 */
export interface BuildBetaNotificationResponse {
    /**
     * 
     * @type {BuildBetaNotification}
     * @memberof BuildBetaNotificationResponse
     */
    data: BuildBetaNotification;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BuildBetaNotificationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BuildBetaNotificationResponse interface.
 */
export function instanceOfBuildBetaNotificationResponse(value: object): value is BuildBetaNotificationResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BuildBetaNotificationResponseFromJSON(json: any): BuildBetaNotificationResponse {
    return BuildBetaNotificationResponseFromJSONTyped(json, false);
}

export function BuildBetaNotificationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaNotificationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BuildBetaNotificationFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BuildBetaNotificationResponseToJSON(json: any): BuildBetaNotificationResponse {
    return BuildBetaNotificationResponseToJSONTyped(json, false);
}

export function BuildBetaNotificationResponseToJSONTyped(value?: BuildBetaNotificationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BuildBetaNotificationToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}
