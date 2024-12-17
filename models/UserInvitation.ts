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
import type { UserInvitationAttributes } from './UserInvitationAttributes';
import {
    UserInvitationAttributesFromJSON,
    UserInvitationAttributesFromJSONTyped,
    UserInvitationAttributesToJSON,
    UserInvitationAttributesToJSONTyped,
} from './UserInvitationAttributes';
import type { UserInvitationRelationships } from './UserInvitationRelationships';
import {
    UserInvitationRelationshipsFromJSON,
    UserInvitationRelationshipsFromJSONTyped,
    UserInvitationRelationshipsToJSON,
    UserInvitationRelationshipsToJSONTyped,
} from './UserInvitationRelationships';

/**
 * 
 * @export
 * @interface UserInvitation
 */
export interface UserInvitation {
    /**
     * 
     * @type {string}
     * @memberof UserInvitation
     */
    type: UserInvitationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UserInvitation
     */
    id: string;
    /**
     * 
     * @type {UserInvitationAttributes}
     * @memberof UserInvitation
     */
    attributes?: UserInvitationAttributes;
    /**
     * 
     * @type {UserInvitationRelationships}
     * @memberof UserInvitation
     */
    relationships?: UserInvitationRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof UserInvitation
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const UserInvitationTypeEnum = {
    UserInvitations: 'userInvitations'
} as const;
export type UserInvitationTypeEnum = typeof UserInvitationTypeEnum[keyof typeof UserInvitationTypeEnum];


/**
 * Check if a given object implements the UserInvitation interface.
 */
export function instanceOfUserInvitation(value: object): value is UserInvitation {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function UserInvitationFromJSON(json: any): UserInvitation {
    return UserInvitationFromJSONTyped(json, false);
}

export function UserInvitationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInvitation {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : UserInvitationAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : UserInvitationRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function UserInvitationToJSON(json: any): UserInvitation {
    return UserInvitationToJSONTyped(json, false);
}

export function UserInvitationToJSONTyped(value?: UserInvitation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': UserInvitationAttributesToJSON(value['attributes']),
        'relationships': UserInvitationRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

