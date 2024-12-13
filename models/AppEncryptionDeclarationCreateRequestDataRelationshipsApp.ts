
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
 * @interface AppEncryptionDeclarationCreateRequestDataRelationshipsApp
 */
export interface AppEncryptionDeclarationCreateRequestDataRelationshipsApp {
    /**
     * 
     * @type {AlternativeDistributionKeyCreateRequestDataRelationshipsAppData}
     * @memberof AppEncryptionDeclarationCreateRequestDataRelationshipsApp
     */
    data: AlternativeDistributionKeyCreateRequestDataRelationshipsAppData;
}

/**
 * Check if a given object implements the AppEncryptionDeclarationCreateRequestDataRelationshipsApp interface.
 */
export function instanceOfAppEncryptionDeclarationCreateRequestDataRelationshipsApp(value: object): value is AppEncryptionDeclarationCreateRequestDataRelationshipsApp {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppEncryptionDeclarationCreateRequestDataRelationshipsAppFromJSON(json: any): AppEncryptionDeclarationCreateRequestDataRelationshipsApp {
    return AppEncryptionDeclarationCreateRequestDataRelationshipsAppFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationCreateRequestDataRelationshipsAppFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationCreateRequestDataRelationshipsApp {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON(json['data']),
    };
}

export function AppEncryptionDeclarationCreateRequestDataRelationshipsAppToJSON(json: any): AppEncryptionDeclarationCreateRequestDataRelationshipsApp {
    return AppEncryptionDeclarationCreateRequestDataRelationshipsAppToJSONTyped(json, false);
}

export function AppEncryptionDeclarationCreateRequestDataRelationshipsAppToJSONTyped(value?: AppEncryptionDeclarationCreateRequestDataRelationshipsApp | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON(value['data']),
    };
}
