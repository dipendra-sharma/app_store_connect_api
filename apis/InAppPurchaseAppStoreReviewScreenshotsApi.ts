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
  InAppPurchaseAppStoreReviewScreenshotCreateRequest,
  InAppPurchaseAppStoreReviewScreenshotResponse,
  InAppPurchaseAppStoreReviewScreenshotUpdateRequest,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InAppPurchaseAppStoreReviewScreenshotCreateRequestFromJSON,
    InAppPurchaseAppStoreReviewScreenshotCreateRequestToJSON,
    InAppPurchaseAppStoreReviewScreenshotResponseFromJSON,
    InAppPurchaseAppStoreReviewScreenshotResponseToJSON,
    InAppPurchaseAppStoreReviewScreenshotUpdateRequestFromJSON,
    InAppPurchaseAppStoreReviewScreenshotUpdateRequestToJSON,
} from '../models/index';

export interface InAppPurchaseAppStoreReviewScreenshotsCreateInstanceRequest {
    inAppPurchaseAppStoreReviewScreenshotCreateRequest: InAppPurchaseAppStoreReviewScreenshotCreateRequest;
}

export interface InAppPurchaseAppStoreReviewScreenshotsDeleteInstanceRequest {
    id: string;
}

export interface InAppPurchaseAppStoreReviewScreenshotsGetInstanceRequest {
    id: string;
    fieldsInAppPurchaseAppStoreReviewScreenshots?: Array<InAppPurchaseAppStoreReviewScreenshotsGetInstanceFieldsInAppPurchaseAppStoreReviewScreenshotsEnum>;
    include?: Array<InAppPurchaseAppStoreReviewScreenshotsGetInstanceIncludeEnum>;
}

export interface InAppPurchaseAppStoreReviewScreenshotsUpdateInstanceRequest {
    id: string;
    inAppPurchaseAppStoreReviewScreenshotUpdateRequest: InAppPurchaseAppStoreReviewScreenshotUpdateRequest;
}

/**
 * 
 */
export class InAppPurchaseAppStoreReviewScreenshotsApi extends runtime.BaseAPI {

    /**
     */
    async inAppPurchaseAppStoreReviewScreenshotsCreateInstanceRaw(requestParameters: InAppPurchaseAppStoreReviewScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseAppStoreReviewScreenshotResponse>> {
        if (requestParameters['inAppPurchaseAppStoreReviewScreenshotCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'inAppPurchaseAppStoreReviewScreenshotCreateRequest',
                'Required parameter "inAppPurchaseAppStoreReviewScreenshotCreateRequest" was null or undefined when calling inAppPurchaseAppStoreReviewScreenshotsCreateInstance().'
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
            path: `/v1/inAppPurchaseAppStoreReviewScreenshots`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InAppPurchaseAppStoreReviewScreenshotCreateRequestToJSON(requestParameters['inAppPurchaseAppStoreReviewScreenshotCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchaseAppStoreReviewScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchaseAppStoreReviewScreenshotsCreateInstance(requestParameters: InAppPurchaseAppStoreReviewScreenshotsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseAppStoreReviewScreenshotResponse> {
        const response = await this.inAppPurchaseAppStoreReviewScreenshotsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async inAppPurchaseAppStoreReviewScreenshotsDeleteInstanceRaw(requestParameters: InAppPurchaseAppStoreReviewScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling inAppPurchaseAppStoreReviewScreenshotsDeleteInstance().'
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
            path: `/v1/inAppPurchaseAppStoreReviewScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async inAppPurchaseAppStoreReviewScreenshotsDeleteInstance(requestParameters: InAppPurchaseAppStoreReviewScreenshotsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.inAppPurchaseAppStoreReviewScreenshotsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async inAppPurchaseAppStoreReviewScreenshotsGetInstanceRaw(requestParameters: InAppPurchaseAppStoreReviewScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseAppStoreReviewScreenshotResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling inAppPurchaseAppStoreReviewScreenshotsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsInAppPurchaseAppStoreReviewScreenshots'] != null) {
            queryParameters['fields[inAppPurchaseAppStoreReviewScreenshots]'] = requestParameters['fieldsInAppPurchaseAppStoreReviewScreenshots']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/inAppPurchaseAppStoreReviewScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchaseAppStoreReviewScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchaseAppStoreReviewScreenshotsGetInstance(requestParameters: InAppPurchaseAppStoreReviewScreenshotsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseAppStoreReviewScreenshotResponse> {
        const response = await this.inAppPurchaseAppStoreReviewScreenshotsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async inAppPurchaseAppStoreReviewScreenshotsUpdateInstanceRaw(requestParameters: InAppPurchaseAppStoreReviewScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseAppStoreReviewScreenshotResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling inAppPurchaseAppStoreReviewScreenshotsUpdateInstance().'
            );
        }

        if (requestParameters['inAppPurchaseAppStoreReviewScreenshotUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'inAppPurchaseAppStoreReviewScreenshotUpdateRequest',
                'Required parameter "inAppPurchaseAppStoreReviewScreenshotUpdateRequest" was null or undefined when calling inAppPurchaseAppStoreReviewScreenshotsUpdateInstance().'
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
            path: `/v1/inAppPurchaseAppStoreReviewScreenshots/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: InAppPurchaseAppStoreReviewScreenshotUpdateRequestToJSON(requestParameters['inAppPurchaseAppStoreReviewScreenshotUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchaseAppStoreReviewScreenshotResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchaseAppStoreReviewScreenshotsUpdateInstance(requestParameters: InAppPurchaseAppStoreReviewScreenshotsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseAppStoreReviewScreenshotResponse> {
        const response = await this.inAppPurchaseAppStoreReviewScreenshotsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const InAppPurchaseAppStoreReviewScreenshotsGetInstanceFieldsInAppPurchaseAppStoreReviewScreenshotsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    SourceFileChecksum: 'sourceFileChecksum',
    ImageAsset: 'imageAsset',
    AssetToken: 'assetToken',
    AssetType: 'assetType',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    InAppPurchaseV2: 'inAppPurchaseV2'
} as const;
export type InAppPurchaseAppStoreReviewScreenshotsGetInstanceFieldsInAppPurchaseAppStoreReviewScreenshotsEnum = typeof InAppPurchaseAppStoreReviewScreenshotsGetInstanceFieldsInAppPurchaseAppStoreReviewScreenshotsEnum[keyof typeof InAppPurchaseAppStoreReviewScreenshotsGetInstanceFieldsInAppPurchaseAppStoreReviewScreenshotsEnum];
/**
 * @export
 */
export const InAppPurchaseAppStoreReviewScreenshotsGetInstanceIncludeEnum = {
    InAppPurchaseV2: 'inAppPurchaseV2'
} as const;
export type InAppPurchaseAppStoreReviewScreenshotsGetInstanceIncludeEnum = typeof InAppPurchaseAppStoreReviewScreenshotsGetInstanceIncludeEnum[keyof typeof InAppPurchaseAppStoreReviewScreenshotsGetInstanceIncludeEnum];
