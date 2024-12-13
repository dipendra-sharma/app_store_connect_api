
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
import type { CiXcodeVersionAttributesTestDestinationsInner } from './CiXcodeVersionAttributesTestDestinationsInner';
import {
    CiXcodeVersionAttributesTestDestinationsInnerFromJSON,
    CiXcodeVersionAttributesTestDestinationsInnerFromJSONTyped,
    CiXcodeVersionAttributesTestDestinationsInnerToJSON,
    CiXcodeVersionAttributesTestDestinationsInnerToJSONTyped,
} from './CiXcodeVersionAttributesTestDestinationsInner';

/**
 * 
 * @export
 * @interface CiXcodeVersionAttributes
 */
export interface CiXcodeVersionAttributes {
    /**
     * 
     * @type {string}
     * @memberof CiXcodeVersionAttributes
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof CiXcodeVersionAttributes
     */
    name?: string;
    /**
     * 
     * @type {Array<CiXcodeVersionAttributesTestDestinationsInner>}
     * @memberof CiXcodeVersionAttributes
     */
    testDestinations?: Array<CiXcodeVersionAttributesTestDestinationsInner>;
}

/**
 * Check if a given object implements the CiXcodeVersionAttributes interface.
 */
export function instanceOfCiXcodeVersionAttributes(value: object): value is CiXcodeVersionAttributes {
    return true;
}

export function CiXcodeVersionAttributesFromJSON(json: any): CiXcodeVersionAttributes {
    return CiXcodeVersionAttributesFromJSONTyped(json, false);
}

export function CiXcodeVersionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiXcodeVersionAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'version': json['version'] == null ? undefined : json['version'],
        'name': json['name'] == null ? undefined : json['name'],
        'testDestinations': json['testDestinations'] == null ? undefined : ((json['testDestinations'] as Array<any>).map(CiXcodeVersionAttributesTestDestinationsInnerFromJSON)),
    };
}

export function CiXcodeVersionAttributesToJSON(json: any): CiXcodeVersionAttributes {
    return CiXcodeVersionAttributesToJSONTyped(json, false);
}

export function CiXcodeVersionAttributesToJSONTyped(value?: CiXcodeVersionAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'version': value['version'],
        'name': value['name'],
        'testDestinations': value['testDestinations'] == null ? undefined : ((value['testDestinations'] as Array<any>).map(CiXcodeVersionAttributesTestDestinationsInnerToJSON)),
    };
}
