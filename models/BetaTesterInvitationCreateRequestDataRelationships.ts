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
import type { BetaTesterInvitationCreateRequestDataRelationshipsBetaTester } from './BetaTesterInvitationCreateRequestDataRelationshipsBetaTester';
import {
    BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSON,
    BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSONTyped,
    BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterToJSON,
    BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterToJSONTyped,
} from './BetaTesterInvitationCreateRequestDataRelationshipsBetaTester';
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
 * @interface BetaTesterInvitationCreateRequestDataRelationships
 */
export interface BetaTesterInvitationCreateRequestDataRelationships {
    /**
     * 
     * @type {BetaTesterInvitationCreateRequestDataRelationshipsBetaTester}
     * @memberof BetaTesterInvitationCreateRequestDataRelationships
     */
    betaTester: BetaTesterInvitationCreateRequestDataRelationshipsBetaTester;
    /**
     * 
     * @type {AnalyticsReportRequestCreateRequestDataRelationshipsApp}
     * @memberof BetaTesterInvitationCreateRequestDataRelationships
     */
    app: AnalyticsReportRequestCreateRequestDataRelationshipsApp;
}

/**
 * Check if a given object implements the BetaTesterInvitationCreateRequestDataRelationships interface.
 */
export function instanceOfBetaTesterInvitationCreateRequestDataRelationships(value: object): value is BetaTesterInvitationCreateRequestDataRelationships {
    if (!('betaTester' in value) || value['betaTester'] === undefined) return false;
    if (!('app' in value) || value['app'] === undefined) return false;
    return true;
}

export function BetaTesterInvitationCreateRequestDataRelationshipsFromJSON(json: any): BetaTesterInvitationCreateRequestDataRelationships {
    return BetaTesterInvitationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function BetaTesterInvitationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitationCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'betaTester': BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterFromJSON(json['betaTester']),
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppFromJSON(json['app']),
    };
}

export function BetaTesterInvitationCreateRequestDataRelationshipsToJSON(json: any): BetaTesterInvitationCreateRequestDataRelationships {
    return BetaTesterInvitationCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function BetaTesterInvitationCreateRequestDataRelationshipsToJSONTyped(value?: BetaTesterInvitationCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'betaTester': BetaTesterInvitationCreateRequestDataRelationshipsBetaTesterToJSON(value['betaTester']),
        'app': AnalyticsReportRequestCreateRequestDataRelationshipsAppToJSON(value['app']),
    };
}

