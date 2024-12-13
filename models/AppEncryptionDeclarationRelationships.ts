
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
import type { AppEncryptionDeclarationRelationshipsApp } from './AppEncryptionDeclarationRelationshipsApp';
import {
    AppEncryptionDeclarationRelationshipsAppFromJSON,
    AppEncryptionDeclarationRelationshipsAppFromJSONTyped,
    AppEncryptionDeclarationRelationshipsAppToJSON,
    AppEncryptionDeclarationRelationshipsAppToJSONTyped,
} from './AppEncryptionDeclarationRelationshipsApp';
import type { AppEncryptionDeclarationRelationshipsBuilds } from './AppEncryptionDeclarationRelationshipsBuilds';
import {
    AppEncryptionDeclarationRelationshipsBuildsFromJSON,
    AppEncryptionDeclarationRelationshipsBuildsFromJSONTyped,
    AppEncryptionDeclarationRelationshipsBuildsToJSON,
    AppEncryptionDeclarationRelationshipsBuildsToJSONTyped,
} from './AppEncryptionDeclarationRelationshipsBuilds';
import type { AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument } from './AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument';
import {
    AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentFromJSON,
    AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentFromJSONTyped,
    AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentToJSON,
    AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentToJSONTyped,
} from './AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationRelationships
 */
export interface AppEncryptionDeclarationRelationships {
    /**
     * 
     * @type {AppEncryptionDeclarationRelationshipsApp}
     * @memberof AppEncryptionDeclarationRelationships
     * @deprecated
     */
    app?: AppEncryptionDeclarationRelationshipsApp;
    /**
     * 
     * @type {AppEncryptionDeclarationRelationshipsBuilds}
     * @memberof AppEncryptionDeclarationRelationships
     * @deprecated
     */
    builds?: AppEncryptionDeclarationRelationshipsBuilds;
    /**
     * 
     * @type {AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument}
     * @memberof AppEncryptionDeclarationRelationships
     */
    appEncryptionDeclarationDocument?: AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocument;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationRelationships interface.
 */
export function instanceOfAppEncryptionDeclarationRelationships(value: object): value is AppEncryptionDeclarationRelationships {
    return true;
}

export function AppEncryptionDeclarationRelationshipsFromJSON(json: any): AppEncryptionDeclarationRelationships {
    return AppEncryptionDeclarationRelationshipsFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': json['app'] == null ? undefined : AppEncryptionDeclarationRelationshipsAppFromJSON(json['app']),
        'builds': json['builds'] == null ? undefined : AppEncryptionDeclarationRelationshipsBuildsFromJSON(json['builds']),
        'appEncryptionDeclarationDocument': json['appEncryptionDeclarationDocument'] == null ? undefined : AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentFromJSON(json['appEncryptionDeclarationDocument']),
    };
}

export function AppEncryptionDeclarationRelationshipsToJSON(json: any): AppEncryptionDeclarationRelationships {
    return AppEncryptionDeclarationRelationshipsToJSONTyped(json, false);
}

export function AppEncryptionDeclarationRelationshipsToJSONTyped(value?: AppEncryptionDeclarationRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AppEncryptionDeclarationRelationshipsAppToJSON(value['app']),
        'builds': AppEncryptionDeclarationRelationshipsBuildsToJSON(value['builds']),
        'appEncryptionDeclarationDocument': AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentToJSON(value['appEncryptionDeclarationDocument']),
    };
}

