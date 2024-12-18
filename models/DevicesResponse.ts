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
import type { Device } from './Device';
import {
    DeviceFromJSON,
    DeviceFromJSONTyped,
    DeviceToJSON,
    DeviceToJSONTyped,
} from './Device';
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
 * @interface DevicesResponse
 */
export interface DevicesResponse {
    /**
     * 
     * @type {Array<Device>}
     * @memberof DevicesResponse
     */
    data: Array<Device>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof DevicesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof DevicesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the DevicesResponse interface.
 */
export function instanceOfDevicesResponse(value: object): value is DevicesResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function DevicesResponseFromJSON(json: any): DevicesResponse {
    return DevicesResponseFromJSONTyped(json, false);
}

export function DevicesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DevicesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(DeviceFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function DevicesResponseToJSON(json: any): DevicesResponse {
    return DevicesResponseToJSONTyped(json, false);
}

export function DevicesResponseToJSONTyped(value?: DevicesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(DeviceToJSON)),
        'links': PagedDocumentLinksToJSON(value['links']),
        'meta': PagingInformationToJSON(value['meta']),
    };
}

