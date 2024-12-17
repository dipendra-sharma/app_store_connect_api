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
import type { AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner } from './AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner';
import {
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerToJSON,
    AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerToJSONTyped,
} from './AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationRelationshipsAppScreenshotSets
 */
export interface AppCustomProductPageLocalizationRelationshipsAppScreenshotSets {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppScreenshotSets
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppScreenshotSets
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner>}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppScreenshotSets
     */
    data?: Array<AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInner>;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationRelationshipsAppScreenshotSets interface.
 */
export function instanceOfAppCustomProductPageLocalizationRelationshipsAppScreenshotSets(value: object): value is AppCustomProductPageLocalizationRelationshipsAppScreenshotSets {
    return true;
}

export function AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSON(json: any): AppCustomProductPageLocalizationRelationshipsAppScreenshotSets {
    return AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationRelationshipsAppScreenshotSets {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerFromJSON)),
    };
}

export function AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSON(json: any): AppCustomProductPageLocalizationRelationshipsAppScreenshotSets {
    return AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsToJSONTyped(value?: AppCustomProductPageLocalizationRelationshipsAppScreenshotSets | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppCustomProductPageLocalizationRelationshipsAppScreenshotSetsDataInnerToJSON)),
    };
}

