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

import type { AppEvent } from './AppEvent';
import {
    instanceOfAppEvent,
    AppEventFromJSON,
    AppEventFromJSONTyped,
    AppEventToJSON,
} from './AppEvent';
import type { AppEventScreenshot } from './AppEventScreenshot';
import {
    instanceOfAppEventScreenshot,
    AppEventScreenshotFromJSON,
    AppEventScreenshotFromJSONTyped,
    AppEventScreenshotToJSON,
} from './AppEventScreenshot';
import type { AppEventVideoClip } from './AppEventVideoClip';
import {
    instanceOfAppEventVideoClip,
    AppEventVideoClipFromJSON,
    AppEventVideoClipFromJSONTyped,
    AppEventVideoClipToJSON,
} from './AppEventVideoClip';

/**
 * @type AppEventLocalizationsResponseIncludedInner
 * 
 * @export
 */
export type AppEventLocalizationsResponseIncludedInner = AppEvent | AppEventScreenshot | AppEventVideoClip;

export function AppEventLocalizationsResponseIncludedInnerFromJSON(json: any): AppEventLocalizationsResponseIncludedInner {
    return AppEventLocalizationsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppEventLocalizationsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppEventLocalizationsResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfAppEvent(json)) {
        return AppEventFromJSONTyped(json, true);
    }
    if (instanceOfAppEventScreenshot(json)) {
        return AppEventScreenshotFromJSONTyped(json, true);
    }
    if (instanceOfAppEventVideoClip(json)) {
        return AppEventVideoClipFromJSONTyped(json, true);
    }

    return {} as any;
}

export function AppEventLocalizationsResponseIncludedInnerToJSON(json: any): any {
    return AppEventLocalizationsResponseIncludedInnerToJSONTyped(json, false);
}

export function AppEventLocalizationsResponseIncludedInnerToJSONTyped(value?: AppEventLocalizationsResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfAppEvent(value)) {
        return AppEventToJSON(value as AppEvent);
    }
    if (instanceOfAppEventScreenshot(value)) {
        return AppEventScreenshotToJSON(value as AppEventScreenshot);
    }
    if (instanceOfAppEventVideoClip(value)) {
        return AppEventVideoClipToJSON(value as AppEventVideoClip);
    }

    return {};
}

