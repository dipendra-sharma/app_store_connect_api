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
  AppEncryptionDeclarationDocumentCreateRequest,
  AppEncryptionDeclarationDocumentResponse,
  AppEncryptionDeclarationDocumentUpdateRequest,
  ErrorResponse,
} from '../models/index';
import {
    AppEncryptionDeclarationDocumentCreateRequestFromJSON,
    AppEncryptionDeclarationDocumentCreateRequestToJSON,
    AppEncryptionDeclarationDocumentResponseFromJSON,
    AppEncryptionDeclarationDocumentResponseToJSON,
    AppEncryptionDeclarationDocumentUpdateRequestFromJSON,
    AppEncryptionDeclarationDocumentUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface AppEncryptionDeclarationDocumentsCreateInstanceRequest {
    appEncryptionDeclarationDocumentCreateRequest: AppEncryptionDeclarationDocumentCreateRequest;
}

export interface AppEncryptionDeclarationDocumentsGetInstanceRequest {
    id: string;
    fieldsAppEncryptionDeclarationDocuments?: Array<AppEncryptionDeclarationDocumentsGetInstanceFieldsAppEncryptionDeclarationDocumentsEnum>;
}

export interface AppEncryptionDeclarationDocumentsUpdateInstanceRequest {
    id: string;
    appEncryptionDeclarationDocumentUpdateRequest: AppEncryptionDeclarationDocumentUpdateRequest;
}

/**
 * 
 */
export class AppEncryptionDeclarationDocumentsApi extends runtime.BaseAPI {

    /**
     */
    async appEncryptionDeclarationDocumentsCreateInstanceRaw(requestParameters: AppEncryptionDeclarationDocumentsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEncryptionDeclarationDocumentResponse>> {
        if (requestParameters['appEncryptionDeclarationDocumentCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'appEncryptionDeclarationDocumentCreateRequest',
                'Required parameter "appEncryptionDeclarationDocumentCreateRequest" was null or undefined when calling appEncryptionDeclarationDocumentsCreateInstance().'
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
            path: `/v1/appEncryptionDeclarationDocuments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppEncryptionDeclarationDocumentCreateRequestToJSON(requestParameters['appEncryptionDeclarationDocumentCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEncryptionDeclarationDocumentResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEncryptionDeclarationDocumentsCreateInstance(requestParameters: AppEncryptionDeclarationDocumentsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEncryptionDeclarationDocumentResponse> {
        const response = await this.appEncryptionDeclarationDocumentsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEncryptionDeclarationDocumentsGetInstanceRaw(requestParameters: AppEncryptionDeclarationDocumentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEncryptionDeclarationDocumentResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appEncryptionDeclarationDocumentsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppEncryptionDeclarationDocuments'] != null) {
            queryParameters['fields[appEncryptionDeclarationDocuments]'] = requestParameters['fieldsAppEncryptionDeclarationDocuments']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appEncryptionDeclarationDocuments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEncryptionDeclarationDocumentResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEncryptionDeclarationDocumentsGetInstance(requestParameters: AppEncryptionDeclarationDocumentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEncryptionDeclarationDocumentResponse> {
        const response = await this.appEncryptionDeclarationDocumentsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appEncryptionDeclarationDocumentsUpdateInstanceRaw(requestParameters: AppEncryptionDeclarationDocumentsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppEncryptionDeclarationDocumentResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appEncryptionDeclarationDocumentsUpdateInstance().'
            );
        }

        if (requestParameters['appEncryptionDeclarationDocumentUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'appEncryptionDeclarationDocumentUpdateRequest',
                'Required parameter "appEncryptionDeclarationDocumentUpdateRequest" was null or undefined when calling appEncryptionDeclarationDocumentsUpdateInstance().'
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
            path: `/v1/appEncryptionDeclarationDocuments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppEncryptionDeclarationDocumentUpdateRequestToJSON(requestParameters['appEncryptionDeclarationDocumentUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppEncryptionDeclarationDocumentResponseFromJSON(jsonValue));
    }

    /**
     */
    async appEncryptionDeclarationDocumentsUpdateInstance(requestParameters: AppEncryptionDeclarationDocumentsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppEncryptionDeclarationDocumentResponse> {
        const response = await this.appEncryptionDeclarationDocumentsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppEncryptionDeclarationDocumentsGetInstanceFieldsAppEncryptionDeclarationDocumentsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    AssetToken: 'assetToken',
    DownloadUrl: 'downloadUrl',
    SourceFileChecksum: 'sourceFileChecksum',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState'
} as const;
export type AppEncryptionDeclarationDocumentsGetInstanceFieldsAppEncryptionDeclarationDocumentsEnum = typeof AppEncryptionDeclarationDocumentsGetInstanceFieldsAppEncryptionDeclarationDocumentsEnum[keyof typeof AppEncryptionDeclarationDocumentsGetInstanceFieldsAppEncryptionDeclarationDocumentsEnum];
