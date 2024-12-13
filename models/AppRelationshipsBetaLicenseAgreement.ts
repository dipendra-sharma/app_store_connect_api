
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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
import type { AppRelationshipsBetaLicenseAgreementData } from './AppRelationshipsBetaLicenseAgreementData';
import {
    AppRelationshipsBetaLicenseAgreementDataFromJSON,
    AppRelationshipsBetaLicenseAgreementDataFromJSONTyped,
    AppRelationshipsBetaLicenseAgreementDataToJSON,
    AppRelationshipsBetaLicenseAgreementDataToJSONTyped,
} from './AppRelationshipsBetaLicenseAgreementData';

/**
 * 
 * @export
 * @interface AppRelationshipsBetaLicenseAgreement
 */
export interface AppRelationshipsBetaLicenseAgreement {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppRelationshipsBetaLicenseAgreement
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppRelationshipsBetaLicenseAgreementData}
     * @memberof AppRelationshipsBetaLicenseAgreement
     */
    data?: AppRelationshipsBetaLicenseAgreementData;
}

/**
 * Check if a given object implements the AppRelationshipsBetaLicenseAgreement interface.
 */
export function instanceOfAppRelationshipsBetaLicenseAgreement(value: object): value is AppRelationshipsBetaLicenseAgreement {
    return true;
}

export function AppRelationshipsBetaLicenseAgreementFromJSON(json: any): AppRelationshipsBetaLicenseAgreement {
    return AppRelationshipsBetaLicenseAgreementFromJSONTyped(json, false);
}

export function AppRelationshipsBetaLicenseAgreementFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsBetaLicenseAgreement {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : AppRelationshipsBetaLicenseAgreementDataFromJSON(json['data']),
    };
}

export function AppRelationshipsBetaLicenseAgreementToJSON(json: any): AppRelationshipsBetaLicenseAgreement {
    return AppRelationshipsBetaLicenseAgreementToJSONTyped(json, false);
}

export function AppRelationshipsBetaLicenseAgreementToJSONTyped(value?: AppRelationshipsBetaLicenseAgreement | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': AppRelationshipsBetaLicenseAgreementDataToJSON(value['data']),
    };
}

