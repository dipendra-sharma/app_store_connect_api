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
import type { AppPricePointV3 } from './AppPricePointV3';
import {
    AppPricePointV3FromJSON,
    AppPricePointV3FromJSONTyped,
    AppPricePointV3ToJSON,
    AppPricePointV3ToJSONTyped,
} from './AppPricePointV3';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';
import type { AppPricePointsV3ResponseIncludedInner } from './AppPricePointsV3ResponseIncludedInner';
import {
    AppPricePointsV3ResponseIncludedInnerFromJSON,
    AppPricePointsV3ResponseIncludedInnerFromJSONTyped,
    AppPricePointsV3ResponseIncludedInnerToJSON,
    AppPricePointsV3ResponseIncludedInnerToJSONTyped,
} from './AppPricePointsV3ResponseIncludedInner';

/**
 * 
 * @export
 * @interface AppPricePointV3Response
 */
export interface AppPricePointV3Response {
    /**
     * 
     * @type {AppPricePointV3}
     * @memberof AppPricePointV3Response
     */
    data: AppPricePointV3;
    /**
     * 
     * @type {Array<AppPricePointsV3ResponseIncludedInner>}
     * @memberof AppPricePointV3Response
     */
    included?: Array<AppPricePointsV3ResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof AppPricePointV3Response
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the AppPricePointV3Response interface.
 */
export function instanceOfAppPricePointV3Response(value: object): value is AppPricePointV3Response {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function AppPricePointV3ResponseFromJSON(json: any): AppPricePointV3Response {
    return AppPricePointV3ResponseFromJSONTyped(json, false);
}

export function AppPricePointV3ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV3Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppPricePointV3FromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppPricePointsV3ResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function AppPricePointV3ResponseToJSON(json: any): AppPricePointV3Response {
    return AppPricePointV3ResponseToJSONTyped(json, false);
}

export function AppPricePointV3ResponseToJSONTyped(value?: AppPricePointV3Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppPricePointV3ToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppPricePointsV3ResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}

