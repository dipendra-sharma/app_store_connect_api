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
/**
 * 
 * @export
 * @interface AppPricePointV3Attributes
 */
export interface AppPricePointV3Attributes {
    /**
     * 
     * @type {string}
     * @memberof AppPricePointV3Attributes
     */
    customerPrice?: string;
    /**
     * 
     * @type {string}
     * @memberof AppPricePointV3Attributes
     */
    proceeds?: string;
}

/**
 * Check if a given object implements the AppPricePointV3Attributes interface.
 */
export function instanceOfAppPricePointV3Attributes(value: object): value is AppPricePointV3Attributes {
    return true;
}

export function AppPricePointV3AttributesFromJSON(json: any): AppPricePointV3Attributes {
    return AppPricePointV3AttributesFromJSONTyped(json, false);
}

export function AppPricePointV3AttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPricePointV3Attributes {
    if (json == null) {
        return json;
    }
    return {
        
        'customerPrice': json['customerPrice'] == null ? undefined : json['customerPrice'],
        'proceeds': json['proceeds'] == null ? undefined : json['proceeds'],
    };
}

export function AppPricePointV3AttributesToJSON(json: any): AppPricePointV3Attributes {
    return AppPricePointV3AttributesToJSONTyped(json, false);
}

export function AppPricePointV3AttributesToJSONTyped(value?: AppPricePointV3Attributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'customerPrice': value['customerPrice'],
        'proceeds': value['proceeds'],
    };
}

