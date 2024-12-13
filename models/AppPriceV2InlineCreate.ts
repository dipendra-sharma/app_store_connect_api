
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
 * @interface AppPriceV2InlineCreate
 */
export interface AppPriceV2InlineCreate {
    /**
     * 
     * @type {string}
     * @memberof AppPriceV2InlineCreate
     */
    type: AppPriceV2InlineCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPriceV2InlineCreate
     */
    id?: string;
}


/**
 * @export
 */
export const AppPriceV2InlineCreateTypeEnum = {
    AppPrices: 'appPrices'
} as const;
export type AppPriceV2InlineCreateTypeEnum = typeof AppPriceV2InlineCreateTypeEnum[keyof typeof AppPriceV2InlineCreateTypeEnum];


/**
 * Check if a given object implements the AppPriceV2InlineCreate interface.
 */
export function instanceOfAppPriceV2InlineCreate(value: object): value is AppPriceV2InlineCreate {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function AppPriceV2InlineCreateFromJSON(json: any): AppPriceV2InlineCreate {
    return AppPriceV2InlineCreateFromJSONTyped(json, false);
}

export function AppPriceV2InlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPriceV2InlineCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function AppPriceV2InlineCreateToJSON(json: any): AppPriceV2InlineCreate {
    return AppPriceV2InlineCreateToJSONTyped(json, false);
}

export function AppPriceV2InlineCreateToJSONTyped(value?: AppPriceV2InlineCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
