
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
import type { ScmRepositoryRelationshipsScmProviderData } from './ScmRepositoryRelationshipsScmProviderData';
import {
    ScmRepositoryRelationshipsScmProviderDataFromJSON,
    ScmRepositoryRelationshipsScmProviderDataFromJSONTyped,
    ScmRepositoryRelationshipsScmProviderDataToJSON,
    ScmRepositoryRelationshipsScmProviderDataToJSONTyped,
} from './ScmRepositoryRelationshipsScmProviderData';

/**
 * 
 * @export
 * @interface ScmRepositoryRelationshipsScmProvider
 */
export interface ScmRepositoryRelationshipsScmProvider {
    /**
     * 
     * @type {ScmRepositoryRelationshipsScmProviderData}
     * @memberof ScmRepositoryRelationshipsScmProvider
     */
    data?: ScmRepositoryRelationshipsScmProviderData;
}

/**
 * Check if a given object implements the ScmRepositoryRelationshipsScmProvider interface.
 */
export function instanceOfScmRepositoryRelationshipsScmProvider(value: object): value is ScmRepositoryRelationshipsScmProvider {
    return true;
}

export function ScmRepositoryRelationshipsScmProviderFromJSON(json: any): ScmRepositoryRelationshipsScmProvider {
    return ScmRepositoryRelationshipsScmProviderFromJSONTyped(json, false);
}

export function ScmRepositoryRelationshipsScmProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmRepositoryRelationshipsScmProvider {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ScmRepositoryRelationshipsScmProviderDataFromJSON(json['data']),
    };
}

export function ScmRepositoryRelationshipsScmProviderToJSON(json: any): ScmRepositoryRelationshipsScmProvider {
    return ScmRepositoryRelationshipsScmProviderToJSONTyped(json, false);
}

export function ScmRepositoryRelationshipsScmProviderToJSONTyped(value?: ScmRepositoryRelationshipsScmProvider | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ScmRepositoryRelationshipsScmProviderDataToJSON(value['data']),
    };
}

