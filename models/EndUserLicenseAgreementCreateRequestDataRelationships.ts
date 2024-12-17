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
import type { EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories } from './EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories';
import {
    EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesFromJSON,
    EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesFromJSONTyped,
    EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesToJSON,
    EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesToJSONTyped,
} from './EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories';
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
 * @interface EndUserLicenseAgreementCreateRequestDataRelationships
 */
export interface EndUserLicenseAgreementCreateRequestDataRelationships {
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof EndUserLicenseAgreementCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories}
     * @memberof EndUserLicenseAgreementCreateRequestDataRelationships
     */
    territories: EndUserLicenseAgreementCreateRequestDataRelationshipsTerritories;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementCreateRequestDataRelationships interface.
 */
export function instanceOfEndUserLicenseAgreementCreateRequestDataRelationships(value: object): value is EndUserLicenseAgreementCreateRequestDataRelationships {
    if (!('app' in value) || value['app'] === undefined) return false;
    if (!('territories' in value) || value['territories'] === undefined) return false;
    return true;
}

export function EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSON(json: any): EndUserLicenseAgreementCreateRequestDataRelationships {
    return EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'territories': EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesFromJSON(json['territories']),
    };
}

export function EndUserLicenseAgreementCreateRequestDataRelationshipsToJSON(json: any): EndUserLicenseAgreementCreateRequestDataRelationships {
    return EndUserLicenseAgreementCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function EndUserLicenseAgreementCreateRequestDataRelationshipsToJSONTyped(value?: EndUserLicenseAgreementCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON(value['app']),
        'territories': EndUserLicenseAgreementCreateRequestDataRelationshipsTerritoriesToJSON(value['territories']),
    };
}

