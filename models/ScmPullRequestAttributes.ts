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
 * @interface ScmPullRequestAttributes
 */
export interface ScmPullRequestAttributes {
    /**
     * 
     * @type {string}
     * @memberof ScmPullRequestAttributes
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof ScmPullRequestAttributes
     */
    number?: number;
    /**
     * 
     * @type {string}
     * @memberof ScmPullRequestAttributes
     */
    webUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ScmPullRequestAttributes
     */
    sourceRepositoryOwner?: string;
    /**
     * 
     * @type {string}
     * @memberof ScmPullRequestAttributes
     */
    sourceRepositoryName?: string;
    /**
     * 
     * @type {string}
     * @memberof ScmPullRequestAttributes
     */
    sourceBranchName?: string;
    /**
     * 
     * @type {string}
     * @memberof ScmPullRequestAttributes
     */
    destinationRepositoryOwner?: string;
    /**
     * 
     * @type {string}
     * @memberof ScmPullRequestAttributes
     */
    destinationRepositoryName?: string;
    /**
     * 
     * @type {string}
     * @memberof ScmPullRequestAttributes
     */
    destinationBranchName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ScmPullRequestAttributes
     */
    isClosed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScmPullRequestAttributes
     */
    isCrossRepository?: boolean;
}

/**
 * Check if a given object implements the ScmPullRequestAttributes interface.
 */
export function instanceOfScmPullRequestAttributes(value: object): value is ScmPullRequestAttributes {
    return true;
}

export function ScmPullRequestAttributesFromJSON(json: any): ScmPullRequestAttributes {
    return ScmPullRequestAttributesFromJSONTyped(json, false);
}

export function ScmPullRequestAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmPullRequestAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'number': json['number'] == null ? undefined : json['number'],
        'webUrl': json['webUrl'] == null ? undefined : json['webUrl'],
        'sourceRepositoryOwner': json['sourceRepositoryOwner'] == null ? undefined : json['sourceRepositoryOwner'],
        'sourceRepositoryName': json['sourceRepositoryName'] == null ? undefined : json['sourceRepositoryName'],
        'sourceBranchName': json['sourceBranchName'] == null ? undefined : json['sourceBranchName'],
        'destinationRepositoryOwner': json['destinationRepositoryOwner'] == null ? undefined : json['destinationRepositoryOwner'],
        'destinationRepositoryName': json['destinationRepositoryName'] == null ? undefined : json['destinationRepositoryName'],
        'destinationBranchName': json['destinationBranchName'] == null ? undefined : json['destinationBranchName'],
        'isClosed': json['isClosed'] == null ? undefined : json['isClosed'],
        'isCrossRepository': json['isCrossRepository'] == null ? undefined : json['isCrossRepository'],
    };
}

export function ScmPullRequestAttributesToJSON(json: any): ScmPullRequestAttributes {
    return ScmPullRequestAttributesToJSONTyped(json, false);
}

export function ScmPullRequestAttributesToJSONTyped(value?: ScmPullRequestAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'number': value['number'],
        'webUrl': value['webUrl'],
        'sourceRepositoryOwner': value['sourceRepositoryOwner'],
        'sourceRepositoryName': value['sourceRepositoryName'],
        'sourceBranchName': value['sourceBranchName'],
        'destinationRepositoryOwner': value['destinationRepositoryOwner'],
        'destinationRepositoryName': value['destinationRepositoryName'],
        'destinationBranchName': value['destinationBranchName'],
        'isClosed': value['isClosed'],
        'isCrossRepository': value['isCrossRepository'],
    };
}

