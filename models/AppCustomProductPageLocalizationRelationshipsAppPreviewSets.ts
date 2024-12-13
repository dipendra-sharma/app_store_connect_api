
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
import type { AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner } from './AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner';
import {
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON,
    AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSONTyped,
} from './AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner';
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
 * @interface AppCustomProductPageLocalizationRelationshipsAppPreviewSets
 */
export interface AppCustomProductPageLocalizationRelationshipsAppPreviewSets {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppPreviewSets
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppPreviewSets
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner>}
     * @memberof AppCustomProductPageLocalizationRelationshipsAppPreviewSets
     */
    data?: Array<AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInner>;
}

/**
 * Check if a given object implements the AppCustomProductPageLocalizationRelationshipsAppPreviewSets interface.
 */
export function instanceOfAppCustomProductPageLocalizationRelationshipsAppPreviewSets(value: object): value is AppCustomProductPageLocalizationRelationshipsAppPreviewSets {
    return true;
}

export function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSON(json: any): AppCustomProductPageLocalizationRelationshipsAppPreviewSets {
    return AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationRelationshipsAppPreviewSets {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerFromJSON)),
    };
}

export function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSON(json: any): AppCustomProductPageLocalizationRelationshipsAppPreviewSets {
    return AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationRelationshipsAppPreviewSetsToJSONTyped(value?: AppCustomProductPageLocalizationRelationshipsAppPreviewSets | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppCustomProductPageLocalizationRelationshipsAppPreviewSetsDataInnerToJSON)),
    };
}

