
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
  AppPreviewSetsResponse,
  AppScreenshotSetsResponse,
  AppStoreVersionExperimentTreatmentLocalizationCreateRequest,
  AppStoreVersionExperimentTreatmentLocalizationResponse,
  ErrorResponse,
} from '../models/index';
import {
    AppPreviewSetsResponseFromJSON,
    AppPreviewSetsResponseToJSON,
    AppScreenshotSetsResponseFromJSON,
    AppScreenshotSetsResponseToJSON,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationCreateRequestToJSON,
    AppStoreVersionExperimentTreatmentLocalizationResponseFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedRequest {
    id: string;
    filterPreviewType?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum>;
    filterAppStoreVersionLocalization?: Array<string>;
    filterAppCustomProductPageLocalization?: Array<string>;
    fieldsAppPreviewSets?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum>;
    fieldsAppStoreVersionLocalizations?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum>;
    fieldsAppCustomProductPageLocalizations?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    fieldsAppPreviews?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum>;
    limit?: number;
    include?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum>;
    limitAppPreviews?: number;
}

export interface AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedRequest {
    id: string;
    filterScreenshotDisplayType?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum>;
    filterAppStoreVersionLocalization?: Array<string>;
    filterAppCustomProductPageLocalization?: Array<string>;
    fieldsAppScreenshotSets?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum>;
    fieldsAppStoreVersionLocalizations?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum>;
    fieldsAppCustomProductPageLocalizations?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    fieldsAppScreenshots?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum>;
    limit?: number;
    include?: Array<AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum>;
    limitAppScreenshots?: number;
}

export interface AppStoreVersionExperimentTreatmentLocalizationsCreateInstanceRequest {
    appStoreVersionExperimentTreatmentLocalizationCreateRequest: AppStoreVersionExperimentTreatmentLocalizationCreateRequest;
}

export interface AppStoreVersionExperimentTreatmentLocalizationsDeleteInstanceRequest {
    id: string;
}

export interface AppStoreVersionExperimentTreatmentLocalizationsGetInstanceRequest {
    id: string;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    fieldsAppScreenshotSets?: Array<AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppScreenshotSetsEnum>;
    fieldsAppPreviewSets?: Array<AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppPreviewSetsEnum>;
    include?: Array<AppStoreVersionExperimentTreatmentLocalizationsGetInstanceIncludeEnum>;
    limitAppPreviewSets?: number;
    limitAppScreenshotSets?: number;
}

/**
 * 
 */
export class AppStoreVersionExperimentTreatmentLocalizationsApi extends runtime.BaseAPI {

    /**
     */
    async appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedRaw(requestParameters: AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPreviewSetsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filterPreviewType'] != null) {
            queryParameters['filter[previewType]'] = requestParameters['filterPreviewType']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterAppStoreVersionLocalization'] != null) {
            queryParameters['filter[appStoreVersionLocalization]'] = requestParameters['filterAppStoreVersionLocalization']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterAppCustomProductPageLocalization'] != null) {
            queryParameters['filter[appCustomProductPageLocalization]'] = requestParameters['filterAppCustomProductPageLocalization']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppPreviewSets'] != null) {
            queryParameters['fields[appPreviewSets]'] = requestParameters['fieldsAppPreviewSets']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppStoreVersionLocalizations'] != null) {
            queryParameters['fields[appStoreVersionLocalizations]'] = requestParameters['fieldsAppStoreVersionLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppCustomProductPageLocalizations'] != null) {
            queryParameters['fields[appCustomProductPageLocalizations]'] = requestParameters['fieldsAppCustomProductPageLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppStoreVersionExperimentTreatmentLocalizations'] != null) {
            queryParameters['fields[appStoreVersionExperimentTreatmentLocalizations]'] = requestParameters['fieldsAppStoreVersionExperimentTreatmentLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppPreviews'] != null) {
            queryParameters['fields[appPreviews]'] = requestParameters['fieldsAppPreviews']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limitAppPreviews'] != null) {
            queryParameters['limit[appPreviews]'] = requestParameters['limitAppPreviews'];
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
            path: `/v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appPreviewSets`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppPreviewSetsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelated(requestParameters: AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPreviewSetsResponse> {
        const response = await this.appStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedRaw(requestParameters: AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotSetsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filterScreenshotDisplayType'] != null) {
            queryParameters['filter[screenshotDisplayType]'] = requestParameters['filterScreenshotDisplayType']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterAppStoreVersionLocalization'] != null) {
            queryParameters['filter[appStoreVersionLocalization]'] = requestParameters['filterAppStoreVersionLocalization']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterAppCustomProductPageLocalization'] != null) {
            queryParameters['filter[appCustomProductPageLocalization]'] = requestParameters['filterAppCustomProductPageLocalization']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppScreenshotSets'] != null) {
            queryParameters['fields[appScreenshotSets]'] = requestParameters['fieldsAppScreenshotSets']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppStoreVersionLocalizations'] != null) {
            queryParameters['fields[appStoreVersionLocalizations]'] = requestParameters['fieldsAppStoreVersionLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppCustomProductPageLocalizations'] != null) {
            queryParameters['fields[appCustomProductPageLocalizations]'] = requestParameters['fieldsAppCustomProductPageLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppStoreVersionExperimentTreatmentLocalizations'] != null) {
            queryParameters['fields[appStoreVersionExperimentTreatmentLocalizations]'] = requestParameters['fieldsAppStoreVersionExperimentTreatmentLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppScreenshots'] != null) {
            queryParameters['fields[appScreenshots]'] = requestParameters['fieldsAppScreenshots']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limitAppScreenshots'] != null) {
            queryParameters['limit[appScreenshots]'] = requestParameters['limitAppScreenshots'];
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
            path: `/v1/appStoreVersionExperimentTreatmentLocalizations/{id}/appScreenshotSets`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppScreenshotSetsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelated(requestParameters: AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotSetsResponse> {
        const response = await this.appStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreVersionExperimentTreatmentLocalizationsCreateInstanceRaw(requestParameters: AppStoreVersionExperimentTreatmentLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionExperimentTreatmentLocalizationResponse>> {
        if (requestParameters['appStoreVersionExperimentTreatmentLocalizationCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'appStoreVersionExperimentTreatmentLocalizationCreateRequest',
                'Required parameter "appStoreVersionExperimentTreatmentLocalizationCreateRequest" was null or undefined when calling appStoreVersionExperimentTreatmentLocalizationsCreateInstance().'
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
            path: `/v1/appStoreVersionExperimentTreatmentLocalizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreVersionExperimentTreatmentLocalizationCreateRequestToJSON(requestParameters['appStoreVersionExperimentTreatmentLocalizationCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionExperimentTreatmentLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionExperimentTreatmentLocalizationsCreateInstance(requestParameters: AppStoreVersionExperimentTreatmentLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionExperimentTreatmentLocalizationResponse> {
        const response = await this.appStoreVersionExperimentTreatmentLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreVersionExperimentTreatmentLocalizationsDeleteInstanceRaw(requestParameters: AppStoreVersionExperimentTreatmentLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionExperimentTreatmentLocalizationsDeleteInstance().'
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
            path: `/v1/appStoreVersionExperimentTreatmentLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appStoreVersionExperimentTreatmentLocalizationsDeleteInstance(requestParameters: AppStoreVersionExperimentTreatmentLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appStoreVersionExperimentTreatmentLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appStoreVersionExperimentTreatmentLocalizationsGetInstanceRaw(requestParameters: AppStoreVersionExperimentTreatmentLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionExperimentTreatmentLocalizationResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionExperimentTreatmentLocalizationsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppStoreVersionExperimentTreatmentLocalizations'] != null) {
            queryParameters['fields[appStoreVersionExperimentTreatmentLocalizations]'] = requestParameters['fieldsAppStoreVersionExperimentTreatmentLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppScreenshotSets'] != null) {
            queryParameters['fields[appScreenshotSets]'] = requestParameters['fieldsAppScreenshotSets']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppPreviewSets'] != null) {
            queryParameters['fields[appPreviewSets]'] = requestParameters['fieldsAppPreviewSets']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limitAppPreviewSets'] != null) {
            queryParameters['limit[appPreviewSets]'] = requestParameters['limitAppPreviewSets'];
        }

        if (requestParameters['limitAppScreenshotSets'] != null) {
            queryParameters['limit[appScreenshotSets]'] = requestParameters['limitAppScreenshotSets'];
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
            path: `/v1/appStoreVersionExperimentTreatmentLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionExperimentTreatmentLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionExperimentTreatmentLocalizationsGetInstance(requestParameters: AppStoreVersionExperimentTreatmentLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionExperimentTreatmentLocalizationResponse> {
        const response = await this.appStoreVersionExperimentTreatmentLocalizationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum = {
    Iphone67: 'IPHONE_67',
    Iphone61: 'IPHONE_61',
    Iphone65: 'IPHONE_65',
    Iphone58: 'IPHONE_58',
    Iphone55: 'IPHONE_55',
    Iphone47: 'IPHONE_47',
    Iphone40: 'IPHONE_40',
    Iphone35: 'IPHONE_35',
    IpadPro3Gen129: 'IPAD_PRO_3GEN_129',
    IpadPro3Gen11: 'IPAD_PRO_3GEN_11',
    IpadPro129: 'IPAD_PRO_129',
    Ipad105: 'IPAD_105',
    Ipad97: 'IPAD_97',
    Desktop: 'DESKTOP',
    AppleTv: 'APPLE_TV',
    AppleVisionPro: 'APPLE_VISION_PRO'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum = {
    PreviewType: 'previewType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppPreviews: 'appPreviews'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = {
    Description: 'description',
    Locale: 'locale',
    Keywords: 'keywords',
    MarketingUrl: 'marketingUrl',
    PromotionalText: 'promotionalText',
    SupportUrl: 'supportUrl',
    WhatsNew: 'whatsNew',
    AppStoreVersion: 'appStoreVersion',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = {
    Locale: 'locale',
    PromotionalText: 'promotionalText',
    AppCustomProductPageVersion: 'appCustomProductPageVersion',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = {
    Locale: 'locale',
    AppStoreVersionExperimentTreatment: 'appStoreVersionExperimentTreatment',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    SourceFileChecksum: 'sourceFileChecksum',
    PreviewFrameTimeCode: 'previewFrameTimeCode',
    MimeType: 'mimeType',
    VideoUrl: 'videoUrl',
    PreviewFrameImage: 'previewFrameImage',
    PreviewImage: 'previewImage',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    VideoDeliveryState: 'videoDeliveryState',
    AppPreviewSet: 'appPreviewSet'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum = {
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppPreviews: 'appPreviews'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum = {
    AppIphone67: 'APP_IPHONE_67',
    AppIphone61: 'APP_IPHONE_61',
    AppIphone65: 'APP_IPHONE_65',
    AppIphone58: 'APP_IPHONE_58',
    AppIphone55: 'APP_IPHONE_55',
    AppIphone47: 'APP_IPHONE_47',
    AppIphone40: 'APP_IPHONE_40',
    AppIphone35: 'APP_IPHONE_35',
    AppIpadPro3Gen129: 'APP_IPAD_PRO_3GEN_129',
    AppIpadPro3Gen11: 'APP_IPAD_PRO_3GEN_11',
    AppIpadPro129: 'APP_IPAD_PRO_129',
    AppIpad105: 'APP_IPAD_105',
    AppIpad97: 'APP_IPAD_97',
    AppDesktop: 'APP_DESKTOP',
    AppWatchUltra: 'APP_WATCH_ULTRA',
    AppWatchSeries10: 'APP_WATCH_SERIES_10',
    AppWatchSeries7: 'APP_WATCH_SERIES_7',
    AppWatchSeries4: 'APP_WATCH_SERIES_4',
    AppWatchSeries3: 'APP_WATCH_SERIES_3',
    AppAppleTv: 'APP_APPLE_TV',
    AppAppleVisionPro: 'APP_APPLE_VISION_PRO',
    ImessageAppIphone67: 'IMESSAGE_APP_IPHONE_67',
    ImessageAppIphone61: 'IMESSAGE_APP_IPHONE_61',
    ImessageAppIphone65: 'IMESSAGE_APP_IPHONE_65',
    ImessageAppIphone58: 'IMESSAGE_APP_IPHONE_58',
    ImessageAppIphone55: 'IMESSAGE_APP_IPHONE_55',
    ImessageAppIphone47: 'IMESSAGE_APP_IPHONE_47',
    ImessageAppIphone40: 'IMESSAGE_APP_IPHONE_40',
    ImessageAppIpadPro3Gen129: 'IMESSAGE_APP_IPAD_PRO_3GEN_129',
    ImessageAppIpadPro3Gen11: 'IMESSAGE_APP_IPAD_PRO_3GEN_11',
    ImessageAppIpadPro129: 'IMESSAGE_APP_IPAD_PRO_129',
    ImessageAppIpad105: 'IMESSAGE_APP_IPAD_105',
    ImessageAppIpad97: 'IMESSAGE_APP_IPAD_97'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum = {
    ScreenshotDisplayType: 'screenshotDisplayType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppScreenshots: 'appScreenshots'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = {
    Description: 'description',
    Locale: 'locale',
    Keywords: 'keywords',
    MarketingUrl: 'marketingUrl',
    PromotionalText: 'promotionalText',
    SupportUrl: 'supportUrl',
    WhatsNew: 'whatsNew',
    AppStoreVersion: 'appStoreVersion',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = {
    Locale: 'locale',
    PromotionalText: 'promotionalText',
    AppCustomProductPageVersion: 'appCustomProductPageVersion',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = {
    Locale: 'locale',
    AppStoreVersionExperimentTreatment: 'appStoreVersionExperimentTreatment',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum = {
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
export type AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum = {
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppScreenshots: 'appScreenshots'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = {
    Locale: 'locale',
    AppStoreVersionExperimentTreatment: 'appStoreVersionExperimentTreatment',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppScreenshotSetsEnum = {
    ScreenshotDisplayType: 'screenshotDisplayType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppScreenshots: 'appScreenshots'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppScreenshotSetsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppScreenshotSetsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppPreviewSetsEnum = {
    PreviewType: 'previewType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppPreviews: 'appPreviews'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppPreviewSetsEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppPreviewSetsEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsGetInstanceFieldsAppPreviewSetsEnum];
/**
 * @export
 */
export const AppStoreVersionExperimentTreatmentLocalizationsGetInstanceIncludeEnum = {
    AppStoreVersionExperimentTreatment: 'appStoreVersionExperimentTreatment',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionExperimentTreatmentLocalizationsGetInstanceIncludeEnum = typeof AppStoreVersionExperimentTreatmentLocalizationsGetInstanceIncludeEnum[keyof typeof AppStoreVersionExperimentTreatmentLocalizationsGetInstanceIncludeEnum];
