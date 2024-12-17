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

import type { AppCustomProductPageLocalizationInlineCreate } from './AppCustomProductPageLocalizationInlineCreate';
import {
    instanceOfAppCustomProductPageLocalizationInlineCreate,
    AppCustomProductPageLocalizationInlineCreateFromJSON,
    AppCustomProductPageLocalizationInlineCreateFromJSONTyped,
    AppCustomProductPageLocalizationInlineCreateToJSON,
} from './AppCustomProductPageLocalizationInlineCreate';
import type { AppCustomProductPageVersionInlineCreate } from './AppCustomProductPageVersionInlineCreate';
import {
    instanceOfAppCustomProductPageVersionInlineCreate,
    AppCustomProductPageVersionInlineCreateFromJSON,
    AppCustomProductPageVersionInlineCreateFromJSONTyped,
    AppCustomProductPageVersionInlineCreateToJSON,
} from './AppCustomProductPageVersionInlineCreate';

/**
 * @type AppCustomProductPageCreateRequestIncludedInner
 * 
 * @export
 */
export type AppCustomProductPageCreateRequestIncludedInner = AppCustomProductPageLocalizationInlineCreate | AppCustomProductPageVersionInlineCreate;

export function AppCustomProductPageCreateRequestIncludedInnerFromJSON(json: any): AppCustomProductPageCreateRequestIncludedInner {
    return AppCustomProductPageCreateRequestIncludedInnerFromJSONTyped(json, false);
}

export function AppCustomProductPageCreateRequestIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageCreateRequestIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfAppCustomProductPageLocalizationInlineCreate(json)) {
        return AppCustomProductPageLocalizationInlineCreateFromJSONTyped(json, true);
    }
    if (instanceOfAppCustomProductPageVersionInlineCreate(json)) {
        return AppCustomProductPageVersionInlineCreateFromJSONTyped(json, true);
    }

    return {} as any;
}

export function AppCustomProductPageCreateRequestIncludedInnerToJSON(json: any): any {
    return AppCustomProductPageCreateRequestIncludedInnerToJSONTyped(json, false);
}

export function AppCustomProductPageCreateRequestIncludedInnerToJSONTyped(value?: AppCustomProductPageCreateRequestIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfAppCustomProductPageLocalizationInlineCreate(value)) {
        return AppCustomProductPageLocalizationInlineCreateToJSON(value as AppCustomProductPageLocalizationInlineCreate);
    }
    if (instanceOfAppCustomProductPageVersionInlineCreate(value)) {
        return AppCustomProductPageVersionInlineCreateToJSON(value as AppCustomProductPageVersionInlineCreate);
    }

    return {};
}

