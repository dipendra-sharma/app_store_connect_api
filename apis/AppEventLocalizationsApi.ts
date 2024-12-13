
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
  AppEventLocalizationCreateRequest,
  AppEventLocalizationResponse,
  AppEventLocalizationUpdateRequest,
  AppEventScreenshotsResponse,
  AppEventVideoClipsResponse,
  ErrorResponse,
} from '../models/index';
import {
    AppEventLocalizationCreateRequestFromJSON,
    AppEventLocalizationCreateRequestToJSON,
    AppEventLocalizationResponseFromJSON,
    AppEventLocalizationResponseToJSON,
    AppEventLocalizationUpdateRequestFromJSON,
    AppEventLocalizationUpdateRequestToJSON,
    AppEventScreenshotsResponseFromJSON,
    AppEventScreenshotsResponseToJSON,
    AppEventVideoClipsResponseFromJSON,
    AppEventVideoClipsResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface AppEventLocalizationsAppEventScreenshotsGetToManyRelatedRequest {
    id: string;
    fieldsAppEventScreenshots?: Array<AppEventLocalizationsAppEventScreenshotsGetToManyRelatedFieldsAppEventScreenshotsEnum>;
    fieldsAppEventLocalizations?: Array<AppEventLocalizationsAppEventScreenshotsGetToManyRelatedFieldsAppEventLocalizationsEnum>;
    limit?: number;
    include?: Array<AppEventLocalizationsAppEventScreenshotsGetToManyRelatedIncludeEnum>;
}

export interface AppEventLocalizationsAppEventVideoClipsGetToManyRelatedRequest {
    id: string;
    fieldsAppEventVideoClips?: Array<AppEventLocalizationsAppEventVideoClipsGetToManyRelatedFieldsAppEventVideoClipsEnum>;
    fieldsAppEventLocalizations?: Array<AppEventLocalizationsAppEventVideoClipsGetToManyRelatedFieldsAppEventLocalizationsEnum>;
    limit?: number;
    include?: Array<AppEventLocalizationsAppEventVideoClipsGetToManyRelatedIncludeEnum>;
}

export interface AppEventLocalizationsCreateInstanceRequest {
    appEventLocalizationCreateRequest: AppEventLocalizationCreateRequest;
}

export interface AppEventLocalizationsDeleteInstanceRequest {
    id: string;
}

export interface AppEventLocalizationsGetInstanceRequest {
    id: string;
    fieldsAppEventLocalizations?: Array<AppEventLocalizationsGetInstanceFieldsAppEventLocalizationsEnum>;
    fieldsAppEventScreenshots?: Array<AppEventLocalizationsGetInstanceFieldsAppEventScreenshotsEnum>;
    fieldsAppEventVideoClips?: Array<AppEventLocalizationsGetInstanceFieldsAppEventVideoClipsEnum>;
    include?: Array<AppEventLocalizationsGetInstanceIncludeEnum>;
    limitAppEventScreenshots?: number;
    limitAppEventVideoClips?: number;
}

export interface AppEventLocalizationsUpdateInstanceRequest {
    id: string;
    appEventLocalizationUpdateRequest: AppEventLocalizationUpdateRequest;
}

/**
 * 
 */
export class AppEventLocalizationsApi extends runtime.BaseAPI {

    /**
     */
    async appEventLocalizationsAppEventScreenshotsGetToManyRelatedRaw(requestParameters: AppEventLocalizationsAppEventScreenshotsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventScreenshotsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appEventLocalizationsAppEventScreenshotsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppEventScreenshots'] != null) {
            queryParameters['fields[appEventScreenshots]'] = requestParameters['fieldsAppEventScreenshots']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppEventLocalizations'] != null) {
            queryParameters['fields[appEventLocalizations]'] = requestParameters['fieldsAppEventLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appEventLocalizations/{id}/appEventScreenshots`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventScreenshotsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventLocalizationsAppEventScreenshotsGetToManyRelated(requestParameters: AppEventLocalizationsAppEventScreenshotsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventScreenshotsResponse> {
        const response = await this.appEventLocalizationsAppEventScreenshotsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEventLocalizationsAppEventVideoClipsGetToManyRelatedRaw(requestParameters: AppEventLocalizationsAppEventVideoClipsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventVideoClipsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appEventLocalizationsAppEventVideoClipsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppEventVideoClips'] != null) {
            queryParameters['fields[appEventVideoClips]'] = requestParameters['fieldsAppEventVideoClips']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppEventLocalizations'] != null) {
            queryParameters['fields[appEventLocalizations]'] = requestParameters['fieldsAppEventLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appEventLocalizations/{id}/appEventVideoClips`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventVideoClipsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventLocalizationsAppEventVideoClipsGetToManyRelated(requestParameters: AppEventLocalizationsAppEventVideoClipsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventVideoClipsResponse> {
        const response = await this.appEventLocalizationsAppEventVideoClipsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEventLocalizationsCreateInstanceRaw(requestParameters: AppEventLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventLocalizationResponse>> {
        if (requestParameters['appEventLocalizationCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'appEventLocalizationCreateRequest',
                'Required parameter "appEventLocalizationCreateRequest" was null or undefined when calling appEventLocalizationsCreateInstance().'
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
            path: `/v1/appEventLocalizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppEventLocalizationCreateRequestToJSON(requestParameters['appEventLocalizationCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventLocalizationsCreateInstance(requestParameters: AppEventLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventLocalizationResponse> {
        const response = await this.appEventLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEventLocalizationsDeleteInstanceRaw(requestParameters: AppEventLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appEventLocalizationsDeleteInstance().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/appEventLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appEventLocalizationsDeleteInstance(requestParameters: AppEventLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appEventLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appEventLocalizationsGetInstanceRaw(requestParameters: AppEventLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventLocalizationResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appEventLocalizationsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppEventLocalizations'] != null) {
            queryParameters['fields[appEventLocalizations]'] = requestParameters['fieldsAppEventLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppEventScreenshots'] != null) {
            queryParameters['fields[appEventScreenshots]'] = requestParameters['fieldsAppEventScreenshots']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppEventVideoClips'] != null) {
            queryParameters['fields[appEventVideoClips]'] = requestParameters['fieldsAppEventVideoClips']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limitAppEventScreenshots'] != null) {
            queryParameters['limit[appEventScreenshots]'] = requestParameters['limitAppEventScreenshots'];
        }

        if (requestParameters['limitAppEventVideoClips'] != null) {
            queryParameters['limit[appEventVideoClips]'] = requestParameters['limitAppEventVideoClips'];
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
            path: `/v1/appEventLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventLocalizationsGetInstance(requestParameters: AppEventLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventLocalizationResponse> {
        const response = await this.appEventLocalizationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEventLocalizationsUpdateInstanceRaw(requestParameters: AppEventLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventLocalizationResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appEventLocalizationsUpdateInstance().'
            );
        }

        if (requestParameters['appEventLocalizationUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'appEventLocalizationUpdateRequest',
                'Required parameter "appEventLocalizationUpdateRequest" was null or undefined when calling appEventLocalizationsUpdateInstance().'
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
            path: `/v1/appEventLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppEventLocalizationUpdateRequestToJSON(requestParameters['appEventLocalizationUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventLocalizationsUpdateInstance(requestParameters: AppEventLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventLocalizationResponse> {
        const response = await this.appEventLocalizationsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppEventLocalizationsAppEventScreenshotsGetToManyRelatedFieldsAppEventScreenshotsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    ImageAsset: 'imageAsset',
    AssetToken: 'assetToken',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    AppEventAssetType: 'appEventAssetType',
    AppEventLocalization: 'appEventLocalization'
} as const;
export type AppEventLocalizationsAppEventScreenshotsGetToManyRelatedFieldsAppEventScreenshotsEnum = typeof AppEventLocalizationsAppEventScreenshotsGetToManyRelatedFieldsAppEventScreenshotsEnum[keyof typeof AppEventLocalizationsAppEventScreenshotsGetToManyRelatedFieldsAppEventScreenshotsEnum];
/**
 * @export
 */
export const AppEventLocalizationsAppEventScreenshotsGetToManyRelatedFieldsAppEventLocalizationsEnum = {
    Locale: 'locale',
    Name: 'name',
    ShortDescription: 'shortDescription',
    LongDescription: 'longDescription',
    AppEvent: 'appEvent',
    AppEventScreenshots: 'appEventScreenshots',
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventLocalizationsAppEventScreenshotsGetToManyRelatedFieldsAppEventLocalizationsEnum = typeof AppEventLocalizationsAppEventScreenshotsGetToManyRelatedFieldsAppEventLocalizationsEnum[keyof typeof AppEventLocalizationsAppEventScreenshotsGetToManyRelatedFieldsAppEventLocalizationsEnum];
/**
 * @export
 */
export const AppEventLocalizationsAppEventScreenshotsGetToManyRelatedIncludeEnum = {
    AppEventLocalization: 'appEventLocalization'
} as const;
export type AppEventLocalizationsAppEventScreenshotsGetToManyRelatedIncludeEnum = typeof AppEventLocalizationsAppEventScreenshotsGetToManyRelatedIncludeEnum[keyof typeof AppEventLocalizationsAppEventScreenshotsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppEventLocalizationsAppEventVideoClipsGetToManyRelatedFieldsAppEventVideoClipsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    PreviewFrameTimeCode: 'previewFrameTimeCode',
    VideoUrl: 'videoUrl',
    PreviewFrameImage: 'previewFrameImage',
    PreviewImage: 'previewImage',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    VideoDeliveryState: 'videoDeliveryState',
    AppEventAssetType: 'appEventAssetType',
    AppEventLocalization: 'appEventLocalization'
} as const;
export type AppEventLocalizationsAppEventVideoClipsGetToManyRelatedFieldsAppEventVideoClipsEnum = typeof AppEventLocalizationsAppEventVideoClipsGetToManyRelatedFieldsAppEventVideoClipsEnum[keyof typeof AppEventLocalizationsAppEventVideoClipsGetToManyRelatedFieldsAppEventVideoClipsEnum];
/**
 * @export
 */
export const AppEventLocalizationsAppEventVideoClipsGetToManyRelatedFieldsAppEventLocalizationsEnum = {
    Locale: 'locale',
    Name: 'name',
    ShortDescription: 'shortDescription',
    LongDescription: 'longDescription',
    AppEvent: 'appEvent',
    AppEventScreenshots: 'appEventScreenshots',
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventLocalizationsAppEventVideoClipsGetToManyRelatedFieldsAppEventLocalizationsEnum = typeof AppEventLocalizationsAppEventVideoClipsGetToManyRelatedFieldsAppEventLocalizationsEnum[keyof typeof AppEventLocalizationsAppEventVideoClipsGetToManyRelatedFieldsAppEventLocalizationsEnum];
/**
 * @export
 */
export const AppEventLocalizationsAppEventVideoClipsGetToManyRelatedIncludeEnum = {
    AppEventLocalization: 'appEventLocalization'
} as const;
export type AppEventLocalizationsAppEventVideoClipsGetToManyRelatedIncludeEnum = typeof AppEventLocalizationsAppEventVideoClipsGetToManyRelatedIncludeEnum[keyof typeof AppEventLocalizationsAppEventVideoClipsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppEventLocalizationsGetInstanceFieldsAppEventLocalizationsEnum = {
    Locale: 'locale',
    Name: 'name',
    ShortDescription: 'shortDescription',
    LongDescription: 'longDescription',
    AppEvent: 'appEvent',
    AppEventScreenshots: 'appEventScreenshots',
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventLocalizationsGetInstanceFieldsAppEventLocalizationsEnum = typeof AppEventLocalizationsGetInstanceFieldsAppEventLocalizationsEnum[keyof typeof AppEventLocalizationsGetInstanceFieldsAppEventLocalizationsEnum];
/**
 * @export
 */
export const AppEventLocalizationsGetInstanceFieldsAppEventScreenshotsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    ImageAsset: 'imageAsset',
    AssetToken: 'assetToken',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    AppEventAssetType: 'appEventAssetType',
    AppEventLocalization: 'appEventLocalization'
} as const;
export type AppEventLocalizationsGetInstanceFieldsAppEventScreenshotsEnum = typeof AppEventLocalizationsGetInstanceFieldsAppEventScreenshotsEnum[keyof typeof AppEventLocalizationsGetInstanceFieldsAppEventScreenshotsEnum];
/**
 * @export
 */
export const AppEventLocalizationsGetInstanceFieldsAppEventVideoClipsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    PreviewFrameTimeCode: 'previewFrameTimeCode',
    VideoUrl: 'videoUrl',
    PreviewFrameImage: 'previewFrameImage',
    PreviewImage: 'previewImage',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    VideoDeliveryState: 'videoDeliveryState',
    AppEventAssetType: 'appEventAssetType',
    AppEventLocalization: 'appEventLocalization'
} as const;
export type AppEventLocalizationsGetInstanceFieldsAppEventVideoClipsEnum = typeof AppEventLocalizationsGetInstanceFieldsAppEventVideoClipsEnum[keyof typeof AppEventLocalizationsGetInstanceFieldsAppEventVideoClipsEnum];
/**
 * @export
 */
export const AppEventLocalizationsGetInstanceIncludeEnum = {
    AppEvent: 'appEvent',
    AppEventScreenshots: 'appEventScreenshots',
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventLocalizationsGetInstanceIncludeEnum = typeof AppEventLocalizationsGetInstanceIncludeEnum[keyof typeof AppEventLocalizationsGetInstanceIncludeEnum];
