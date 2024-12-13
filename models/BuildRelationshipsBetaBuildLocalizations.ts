
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
import type { BuildRelationshipsBetaBuildLocalizationsDataInner } from './BuildRelationshipsBetaBuildLocalizationsDataInner';
import {
    BuildRelationshipsBetaBuildLocalizationsDataInnerFromJSON,
    BuildRelationshipsBetaBuildLocalizationsDataInnerFromJSONTyped,
    BuildRelationshipsBetaBuildLocalizationsDataInnerToJSON,
    BuildRelationshipsBetaBuildLocalizationsDataInnerToJSONTyped,
} from './BuildRelationshipsBetaBuildLocalizationsDataInner';
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
 * @interface BuildRelationshipsBetaBuildLocalizations
 */
export interface BuildRelationshipsBetaBuildLocalizations {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof BuildRelationshipsBetaBuildLocalizations
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BuildRelationshipsBetaBuildLocalizations
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<BuildRelationshipsBetaBuildLocalizationsDataInner>}
     * @memberof BuildRelationshipsBetaBuildLocalizations
     */
    data?: Array<BuildRelationshipsBetaBuildLocalizationsDataInner>;
}

/**
 * Check if a given object implements the BuildRelationshipsBetaBuildLocalizations interface.
 */
export function instanceOfBuildRelationshipsBetaBuildLocalizations(value: object): value is BuildRelationshipsBetaBuildLocalizations {
    return true;
}

export function BuildRelationshipsBetaBuildLocalizationsFromJSON(json: any): BuildRelationshipsBetaBuildLocalizations {
    return BuildRelationshipsBetaBuildLocalizationsFromJSONTyped(json, false);
}

export function BuildRelationshipsBetaBuildLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsBetaBuildLocalizations {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(BuildRelationshipsBetaBuildLocalizationsDataInnerFromJSON)),
    };
}

export function BuildRelationshipsBetaBuildLocalizationsToJSON(json: any): BuildRelationshipsBetaBuildLocalizations {
    return BuildRelationshipsBetaBuildLocalizationsToJSONTyped(json, false);
}

export function BuildRelationshipsBetaBuildLocalizationsToJSONTyped(value?: BuildRelationshipsBetaBuildLocalizations | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(BuildRelationshipsBetaBuildLocalizationsDataInnerToJSON)),
    };
}

