
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
 * @interface AppStoreVersionCreateRequestDataRelationshipsBuild
 */
export interface AppStoreVersionCreateRequestDataRelationshipsBuild {
    /**
     * 
     * @type {AppEncryptionDeclarationRelationshipsBuildsDataInner}
     * @memberof AppStoreVersionCreateRequestDataRelationshipsBuild
     */
    data?: AppEncryptionDeclarationRelationshipsBuildsDataInner;
}

/**
 * Check if a given object implements the AppStoreVersionCreateRequestDataRelationshipsBuild interface.
 */
export function instanceOfAppStoreVersionCreateRequestDataRelationshipsBuild(value: object): value is AppStoreVersionCreateRequestDataRelationshipsBuild {
    return true;
}

export function AppStoreVersionCreateRequestDataRelationshipsBuildFromJSON(json: any): AppStoreVersionCreateRequestDataRelationshipsBuild {
    return AppStoreVersionCreateRequestDataRelationshipsBuildFromJSONTyped(json, false);
}

export function AppStoreVersionCreateRequestDataRelationshipsBuildFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionCreateRequestDataRelationshipsBuild {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : AppEncryptionDeclarationRelationshipsBuildsDataInnerFromJSON(json['data']),
    };
}

export function AppStoreVersionCreateRequestDataRelationshipsBuildToJSON(json: any): AppStoreVersionCreateRequestDataRelationshipsBuild {
    return AppStoreVersionCreateRequestDataRelationshipsBuildToJSONTyped(json, false);
}

export function AppStoreVersionCreateRequestDataRelationshipsBuildToJSONTyped(value?: AppStoreVersionCreateRequestDataRelationshipsBuild | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppEncryptionDeclarationRelationshipsBuildsDataInnerToJSON(value['data']),
    };
}

