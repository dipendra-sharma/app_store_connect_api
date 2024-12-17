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

import type { AppCustomProductPage } from './AppCustomProductPage';
import {
    instanceOfAppCustomProductPage,
    AppCustomProductPageFromJSON,
    AppCustomProductPageFromJSONTyped,
    AppCustomProductPageToJSON,
} from './AppCustomProductPage';
import type { AppCustomProductPageLocalization } from './AppCustomProductPageLocalization';
import {
    instanceOfAppCustomProductPageLocalization,
    AppCustomProductPageLocalizationFromJSON,
    AppCustomProductPageLocalizationFromJSONTyped,
    AppCustomProductPageLocalizationToJSON,
} from './AppCustomProductPageLocalization';

/**
 * @type AppCustomProductPageVersionsResponseIncludedInner
 * 
 * @export
 */
export type AppCustomProductPageVersionsResponseIncludedInner = AppCustomProductPage | AppCustomProductPageLocalization;

export function AppCustomProductPageVersionsResponseIncludedInnerFromJSON(json: any): AppCustomProductPageVersionsResponseIncludedInner {
    return AppCustomProductPageVersionsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppCustomProductPageVersionsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageVersionsResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfAppCustomProductPage(json)) {
        return AppCustomProductPageFromJSONTyped(json, true);
    }
    if (instanceOfAppCustomProductPageLocalization(json)) {
        return AppCustomProductPageLocalizationFromJSONTyped(json, true);
    }

    return {} as any;
}

export function AppCustomProductPageVersionsResponseIncludedInnerToJSON(json: any): any {
    return AppCustomProductPageVersionsResponseIncludedInnerToJSONTyped(json, false);
}

export function AppCustomProductPageVersionsResponseIncludedInnerToJSONTyped(value?: AppCustomProductPageVersionsResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfAppCustomProductPage(value)) {
        return AppCustomProductPageToJSON(value as AppCustomProductPage);
    }
    if (instanceOfAppCustomProductPageLocalization(value)) {
        return AppCustomProductPageLocalizationToJSON(value as AppCustomProductPageLocalization);
    }

    return {};
}

