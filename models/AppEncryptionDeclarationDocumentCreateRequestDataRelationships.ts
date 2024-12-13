
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
import type { AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclaration } from './AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclaration';
import {
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationFromJSON,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationFromJSONTyped,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationToJSON,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationToJSONTyped,
} from './AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclaration';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationDocumentCreateRequestDataRelationships
 */
export interface AppEncryptionDeclarationDocumentCreateRequestDataRelationships {
    /**
     * 
     * @type {AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclaration}
     * @memberof AppEncryptionDeclarationDocumentCreateRequestDataRelationships
     */
    appEncryptionDeclaration: AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclaration;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentCreateRequestDataRelationships interface.
 */
export function instanceOfAppEncryptionDeclarationDocumentCreateRequestDataRelationships(value: object): value is AppEncryptionDeclarationDocumentCreateRequestDataRelationships {
    if (!('appEncryptionDeclaration' in value) || value['appEncryptionDeclaration'] === undefined) return false;
    return true;
}

export function AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsFromJSON(json: any): AppEncryptionDeclarationDocumentCreateRequestDataRelationships {
    return AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'appEncryptionDeclaration': AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationFromJSON(json['appEncryptionDeclaration']),
    };
}

export function AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsToJSON(json: any): AppEncryptionDeclarationDocumentCreateRequestDataRelationships {
    return AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsToJSONTyped(value?: AppEncryptionDeclarationDocumentCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'appEncryptionDeclaration': AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationToJSON(value['appEncryptionDeclaration']),
    };
}
