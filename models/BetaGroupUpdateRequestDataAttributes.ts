
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
 * @interface BetaGroupUpdateRequestDataAttributes
 */
export interface BetaGroupUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaGroupUpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupUpdateRequestDataAttributes
     */
    publicLinkEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupUpdateRequestDataAttributes
     */
    publicLinkLimitEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BetaGroupUpdateRequestDataAttributes
     */
    publicLinkLimit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupUpdateRequestDataAttributes
     */
    feedbackEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupUpdateRequestDataAttributes
     */
    iosBuildsAvailableForAppleSiliconMac?: boolean;
}

/**
 * Check if a given object implements the BetaGroupUpdateRequestDataAttributes interface.
 */
export function instanceOfBetaGroupUpdateRequestDataAttributes(value: object): value is BetaGroupUpdateRequestDataAttributes {
    return true;
}

export function BetaGroupUpdateRequestDataAttributesFromJSON(json: any): BetaGroupUpdateRequestDataAttributes {
    return BetaGroupUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function BetaGroupUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'publicLinkEnabled': json['publicLinkEnabled'] == null ? undefined : json['publicLinkEnabled'],
        'publicLinkLimitEnabled': json['publicLinkLimitEnabled'] == null ? undefined : json['publicLinkLimitEnabled'],
        'publicLinkLimit': json['publicLinkLimit'] == null ? undefined : json['publicLinkLimit'],
        'feedbackEnabled': json['feedbackEnabled'] == null ? undefined : json['feedbackEnabled'],
        'iosBuildsAvailableForAppleSiliconMac': json['iosBuildsAvailableForAppleSiliconMac'] == null ? undefined : json['iosBuildsAvailableForAppleSiliconMac'],
    };
}

export function BetaGroupUpdateRequestDataAttributesToJSON(json: any): BetaGroupUpdateRequestDataAttributes {
    return BetaGroupUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function BetaGroupUpdateRequestDataAttributesToJSONTyped(value?: BetaGroupUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'publicLinkEnabled': value['publicLinkEnabled'],
        'publicLinkLimitEnabled': value['publicLinkLimitEnabled'],
        'publicLinkLimit': value['publicLinkLimit'],
        'feedbackEnabled': value['feedbackEnabled'],
        'iosBuildsAvailableForAppleSiliconMac': value['iosBuildsAvailableForAppleSiliconMac'],
    };
}
