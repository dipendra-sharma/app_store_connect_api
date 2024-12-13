
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
import type { AppCategoryAttributes } from './AppCategoryAttributes';
import {
    AppCategoryAttributesFromJSON,
    AppCategoryAttributesFromJSONTyped,
    AppCategoryAttributesToJSON,
    AppCategoryAttributesToJSONTyped,
} from './AppCategoryAttributes';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { AppCategoryRelationships } from './AppCategoryRelationships';
import {
    AppCategoryRelationshipsFromJSON,
    AppCategoryRelationshipsFromJSONTyped,
    AppCategoryRelationshipsToJSON,
    AppCategoryRelationshipsToJSONTyped,
} from './AppCategoryRelationships';

/**
 * 
 * @export
 * @interface AppCategory
 */
export interface AppCategory {
    /**
     * 
     * @type {string}
     * @memberof AppCategory
     */
    type: AppCategoryTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppCategory
     */
    id: string;
    /**
     * 
     * @type {AppCategoryAttributes}
     * @memberof AppCategory
     */
    attributes?: AppCategoryAttributes;
    /**
     * 
     * @type {AppCategoryRelationships}
     * @memberof AppCategory
     */
    relationships?: AppCategoryRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppCategory
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppCategoryTypeEnum = {
    AppCategories: 'appCategories'
} as const;
export type AppCategoryTypeEnum = typeof AppCategoryTypeEnum[keyof typeof AppCategoryTypeEnum];


/**
 * Check if a given object implements the AppCategory interface.
 */
export function instanceOfAppCategory(value: object): value is AppCategory {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppCategoryFromJSON(json: any): AppCategory {
    return AppCategoryFromJSONTyped(json, false);
}

export function AppCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCategory {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppCategoryAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : AppCategoryRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppCategoryToJSON(json: any): AppCategory {
    return AppCategoryToJSONTyped(json, false);
}

export function AppCategoryToJSONTyped(value?: AppCategory | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppCategoryAttributesToJSON(value['attributes']),
        'relationships': AppCategoryRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

