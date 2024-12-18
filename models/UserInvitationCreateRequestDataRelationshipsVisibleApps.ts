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
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsAppData } from './AlternativeDistributionKeyCreateRequestDataRelationshipsAppData';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSONTyped,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsAppData';

/**
 * 
 * @export
 * @interface UserInvitationCreateRequestDataRelationshipsVisibleApps
 */
export interface UserInvitationCreateRequestDataRelationshipsVisibleApps {
    /**
     * 
     * @type {Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>}
     * @memberof UserInvitationCreateRequestDataRelationshipsVisibleApps
     */
    data?: Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>;
}

/**
 * Check if a given object implements the UserInvitationCreateRequestDataRelationshipsVisibleApps interface.
 */
export function instanceOfUserInvitationCreateRequestDataRelationshipsVisibleApps(value: object): value is UserInvitationCreateRequestDataRelationshipsVisibleApps {
    return true;
}

export function UserInvitationCreateRequestDataRelationshipsVisibleAppsFromJSON(json: any): UserInvitationCreateRequestDataRelationshipsVisibleApps {
    return UserInvitationCreateRequestDataRelationshipsVisibleAppsFromJSONTyped(json, false);
}

export function UserInvitationCreateRequestDataRelationshipsVisibleAppsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInvitationCreateRequestDataRelationshipsVisibleApps {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON)),
    };
}

export function UserInvitationCreateRequestDataRelationshipsVisibleAppsToJSON(json: any): UserInvitationCreateRequestDataRelationshipsVisibleApps {
    return UserInvitationCreateRequestDataRelationshipsVisibleAppsToJSONTyped(json, false);
}

export function UserInvitationCreateRequestDataRelationshipsVisibleAppsToJSONTyped(value?: UserInvitationCreateRequestDataRelationshipsVisibleApps | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON)),
    };
}

