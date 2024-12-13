
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
import type { ErrorLinksAssociated } from './ErrorLinksAssociated';
import {
    ErrorLinksAssociatedFromJSON,
    ErrorLinksAssociatedFromJSONTyped,
    ErrorLinksAssociatedToJSON,
    ErrorLinksAssociatedToJSONTyped,
} from './ErrorLinksAssociated';

/**
 * 
 * @export
 * @interface ErrorLinks
 */
export interface ErrorLinks {
    /**
     * 
     * @type {string}
     * @memberof ErrorLinks
     */
    about?: string;
    /**
     * 
     * @type {ErrorLinksAssociated}
     * @memberof ErrorLinks
     */
    associated?: ErrorLinksAssociated;
}

/**
 * Check if a given object implements the ErrorLinks interface.
 */
export function instanceOfErrorLinks(value: object): value is ErrorLinks {
    return true;
}

export function ErrorLinksFromJSON(json: any): ErrorLinks {
    return ErrorLinksFromJSONTyped(json, false);
}

export function ErrorLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorLinks {
    if (json == null) {
        return json;
    }
    return {
        
        'about': json['about'] == null ? undefined : json['about'],
        'associated': json['associated'] == null ? undefined : ErrorLinksAssociatedFromJSON(json['associated']),
    };
}

export function ErrorLinksToJSON(json: any): ErrorLinks {
    return ErrorLinksToJSONTyped(json, false);
}

export function ErrorLinksToJSONTyped(value?: ErrorLinks | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'about': value['about'],
        'associated': ErrorLinksAssociatedToJSON(value['associated']),
    };
}

