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
import type { RelationshipLinks } from './RelationshipLinks';
import {
    RelationshipLinksFromJSON,
    RelationshipLinksFromJSONTyped,
    RelationshipLinksToJSON,
    RelationshipLinksToJSONTyped,
} from './RelationshipLinks';
import type { AppScreenshotSetRelationshipsAppScreenshotsDataInner } from './AppScreenshotSetRelationshipsAppScreenshotsDataInner';
import {
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON,
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSONTyped,
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON,
    AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSONTyped,
} from './AppScreenshotSetRelationshipsAppScreenshotsDataInner';

/**
 * 
 * @export
 * @interface AppScreenshotSetRelationshipsAppScreenshots
 */
export interface AppScreenshotSetRelationshipsAppScreenshots {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppScreenshotSetRelationshipsAppScreenshots
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppScreenshotSetRelationshipsAppScreenshots
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>}
     * @memberof AppScreenshotSetRelationshipsAppScreenshots
     */
    data?: Array<AppScreenshotSetRelationshipsAppScreenshotsDataInner>;
}

/**
 * Check if a given object implements the AppScreenshotSetRelationshipsAppScreenshots interface.
 */
export function instanceOfAppScreenshotSetRelationshipsAppScreenshots(value: object): value is AppScreenshotSetRelationshipsAppScreenshots {
    return true;
}

export function AppScreenshotSetRelationshipsAppScreenshotsFromJSON(json: any): AppScreenshotSetRelationshipsAppScreenshots {
    return AppScreenshotSetRelationshipsAppScreenshotsFromJSONTyped(json, false);
}

export function AppScreenshotSetRelationshipsAppScreenshotsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppScreenshotSetRelationshipsAppScreenshots {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppScreenshotSetRelationshipsAppScreenshotsDataInnerFromJSON)),
    };
}

export function AppScreenshotSetRelationshipsAppScreenshotsToJSON(json: any): AppScreenshotSetRelationshipsAppScreenshots {
    return AppScreenshotSetRelationshipsAppScreenshotsToJSONTyped(json, false);
}

export function AppScreenshotSetRelationshipsAppScreenshotsToJSONTyped(value?: AppScreenshotSetRelationshipsAppScreenshots | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppScreenshotSetRelationshipsAppScreenshotsDataInnerToJSON)),
    };
}

