
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

import type { AppCustomProductPageVersion } from './AppCustomProductPageVersion';
import {
    instanceOfAppCustomProductPageVersion,
    AppCustomProductPageVersionFromJSON,
    AppCustomProductPageVersionFromJSONTyped,
    AppCustomProductPageVersionToJSON,
} from './AppCustomProductPageVersion';
import type { AppPreviewSet } from './AppPreviewSet';
import {
    instanceOfAppPreviewSet,
    AppPreviewSetFromJSON,
    AppPreviewSetFromJSONTyped,
    AppPreviewSetToJSON,
} from './AppPreviewSet';
import type { AppScreenshotSet } from './AppScreenshotSet';
import {
    instanceOfAppScreenshotSet,
    AppScreenshotSetFromJSON,
    AppScreenshotSetFromJSONTyped,
    AppScreenshotSetToJSON,
} from './AppScreenshotSet';

/**
 * @type AppCustomProductPageLocalizationsResponseIncludedInner
 * 
 * @export
 */
export type AppCustomProductPageLocalizationsResponseIncludedInner = AppCustomProductPageVersion | AppPreviewSet | AppScreenshotSet;

export function AppCustomProductPageLocalizationsResponseIncludedInnerFromJSON(json: any): AppCustomProductPageLocalizationsResponseIncludedInner {
    return AppCustomProductPageLocalizationsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationsResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfAppCustomProductPageVersion(json)) {
        return AppCustomProductPageVersionFromJSONTyped(json, true);
    }
    if (instanceOfAppPreviewSet(json)) {
        return AppPreviewSetFromJSONTyped(json, true);
    }
    if (instanceOfAppScreenshotSet(json)) {
        return AppScreenshotSetFromJSONTyped(json, true);
    }

    return {} as any;
}

export function AppCustomProductPageLocalizationsResponseIncludedInnerToJSON(json: any): any {
    return AppCustomProductPageLocalizationsResponseIncludedInnerToJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationsResponseIncludedInnerToJSONTyped(value?: AppCustomProductPageLocalizationsResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfAppCustomProductPageVersion(value)) {
        return AppCustomProductPageVersionToJSON(value as AppCustomProductPageVersion);
    }
    if (instanceOfAppPreviewSet(value)) {
        return AppPreviewSetToJSON(value as AppPreviewSet);
    }
    if (instanceOfAppScreenshotSet(value)) {
        return AppScreenshotSetToJSON(value as AppScreenshotSet);
    }

    return {};
}

