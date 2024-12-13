
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
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
    UserRoleToJSONTyped,
} from './UserRole';

/**
 * 
 * @export
 * @interface UserAttributes
 */
export interface UserAttributes {
    /**
     * 
     * @type {string}
     * @memberof UserAttributes
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAttributes
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserAttributes
     */
    lastName?: string;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof UserAttributes
     */
    roles?: Array<UserRole>;
    /**
     * 
     * @type {boolean}
     * @memberof UserAttributes
     */
    allAppsVisible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserAttributes
     */
    provisioningAllowed?: boolean;
}

/**
 * Check if a given object implements the UserAttributes interface.
 */
export function instanceOfUserAttributes(value: object): value is UserAttributes {
    return true;
}

export function UserAttributesFromJSON(json: any): UserAttributes {
    return UserAttributesFromJSONTyped(json, false);
}

export function UserAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['username'] == null ? undefined : json['username'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'roles': json['roles'] == null ? undefined : ((json['roles'] as Array<any>).map(UserRoleFromJSON)),
        'allAppsVisible': json['allAppsVisible'] == null ? undefined : json['allAppsVisible'],
        'provisioningAllowed': json['provisioningAllowed'] == null ? undefined : json['provisioningAllowed'],
    };
}

export function UserAttributesToJSON(json: any): UserAttributes {
    return UserAttributesToJSONTyped(json, false);
}

export function UserAttributesToJSONTyped(value?: UserAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'username': value['username'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'roles': value['roles'] == null ? undefined : ((value['roles'] as Array<any>).map(UserRoleToJSON)),
        'allAppsVisible': value['allAppsVisible'],
        'provisioningAllowed': value['provisioningAllowed'],
    };
}
