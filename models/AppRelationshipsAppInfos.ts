
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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
import type { AppInfoLocalizationRelationshipsAppInfoData } from './AppInfoLocalizationRelationshipsAppInfoData';
import {
    AppInfoLocalizationRelationshipsAppInfoDataFromJSON,
    AppInfoLocalizationRelationshipsAppInfoDataFromJSONTyped,
    AppInfoLocalizationRelationshipsAppInfoDataToJSON,
    AppInfoLocalizationRelationshipsAppInfoDataToJSONTyped,
} from './AppInfoLocalizationRelationshipsAppInfoData';
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';

/**
 * 
 * @export
 * @interface AppRelationshipsAppInfos
 */
export interface AppRelationshipsAppInfos {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppRelationshipsAppInfos
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppRelationshipsAppInfos
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppInfoLocalizationRelationshipsAppInfoData>}
     * @memberof AppRelationshipsAppInfos
     */
    data?: Array<AppInfoLocalizationRelationshipsAppInfoData>;
}

/**
 * Check if a given object implements the AppRelationshipsAppInfos interface.
 */
export function instanceOfAppRelationshipsAppInfos(value: object): value is AppRelationshipsAppInfos {
    return true;
}

export function AppRelationshipsAppInfosFromJSON(json: any): AppRelationshipsAppInfos {
    return AppRelationshipsAppInfosFromJSONTyped(json, false);
}

export function AppRelationshipsAppInfosFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRelationshipsAppInfos {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppInfoLocalizationRelationshipsAppInfoDataFromJSON)),
    };
}

export function AppRelationshipsAppInfosToJSON(json: any): AppRelationshipsAppInfos {
    return AppRelationshipsAppInfosToJSONTyped(json, false);
}

export function AppRelationshipsAppInfosToJSONTyped(value?: AppRelationshipsAppInfos | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppInfoLocalizationRelationshipsAppInfoDataToJSON)),
    };
}
