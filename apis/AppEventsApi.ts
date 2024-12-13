
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
  AppEventCreateRequest,
  AppEventLocalizationsResponse,
  AppEventResponse,
  AppEventUpdateRequest,
  ErrorResponse,
} from '../models/index';
import {
    AppEventCreateRequestFromJSON,
    AppEventCreateRequestToJSON,
    AppEventLocalizationsResponseFromJSON,
    AppEventLocalizationsResponseToJSON,
    AppEventResponseFromJSON,
    AppEventResponseToJSON,
    AppEventUpdateRequestFromJSON,
    AppEventUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface AppEventsCreateInstanceRequest {
    appEventCreateRequest: AppEventCreateRequest;
}

export interface AppEventsDeleteInstanceRequest {
    id: string;
}

export interface AppEventsGetInstanceRequest {
    id: string;
    fieldsAppEvents?: Array<AppEventsGetInstanceFieldsAppEventsEnum>;
    fieldsAppEventLocalizations?: Array<AppEventsGetInstanceFieldsAppEventLocalizationsEnum>;
    include?: Array<AppEventsGetInstanceIncludeEnum>;
    limitLocalizations?: number;
}

export interface AppEventsLocalizationsGetToManyRelatedRequest {
    id: string;
    fieldsAppEventLocalizations?: Array<AppEventsLocalizationsGetToManyRelatedFieldsAppEventLocalizationsEnum>;
    fieldsAppEvents?: Array<AppEventsLocalizationsGetToManyRelatedFieldsAppEventsEnum>;
    fieldsAppEventScreenshots?: Array<AppEventsLocalizationsGetToManyRelatedFieldsAppEventScreenshotsEnum>;
    fieldsAppEventVideoClips?: Array<AppEventsLocalizationsGetToManyRelatedFieldsAppEventVideoClipsEnum>;
    limit?: number;
    include?: Array<AppEventsLocalizationsGetToManyRelatedIncludeEnum>;
    limitAppEventScreenshots?: number;
    limitAppEventVideoClips?: number;
}

export interface AppEventsUpdateInstanceRequest {
    id: string;
    appEventUpdateRequest: AppEventUpdateRequest;
}

/**
 * 
 */
export class AppEventsApi extends runtime.BaseAPI {

    /**
     */
    async appEventsCreateInstanceRaw(requestParameters: AppEventsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventResponse>> {
        if (requestParameters['appEventCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'appEventCreateRequest',
                'Required parameter "appEventCreateRequest" was null or undefined when calling appEventsCreateInstance().'
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
            path: `/v1/appEvents`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppEventCreateRequestToJSON(requestParameters['appEventCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventsCreateInstance(requestParameters: AppEventsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventResponse> {
        const response = await this.appEventsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEventsDeleteInstanceRaw(requestParameters: AppEventsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appEventsDeleteInstance().'
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
            path: `/v1/appEvents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appEventsDeleteInstance(requestParameters: AppEventsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appEventsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appEventsGetInstanceRaw(requestParameters: AppEventsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appEventsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppEvents'] != null) {
            queryParameters['fields[appEvents]'] = requestParameters['fieldsAppEvents']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppEventLocalizations'] != null) {
            queryParameters['fields[appEventLocalizations]'] = requestParameters['fieldsAppEventLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limitLocalizations'] != null) {
            queryParameters['limit[localizations]'] = requestParameters['limitLocalizations'];
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
            path: `/v1/appEvents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventsGetInstance(requestParameters: AppEventsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventResponse> {
        const response = await this.appEventsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEventsLocalizationsGetToManyRelatedRaw(requestParameters: AppEventsLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventLocalizationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appEventsLocalizationsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppEventLocalizations'] != null) {
            queryParameters['fields[appEventLocalizations]'] = requestParameters['fieldsAppEventLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppEvents'] != null) {
            queryParameters['fields[appEvents]'] = requestParameters['fieldsAppEvents']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppEventScreenshots'] != null) {
            queryParameters['fields[appEventScreenshots]'] = requestParameters['fieldsAppEventScreenshots']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppEventVideoClips'] != null) {
            queryParameters['fields[appEventVideoClips]'] = requestParameters['fieldsAppEventVideoClips']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
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
            path: `/v1/appEvents/{id}/localizations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventLocalizationsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventsLocalizationsGetToManyRelated(requestParameters: AppEventsLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventLocalizationsResponse> {
        const response = await this.appEventsLocalizationsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEventsUpdateInstanceRaw(requestParameters: AppEventsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEventResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appEventsUpdateInstance().'
            );
        }

        if (requestParameters['appEventUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'appEventUpdateRequest',
                'Required parameter "appEventUpdateRequest" was null or undefined when calling appEventsUpdateInstance().'
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
            path: `/v1/appEvents/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppEventUpdateRequestToJSON(requestParameters['appEventUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEventResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEventsUpdateInstance(requestParameters: AppEventsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEventResponse> {
        const response = await this.appEventsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppEventsGetInstanceFieldsAppEventsEnum = {
    ReferenceName: 'referenceName',
    Badge: 'badge',
    EventState: 'eventState',
    DeepLink: 'deepLink',
    PurchaseRequirement: 'purchaseRequirement',
    PrimaryLocale: 'primaryLocale',
    Priority: 'priority',
    Purpose: 'purpose',
    TerritorySchedules: 'territorySchedules',
    ArchivedTerritorySchedules: 'archivedTerritorySchedules',
    Localizations: 'localizations'
} as const;
export type AppEventsGetInstanceFieldsAppEventsEnum = typeof AppEventsGetInstanceFieldsAppEventsEnum[keyof typeof AppEventsGetInstanceFieldsAppEventsEnum];
/**
 * @export
 */
export const AppEventsGetInstanceFieldsAppEventLocalizationsEnum = {
    Locale: 'locale',
    Name: 'name',
    ShortDescription: 'shortDescription',
    LongDescription: 'longDescription',
    AppEvent: 'appEvent',
    AppEventScreenshots: 'appEventScreenshots',
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventsGetInstanceFieldsAppEventLocalizationsEnum = typeof AppEventsGetInstanceFieldsAppEventLocalizationsEnum[keyof typeof AppEventsGetInstanceFieldsAppEventLocalizationsEnum];
/**
 * @export
 */
export const AppEventsGetInstanceIncludeEnum = {
    Localizations: 'localizations'
} as const;
export type AppEventsGetInstanceIncludeEnum = typeof AppEventsGetInstanceIncludeEnum[keyof typeof AppEventsGetInstanceIncludeEnum];
/**
 * @export
 */
export const AppEventsLocalizationsGetToManyRelatedFieldsAppEventLocalizationsEnum = {
    Locale: 'locale',
    Name: 'name',
    ShortDescription: 'shortDescription',
    LongDescription: 'longDescription',
    AppEvent: 'appEvent',
    AppEventScreenshots: 'appEventScreenshots',
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventsLocalizationsGetToManyRelatedFieldsAppEventLocalizationsEnum = typeof AppEventsLocalizationsGetToManyRelatedFieldsAppEventLocalizationsEnum[keyof typeof AppEventsLocalizationsGetToManyRelatedFieldsAppEventLocalizationsEnum];
/**
 * @export
 */
export const AppEventsLocalizationsGetToManyRelatedFieldsAppEventsEnum = {
    ReferenceName: 'referenceName',
    Badge: 'badge',
    EventState: 'eventState',
    DeepLink: 'deepLink',
    PurchaseRequirement: 'purchaseRequirement',
    PrimaryLocale: 'primaryLocale',
    Priority: 'priority',
    Purpose: 'purpose',
    TerritorySchedules: 'territorySchedules',
    ArchivedTerritorySchedules: 'archivedTerritorySchedules',
    Localizations: 'localizations'
} as const;
export type AppEventsLocalizationsGetToManyRelatedFieldsAppEventsEnum = typeof AppEventsLocalizationsGetToManyRelatedFieldsAppEventsEnum[keyof typeof AppEventsLocalizationsGetToManyRelatedFieldsAppEventsEnum];
/**
 * @export
 */
export const AppEventsLocalizationsGetToManyRelatedFieldsAppEventScreenshotsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    ImageAsset: 'imageAsset',
    AssetToken: 'assetToken',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    AppEventAssetType: 'appEventAssetType',
    AppEventLocalization: 'appEventLocalization'
} as const;
export type AppEventsLocalizationsGetToManyRelatedFieldsAppEventScreenshotsEnum = typeof AppEventsLocalizationsGetToManyRelatedFieldsAppEventScreenshotsEnum[keyof typeof AppEventsLocalizationsGetToManyRelatedFieldsAppEventScreenshotsEnum];
/**
 * @export
 */
export const AppEventsLocalizationsGetToManyRelatedFieldsAppEventVideoClipsEnum = {
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
export type AppEventsLocalizationsGetToManyRelatedFieldsAppEventVideoClipsEnum = typeof AppEventsLocalizationsGetToManyRelatedFieldsAppEventVideoClipsEnum[keyof typeof AppEventsLocalizationsGetToManyRelatedFieldsAppEventVideoClipsEnum];
/**
 * @export
 */
export const AppEventsLocalizationsGetToManyRelatedIncludeEnum = {
    AppEvent: 'appEvent',
    AppEventScreenshots: 'appEventScreenshots',
    AppEventVideoClips: 'appEventVideoClips'
} as const;
export type AppEventsLocalizationsGetToManyRelatedIncludeEnum = typeof AppEventsLocalizationsGetToManyRelatedIncludeEnum[keyof typeof AppEventsLocalizationsGetToManyRelatedIncludeEnum];