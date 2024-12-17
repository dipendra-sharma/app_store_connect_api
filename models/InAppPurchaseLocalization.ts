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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
    ResourceLinksToJSONTyped,
} from './ResourceLinks';
import type { InAppPurchaseAppStoreReviewScreenshotRelationships } from './InAppPurchaseAppStoreReviewScreenshotRelationships';
import {
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSONTyped,
} from './InAppPurchaseAppStoreReviewScreenshotRelationships';
import type { InAppPurchaseLocalizationAttributes } from './InAppPurchaseLocalizationAttributes';
import {
    InAppPurchaseLocalizationAttributesFromJSON,
    InAppPurchaseLocalizationAttributesFromJSONTyped,
    InAppPurchaseLocalizationAttributesToJSON,
    InAppPurchaseLocalizationAttributesToJSONTyped,
} from './InAppPurchaseLocalizationAttributes';

/**
 * 
 * @export
 * @interface InAppPurchaseLocalization
 */
export interface InAppPurchaseLocalization {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalization
     */
    type: InAppPurchaseLocalizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseLocalization
     */
    id: string;
    /**
     * 
     * @type {InAppPurchaseLocalizationAttributes}
     * @memberof InAppPurchaseLocalization
     */
    attributes?: InAppPurchaseLocalizationAttributes;
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotRelationships}
     * @memberof InAppPurchaseLocalization
     */
    relationships?: InAppPurchaseAppStoreReviewScreenshotRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchaseLocalization
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchaseLocalizationTypeEnum = {
    InAppPurchaseLocalizations: 'inAppPurchaseLocalizations'
} as const;
export type InAppPurchaseLocalizationTypeEnum = typeof InAppPurchaseLocalizationTypeEnum[keyof typeof InAppPurchaseLocalizationTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseLocalization interface.
 */
export function instanceOfInAppPurchaseLocalization(value: object): value is InAppPurchaseLocalization {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function InAppPurchaseLocalizationFromJSON(json: any): InAppPurchaseLocalization {
    return InAppPurchaseLocalizationFromJSONTyped(json, false);
}

export function InAppPurchaseLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseLocalization {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : InAppPurchaseLocalizationAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchaseLocalizationToJSON(json: any): InAppPurchaseLocalization {
    return InAppPurchaseLocalizationToJSONTyped(json, false);
}

export function InAppPurchaseLocalizationToJSONTyped(value?: InAppPurchaseLocalization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': InAppPurchaseLocalizationAttributesToJSON(value['attributes']),
        'relationships': InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

