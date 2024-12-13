
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
 * @interface DocumentLinks
 */
export interface DocumentLinks {
    /**
     * 
     * @type {string}
     * @memberof DocumentLinks
     */
    self: string;
}

/**
 * Check if a given object implements the DocumentLinks interface.
 */
export function instanceOfDocumentLinks(value: object): value is DocumentLinks {
    if (!('self' in value) || value['self'] === undefined) return false;
    return true;
}

export function DocumentLinksFromJSON(json: any): DocumentLinks {
    return DocumentLinksFromJSONTyped(json, false);
}

export function DocumentLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentLinks {
    if (json == null) {
        return json;
    }
    return {
        
        'self': json['self'],
    };
}

export function DocumentLinksToJSON(json: any): DocumentLinks {
    return DocumentLinksToJSONTyped(json, false);
}

export function DocumentLinksToJSONTyped(value?: DocumentLinks | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'self': value['self'],
    };
}
