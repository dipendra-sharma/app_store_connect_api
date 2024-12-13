
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
import type { AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData } from './AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData';
import {
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSON,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSONTyped,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataToJSON,
    AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataToJSONTyped,
} from './AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData';
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
 * @interface BuildAppEncryptionDeclarationLinkageResponse
 */
export interface BuildAppEncryptionDeclarationLinkageResponse {
    /**
     * 
     * @type {AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData}
     * @memberof BuildAppEncryptionDeclarationLinkageResponse
     */
    data: AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationData;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BuildAppEncryptionDeclarationLinkageResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BuildAppEncryptionDeclarationLinkageResponse interface.
 */
export function instanceOfBuildAppEncryptionDeclarationLinkageResponse(value: object): value is BuildAppEncryptionDeclarationLinkageResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BuildAppEncryptionDeclarationLinkageResponseFromJSON(json: any): BuildAppEncryptionDeclarationLinkageResponse {
    return BuildAppEncryptionDeclarationLinkageResponseFromJSONTyped(json, false);
}

export function BuildAppEncryptionDeclarationLinkageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildAppEncryptionDeclarationLinkageResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BuildAppEncryptionDeclarationLinkageResponseToJSON(json: any): BuildAppEncryptionDeclarationLinkageResponse {
    return BuildAppEncryptionDeclarationLinkageResponseToJSONTyped(json, false);
}

export function BuildAppEncryptionDeclarationLinkageResponseToJSONTyped(value?: BuildAppEncryptionDeclarationLinkageResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppEncryptionDeclarationDocumentCreateRequestDataRelationshipsAppEncryptionDeclarationDataToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}
