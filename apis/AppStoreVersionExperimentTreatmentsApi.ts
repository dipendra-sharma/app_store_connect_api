
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
  AppStoreVersionExperimentTreatmentCreateRequest,
  AppStoreVersionExperimentTreatmentLocalizationsResponse,
  AppStoreVersionExperimentTreatmentResponse,
  AppStoreVersionExperimentTreatmentUpdateRequest,
  ErrorResponse,
} from '../models/index';
import {
    AppStoreVersionExperimentTreatmentCreateRequestFromJSON,
    AppStoreVersionExperimentTreatmentCreateRequestToJSON,
    AppStoreVersionExperimentTreatmentLocalizationsResponseFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationsResponseToJSON,
    AppStoreVersionExperimentTreatmentResponseFromJSON,
    AppStoreVersionExperimentTreatmentResponseToJSON,
    AppStoreVersionExperimentTreatmentUpdateRequestFromJSON,
    AppStoreVersionExperimentTreatmentUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedRequest {
    id: string;
    filterLocale?: Array<string>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    fieldsAppStoreVersionExperimentTreatments?: Array<AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentsEnum>;
    fieldsAppScreenshotSets?: Array<AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum>;
    fieldsAppPreviewSets?: Array<AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum>;
    limit?: number;
    include?: Array<AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedIncludeEnum>;
    limitAppScreenshotSets?: number;
    limitAppPreviewSets?: number;
}

export interface AppStoreVersionExperimentTreatmentsCreateInstanceRequest {
    appStoreVersionExperimentTreatmentCreateRequest: AppStoreVersionExperimentTreatmentCreateRequest;
}

export interface AppStoreVersionExperimentTreatmentsDeleteInstanceRequest {
    id: string;
}

export interface AppStoreVersionExperimentTreatmentsGetInstanceRequest {
    id: string;
    fieldsAppStoreVersionExperimentTreatments?: Array<AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentsEnum>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    include?: Array<AppStoreVersionExperimentTreatmentsGetInstanceIncludeEnum>;
    limitAppStoreVersionExperimentTreatmentLocalizations?: number;
}

export interface AppStoreVersionExperimentTreatmentsUpdateInstanceRequest {
    id: string;
    appStoreVersionExperimentTreatmentUpdateRequest: AppStoreVersionExperimentTreatmentUpdateRequest;
}

/**
 * 
 */
export class AppStoreVersionExperimentTreatmentsApi extends runtime.BaseAPI {

    /**
     */
    async appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedRaw(requestParameters: AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionExperimentTreatmentLocalizationsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filterLocale'] != null) {
            queryParameters['filter[locale]'] = requestParameters['filterLocale']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppStoreVersionExperimentTreatmentLocalizations'] != null) {
            queryParameters['fields[appStoreVersionExperimentTreatmentLocalizations]'] = requestParameters['fieldsAppStoreVersionExperimentTreatmentLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppStoreVersionExperimentTreatments'] != null) {
            queryParameters['fields[appStoreVersionExperimentTreatments]'] = requestParameters['fieldsAppStoreVersionExperimentTreatments']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppScreenshotSets'] != null) {
            queryParameters['fields[appScreenshotSets]'] = requestParameters['fieldsAppScreenshotSets']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppPreviewSets'] != null) {
            queryParameters['fields[appPreviewSets]'] = requestParameters['fieldsAppPreviewSets']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limitAppScreenshotSets'] != null) {
            queryParameters['limit[appScreenshotSets]'] = requestParameters['limitAppScreenshotSets'];
        }

        if (requestParameters['limitAppPreviewSets'] != null) {
            queryParameters['limit[appPreviewSets]'] = requestParameters['limitAppPreviewSets'];
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
            path: `/v1/appStoreVersionExperimentTreatments/{id}/appStoreVersionExperimentTreatmentLocalizations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionExperimentTreatmentLocalizationsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelated(requestParameters: AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionExperimentTreatmentLocalizationsResponse> {
        const response = await this.appStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreVersionExperimentTreatmentsCreateInstanceRaw(requestParameters: AppStoreVersionExperimentTreatmentsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionExperimentTreatmentResponse>> {
        if (requestParameters['appStoreVersionExperimentTreatmentCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'appStoreVersionExperimentTreatmentCreateRequest',
                'Required parameter "appStoreVersionExperimentTreatmentCreateRequest" was null or undefined when calling appStoreVersionExperimentTreatmentsCreateInstance().'
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
            path: `/v1/appStoreVersionExperimentTreatments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreVersionExperimentTreatmentCreateRequestToJSON(requestParameters['appStoreVersionExperimentTreatmentCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionExperimentTreatmentResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionExperimentTreatmentsCreateInstance(requestParameters: AppStoreVersionExperimentTreatmentsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionExperimentTreatmentResponse> {
        const response = await this.appStoreVersionExperimentTreatmentsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreVersionExperimentTreatmentsDeleteInstanceRaw(requestParameters: AppStoreVersionExperimentTreatmentsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionExperimentTreatmentsDeleteInstance().'
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
            path: `/v1/appStoreVersionExperimentTreatments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appStoreVersionExperimentTreatmentsDeleteInstance(requestParameters: AppStoreVersionExperimentTreatmentsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appStoreVersionExperimentTreatmentsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appStoreVersionExperimentTreatmentsGetInstanceRaw(requestParameters: AppStoreVersionExperimentTreatmentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionExperimentTreatmentResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionExperimentTreatmentsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppStoreVersionExperimentTreatments'] != null) {
            queryParameters['fields[appStoreVersionExperimentTreatments]'] = requestParameters['fieldsAppStoreVersionExperimentTreatments']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppStoreVersionExperimentTreatmentLocalizations'] != null) {
            queryParameters['fields[appStoreVersionExperimentTreatmentLocalizations]'] = requestParameters['fieldsAppStoreVersionExperimentTreatmentLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limitAppStoreVersionExperimentTreatmentLocalizations'] != null) {
            queryParameters['limit[appStoreVersionExperimentTreatmentLocalizations]'] = requestParameters['limitAppStoreVersionExperimentTreatmentLocalizations'];
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
            path: `/v1/appStoreVersionExperimentTreatments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionExperimentTreatmentResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionExperimentTreatmentsGetInstance(requestParameters: AppStoreVersionExperimentTreatmentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionExperimentTreatmentResponse> {
        const response = await this.appStoreVersionExperimentTreatmentsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreVersionExperimentTreatmentsUpdateInstanceRaw(requestParameters: AppStoreVersionExperimentTreatmentsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionExperimentTreatmentResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionExperimentTreatmentsUpdateInstance().'
            );
        }

        if (requestParameters['appStoreVersionExperimentTreatmentUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'appStoreVersionExperimentTreatmentUpdateRequest',
                'Required parameter "appStoreVersionExperimentTreatmentUpdateRequest" was null or undefined when calling appStoreVersionExperimentTreatmentsUpdateInstance().'
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
            path: `/v1/appStoreVersionExperimentTreatments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreVersionExperimentTreatmentUpdateRequestToJSON(requestParameters['appStoreVersionExperimentTreatmentUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionExperimentTreatmentResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionExperimentTreatmentsUpdateInstance(requestParameters: AppStoreVersionExperimentTreatmentsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionExperimentTreatmentResponse> {
        const response = await this.appStoreVersionExperimentTreatmentsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = {
    Locale: 'locale',
    AppStoreVersionExperimentTreatment: 'appStoreVersionExperimentTreatment',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum[keyof typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentsEnum = {
    Name: 'name',
    AppIcon: 'appIcon',
    AppIconName: 'appIconName',
    PromotedDate: 'promotedDate',
    AppStoreVersionExperiment: 'appStoreVersionExperiment',
    AppStoreVersionExperimentV2: 'appStoreVersionExperimentV2',
    AppStoreVersionExperimentTreatmentLocalizations: 'appStoreVersionExperimentTreatmentLocalizations'
} as const;
export type AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentsEnum = typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentsEnum[keyof typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum = {
    ScreenshotDisplayType: 'screenshotDisplayType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppScreenshots: 'appScreenshots'
} as const;
export type AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum = typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum[keyof typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum = {
    PreviewType: 'previewType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppPreviews: 'appPreviews'
} as const;
export type AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum = typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum[keyof typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedFieldsAppPreviewSetsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedIncludeEnum = {
    AppStoreVersionExperimentTreatment: 'appStoreVersionExperimentTreatment',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedIncludeEnum = typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedIncludeEnum[keyof typeof AppStoreVersionExperimentTreatmentsAppStoreVersionExperimentTreatmentLocalizationsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentsEnum = {
    Name: 'name',
    AppIcon: 'appIcon',
    AppIconName: 'appIconName',
    PromotedDate: 'promotedDate',
    AppStoreVersionExperiment: 'appStoreVersionExperiment',
    AppStoreVersionExperimentV2: 'appStoreVersionExperimentV2',
    AppStoreVersionExperimentTreatmentLocalizations: 'appStoreVersionExperimentTreatmentLocalizations'
} as const;
export type AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentsEnum = typeof AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentsEnum[keyof typeof AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = {
    Locale: 'locale',
    AppStoreVersionExperimentTreatment: 'appStoreVersionExperimentTreatment',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = typeof AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum[keyof typeof AppStoreVersionExperimentTreatmentsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentsGetInstanceIncludeEnum = {
    AppStoreVersionExperiment: 'appStoreVersionExperiment',
    AppStoreVersionExperimentV2: 'appStoreVersionExperimentV2',
    AppStoreVersionExperimentTreatmentLocalizations: 'appStoreVersionExperimentTreatmentLocalizations'
} as const;
export type AppStoreVersionExperimentTreatmentsGetInstanceIncludeEnum = typeof AppStoreVersionExperimentTreatmentsGetInstanceIncludeEnum[keyof typeof AppStoreVersionExperimentTreatmentsGetInstanceIncludeEnum];
