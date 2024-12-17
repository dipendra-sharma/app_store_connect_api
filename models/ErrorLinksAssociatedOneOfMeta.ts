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
 * @interface ErrorLinksAssociatedOneOfMeta
 */
export interface ErrorLinksAssociatedOneOfMeta {
    /**
     * 
     * @type {string}
     * @memberof ErrorLinksAssociatedOneOfMeta
     */
    source?: string;
}

/**
 * Check if a given object implements the ErrorLinksAssociatedOneOfMeta interface.
 */
export function instanceOfErrorLinksAssociatedOneOfMeta(value: object): value is ErrorLinksAssociatedOneOfMeta {
    return true;
}

export function ErrorLinksAssociatedOneOfMetaFromJSON(json: any): ErrorLinksAssociatedOneOfMeta {
    return ErrorLinksAssociatedOneOfMetaFromJSONTyped(json, false);
}

export function ErrorLinksAssociatedOneOfMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorLinksAssociatedOneOfMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'source': json['source'] == null ? undefined : json['source'],
    };
}

export function ErrorLinksAssociatedOneOfMetaToJSON(json: any): ErrorLinksAssociatedOneOfMeta {
    return ErrorLinksAssociatedOneOfMetaToJSONTyped(json, false);
}

export function ErrorLinksAssociatedOneOfMetaToJSONTyped(value?: ErrorLinksAssociatedOneOfMeta | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'source': value['source'],
    };
}

