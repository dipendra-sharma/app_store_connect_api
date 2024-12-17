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
  AppStoreReviewAttachmentsResponse,
  AppStoreReviewDetailCreateRequest,
  AppStoreReviewDetailResponse,
  AppStoreReviewDetailUpdateRequest,
  ErrorResponse,
} from '../models/index';
import {
    AppStoreReviewAttachmentsResponseFromJSON,
    AppStoreReviewAttachmentsResponseToJSON,
    AppStoreReviewDetailCreateRequestFromJSON,
    AppStoreReviewDetailCreateRequestToJSON,
    AppStoreReviewDetailResponseFromJSON,
    AppStoreReviewDetailResponseToJSON,
    AppStoreReviewDetailUpdateRequestFromJSON,
    AppStoreReviewDetailUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRequest {
    id: string;
    fieldsAppStoreReviewAttachments?: Array<AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum>;
    fieldsAppStoreReviewDetails?: Array<AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum>;
    limit?: number;
    include?: Array<AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum>;
}

export interface AppStoreReviewDetailsCreateInstanceRequest {
    appStoreReviewDetailCreateRequest: AppStoreReviewDetailCreateRequest;
}

export interface AppStoreReviewDetailsGetInstanceRequest {
    id: string;
    fieldsAppStoreReviewDetails?: Array<AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum>;
    fieldsAppStoreReviewAttachments?: Array<AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum>;
    include?: Array<AppStoreReviewDetailsGetInstanceIncludeEnum>;
    limitAppStoreReviewAttachments?: number;
}

export interface AppStoreReviewDetailsUpdateInstanceRequest {
    id: string;
    appStoreReviewDetailUpdateRequest: AppStoreReviewDetailUpdateRequest;
}

/**
 * 
 */
export class AppStoreReviewDetailsApi extends runtime.BaseAPI {

    /**
     */
    async appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRaw(requestParameters: AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewAttachmentsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppStoreReviewAttachments'] != null) {
            queryParameters['fields[appStoreReviewAttachments]'] = requestParameters['fieldsAppStoreReviewAttachments']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppStoreReviewDetails'] != null) {
            queryParameters['fields[appStoreReviewDetails]'] = requestParameters['fieldsAppStoreReviewDetails']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appStoreReviewDetails/{id}/appStoreReviewAttachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreReviewAttachmentsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated(requestParameters: AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewAttachmentsResponse> {
        const response = await this.appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreReviewDetailsCreateInstanceRaw(requestParameters: AppStoreReviewDetailsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewDetailResponse>> {
        if (requestParameters['appStoreReviewDetailCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'appStoreReviewDetailCreateRequest',
                'Required parameter "appStoreReviewDetailCreateRequest" was null or undefined when calling appStoreReviewDetailsCreateInstance().'
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
            path: `/v1/appStoreReviewDetails`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreReviewDetailCreateRequestToJSON(requestParameters['appStoreReviewDetailCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreReviewDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreReviewDetailsCreateInstance(requestParameters: AppStoreReviewDetailsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewDetailResponse> {
        const response = await this.appStoreReviewDetailsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreReviewDetailsGetInstanceRaw(requestParameters: AppStoreReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewDetailResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreReviewDetailsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppStoreReviewDetails'] != null) {
            queryParameters['fields[appStoreReviewDetails]'] = requestParameters['fieldsAppStoreReviewDetails']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppStoreReviewAttachments'] != null) {
            queryParameters['fields[appStoreReviewAttachments]'] = requestParameters['fieldsAppStoreReviewAttachments']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limitAppStoreReviewAttachments'] != null) {
            queryParameters['limit[appStoreReviewAttachments]'] = requestParameters['limitAppStoreReviewAttachments'];
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
            path: `/v1/appStoreReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreReviewDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreReviewDetailsGetInstance(requestParameters: AppStoreReviewDetailsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewDetailResponse> {
        const response = await this.appStoreReviewDetailsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreReviewDetailsUpdateInstanceRaw(requestParameters: AppStoreReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreReviewDetailResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreReviewDetailsUpdateInstance().'
            );
        }

        if (requestParameters['appStoreReviewDetailUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'appStoreReviewDetailUpdateRequest',
                'Required parameter "appStoreReviewDetailUpdateRequest" was null or undefined when calling appStoreReviewDetailsUpdateInstance().'
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
            path: `/v1/appStoreReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreReviewDetailUpdateRequestToJSON(requestParameters['appStoreReviewDetailUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreReviewDetailResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreReviewDetailsUpdateInstance(requestParameters: AppStoreReviewDetailsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreReviewDetailResponse> {
        const response = await this.appStoreReviewDetailsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    SourceFileChecksum: 'sourceFileChecksum',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    AppStoreReviewDetail: 'appStoreReviewDetail'
} as const;
export type AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum = typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum[keyof typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewAttachmentsEnum];
/**
 * @export
 */
export const AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum = {
    ContactFirstName: 'contactFirstName',
    ContactLastName: 'contactLastName',
    ContactPhone: 'contactPhone',
    ContactEmail: 'contactEmail',
    DemoAccountName: 'demoAccountName',
    DemoAccountPassword: 'demoAccountPassword',
    DemoAccountRequired: 'demoAccountRequired',
    Notes: 'notes',
    AppStoreVersion: 'appStoreVersion',
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
} as const;
export type AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum = typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum[keyof typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedFieldsAppStoreReviewDetailsEnum];
/**
 * @export
 */
export const AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum = {
    AppStoreReviewDetail: 'appStoreReviewDetail'
} as const;
export type AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum = typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum[keyof typeof AppStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum = {
    ContactFirstName: 'contactFirstName',
    ContactLastName: 'contactLastName',
    ContactPhone: 'contactPhone',
    ContactEmail: 'contactEmail',
    DemoAccountName: 'demoAccountName',
    DemoAccountPassword: 'demoAccountPassword',
    DemoAccountRequired: 'demoAccountRequired',
    Notes: 'notes',
    AppStoreVersion: 'appStoreVersion',
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
} as const;
export type AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum = typeof AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum[keyof typeof AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewDetailsEnum];
/**
 * @export
 */
export const AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    SourceFileChecksum: 'sourceFileChecksum',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    AppStoreReviewDetail: 'appStoreReviewDetail'
} as const;
export type AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum = typeof AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum[keyof typeof AppStoreReviewDetailsGetInstanceFieldsAppStoreReviewAttachmentsEnum];
/**
 * @export
 */
export const AppStoreReviewDetailsGetInstanceIncludeEnum = {
    AppStoreVersion: 'appStoreVersion',
    AppStoreReviewAttachments: 'appStoreReviewAttachments'
} as const;
export type AppStoreReviewDetailsGetInstanceIncludeEnum = typeof AppStoreReviewDetailsGetInstanceIncludeEnum[keyof typeof AppStoreReviewDetailsGetInstanceIncludeEnum];
