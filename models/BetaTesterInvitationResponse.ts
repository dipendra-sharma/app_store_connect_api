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
import type { BetaTesterInvitation } from './BetaTesterInvitation';
import {
    BetaTesterInvitationFromJSON,
    BetaTesterInvitationFromJSONTyped,
    BetaTesterInvitationToJSON,
    BetaTesterInvitationToJSONTyped,
} from './BetaTesterInvitation';
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
 * @interface BetaTesterInvitationResponse
 */
export interface BetaTesterInvitationResponse {
    /**
     * 
     * @type {BetaTesterInvitation}
     * @memberof BetaTesterInvitationResponse
     */
    data: BetaTesterInvitation;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BetaTesterInvitationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BetaTesterInvitationResponse interface.
 */
export function instanceOfBetaTesterInvitationResponse(value: object): value is BetaTesterInvitationResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaTesterInvitationResponseFromJSON(json: any): BetaTesterInvitationResponse {
    return BetaTesterInvitationResponseFromJSONTyped(json, false);
}

export function BetaTesterInvitationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaTesterInvitationFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BetaTesterInvitationResponseToJSON(json: any): BetaTesterInvitationResponse {
    return BetaTesterInvitationResponseToJSONTyped(json, false);
}

export function BetaTesterInvitationResponseToJSONTyped(value?: BetaTesterInvitationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaTesterInvitationToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

