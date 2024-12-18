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
import type { AnalyticsReportRequestCreateRequestDataRelationshipsApp } from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';
import {
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSONTyped,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON,
    AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSONTyped,
} from './AnalyticsReportRequestCreateRequestDataRelationshipsApp';

/**
 * 
 * @export
 * @interface AnalyticsReportRequestCreateRequestDataRelationships
 */
export interface AnalyticsReportRequestCreateRequestDataRelationships {
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof AnalyticsReportRequestCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
}

/**
 * Check if a given object implements the AnalyticsReportRequestCreateRequestDataRelationships interface.
 */
export function instanceOfAnalyticsReportRequestCreateRequestDataRelationships(value: object): value is AnalyticsReportRequestCreateRequestDataRelationships {
    if (!('app' in value) || value['app'] === undefined) return false;
    return true;
}

export function AnalyticsReportRequestCreateRequestDataRelationshipsFromJSON(json: any): AnalyticsReportRequestCreateRequestDataRelationships {
    return AnalyticsReportRequestCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AnalyticsReportRequestCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalyticsReportRequestCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON(json['app']),
    };
}

export function AnalyticsReportRequestCreateRequestDataRelationshipsToJSON(json: any): AnalyticsReportRequestCreateRequestDataRelationships {
    return AnalyticsReportRequestCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AnalyticsReportRequestCreateRequestDataRelationshipsToJSONTyped(value?: AnalyticsReportRequestCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON(value['app']),
    };
}

