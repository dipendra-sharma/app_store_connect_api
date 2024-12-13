
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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface BetaTesterInvitation
 */
export interface BetaTesterInvitation {
    /**
     * 
     * @type {string}
     * @memberof BetaTesterInvitation
     */
    type: BetaTesterInvitationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaTesterInvitation
     */
    id: string;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof BetaTesterInvitation
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const BetaTesterInvitationTypeEnum = {
    BetaTesterInvitations: 'betaTesterInvitations'
} as const;
export type BetaTesterInvitationTypeEnum = typeof BetaTesterInvitationTypeEnum[keyof typeof BetaTesterInvitationTypeEnum];


/**
 * Check if a given object implements the BetaTesterInvitation interface.
 */
export function instanceOfBetaTesterInvitation(value: object): value is BetaTesterInvitation {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BetaTesterInvitationFromJSON(json: any): BetaTesterInvitation {
    return BetaTesterInvitationFromJSONTyped(json, false);
}

export function BetaTesterInvitationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterInvitation {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function BetaTesterInvitationToJSON(json: any): BetaTesterInvitation {
    return BetaTesterInvitationToJSONTyped(json, false);
}

export function BetaTesterInvitationToJSONTyped(value?: BetaTesterInvitation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'links': ResourceLinksToJSON(value['links']),
    };
}
