
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
import type { App } from './App';
import {
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
    AppToJSONTyped,
} from './App';
import type { BetaAppLocalization } from './BetaAppLocalization';
import {
    BetaAppLocalizationFromJSON,
    BetaAppLocalizationFromJSONTyped,
    BetaAppLocalizationToJSON,
    BetaAppLocalizationToJSONTyped,
} from './BetaAppLocalization';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface BetaAppLocalizationResponse
 */
export interface BetaAppLocalizationResponse {
    /**
     * 
     * @type {BetaAppLocalization}
     * @memberof BetaAppLocalizationResponse
     */
    data: BetaAppLocalization;
    /**
     * 
     * @type {Array<App>}
     * @memberof BetaAppLocalizationResponse
     */
    included?: Array<App>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof BetaAppLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the BetaAppLocalizationResponse interface.
 */
export function instanceOfBetaAppLocalizationResponse(value: object): value is BetaAppLocalizationResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function BetaAppLocalizationResponseFromJSON(json: any): BetaAppLocalizationResponse {
    return BetaAppLocalizationResponseFromJSONTyped(json, false);
}

export function BetaAppLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaAppLocalizationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': BetaAppLocalizationFromJSON(json['data']),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(AppFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function BetaAppLocalizationResponseToJSON(json: any): BetaAppLocalizationResponse {
    return BetaAppLocalizationResponseToJSONTyped(json, false);
}

export function BetaAppLocalizationResponseToJSONTyped(value?: BetaAppLocalizationResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': BetaAppLocalizationToJSON(value['data']),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(AppToJSON)),
        'links': DocumentLinksToJSON(value['links']),
    };
}
