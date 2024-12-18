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
import type { AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates } from './AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates';
import {
    AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesFromJSON,
    AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesFromJSONTyped,
    AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesToJSON,
    AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesToJSONTyped,
} from './AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceAttributesPlaceDisplayPoint
 */
export interface AppClipAdvancedExperienceAttributesPlaceDisplayPoint {
    /**
     * 
     * @type {AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates}
     * @memberof AppClipAdvancedExperienceAttributesPlaceDisplayPoint
     */
    coordinates?: AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinates;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlaceDisplayPoint
     */
    source?: AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum = {
    Calculated: 'CALCULATED',
    ManuallyPlaced: 'MANUALLY_PLACED'
} as const;
export type AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum = typeof AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum[keyof typeof AppClipAdvancedExperienceAttributesPlaceDisplayPointSourceEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceAttributesPlaceDisplayPoint interface.
 */
export function instanceOfAppClipAdvancedExperienceAttributesPlaceDisplayPoint(value: object): value is AppClipAdvancedExperienceAttributesPlaceDisplayPoint {
    return true;
}

export function AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSON(json: any): AppClipAdvancedExperienceAttributesPlaceDisplayPoint {
    return AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceAttributesPlaceDisplayPoint {
    if (json == null) {
        return json;
    }
    return {
        
        'coordinates': json['coordinates'] == null ? undefined : AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesFromJSON(json['coordinates']),
        'source': json['source'] == null ? undefined : json['source'],
    };
}

export function AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSON(json: any): AppClipAdvancedExperienceAttributesPlaceDisplayPoint {
    return AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSONTyped(value?: AppClipAdvancedExperienceAttributesPlaceDisplayPoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'coordinates': AppClipAdvancedExperienceAttributesPlaceDisplayPointCoordinatesToJSON(value['coordinates']),
        'source': value['source'],
    };
}

