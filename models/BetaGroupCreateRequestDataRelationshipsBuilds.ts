
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
 * @interface BetaGroupCreateRequestDataRelationshipsBuilds
 */
export interface BetaGroupCreateRequestDataRelationshipsBuilds {
    /**
     * 
     * @type {Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>}
     * @memberof BetaGroupCreateRequestDataRelationshipsBuilds
     */
    data?: Array<AppEncryptionDeclarationRelationshipsBuildsDataInner>;
}

/**
 * Check if a given object implements the BetaGroupCreateRequestDataRelationshipsBuilds interface.
 */
export function instanceOfBetaGroupCreateRequestDataRelationshipsBuilds(value: object): value is BetaGroupCreateRequestDataRelationshipsBuilds {
    return true;
}

export function BetaGroupCreateRequestDataRelationshipsBuildsFromJSON(json: any): BetaGroupCreateRequestDataRelationshipsBuilds {
    return BetaGroupCreateRequestDataRelationshipsBuildsFromJSONTyped(json, false);
}

export function BetaGroupCreateRequestDataRelationshipsBuildsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupCreateRequestDataRelationshipsBuilds {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON)),
    };
}

export function BetaGroupCreateRequestDataRelationshipsBuildsToJSON(json: any): BetaGroupCreateRequestDataRelationshipsBuilds {
    return BetaGroupCreateRequestDataRelationshipsBuildsToJSONTyped(json, false);
}

export function BetaGroupCreateRequestDataRelationshipsBuildsToJSONTyped(value?: BetaGroupCreateRequestDataRelationshipsBuilds | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON)),
    };
}

