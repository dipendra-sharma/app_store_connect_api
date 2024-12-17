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
import type { AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner } from './AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner';
import {
    AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSONTyped,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerToJSON,
    AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerToJSONTyped,
} from './AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner';

/**
 * 
 * @export
 * @interface AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations
 */
export interface AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner>}
     * @memberof AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations
     */
    data?: Array<AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInner>;
}

/**
 * Check if a given object implements the AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations interface.
 */
export function instanceOfAppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations(value: object): value is AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations {
    return true;
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsFromJSON(json: any): AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations {
    return AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerFromJSON)),
    };
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsToJSON(json: any): AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations {
    return AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsToJSONTyped(json, false);
}

export function AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsToJSONTyped(value?: AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizations | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AppCustomProductPageVersionRelationshipsAppCustomProductPageLocalizationsDataInnerToJSON)),
    };
}

