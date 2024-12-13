
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
import type { BetaTesterRelationshipsApps } from './BetaTesterRelationshipsApps';
import {
    BetaTesterRelationshipsAppsFromJSON,
    BetaTesterRelationshipsAppsFromJSONTyped,
    BetaTesterRelationshipsAppsToJSON,
    BetaTesterRelationshipsAppsToJSONTyped,
} from './BetaTesterRelationshipsApps';
import type { AppRelationshipsBetaGroups } from './AppRelationshipsBetaGroups';
import {
    AppRelationshipsBetaGroupsFromJSON,
    AppRelationshipsBetaGroupsFromJSONTyped,
    AppRelationshipsBetaGroupsToJSON,
    AppRelationshipsBetaGroupsToJSONTyped,
} from './AppRelationshipsBetaGroups';
import type { AppRelationshipsBuilds } from './AppRelationshipsBuilds';
import {
    AppRelationshipsBuildsFromJSON,
    AppRelationshipsBuildsFromJSONTyped,
    AppRelationshipsBuildsToJSON,
    AppRelationshipsBuildsToJSONTyped,
} from './AppRelationshipsBuilds';

/**
 * 
 * @export
 * @interface BetaTesterRelationships
 */
export interface BetaTesterRelationships {
    /**
     * 
     * @type {BetaTesterRelationshipsApps}
     * @memberof BetaTesterRelationships
     */
    apps?: BetaTesterRelationshipsApps;
    /**
     * 
     * @type {AppRelationshipsBetaGroups}
     * @memberof BetaTesterRelationships
     */
    betaGroups?: AppRelationshipsBetaGroups;
    /**
     * 
     * @type {AppRelationshipsBuilds}
     * @memberof BetaTesterRelationships
     */
    builds?: AppRelationshipsBuilds;
}

/**
 * Check if a given object implements the BetaTesterRelationships interface.
 */
export function instanceOfBetaTesterRelationships(value: object): value is BetaTesterRelationships {
    return true;
}

export function BetaTesterRelationshipsFromJSON(json: any): BetaTesterRelationships {
    return BetaTesterRelationshipsFromJSONTyped(json, false);
}

export function BetaTesterRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'apps': json['apps'] == null ? undefined : BetaTesterRelationshipsAppsFromJSON(json['apps']),
        'betaGroups': json['betaGroups'] == null ? undefined : AppRelationshipsBetaGroupsFromJSON(json['betaGroups']),
        'builds': json['builds'] == null ? undefined : AppRelationshipsBuildsFromJSON(json['builds']),
    };
}

export function BetaTesterRelationshipsToJSON(json: any): BetaTesterRelationships {
    return BetaTesterRelationshipsToJSONTyped(json, false);
}

export function BetaTesterRelationshipsToJSONTyped(value?: BetaTesterRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apps': BetaTesterRelationshipsAppsToJSON(value['apps']),
        'betaGroups': AppRelationshipsBetaGroupsToJSON(value['betaGroups']),
        'builds': AppRelationshipsBuildsToJSON(value['builds']),
    };
}

