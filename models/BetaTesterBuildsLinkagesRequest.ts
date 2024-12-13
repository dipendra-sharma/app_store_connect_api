
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
import type { AppEncryptionDeclarationRelationshipsBuildsDataInner } from './AppEncryptionDeclarationRelationshipsBuildsDataInner';
import {
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSONTyped,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON,
    AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSONTyped,
} from './AppEncryptionDeclarationRelationshipsBuildsDataInner';

/**
 * 
 * @export
 * @interface BetaTesterBuildsLinkagesRequest
 */
export interface BetaTesterBuildsLinkagesRequest {
    /**
     * 
     * @type {Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>}
     * @memberof BetaTesterBuildsLinkagesRequest
     */
    data: Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>;
}

/**
 * Check if a given object implements the BetaTesterBuildsLinkagesRequest interface.
 */
export function instanceOfBetaTesterBuildsLinkagesRequest(value: object): value is BetaTesterBuildsLinkagesRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function BetaTesterBuildsLinkagesRequestFromJSON(json: any): BetaTesterBuildsLinkagesRequest {
    return BetaTesterBuildsLinkagesRequestFromJSONTyped(json, false);
}

export function BetaTesterBuildsLinkagesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterBuildsLinkagesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON)),
    };
}

export function BetaTesterBuildsLinkagesRequestToJSON(json: any): BetaTesterBuildsLinkagesRequest {
    return BetaTesterBuildsLinkagesRequestToJSONTyped(json, false);
}

export function BetaTesterBuildsLinkagesRequestToJSONTyped(value?: BetaTesterBuildsLinkagesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON)),
    };
}
