
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
import type { EndUserLicenseAgreementRelationshipsTerritories } from './EndUserLicenseAgreementRelationshipsTerritories';
import {
    EndUserLicenseAgreementRelationshipsTerritoriesFromJSON,
    EndUserLicenseAgreementRelationshipsTerritoriesFromJSONTyped,
    EndUserLicenseAgreementRelationshipsTerritoriesToJSON,
    EndUserLicenseAgreementRelationshipsTerritoriesToJSONTyped,
} from './EndUserLicenseAgreementRelationshipsTerritories';
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsApp } from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSONTyped,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';

/**
 * 
 * @export
 * @interface EndUserLicenseAgreementRelationships
 */
export interface EndUserLicenseAgreementRelationships {
    /**
     * 
     * @type {AlternativeDistributionKeyCreateRequestDataRelationshipsApp}
     * @memberof EndUserLicenseAgreementRelationships
     */
    app?: AlternativeDistributionKeyCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {EndUserLicenseAgreementRelationshipsTerritories}
     * @memberof EndUserLicenseAgreementRelationships
     */
    territories?: EndUserLicenseAgreementRelationshipsTerritories;
}

/**
 * Check if a given object implements the EndUserLicenseAgreementRelationships interface.
 */
export function instanceOfEndUserLicenseAgreementRelationships(value: object): value is EndUserLicenseAgreementRelationships {
    return true;
}

export function EndUserLicenseAgreementRelationshipsFromJSON(json: any): EndUserLicenseAgreementRelationships {
    return EndUserLicenseAgreementRelationshipsFromJSONTyped(json, false);
}

export function EndUserLicenseAgreementRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndUserLicenseAgreementRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': json['app'] == null ? undefined : AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'territories': json['territories'] == null ? undefined : EndUserLicenseAgreementRelationshipsTerritoriesFromJSON(json['territories']),
    };
}

export function EndUserLicenseAgreementRelationshipsToJSON(json: any): EndUserLicenseAgreementRelationships {
    return EndUserLicenseAgreementRelationshipsToJSONTyped(json, false);
}

export function EndUserLicenseAgreementRelationshipsToJSONTyped(value?: EndUserLicenseAgreementRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON(value['app']),
        'territories': EndUserLicenseAgreementRelationshipsTerritoriesToJSON(value['territories']),
    };
}
