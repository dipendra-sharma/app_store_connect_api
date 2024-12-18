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
import type { BetaAppReviewSubmissionCreateRequestDataRelationships } from './BetaAppReviewSubmissionCreateRequestDataRelationships';
import {
    BetaAppReviewSubmissionCreateRequestDataRelationshipsFromJSON,
    BetaAppReviewSubmissionCreateRequestDataRelationshipsFromJSONTyped,
    BetaAppReviewSubmissionCreateRequestDataRelationshipsToJSON,
    BetaAppReviewSubmissionCreateRequestDataRelationshipsToJSONTyped,
} from './BetaAppReviewSubmissionCreateRequestDataRelationships';
import type { BetaBuildLocalizationCreateRequestDataAttributes } from './BetaBuildLocalizationCreateRequestDataAttributes';
import {
    BetaBuildLocalizationCreateRequestDataAttributesFromJSON,
    BetaBuildLocalizationCreateRequestDataAttributesFromJSONTyped,
    BetaBuildLocalizationCreateRequestDataAttributesToJSON,
    BetaBuildLocalizationCreateRequestDataAttributesToJSONTyped,
} from './BetaBuildLocalizationCreateRequestDataAttributes';

/**
 * 
 * @export
 * @interface BetaBuildLocalizationCreateRequestData
 */
export interface BetaBuildLocalizationCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaBuildLocalizationCreateRequestData
     */
    type: BetaBuildLocalizationCreateRequestDataTypeEnum;
    /**
     * 
     * @type {BetaBuildLocalizationCreateRequestDataAttributes}
     * @memberof BetaBuildLocalizationCreateRequestData
     */
    attributes: BetaBuildLocalizationCreateRequestDataAttributes;
    /**
     * 
     * @type {BetaAppReviewSubmissionCreateRequestDataRelationships}
     * @memberof BetaBuildLocalizationCreateRequestData
     */
    relationships: BetaAppReviewSubmissionCreateRequestDataRelationships;
}


/**
 * @export
 */
export const BetaBuildLocalizationCreateRequestDataTypeEnum = {
    BetaBuildLocalizations: 'betaBuildLocalizations'
} as const;
export type BetaBuildLocalizationCreateRequestDataTypeEnum = typeof BetaBuildLocalizationCreateRequestDataTypeEnum[keyof typeof BetaBuildLocalizationCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaBuildLocalizationCreateRequestData interface.
 */
export function instanceOfBetaBuildLocalizationCreateRequestData(value: object): value is BetaBuildLocalizationCreateRequestData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('relationships' in value) || value['relationships'] === undefined) return false;
    return true;
}

export function BetaBuildLocalizationCreateRequestDataFromJSON(json: any): BetaBuildLocalizationCreateRequestData {
    return BetaBuildLocalizationCreateRequestDataFromJSONTyped(json, false);
}

export function BetaBuildLocalizationCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildLocalizationCreateRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'attributes': BetaBuildLocalizationCreateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': BetaAppReviewSubmissionCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function BetaBuildLocalizationCreateRequestDataToJSON(json: any): BetaBuildLocalizationCreateRequestData {
    return BetaBuildLocalizationCreateRequestDataToJSONTyped(json, false);
}

export function BetaBuildLocalizationCreateRequestDataToJSONTyped(value?: BetaBuildLocalizationCreateRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'attributes': BetaBuildLocalizationCreateRequestDataAttributesToJSON(value['attributes']),
        'relationships': BetaAppReviewSubmissionCreateRequestDataRelationshipsToJSON(value['relationships']),
    };
}

