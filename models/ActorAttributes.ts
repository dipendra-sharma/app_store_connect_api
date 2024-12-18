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
/**
 * 
 * @export
 * @interface ActorAttributes
 */
export interface ActorAttributes {
    /**
     * 
     * @type {string}
     * @memberof ActorAttributes
     */
    actorType?: ActorAttributesActorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ActorAttributes
     */
    userFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ActorAttributes
     */
    userLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ActorAttributes
     */
    userEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof ActorAttributes
     */
    apiKeyId?: string;
}


/**
 * @export
 */
export const ActorAttributesActorTypeEnum = {
    User: 'USER',
    ApiKey: 'API_KEY',
    XcodeCloud: 'XCODE_CLOUD',
    Apple: 'APPLE'
} as const;
export type ActorAttributesActorTypeEnum = typeof ActorAttributesActorTypeEnum[keyof typeof ActorAttributesActorTypeEnum];


/**
 * Check if a given object implements the ActorAttributes interface.
 */
export function instanceOfActorAttributes(value: object): value is ActorAttributes {
    return true;
}

export function ActorAttributesFromJSON(json: any): ActorAttributes {
    return ActorAttributesFromJSONTyped(json, false);
}

export function ActorAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActorAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'actorType': json['actorType'] == null ? undefined : json['actorType'],
        'userFirstName': json['userFirstName'] == null ? undefined : json['userFirstName'],
        'userLastName': json['userLastName'] == null ? undefined : json['userLastName'],
        'userEmail': json['userEmail'] == null ? undefined : json['userEmail'],
        'apiKeyId': json['apiKeyId'] == null ? undefined : json['apiKeyId'],
    };
}

export function ActorAttributesToJSON(json: any): ActorAttributes {
    return ActorAttributesToJSONTyped(json, false);
}

export function ActorAttributesToJSONTyped(value?: ActorAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'actorType': value['actorType'],
        'userFirstName': value['userFirstName'],
        'userLastName': value['userLastName'],
        'userEmail': value['userEmail'],
        'apiKeyId': value['apiKeyId'],
    };
}

