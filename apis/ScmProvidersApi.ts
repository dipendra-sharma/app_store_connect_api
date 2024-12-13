
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


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  ScmProviderResponse,
  ScmProvidersResponse,
  ScmRepositoriesResponse,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    ScmProviderResponseFromJSON,
    ScmProviderResponseToJSON,
    ScmProvidersResponseFromJSON,
    ScmProvidersResponseToJSON,
    ScmRepositoriesResponseFromJSON,
    ScmRepositoriesResponseToJSON,
} from '../models/index';

export interface ScmProvidersGetCollectionRequest {
    fieldsScmProviders?: Array<ScmProvidersGetCollectionFieldsScmProvidersEnum>;
    limit?: number;
}

export interface ScmProvidersGetInstanceRequest {
    id: string;
    fieldsScmProviders?: Array<ScmProvidersGetInstanceFieldsScmProvidersEnum>;
}

export interface ScmProvidersRepositoriesGetToManyRelatedRequest {
    id: string;
    filterId?: Array<string>;
    fieldsScmRepositories?: Array<ScmProvidersRepositoriesGetToManyRelatedFieldsScmRepositoriesEnum>;
    fieldsScmProviders?: Array<ScmProvidersRepositoriesGetToManyRelatedFieldsScmProvidersEnum>;
    fieldsScmGitReferences?: Array<ScmProvidersRepositoriesGetToManyRelatedFieldsScmGitReferencesEnum>;
    limit?: number;
    include?: Array<ScmProvidersRepositoriesGetToManyRelatedIncludeEnum>;
}

/**
 * 
 */
export class ScmProvidersApi extends runtime.BaseAPI {

    /**
     */
    async scmProvidersGetCollectionRaw(requestParameters: ScmProvidersGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmProvidersResponse>> {
        const queryParameters: any = {};

        if (requestParameters['fieldsScmProviders'] != null) {
            queryParameters['fields[scmProviders]'] = requestParameters['fieldsScmProviders']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/scmProviders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmProvidersResponseFromJSON(jsonValue));
    }

    /**
     */
    async scmProvidersGetCollection(requestParameters: ScmProvidersGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmProvidersResponse> {
        const response = await this.scmProvidersGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async scmProvidersGetInstanceRaw(requestParameters: ScmProvidersGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmProviderResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling scmProvidersGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsScmProviders'] != null) {
            queryParameters['fields[scmProviders]'] = requestParameters['fieldsScmProviders']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/scmProviders/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmProviderResponseFromJSON(jsonValue));
    }

    /**
     */
    async scmProvidersGetInstance(requestParameters: ScmProvidersGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmProviderResponse> {
        const response = await this.scmProvidersGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async scmProvidersRepositoriesGetToManyRelatedRaw(requestParameters: ScmProvidersRepositoriesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ScmRepositoriesResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling scmProvidersRepositoriesGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filterId'] != null) {
            queryParameters['filter[id]'] = requestParameters['filterId']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsScmRepositories'] != null) {
            queryParameters['fields[scmRepositories]'] = requestParameters['fieldsScmRepositories']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsScmProviders'] != null) {
            queryParameters['fields[scmProviders]'] = requestParameters['fieldsScmProviders']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsScmGitReferences'] != null) {
            queryParameters['fields[scmGitReferences]'] = requestParameters['fieldsScmGitReferences']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/scmProviders/{id}/repositories`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ScmRepositoriesResponseFromJSON(jsonValue));
    }

    /**
     */
    async scmProvidersRepositoriesGetToManyRelated(requestParameters: ScmProvidersRepositoriesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ScmRepositoriesResponse> {
        const response = await this.scmProvidersRepositoriesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ScmProvidersGetCollectionFieldsScmProvidersEnum = {
    ScmProviderType: 'scmProviderType',
    Url: 'url',
    Repositories: 'repositories'
} as const;
export type ScmProvidersGetCollectionFieldsScmProvidersEnum = typeof ScmProvidersGetCollectionFieldsScmProvidersEnum[keyof typeof ScmProvidersGetCollectionFieldsScmProvidersEnum];
/**
 * @export
 */
export const ScmProvidersGetInstanceFieldsScmProvidersEnum = {
    ScmProviderType: 'scmProviderType',
    Url: 'url',
    Repositories: 'repositories'
} as const;
export type ScmProvidersGetInstanceFieldsScmProvidersEnum = typeof ScmProvidersGetInstanceFieldsScmProvidersEnum[keyof typeof ScmProvidersGetInstanceFieldsScmProvidersEnum];
/**
 * @export
 */
export const ScmProvidersRepositoriesGetToManyRelatedFieldsScmRepositoriesEnum = {
    LastAccessedDate: 'lastAccessedDate',
    HttpCloneUrl: 'httpCloneUrl',
    SshCloneUrl: 'sshCloneUrl',
    OwnerName: 'ownerName',
    RepositoryName: 'repositoryName',
    ScmProvider: 'scmProvider',
    DefaultBranch: 'defaultBranch',
    GitReferences: 'gitReferences',
    PullRequests: 'pullRequests'
} as const;
export type ScmProvidersRepositoriesGetToManyRelatedFieldsScmRepositoriesEnum = typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmRepositoriesEnum[keyof typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmRepositoriesEnum];
/**
 * @export
 */
export const ScmProvidersRepositoriesGetToManyRelatedFieldsScmProvidersEnum = {
    ScmProviderType: 'scmProviderType',
    Url: 'url',
    Repositories: 'repositories'
} as const;
export type ScmProvidersRepositoriesGetToManyRelatedFieldsScmProvidersEnum = typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmProvidersEnum[keyof typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmProvidersEnum];
/**
 * @export
 */
export const ScmProvidersRepositoriesGetToManyRelatedFieldsScmGitReferencesEnum = {
    Name: 'name',
    CanonicalName: 'canonicalName',
    IsDeleted: 'isDeleted',
    Kind: 'kind',
    Repository: 'repository'
} as const;
export type ScmProvidersRepositoriesGetToManyRelatedFieldsScmGitReferencesEnum = typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmGitReferencesEnum[keyof typeof ScmProvidersRepositoriesGetToManyRelatedFieldsScmGitReferencesEnum];
/**
 * @export
 */
export const ScmProvidersRepositoriesGetToManyRelatedIncludeEnum = {
    ScmProvider: 'scmProvider',
    DefaultBranch: 'defaultBranch'
} as const;
export type ScmProvidersRepositoriesGetToManyRelatedIncludeEnum = typeof ScmProvidersRepositoriesGetToManyRelatedIncludeEnum[keyof typeof ScmProvidersRepositoriesGetToManyRelatedIncludeEnum];
