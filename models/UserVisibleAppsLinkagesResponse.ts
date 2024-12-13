
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
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsAppData } from './AlternativeDistributionKeyCreateRequestDataRelationshipsAppData';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSONTyped,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsAppData';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
    PagedDocumentLinksToJSONTyped,
} from './PagedDocumentLinks';

/**
 * 
 * @export
 * @interface UserVisibleAppsLinkagesResponse
 */
export interface UserVisibleAppsLinkagesResponse {
    /**
     * 
     * @type {Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>}
     * @memberof UserVisibleAppsLinkagesResponse
     */
    data: Array<AlternativeDistributionKeyCreateRequestDataRelationshipsAppData>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof UserVisibleAppsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof UserVisibleAppsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the UserVisibleAppsLinkagesResponse interface.
 */
export function instanceOfUserVisibleAppsLinkagesResponse(value: object): value is UserVisibleAppsLinkagesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function UserVisibleAppsLinkagesResponseFromJSON(json: any): UserVisibleAppsLinkagesResponse {
    return UserVisibleAppsLinkagesResponseFromJSONTyped(json, false);
}

export function UserVisibleAppsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserVisibleAppsLinkagesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function UserVisibleAppsLinkagesResponseToJSON(json: any): UserVisibleAppsLinkagesResponse {
    return UserVisibleAppsLinkagesResponseToJSONTyped(json, false);
}

export function UserVisibleAppsLinkagesResponseToJSONTyped(value?: UserVisibleAppsLinkagesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AlternativeDistributionKeyCreateRequestDataRelationshipsAppDataToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

