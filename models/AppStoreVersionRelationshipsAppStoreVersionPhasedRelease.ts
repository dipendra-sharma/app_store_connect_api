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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
import type { AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData } from './AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData';
import {
    AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataFromJSON,
    AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataFromJSONTyped,
    AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataToJSON,
    AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataToJSONTyped,
} from './AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData';

/**
 * 
 * @export
 * @interface AppStoreVersionRelationshipsAppStoreVersionPhasedRelease
 */
export interface AppStoreVersionRelationshipsAppStoreVersionPhasedRelease {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionPhasedRelease
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData}
     * @memberof AppStoreVersionRelationshipsAppStoreVersionPhasedRelease
     */
    data?: AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseData;
}

/**
 * Check if a given object implements the AppStoreVersionRelationshipsAppStoreVersionPhasedRelease interface.
 */
export function instanceOfAppStoreVersionRelationshipsAppStoreVersionPhasedRelease(value: object): value is AppStoreVersionRelationshipsAppStoreVersionPhasedRelease {
    return true;
}

export function AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSON(json: any): AppStoreVersionRelationshipsAppStoreVersionPhasedRelease {
    return AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationshipsAppStoreVersionPhasedRelease {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'data': json['data'] == null ? undefined : AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataFromJSON(json['data']),
    };
}

export function AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseToJSON(json: any): AppStoreVersionRelationshipsAppStoreVersionPhasedRelease {
    return AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseToJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseToJSONTyped(value?: AppStoreVersionRelationshipsAppStoreVersionPhasedRelease | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'data': AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseDataToJSON(value['data']),
    };
}

