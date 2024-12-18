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
import type { AppStoreVersion } from './AppStoreVersion';
import {
    instanceOfAppStoreVersion,
    AppStoreVersionFromJSON,
    AppStoreVersionFromJSONTyped,
    AppStoreVersionToJSON,
} from './AppStoreVersion';

/**
 * @type AppStoreVersionLocalizationsResponseIncludedInner
 * 
 * @export
 */
export type AppStoreVersionLocalizationsResponseIncludedInner = AppPreviewSet | AppScreenshotSet | AppStoreVersion;

export function AppStoreVersionLocalizationsResponseIncludedInnerFromJSON(json: any): AppStoreVersionLocalizationsResponseIncludedInner {
    return AppStoreVersionLocalizationsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppStoreVersionLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionLocalizationsResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfAppPreviewSet(json)) {
        return AppPreviewSetFromJSONTyped(json, true);
    }
    if (instanceOfAppScreenshotSet(json)) {
        return AppScreenshotSetFromJSONTyped(json, true);
    }
    if (instanceOfAppStoreVersion(json)) {
        return AppStoreVersionFromJSONTyped(json, true);
    }

    return {} as any;
}

export function AppStoreVersionLocalizationsResponseIncludedInnerToJSON(json: any): any {
    return AppStoreVersionLocalizationsResponseIncludedInnerToJSONTyped(json, false);
}

export function AppStoreVersionLocalizationsResponseIncludedInnerToJSONTyped(value?: AppStoreVersionLocalizationsResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfAppPreviewSet(value)) {
        return AppPreviewSetToJSON(value as AppPreviewSet);
    }
    if (instanceOfAppScreenshotSet(value)) {
        return AppScreenshotSetToJSON(value as AppScreenshotSet);
    }
    if (instanceOfAppStoreVersion(value)) {
        return AppStoreVersionToJSON(value as AppStoreVersion);
    }

    return {};
}

