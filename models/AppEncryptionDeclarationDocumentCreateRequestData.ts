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
import type { AppEncryptionDeclarationDocumentCreateRequestDataRelationships } from './AppEncryptionDeclarationDocumentCreateRequestDataRelationships';
import {
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsFromJSON,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsFromJSONTyped,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsToJSON,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsToJSONTyped,
} from './AppEncryptionDeclarationDocumentCreateRequestDataRelationships';
import type { AppClipAdvancedExperienceImageCreateRequestDataAttributes } from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';
import {
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSONTyped,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON,
    AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSONTyped,
} from './AppClipAdvancedExperienceImageCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationDocumentCreateRequestData
 */
export interface AppEncryptionDeclarationDocumentCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationDocumentCreateRequestData
     */
    type: AppEncryptionDeclarationDocumentCreateRequestDataTypeEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceImageCreateRequestDataAttributes}
     * @memberof AppEncryptionDeclarationDocumentCreateRequestData
     */
    attributes: AppClipAdvancedExperienceImageCreateRequestDataAttributes;
    /**
     * 
     * @type {AppEncryptionDeclarationDocumentCreateRequestDataRelationships}
     * @memberof AppEncryptionDeclarationDocumentCreateRequestData
     */
    relationships: AppEncryptionDeclarationDocumentCreateRequestDataRelationships;
}


/**
 * @export
 */
export const AppEncryptionDeclarationDocumentCreateRequestDataTypeEnum = {
    AppEncryptionDeclarationDocuments: 'appEncryptionDeclarationDocuments'
} as const;
export type AppEncryptionDeclarationDocumentCreateRequestDataTypeEnum = typeof AppEncryptionDeclarationDocumentCreateRequestDataTypeEnum[keyof typeof AppEncryptionDeclarationDocumentCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppEncryptionDeclarationDocumentCreateRequestData interface.
 */
export function instanceOfAppEncryptionDeclarationDocumentCreateRequestData(value: object): value is AppEncryptionDeclarationDocumentCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function AppEncryptionDeclarationDocumentCreateRequestDataFromJSON(json: any): AppEncryptionDeclarationDocumentCreateRequestData {
    return AppEncryptionDeclarationDocumentCreateRequestDataFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocumentCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppEncryptionDeclarationDocumentCreateRequestDataToJSON(json: any): AppEncryptionDeclarationDocumentCreateRequestData {
    return AppEncryptionDeclarationDocumentCreateRequestDataToJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentCreateRequestDataToJSONTyped(value?: AppEncryptionDeclarationDocumentCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': AppClipAdvancedExperienceImageCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

