
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
import type { AppEncryptionDeclarationCreateRequestDataRelationshipsApp } from './AppEncryptionDeclarationCreateRequestDataRelationshipsApp';
import {
    AppEncryptionDeclarationCreateRequestDataRelationshipsAppFromJSON,
    AppEncryptionDeclarationCreateRequestDataRelationshipsAppFromJSONTyped,
    AppEncryptionDeclarationCreateRequestDataRelationshipsAppToJSON,
    AppEncryptionDeclarationCreateRequestDataRelationshipsAppToJSONTyped,
} from './AppEncryptionDeclarationCreateRequestDataRelationshipsApp';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationCreateRequestDataRelationships
 */
export interface AppEncryptionDeclarationCreateRequestDataRelationships {
    /**
     * 
     * @type {AppEncryptionDeclarationCreateRequestDataRelationshipsApp}
     * @memberof AppEncryptionDeclarationCreateRequestDataRelationships
     * @deprecated
     */
    app: AppEncryptionDeclarationCreateRequestDataRelationshipsApp;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationCreateRequestDataRelationships interface.
 */
export function instanceOfAppEncryptionDeclarationCreateRequestDataRelationships(value: object): value is AppEncryptionDeclarationCreateRequestDataRelationships {
    if (!('app' in value) || value['app'] === undefined) return false;
    return true;
}

export function AppEncryptionDeclarationCreateRequestDataRelationshipsFromJSON(json: any): AppEncryptionDeclarationCreateRequestDataRelationships {
    return AppEncryptionDeclarationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': AppEncryptionDeclarationCreateRequestDataRelationshipsAppFromJSON(json['app']),
    };
}

export function AppEncryptionDeclarationCreateRequestDataRelationshipsToJSON(json: any): AppEncryptionDeclarationCreateRequestDataRelationships {
    return AppEncryptionDeclarationCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppEncryptionDeclarationCreateRequestDataRelationshipsToJSONTyped(value?: AppEncryptionDeclarationCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AppEncryptionDeclarationCreateRequestDataRelationshipsAppToJSON(value['app']),
    };
}
