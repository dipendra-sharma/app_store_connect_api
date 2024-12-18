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
import type { AppCustomProductPageCreateRequestData } from './AppCustomProductPageCreateRequestData';
import {
    AppCustomProductPageCreateRequestDataFromJSON,
    AppCustomProductPageCreateRequestDataFromJSONTyped,
    AppCustomProductPageCreateRequestDataToJSON,
    AppCustomProductPageCreateRequestDataToJSONTyped,
} from './AppCustomProductPageCreateRequestData';
import type { AppCustomProductPageCreateRequestIncludedInner } from './AppCustomProductPageCreateRequestIncludedInner';
import {
    AppCustomProductPageCreateRequestIncludedInnerFromJSON,
    AppCustomProductPageCreateRequestIncludedInnerFromJSONTyped,
    AppCustomProductPageCreateRequestIncludedInnerToJSON,
    AppCustomProductPageCreateRequestIncludedInnerToJSONTyped,
} from './AppCustomProductPageCreateRequestIncludedInner';

/**
 * 
 * @export
 * @interface AppCustomProductPageCreateRequest
 */
export interface AppCustomProductPageCreateRequest {
    /**
     * 
     * @type {AppCustomProductPageCreateRequestData}
     * @memberof AppCustomProductPageCreateRequest
     */
    data: AppCustomProductPageCreateRequestData;
    /**
     * 
     * @type {Array<AppCustomProductPageCreateRequestIncludedInner>}
     * @memberof AppCustomProductPageCreateRequest
     */
    included?: Array<AppCustomProductPageCreateRequestIncludedInner>;
}

/**
 * Check if a given object implements the AppCustomProductPageCreateRequest interface.
 */
export function instanceOfAppCustomProductPageCreateRequest(value: object): value is AppCustomProductPageCreateRequest {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AppCustomProductPageCreateRequestFromJSON(json: any): AppCustomProductPageCreateRequest {
    return AppCustomProductPageCreateRequestFromJSONTyped(json, false);
}

export function AppCustomProductPageCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'data': AppCustomProductPageCreateRequestDataFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppCustomProductPageCreateRequestIncludedInnerFromJSON)),
    };
}

export function AppCustomProductPageCreateRequestToJSON(json: any): AppCustomProductPageCreateRequest {
    return AppCustomProductPageCreateRequestToJSONTyped(json, false);
}

export function AppCustomProductPageCreateRequestToJSONTyped(value?: AppCustomProductPageCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': AppCustomProductPageCreateRequestDataToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppCustomProductPageCreateRequestIncludedInnerToJSON)),
    };
}

