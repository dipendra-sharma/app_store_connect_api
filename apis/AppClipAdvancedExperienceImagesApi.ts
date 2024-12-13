
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
  AppClipAdvancedExperienceImageCreateRequest,
  AppClipAdvancedExperienceImageResponse,
  AppClipAdvancedExperienceImageUpdateRequest,
  ErrorResponse,
} from '../models/index';
import {
    AppClipAdvancedExperienceImageCreateRequestFromJSON,
    AppClipAdvancedExperienceImageCreateRequestToJSON,
    AppClipAdvancedExperienceImageResponseFromJSON,
    AppClipAdvancedExperienceImageResponseToJSON,
    AppClipAdvancedExperienceImageUpdateRequestFromJSON,
    AppClipAdvancedExperienceImageUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface AppClipAdvancedExperienceImagesCreateInstanceRequest {
    appClipAdvancedExperienceImageCreateRequest: AppClipAdvancedExperienceImageCreateRequest;
}

export interface AppClipAdvancedExperienceImagesGetInstanceRequest {
    id: string;
    fieldsAppClipAdvancedExperienceImages?: Array<AppClipAdvancedExperienceImagesGetInstanceFieldsAppClipAdvancedExperienceImagesEnum>;
}

export interface AppClipAdvancedExperienceImagesUpdateInstanceRequest {
    id: string;
    appClipAdvancedExperienceImageUpdateRequest: AppClipAdvancedExperienceImageUpdateRequest;
}

/**
 * 
 */
export class AppClipAdvancedExperienceImagesApi extends runtime.BaseAPI {

    /**
     */
    async appClipAdvancedExperienceImagesCreateInstanceRaw(requestParameters: AppClipAdvancedExperienceImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperienceImageResponse>> {
        if (requestParameters['appClipAdvancedExperienceImageCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'appClipAdvancedExperienceImageCreateRequest',
                'Required parameter "appClipAdvancedExperienceImageCreateRequest" was null or undefined when calling appClipAdvancedExperienceImagesCreateInstance().'
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
            path: `/v1/appClipAdvancedExperienceImages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppClipAdvancedExperienceImageCreateRequestToJSON(requestParameters['appClipAdvancedExperienceImageCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipAdvancedExperienceImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipAdvancedExperienceImagesCreateInstance(requestParameters: AppClipAdvancedExperienceImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperienceImageResponse> {
        const response = await this.appClipAdvancedExperienceImagesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipAdvancedExperienceImagesGetInstanceRaw(requestParameters: AppClipAdvancedExperienceImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperienceImageResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appClipAdvancedExperienceImagesGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppClipAdvancedExperienceImages'] != null) {
            queryParameters['fields[appClipAdvancedExperienceImages]'] = requestParameters['fieldsAppClipAdvancedExperienceImages']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appClipAdvancedExperienceImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipAdvancedExperienceImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipAdvancedExperienceImagesGetInstance(requestParameters: AppClipAdvancedExperienceImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperienceImageResponse> {
        const response = await this.appClipAdvancedExperienceImagesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipAdvancedExperienceImagesUpdateInstanceRaw(requestParameters: AppClipAdvancedExperienceImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipAdvancedExperienceImageResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appClipAdvancedExperienceImagesUpdateInstance().'
            );
        }

        if (requestParameters['appClipAdvancedExperienceImageUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'appClipAdvancedExperienceImageUpdateRequest',
                'Required parameter "appClipAdvancedExperienceImageUpdateRequest" was null or undefined when calling appClipAdvancedExperienceImagesUpdateInstance().'
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
            path: `/v1/appClipAdvancedExperienceImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppClipAdvancedExperienceImageUpdateRequestToJSON(requestParameters['appClipAdvancedExperienceImageUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipAdvancedExperienceImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipAdvancedExperienceImagesUpdateInstance(requestParameters: AppClipAdvancedExperienceImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipAdvancedExperienceImageResponse> {
        const response = await this.appClipAdvancedExperienceImagesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppClipAdvancedExperienceImagesGetInstanceFieldsAppClipAdvancedExperienceImagesEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    SourceFileChecksum: 'sourceFileChecksum',
    ImageAsset: 'imageAsset',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState'
} as const;
export type AppClipAdvancedExperienceImagesGetInstanceFieldsAppClipAdvancedExperienceImagesEnum = typeof AppClipAdvancedExperienceImagesGetInstanceFieldsAppClipAdvancedExperienceImagesEnum[keyof typeof AppClipAdvancedExperienceImagesGetInstanceFieldsAppClipAdvancedExperienceImagesEnum];
