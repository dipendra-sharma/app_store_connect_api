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
 * @interface AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData
 */
export interface AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData {
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData
     */
    type: AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData
     */
    id: string;
}


/**
 * @export
 */
export const AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataTypeEnum = {
    AppEncryptionDeclarationDocuments: 'appEncryptionDeclarationDocuments'
} as const;
export type AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataTypeEnum = typeof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataTypeEnum[keyof typeof AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataTypeEnum];


/**
 * Check if a given object implements the AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData interface.
 */
export function instanceOfAppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData(value: object): value is AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataFromJSON(json: any): AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData {
    return AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataToJSON(json: any): AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData {
    return AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataToJSONTyped(json, false);
}

export function AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentDataToJSONTyped(value?: AppEncryptionDeclarationRelationshipsAppEncryptionDeclarationDocumentData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

