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
import type { CiProductRelationshipsPrimaryRepositoriesDataInner } from './CiProductRelationshipsPrimaryRepositoriesDataInner';
import {
    CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSON,
    CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSONTyped,
    CiProductRelationshipsPrimaryRepositoriesDataInnerToJSON,
    CiProductRelationshipsPrimaryRepositoriesDataInnerToJSONTyped,
} from './CiProductRelationshipsPrimaryRepositoriesDataInner';

/**
 * 
 * @export
 * @interface ScmGitReferenceRelationshipsRepository
 */
export interface ScmGitReferenceRelationshipsRepository {
    /**
     * 
     * @type {CiProductRelationshipsPrimaryRepositoriesDataInner}
     * @memberof ScmGitReferenceRelationshipsRepository
     */
    data?: CiProductRelationshipsPrimaryRepositoriesDataInner;
}

/**
 * Check if a given object implements the ScmGitReferenceRelationshipsRepository interface.
 */
export function instanceOfScmGitReferenceRelationshipsRepository(value: object): value is ScmGitReferenceRelationshipsRepository {
    return true;
}

export function ScmGitReferenceRelationshipsRepositoryFromJSON(json: any): ScmGitReferenceRelationshipsRepository {
    return ScmGitReferenceRelationshipsRepositoryFromJSONTyped(json, false);
}

export function ScmGitReferenceRelationshipsRepositoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmGitReferenceRelationshipsRepository {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSON(json['data']),
    };
}

export function ScmGitReferenceRelationshipsRepositoryToJSON(json: any): ScmGitReferenceRelationshipsRepository {
    return ScmGitReferenceRelationshipsRepositoryToJSONTyped(json, false);
}

export function ScmGitReferenceRelationshipsRepositoryToJSONTyped(value?: ScmGitReferenceRelationshipsRepository | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CiProductRelationshipsPrimaryRepositoriesDataInnerToJSON(value['data']),
    };
}

