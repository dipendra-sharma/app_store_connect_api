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
import type { AppRelationshipsBuilds } from './AppRelationshipsBuilds';
import {
    AppRelationshipsBuildsFromJSON,
    AppRelationshipsBuildsFromJSONTyped,
    AppRelationshipsBuildsToJSON,
    AppRelationshipsBuildsToJSONTyped,
} from './AppRelationshipsBuilds';
import type { BetaAppLocalizationRelationshipsApp } from './BetaAppLocalizationRelationshipsApp';
import {
    BetaAppLocalizationRelationshipsAppFromJSON,
    BetaAppLocalizationRelationshipsAppFromJSONTyped,
    BetaAppLocalizationRelationshipsAppToJSON,
    BetaAppLocalizationRelationshipsAppToJSONTyped,
} from './BetaAppLocalizationRelationshipsApp';
import type { BetaGroupRelationshipsBetaTesters } from './BetaGroupRelationshipsBetaTesters';
import {
    BetaGroupRelationshipsBetaTestersFromJSON,
    BetaGroupRelationshipsBetaTestersFromJSONTyped,
    BetaGroupRelationshipsBetaTestersToJSON,
    BetaGroupRelationshipsBetaTestersToJSONTyped,
} from './BetaGroupRelationshipsBetaTesters';

/**
 * 
 * @export
 * @interface BetaGroupRelationships
 */
export interface BetaGroupRelationships {
    /**
     * 
     * @type {BetaAppLocalizationRelationshipsApp}
     * @memberof BetaGroupRelationships
     */
    app?: BetaAppLocalizationRelationshipsApp;
    /**
     * 
     * @type {AppRelationshipsBuilds}
     * @memberof BetaGroupRelationships
     */
    builds?: AppRelationshipsBuilds;
    /**
     * 
     * @type {BetaGroupRelationshipsBetaTesters}
     * @memberof BetaGroupRelationships
     */
    betaTesters?: BetaGroupRelationshipsBetaTesters;
}

/**
 * Check if a given object implements the BetaGroupRelationships interface.
 */
export function instanceOfBetaGroupRelationships(value: object): value is BetaGroupRelationships {
    return true;
}

export function BetaGroupRelationshipsFromJSON(json: any): BetaGroupRelationships {
    return BetaGroupRelationshipsFromJSONTyped(json, false);
}

export function BetaGroupRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': json['app'] == null ? undefined : BetaAppLocalizationRelationshipsAppFromJSON(json['app']),
        'builds': json['builds'] == null ? undefined : AppRelationshipsBuildsFromJSON(json['builds']),
        'betaTesters': json['betaTesters'] == null ? undefined : BetaGroupRelationshipsBetaTestersFromJSON(json['betaTesters']),
    };
}

export function BetaGroupRelationshipsToJSON(json: any): BetaGroupRelationships {
    return BetaGroupRelationshipsToJSONTyped(json, false);
}

export function BetaGroupRelationshipsToJSONTyped(value?: BetaGroupRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': BetaAppLocalizationRelationshipsAppToJSON(value['app']),
        'builds': AppRelationshipsBuildsToJSON(value['builds']),
        'betaTesters': BetaGroupRelationshipsBetaTestersToJSON(value['betaTesters']),
    };
}

