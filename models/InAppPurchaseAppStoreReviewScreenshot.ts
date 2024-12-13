
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
import type { AppScreenshotAttributes } from './AppScreenshotAttributes';
import {
    AppScreenshotAttributesFromJSON,
    AppScreenshotAttributesFromJSONTyped,
    AppScreenshotAttributesToJSON,
    AppScreenshotAttributesToJSONTyped,
} from './AppScreenshotAttributes';
import type { InAppPurchaseAppStoreReviewScreenshotRelationships } from './InAppPurchaseAppStoreReviewScreenshotRelationships';
import {
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSONTyped,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON,
    InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSONTyped,
} from './InAppPurchaseAppStoreReviewScreenshotRelationships';

/**
 * 
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshot
 */
export interface InAppPurchaseAppStoreReviewScreenshot {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAppStoreReviewScreenshot
     */
    type: InAppPurchaseAppStoreReviewScreenshotTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseAppStoreReviewScreenshot
     */
    id: string;
    /**
     * 
     * @type {AppScreenshotAttributes}
     * @memberof InAppPurchaseAppStoreReviewScreenshot
     */
    attributes?: AppScreenshotAttributes;
    /**
     * 
     * @type {InAppPurchaseAppStoreReviewScreenshotRelationships}
     * @memberof InAppPurchaseAppStoreReviewScreenshot
     */
    relationships?: InAppPurchaseAppStoreReviewScreenshotRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof InAppPurchaseAppStoreReviewScreenshot
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const InAppPurchaseAppStoreReviewScreenshotTypeEnum = {
    InAppPurchaseAppStoreReviewScreenshots: 'inAppPurchaseAppStoreReviewScreenshots'
} as const;
export type InAppPurchaseAppStoreReviewScreenshotTypeEnum = typeof InAppPurchaseAppStoreReviewScreenshotTypeEnum[keyof typeof InAppPurchaseAppStoreReviewScreenshotTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshot interface.
 */
export function instanceOfInAppPurchaseAppStoreReviewScreenshot(value: object): value is InAppPurchaseAppStoreReviewScreenshot {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function InAppPurchaseAppStoreReviewScreenshotFromJSON(json: any): InAppPurchaseAppStoreReviewScreenshot {
    return InAppPurchaseAppStoreReviewScreenshotFromJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshot {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': json['attributes'] == null ? undefined : AppScreenshotAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : InAppPurchaseAppStoreReviewScreenshotRelationshipsFromJSON(json['relationships']),
        'links': json['links'] == null ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function InAppPurchaseAppStoreReviewScreenshotToJSON(json: any): InAppPurchaseAppStoreReviewScreenshot {
    return InAppPurchaseAppStoreReviewScreenshotToJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotToJSONTyped(value?: InAppPurchaseAppStoreReviewScreenshot | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
        'attributes': AppScreenshotAttributesToJSON(value['attributes']),
        'relationships': InAppPurchaseAppStoreReviewScreenshotRelationshipsToJSON(value['relationships']),
        'links': ResourceLinksToJSON(value['links']),
    };
}

