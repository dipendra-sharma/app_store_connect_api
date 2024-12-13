
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
  InAppPurchaseLocalizationCreateRequest,
  InAppPurchaseLocalizationResponse,
  InAppPurchaseLocalizationUpdateRequest,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InAppPurchaseLocalizationCreateRequestFromJSON,
    InAppPurchaseLocalizationCreateRequestToJSON,
    InAppPurchaseLocalizationResponseFromJSON,
    InAppPurchaseLocalizationResponseToJSON,
    InAppPurchaseLocalizationUpdateRequestFromJSON,
    InAppPurchaseLocalizationUpdateRequestToJSON,
} from '../models/index';

export interface InAppPurchaseLocalizationsCreateInstanceRequest {
    inAppPurchaseLocalizationCreateRequest: InAppPurchaseLocalizationCreateRequest;
}

export interface InAppPurchaseLocalizationsDeleteInstanceRequest {
    id: string;
}

export interface InAppPurchaseLocalizationsGetInstanceRequest {
    id: string;
    fieldsInAppPurchaseLocalizations?: Array<InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum>;
    include?: Array<InAppPurchaseLocalizationsGetInstanceIncludeEnum>;
}

export interface InAppPurchaseLocalizationsUpdateInstanceRequest {
    id: string;
    inAppPurchaseLocalizationUpdateRequest: InAppPurchaseLocalizationUpdateRequest;
}

/**
 * 
 */
export class InAppPurchaseLocalizationsApi extends runtime.BaseAPI {

    /**
     */
    async inAppPurchaseLocalizationsCreateInstanceRaw(requestParameters: InAppPurchaseLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseLocalizationResponse>> {
        if (requestParameters['inAppPurchaseLocalizationCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'inAppPurchaseLocalizationCreateRequest',
                'Required parameter "inAppPurchaseLocalizationCreateRequest" was null or undefined when calling inAppPurchaseLocalizationsCreateInstance().'
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
            path: `/v1/inAppPurchaseLocalizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InAppPurchaseLocalizationCreateRequestToJSON(requestParameters['inAppPurchaseLocalizationCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchaseLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchaseLocalizationsCreateInstance(requestParameters: InAppPurchaseLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseLocalizationResponse> {
        const response = await this.inAppPurchaseLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async inAppPurchaseLocalizationsDeleteInstanceRaw(requestParameters: InAppPurchaseLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling inAppPurchaseLocalizationsDeleteInstance().'
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
            path: `/v1/inAppPurchaseLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async inAppPurchaseLocalizationsDeleteInstance(requestParameters: InAppPurchaseLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.inAppPurchaseLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async inAppPurchaseLocalizationsGetInstanceRaw(requestParameters: InAppPurchaseLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseLocalizationResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling inAppPurchaseLocalizationsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsInAppPurchaseLocalizations'] != null) {
            queryParameters['fields[inAppPurchaseLocalizations]'] = requestParameters['fieldsInAppPurchaseLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/inAppPurchaseLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchaseLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchaseLocalizationsGetInstance(requestParameters: InAppPurchaseLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseLocalizationResponse> {
        const response = await this.inAppPurchaseLocalizationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async inAppPurchaseLocalizationsUpdateInstanceRaw(requestParameters: InAppPurchaseLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseLocalizationResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling inAppPurchaseLocalizationsUpdateInstance().'
            );
        }

        if (requestParameters['inAppPurchaseLocalizationUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'inAppPurchaseLocalizationUpdateRequest',
                'Required parameter "inAppPurchaseLocalizationUpdateRequest" was null or undefined when calling inAppPurchaseLocalizationsUpdateInstance().'
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
            path: `/v1/inAppPurchaseLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: InAppPurchaseLocalizationUpdateRequestToJSON(requestParameters['inAppPurchaseLocalizationUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchaseLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchaseLocalizationsUpdateInstance(requestParameters: InAppPurchaseLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseLocalizationResponse> {
        const response = await this.inAppPurchaseLocalizationsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum = {
    Name: 'name',
    Locale: 'locale',
    Description: 'description',
    State: 'state',
    InAppPurchaseV2: 'inAppPurchaseV2'
} as const;
export type InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum = typeof InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum[keyof typeof InAppPurchaseLocalizationsGetInstanceFieldsInAppPurchaseLocalizationsEnum];
/**
 * @export
 */
export const InAppPurchaseLocalizationsGetInstanceIncludeEnum = {
    InAppPurchaseV2: 'inAppPurchaseV2'
} as const;
export type InAppPurchaseLocalizationsGetInstanceIncludeEnum = typeof InAppPurchaseLocalizationsGetInstanceIncludeEnum[keyof typeof InAppPurchaseLocalizationsGetInstanceIncludeEnum];
