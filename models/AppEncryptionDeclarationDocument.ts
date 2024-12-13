
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
import type { AppEncryptionDeclarationDocumentAttributes } from './AppEncryptionDeclarationDocumentAttributes';
import {
    AppEncryptionDeclarationDocumentAttributesFromJSON,
    AppEncryptionDeclarationDocumentAttributesFromJSONTyped,
    AppEncryptionDeclarationDocumentAttributesToJSON,
    AppEncryptionDeclarationDocumentAttributesToJSONTyped,
} from './AppEncryptionDeclarationDocumentAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppEncryptionDeclarationDocument
 */
export interface AppEncryptionDeclarationDocument {
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationDocument
     */
    type: AppEncryptionDeclarationDocumentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppEncryptionDeclarationDocument
     */
    id: string;
    /**
     * 
     * @type {AppEncryptionDeclarationDocumentAttributes}
     * @memberof AppEncryptionDeclarationDocument
     */
    attributes?: AppEncryptionDeclarationDocumentAttributes;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppEncryptionDeclarationDocument
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppEncryptionDeclarationDocumentTypeEnum = {
    AppEncryptionDeclarationDocuments: 'appEncryptionDeclarationDocuments'
} as const;
export type AppEncryptionDeclarationDocumentTypeEnum = typeof AppEncryptionDeclarationDocumentTypeEnum[keyof typeof AppEncryptionDeclarationDocumentTypeEnum];


/**
 * Check if a given object implements the AppEncryptionDeclarationDocument interface.
 */
export function instanceOfAppEncryptionDeclarationDocument(value: object): value is AppEncryptionDeclarationDocument {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppEncryptionDeclarationDocumentFromJSON(json: any): AppEncryptionDeclarationDocument {
    return AppEncryptionDeclarationDocumentFromJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEncryptionDeclarationDocument {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppEncryptionDeclarationDocumentAttributesFromJSON(json['attributes']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppEncryptionDeclarationDocumentToJSON(json: any): AppEncryptionDeclarationDocument {
    return AppEncryptionDeclarationDocumentToJSONTyped(json, false);
}

export function AppEncryptionDeclarationDocumentToJSONTyped(value?: AppEncryptionDeclarationDocument | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppEncryptionDeclarationDocumentAttributesToJSON(value['attributes']),
        'links': ResourceLinksToJSON(value['links']),
    };
}
