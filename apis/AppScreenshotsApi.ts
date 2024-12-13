
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
  AppScreenshotCreateRequest,
  AppScreenshotResponse,
  AppScreenshotUpdateRequest,
  ErrorResponse,
} from '../models/index';
import {
    AppScreenshotCreateRequestFromJSON,
    AppScreenshotCreateRequestToJSON,
    AppScreenshotResponseFromJSON,
    AppScreenshotResponseToJSON,
    AppScreenshotUpdateRequestFromJSON,
    AppScreenshotUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface AppScreenshotsCreateInstanceRequest {
    appScreenshotCreateRequest: AppScreenshotCreateRequest;
}

export interface AppScreenshotsDeleteInstanceRequest {
    id: string;
}

export interface AppScreenshotsGetInstanceRequest {
    id: string;
    fieldsAppScreenshots?: Array<AppScreenshotsGetInstanceFieldsAppScreenshotsEnum>;
    include?: Array<AppScreenshotsGetInstanceIncludeEnum>;
}

export interface AppScreenshotsUpdateInstanceRequest {
    id: string;
    appScreenshotUpdateRequest: AppScreenshotUpdateRequest;
}

/**
 * 
 */
export class AppScreenshotsApi extends runtime.BaseAPI {

    /**
     */
    async appScreenshotsCreateInstanceRaw(requestParameters: AppScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotResponse>> {
        if (requestParameters['appScreenshotCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'appScreenshotCreateRequest',
                'Required parameter "appScreenshotCreateRequest" was null or undefined when calling appScreenshotsCreateInstance().'
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
            path: `/v1/appScreenshots`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppScreenshotCreateRequestToJSON(requestParameters['appScreenshotCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async appScreenshotsCreateInstance(requestParameters: AppScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotResponse> {
        const response = await this.appScreenshotsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appScreenshotsDeleteInstanceRaw(requestParameters: AppScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appScreenshotsDeleteInstance().'
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
            path: `/v1/appScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appScreenshotsDeleteInstance(requestParameters: AppScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appScreenshotsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appScreenshotsGetInstanceRaw(requestParameters: AppScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appScreenshotsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppScreenshots'] != null) {
            queryParameters['fields[appScreenshots]'] = requestParameters['fieldsAppScreenshots']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async appScreenshotsGetInstance(requestParameters: AppScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotResponse> {
        const response = await this.appScreenshotsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appScreenshotsUpdateInstanceRaw(requestParameters: AppScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appScreenshotsUpdateInstance().'
            );
        }

        if (requestParameters['appScreenshotUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'appScreenshotUpdateRequest',
                'Required parameter "appScreenshotUpdateRequest" was null or undefined when calling appScreenshotsUpdateInstance().'
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
            path: `/v1/appScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppScreenshotUpdateRequestToJSON(requestParameters['appScreenshotUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async appScreenshotsUpdateInstance(requestParameters: AppScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotResponse> {
        const response = await this.appScreenshotsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppScreenshotsGetInstanceFieldsAppScreenshotsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    SourceFileChecksum: 'sourceFileChecksum',
    ImageAsset: 'imageAsset',
    AssetToken: 'assetToken',
    AssetType: 'assetType',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    AppScreenshotSet: 'appScreenshotSet'
} as const;
export type AppScreenshotsGetInstanceFieldsAppScreenshotsEnum = typeof AppScreenshotsGetInstanceFieldsAppScreenshotsEnum[keyof typeof AppScreenshotsGetInstanceFieldsAppScreenshotsEnum];
/**
 * @export
 */
export const AppScreenshotsGetInstanceIncludeEnum = {
    AppScreenshotSet: 'appScreenshotSet'
} as const;
export type AppScreenshotsGetInstanceIncludeEnum = typeof AppScreenshotsGetInstanceIncludeEnum[keyof typeof AppScreenshotsGetInstanceIncludeEnum];