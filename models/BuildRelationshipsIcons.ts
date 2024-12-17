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
import type { BuildRelationshipsIconsDataInner } from './BuildRelationshipsIconsDataInner';
import {
    BuildRelationshipsIconsDataInnerFromJSON,
    BuildRelationshipsIconsDataInnerFromJSONTyped,
    BuildRelationshipsIconsDataInnerToJSON,
    BuildRelationshipsIconsDataInnerToJSONTyped,
} from './BuildRelationshipsIconsDataInner';
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
 * @interface BuildRelationshipsIcons
 */
export interface BuildRelationshipsIcons {
    /**
     * 
     * @type {RelationshipLinks}
     * @memberof BuildRelationshipsIcons
     */
    links?: RelationshipLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof BuildRelationshipsIcons
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<BuildRelationshipsIconsDataInner>}
     * @memberof BuildRelationshipsIcons
     */
    data?: Array<BuildRelationshipsIconsDataInner>;
}

/**
 * Check if a given object implements the BuildRelationshipsIcons interface.
 */
export function instanceOfBuildRelationshipsIcons(value: object): value is BuildRelationshipsIcons {
    return true;
}

export function BuildRelationshipsIconsFromJSON(json: any): BuildRelationshipsIcons {
    return BuildRelationshipsIconsFromJSONTyped(json, false);
}

export function BuildRelationshipsIconsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsIcons {
    if (json == null) {
        return json;
    }
    return {
        
        'links': json['links'] == null ? undefined : RelationshipLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(BuildRelationshipsIconsDataInnerFromJSON)),
    };
}

export function BuildRelationshipsIconsToJSON(json: any): BuildRelationshipsIcons {
    return BuildRelationshipsIconsToJSONTyped(json, false);
}

export function BuildRelationshipsIconsToJSONTyped(value?: BuildRelationshipsIcons | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'links': RelationshipLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(BuildRelationshipsIconsDataInnerToJSON)),
    };
}

