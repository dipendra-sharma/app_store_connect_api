
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
 * @interface BetaGroupAttributes
 */
export interface BetaGroupAttributes {
    /**
     * 
     * @type {string}
     * @memberof BetaGroupAttributes
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof BetaGroupAttributes
     */
    createdDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupAttributes
     */
    isInternalGroup?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupAttributes
     */
    hasAccessToAllBuilds?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupAttributes
     */
    publicLinkEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BetaGroupAttributes
     */
    publicLinkId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupAttributes
     */
    publicLinkLimitEnabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BetaGroupAttributes
     */
    publicLinkLimit?: number;
    /**
     * 
     * @type {string}
     * @memberof BetaGroupAttributes
     */
    publicLink?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupAttributes
     */
    feedbackEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BetaGroupAttributes
     */
    iosBuildsAvailableForAppleSiliconMac?: boolean;
}

/**
 * Check if a given object implements the BetaGroupAttributes interface.
 */
export function instanceOfBetaGroupAttributes(value: object): value is BetaGroupAttributes {
    return true;
}

export function BetaGroupAttributesFromJSON(json: any): BetaGroupAttributes {
    return BetaGroupAttributesFromJSONTyped(json, false);
}

export function BetaGroupAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaGroupAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'isInternalGroup': json['isInternalGroup'] == null ? undefined : json['isInternalGroup'],
        'hasAccessToAllBuilds': json['hasAccessToAllBuilds'] == null ? undefined : json['hasAccessToAllBuilds'],
        'publicLinkEnabled': json['publicLinkEnabled'] == null ? undefined : json['publicLinkEnabled'],
        'publicLinkId': json['publicLinkId'] == null ? undefined : json['publicLinkId'],
        'publicLinkLimitEnabled': json['publicLinkLimitEnabled'] == null ? undefined : json['publicLinkLimitEnabled'],
        'publicLinkLimit': json['publicLinkLimit'] == null ? undefined : json['publicLinkLimit'],
        'publicLink': json['publicLink'] == null ? undefined : json['publicLink'],
        'feedbackEnabled': json['feedbackEnabled'] == null ? undefined : json['feedbackEnabled'],
        'iosBuildsAvailableForAppleSiliconMac': json['iosBuildsAvailableForAppleSiliconMac'] == null ? undefined : json['iosBuildsAvailableForAppleSiliconMac'],
    };
}

export function BetaGroupAttributesToJSON(json: any): BetaGroupAttributes {
    return BetaGroupAttributesToJSONTyped(json, false);
}

export function BetaGroupAttributesToJSONTyped(value?: BetaGroupAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'createdDate': value['createdDate'] == null ? undefined : ((value['createdDate']).toISOString()),
        'isInternalGroup': value['isInternalGroup'],
        'hasAccessToAllBuilds': value['hasAccessToAllBuilds'],
        'publicLinkEnabled': value['publicLinkEnabled'],
        'publicLinkId': value['publicLinkId'],
        'publicLinkLimitEnabled': value['publicLinkLimitEnabled'],
        'publicLinkLimit': value['publicLinkLimit'],
        'publicLink': value['publicLink'],
        'feedbackEnabled': value['feedbackEnabled'],
        'iosBuildsAvailableForAppleSiliconMac': value['iosBuildsAvailableForAppleSiliconMac'],
    };
}
