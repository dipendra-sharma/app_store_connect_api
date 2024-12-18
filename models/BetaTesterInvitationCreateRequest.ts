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
import type { BetaTesterInvitationCreateRequestData } from './BetaTesterInvitationCreateRequestData';
import {
    BetaTesterInvitationCreateRequestDataFromJSON,
    BetaTesterInvitationCreateRequestDataFromJSONTyped,
    BetaTesterInvitationCreateRequestDataToJSON,
    BetaTesterInvitationCreateRequestDataToJSONTyped,
} from './BetaTesterInvitationCreateRequestData';

/**
 * 
 * @export
 * @interface BetaTesterInvitationCreateRequest
 */
export interface BetaTesterInvitationCreateRequest {
    /**
     * 
     * @type {BetaTesterInvitationCreateRequestData}
     * @memberof BetaTesterInvitationCreateRequest
     */
    data: BetaTesterInvitationCreateRequestData;
}

/**
 * Check if a given object implements the BetaTesterInvitationCreateRequest interface.
 */
export function instanceOfBetaTesterInvitationCreateRequest(value: object): value is BetaTesterInvitationCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BetaTesterInvitationCreateRequestFromJSON(json: any): BetaTesterInvitationCreateRequest {
    return BetaTesterInvitationCreateRequestFromJSONTyped(json, false);
}

export function BetaTesterInvitationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaTesterInvitationCreateRequestDataFromJSON(json['data']),
    };
}

export function BetaTesterInvitationCreateRequestToJSON(json: any): BetaTesterInvitationCreateRequest {
    return BetaTesterInvitationCreateRequestToJSONTyped(json, false);
}

export function BetaTesterInvitationCreateRequestToJSONTyped(value?: BetaTesterInvitationCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaTesterInvitationCreateRequestDataToJSON(value['data']),
    };
}

