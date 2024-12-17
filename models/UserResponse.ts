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
import type { App } from './App';
import {
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
    AppToJSONTyped,
} from './App';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
    UserToJSONTyped,
} from './User';
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
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {User}
     * @memberof UserResponse
     */
    data: User;
    /**
     * 
     * @type {Array<App>}
     * @memberof UserResponse
     */
    included?: Array<App>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof UserResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the UserResponse interface.
 */
export function instanceOfUserResponse(value: object): value is UserResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function UserResponseFromJSON(json: any): UserResponse {
    return UserResponseFromJSONTyped(json, false);
}

export function UserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': UserFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function UserResponseToJSON(json: any): UserResponse {
    return UserResponseToJSONTyped(json, false);
}

export function UserResponseToJSONTyped(value?: UserResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': UserToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

