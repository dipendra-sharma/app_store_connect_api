
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
import type { ScmGitReferenceRelationshipsRepository } from './ScmGitReferenceRelationshipsRepository';
import {
    ScmGitReferenceRelationshipsRepositoryFromJSON,
    ScmGitReferenceRelationshipsRepositoryFromJSONTyped,
    ScmGitReferenceRelationshipsRepositoryToJSON,
    ScmGitReferenceRelationshipsRepositoryToJSONTyped,
} from './ScmGitReferenceRelationshipsRepository';

/**
 * 
 * @export
 * @interface ScmGitReferenceRelationships
 */
export interface ScmGitReferenceRelationships {
    /**
     * 
     * @type {ScmGitReferenceRelationshipsRepository}
     * @memberof ScmGitReferenceRelationships
     */
    repository?: ScmGitReferenceRelationshipsRepository;
}

/**
 * Check if a given object implements the ScmGitReferenceRelationships interface.
 */
export function instanceOfScmGitReferenceRelationships(value: object): value is ScmGitReferenceRelationships {
    return true;
}

export function ScmGitReferenceRelationshipsFromJSON(json: any): ScmGitReferenceRelationships {
    return ScmGitReferenceRelationshipsFromJSONTyped(json, false);
}

export function ScmGitReferenceRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmGitReferenceRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'repository': json['repository'] == null ? undefined : ScmGitReferenceRelationshipsRepositoryFromJSON(json['repository']),
    };
}

export function ScmGitReferenceRelationshipsToJSON(json: any): ScmGitReferenceRelationships {
    return ScmGitReferenceRelationshipsToJSONTyped(json, false);
}

export function ScmGitReferenceRelationshipsToJSONTyped(value?: ScmGitReferenceRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'repository': ScmGitReferenceRelationshipsRepositoryToJSON(value['repository']),
    };
}
