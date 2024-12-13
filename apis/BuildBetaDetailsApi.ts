
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
  BuildBetaDetailResponse,
  BuildBetaDetailUpdateRequest,
  BuildBetaDetailsResponse,
  BuildWithoutIncludesResponse,
  ErrorResponse,
} from '../models/index';
import {
    BuildBetaDetailResponseFromJSON,
    BuildBetaDetailResponseToJSON,
    BuildBetaDetailUpdateRequestFromJSON,
    BuildBetaDetailUpdateRequestToJSON,
    BuildBetaDetailsResponseFromJSON,
    BuildBetaDetailsResponseToJSON,
    BuildWithoutIncludesResponseFromJSON,
    BuildWithoutIncludesResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface BuildBetaDetailsBuildGetToOneRelatedRequest {
    id: string;
    fieldsBuilds?: Array<BuildBetaDetailsBuildGetToOneRelatedFieldsBuildsEnum>;
}

export interface BuildBetaDetailsGetCollectionRequest {
    filterBuild?: Array<string>;
    filterId?: Array<string>;
    fieldsBuildBetaDetails?: Array<BuildBetaDetailsGetCollectionFieldsBuildBetaDetailsEnum>;
    fieldsBuilds?: Array<BuildBetaDetailsGetCollectionFieldsBuildsEnum>;
    limit?: number;
    include?: Array<BuildBetaDetailsGetCollectionIncludeEnum>;
}

export interface BuildBetaDetailsGetInstanceRequest {
    id: string;
    fieldsBuildBetaDetails?: Array<BuildBetaDetailsGetInstanceFieldsBuildBetaDetailsEnum>;
    fieldsBuilds?: Array<BuildBetaDetailsGetInstanceFieldsBuildsEnum>;
    include?: Array<BuildBetaDetailsGetInstanceIncludeEnum>;
}

export interface BuildBetaDetailsUpdateInstanceRequest {
    id: string;
    buildBetaDetailUpdateRequest: BuildBetaDetailUpdateRequest;
}

/**
 * 
 */
export class BuildBetaDetailsApi extends runtime.BaseAPI {

    /**
     */
    async buildBetaDetailsBuildGetToOneRelatedRaw(requestParameters: BuildBetaDetailsBuildGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildWithoutIncludesResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling buildBetaDetailsBuildGetToOneRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsBuilds'] != null) {
            queryParameters['fields[builds]'] = requestParameters['fieldsBuilds']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/buildBetaDetails/{id}/build`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BuildWithoutIncludesResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBetaDetailsBuildGetToOneRelated(requestParameters: BuildBetaDetailsBuildGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildWithoutIncludesResponse> {
        const response = await this.buildBetaDetailsBuildGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async buildBetaDetailsGetCollectionRaw(requestParameters: BuildBetaDetailsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildBetaDetailsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filterBuild'] != null) {
            queryParameters['filter[build]'] = requestParameters['filterBuild']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterId'] != null) {
            queryParameters['filter[id]'] = requestParameters['filterId']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsBuildBetaDetails'] != null) {
            queryParameters['fields[buildBetaDetails]'] = requestParameters['fieldsBuildBetaDetails']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsBuilds'] != null) {
            queryParameters['fields[builds]'] = requestParameters['fieldsBuilds']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/buildBetaDetails`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BuildBetaDetailsResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBetaDetailsGetCollection(requestParameters: BuildBetaDetailsGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildBetaDetailsResponse> {
        const response = await this.buildBetaDetailsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async buildBetaDetailsGetInstanceRaw(requestParameters: BuildBetaDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildBetaDetailResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling buildBetaDetailsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsBuildBetaDetails'] != null) {
            queryParameters['fields[buildBetaDetails]'] = requestParameters['fieldsBuildBetaDetails']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsBuilds'] != null) {
            queryParameters['fields[builds]'] = requestParameters['fieldsBuilds']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/buildBetaDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BuildBetaDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBetaDetailsGetInstance(requestParameters: BuildBetaDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildBetaDetailResponse> {
        const response = await this.buildBetaDetailsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async buildBetaDetailsUpdateInstanceRaw(requestParameters: BuildBetaDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BuildBetaDetailResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling buildBetaDetailsUpdateInstance().'
            );
        }

        if (requestParameters['buildBetaDetailUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'buildBetaDetailUpdateRequest',
                'Required parameter "buildBetaDetailUpdateRequest" was null or undefined when calling buildBetaDetailsUpdateInstance().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/buildBetaDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BuildBetaDetailUpdateRequestToJSON(requestParameters['buildBetaDetailUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BuildBetaDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async buildBetaDetailsUpdateInstance(requestParameters: BuildBetaDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BuildBetaDetailResponse> {
        const response = await this.buildBetaDetailsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const BuildBetaDetailsBuildGetToOneRelatedFieldsBuildsEnum = {
    Version: 'version',
    UploadedDate: 'uploadedDate',
    ExpirationDate: 'expirationDate',
    Expired: 'expired',
    MinOsVersion: 'minOsVersion',
    LsMinimumSystemVersion: 'lsMinimumSystemVersion',
    ComputedMinMacOsVersion: 'computedMinMacOsVersion',
    IconAssetToken: 'iconAssetToken',
    ProcessingState: 'processingState',
    BuildAudienceType: 'buildAudienceType',
    UsesNonExemptEncryption: 'usesNonExemptEncryption',
    PreReleaseVersion: 'preReleaseVersion',
    IndividualTesters: 'individualTesters',
    BetaGroups: 'betaGroups',
    BetaBuildLocalizations: 'betaBuildLocalizations',
    AppEncryptionDeclaration: 'appEncryptionDeclaration',
    BetaAppReviewSubmission: 'betaAppReviewSubmission',
    App: 'app',
    BuildBetaDetail: 'buildBetaDetail',
    AppStoreVersion: 'appStoreVersion',
    Icons: 'icons',
    BuildBundles: 'buildBundles',
    PerfPowerMetrics: 'perfPowerMetrics',
    DiagnosticSignatures: 'diagnosticSignatures'
} as const;
export type BuildBetaDetailsBuildGetToOneRelatedFieldsBuildsEnum = typeof BuildBetaDetailsBuildGetToOneRelatedFieldsBuildsEnum[keyof typeof BuildBetaDetailsBuildGetToOneRelatedFieldsBuildsEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetCollectionFieldsBuildBetaDetailsEnum = {
    AutoNotifyEnabled: 'autoNotifyEnabled',
    InternalBuildState: 'internalBuildState',
    ExternalBuildState: 'externalBuildState',
    Build: 'build'
} as const;
export type BuildBetaDetailsGetCollectionFieldsBuildBetaDetailsEnum = typeof BuildBetaDetailsGetCollectionFieldsBuildBetaDetailsEnum[keyof typeof BuildBetaDetailsGetCollectionFieldsBuildBetaDetailsEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetCollectionFieldsBuildsEnum = {
    Version: 'version',
    UploadedDate: 'uploadedDate',
    ExpirationDate: 'expirationDate',
    Expired: 'expired',
    MinOsVersion: 'minOsVersion',
    LsMinimumSystemVersion: 'lsMinimumSystemVersion',
    ComputedMinMacOsVersion: 'computedMinMacOsVersion',
    IconAssetToken: 'iconAssetToken',
    ProcessingState: 'processingState',
    BuildAudienceType: 'buildAudienceType',
    UsesNonExemptEncryption: 'usesNonExemptEncryption',
    PreReleaseVersion: 'preReleaseVersion',
    IndividualTesters: 'individualTesters',
    BetaGroups: 'betaGroups',
    BetaBuildLocalizations: 'betaBuildLocalizations',
    AppEncryptionDeclaration: 'appEncryptionDeclaration',
    BetaAppReviewSubmission: 'betaAppReviewSubmission',
    App: 'app',
    BuildBetaDetail: 'buildBetaDetail',
    AppStoreVersion: 'appStoreVersion',
    Icons: 'icons',
    BuildBundles: 'buildBundles',
    PerfPowerMetrics: 'perfPowerMetrics',
    DiagnosticSignatures: 'diagnosticSignatures'
} as const;
export type BuildBetaDetailsGetCollectionFieldsBuildsEnum = typeof BuildBetaDetailsGetCollectionFieldsBuildsEnum[keyof typeof BuildBetaDetailsGetCollectionFieldsBuildsEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetCollectionIncludeEnum = {
    Build: 'build'
} as const;
export type BuildBetaDetailsGetCollectionIncludeEnum = typeof BuildBetaDetailsGetCollectionIncludeEnum[keyof typeof BuildBetaDetailsGetCollectionIncludeEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetInstanceFieldsBuildBetaDetailsEnum = {
    AutoNotifyEnabled: 'autoNotifyEnabled',
    InternalBuildState: 'internalBuildState',
    ExternalBuildState: 'externalBuildState',
    Build: 'build'
} as const;
export type BuildBetaDetailsGetInstanceFieldsBuildBetaDetailsEnum = typeof BuildBetaDetailsGetInstanceFieldsBuildBetaDetailsEnum[keyof typeof BuildBetaDetailsGetInstanceFieldsBuildBetaDetailsEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetInstanceFieldsBuildsEnum = {
    Version: 'version',
    UploadedDate: 'uploadedDate',
    ExpirationDate: 'expirationDate',
    Expired: 'expired',
    MinOsVersion: 'minOsVersion',
    LsMinimumSystemVersion: 'lsMinimumSystemVersion',
    ComputedMinMacOsVersion: 'computedMinMacOsVersion',
    IconAssetToken: 'iconAssetToken',
    ProcessingState: 'processingState',
    BuildAudienceType: 'buildAudienceType',
    UsesNonExemptEncryption: 'usesNonExemptEncryption',
    PreReleaseVersion: 'preReleaseVersion',
    IndividualTesters: 'individualTesters',
    BetaGroups: 'betaGroups',
    BetaBuildLocalizations: 'betaBuildLocalizations',
    AppEncryptionDeclaration: 'appEncryptionDeclaration',
    BetaAppReviewSubmission: 'betaAppReviewSubmission',
    App: 'app',
    BuildBetaDetail: 'buildBetaDetail',
    AppStoreVersion: 'appStoreVersion',
    Icons: 'icons',
    BuildBundles: 'buildBundles',
    PerfPowerMetrics: 'perfPowerMetrics',
    DiagnosticSignatures: 'diagnosticSignatures'
} as const;
export type BuildBetaDetailsGetInstanceFieldsBuildsEnum = typeof BuildBetaDetailsGetInstanceFieldsBuildsEnum[keyof typeof BuildBetaDetailsGetInstanceFieldsBuildsEnum];
/**
 * @export
 */
export const BuildBetaDetailsGetInstanceIncludeEnum = {
    Build: 'build'
} as const;
export type BuildBetaDetailsGetInstanceIncludeEnum = typeof BuildBetaDetailsGetInstanceIncludeEnum[keyof typeof BuildBetaDetailsGetInstanceIncludeEnum];
