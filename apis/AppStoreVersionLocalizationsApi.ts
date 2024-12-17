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
  AppStoreVersionLocalizationCreateRequest,
  AppStoreVersionLocalizationResponse,
  AppStoreVersionLocalizationUpdateRequest,
  ErrorResponse,
} from '../models/index';
import {
    AppPreviewSetsResponseFromJSON,
    AppPreviewSetsResponseToJSON,
    AppScreenshotSetsResponseFromJSON,
    AppScreenshotSetsResponseToJSON,
    AppStoreVersionLocalizationCreateRequestFromJSON,
    AppStoreVersionLocalizationCreateRequestToJSON,
    AppStoreVersionLocalizationResponseFromJSON,
    AppStoreVersionLocalizationResponseToJSON,
    AppStoreVersionLocalizationUpdateRequestFromJSON,
    AppStoreVersionLocalizationUpdateRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedRequest {
    id: string;
    filterPreviewType?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum>;
    filterAppCustomProductPageLocalization?: Array<string>;
    filterAppStoreVersionExperimentTreatmentLocalization?: Array<string>;
    fieldsAppPreviewSets?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum>;
    fieldsAppStoreVersionLocalizations?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum>;
    fieldsAppCustomProductPageLocalizations?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    fieldsAppPreviews?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum>;
    limit?: number;
    include?: Array<AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum>;
    limitAppPreviews?: number;
}

export interface AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedRequest {
    id: string;
    filterScreenshotDisplayType?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum>;
    filterAppCustomProductPageLocalization?: Array<string>;
    filterAppStoreVersionExperimentTreatmentLocalization?: Array<string>;
    fieldsAppScreenshotSets?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum>;
    fieldsAppStoreVersionLocalizations?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum>;
    fieldsAppCustomProductPageLocalizations?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum>;
    fieldsAppStoreVersionExperimentTreatmentLocalizations?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum>;
    fieldsAppScreenshots?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum>;
    limit?: number;
    include?: Array<AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum>;
    limitAppScreenshots?: number;
}

export interface AppStoreVersionLocalizationsCreateInstanceRequest {
    appStoreVersionLocalizationCreateRequest: AppStoreVersionLocalizationCreateRequest;
}

export interface AppStoreVersionLocalizationsDeleteInstanceRequest {
    id: string;
}

export interface AppStoreVersionLocalizationsGetInstanceRequest {
    id: string;
    fieldsAppStoreVersionLocalizations?: Array<AppStoreVersionLocalizationsGetInstanceFieldsAppStoreVersionLocalizationsEnum>;
    fieldsAppScreenshotSets?: Array<AppStoreVersionLocalizationsGetInstanceFieldsAppScreenshotSetsEnum>;
    fieldsAppPreviewSets?: Array<AppStoreVersionLocalizationsGetInstanceFieldsAppPreviewSetsEnum>;
    include?: Array<AppStoreVersionLocalizationsGetInstanceIncludeEnum>;
    limitAppPreviewSets?: number;
    limitAppScreenshotSets?: number;
}

export interface AppStoreVersionLocalizationsUpdateInstanceRequest {
    id: string;
    appStoreVersionLocalizationUpdateRequest: AppStoreVersionLocalizationUpdateRequest;
}

/**
 * 
 */
export class AppStoreVersionLocalizationsApi extends runtime.BaseAPI {

    /**
     */
    async appStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedRaw(requestParameters: AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPreviewSetsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filterPreviewType'] != null) {
            queryParameters['filter[previewType]'] = requestParameters['filterPreviewType']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterAppCustomProductPageLocalization'] != null) {
            queryParameters['filter[appCustomProductPageLocalization]'] = requestParameters['filterAppCustomProductPageLocalization']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterAppStoreVersionExperimentTreatmentLocalization'] != null) {
            queryParameters['filter[appStoreVersionExperimentTreatmentLocalization]'] = requestParameters['filterAppStoreVersionExperimentTreatmentLocalization']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appStoreVersionLocalizations/{id}/appPreviewSets`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppPreviewSetsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionLocalizationsAppPreviewSetsGetToManyRelated(requestParameters: AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPreviewSetsResponse> {
        const response = await this.appStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedRaw(requestParameters: AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppScreenshotSetsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filterScreenshotDisplayType'] != null) {
            queryParameters['filter[screenshotDisplayType]'] = requestParameters['filterScreenshotDisplayType']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterAppCustomProductPageLocalization'] != null) {
            queryParameters['filter[appCustomProductPageLocalization]'] = requestParameters['filterAppCustomProductPageLocalization']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterAppStoreVersionExperimentTreatmentLocalization'] != null) {
            queryParameters['filter[appStoreVersionExperimentTreatmentLocalization]'] = requestParameters['filterAppStoreVersionExperimentTreatmentLocalization']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appStoreVersionLocalizations/{id}/appScreenshotSets`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppScreenshotSetsResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelated(requestParameters: AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppScreenshotSetsResponse> {
        const response = await this.appStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreVersionLocalizationsCreateInstanceRaw(requestParameters: AppStoreVersionLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionLocalizationResponse>> {
        if (requestParameters['appStoreVersionLocalizationCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'appStoreVersionLocalizationCreateRequest',
                'Required parameter "appStoreVersionLocalizationCreateRequest" was null or undefined when calling appStoreVersionLocalizationsCreateInstance().'
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
            path: `/v1/appStoreVersionLocalizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreVersionLocalizationCreateRequestToJSON(requestParameters['appStoreVersionLocalizationCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionLocalizationsCreateInstance(requestParameters: AppStoreVersionLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionLocalizationResponse> {
        const response = await this.appStoreVersionLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreVersionLocalizationsDeleteInstanceRaw(requestParameters: AppStoreVersionLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionLocalizationsDeleteInstance().'
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
            path: `/v1/appStoreVersionLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appStoreVersionLocalizationsDeleteInstance(requestParameters: AppStoreVersionLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appStoreVersionLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appStoreVersionLocalizationsGetInstanceRaw(requestParameters: AppStoreVersionLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionLocalizationResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionLocalizationsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppStoreVersionLocalizations'] != null) {
            queryParameters['fields[appStoreVersionLocalizations]'] = requestParameters['fieldsAppStoreVersionLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appStoreVersionLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionLocalizationsGetInstance(requestParameters: AppStoreVersionLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionLocalizationResponse> {
        const response = await this.appStoreVersionLocalizationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appStoreVersionLocalizationsUpdateInstanceRaw(requestParameters: AppStoreVersionLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppStoreVersionLocalizationResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appStoreVersionLocalizationsUpdateInstance().'
            );
        }

        if (requestParameters['appStoreVersionLocalizationUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'appStoreVersionLocalizationUpdateRequest',
                'Required parameter "appStoreVersionLocalizationUpdateRequest" was null or undefined when calling appStoreVersionLocalizationsUpdateInstance().'
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
            path: `/v1/appStoreVersionLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppStoreVersionLocalizationUpdateRequestToJSON(requestParameters['appStoreVersionLocalizationUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppStoreVersionLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async appStoreVersionLocalizationsUpdateInstance(requestParameters: AppStoreVersionLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppStoreVersionLocalizationResponse> {
        const response = await this.appStoreVersionLocalizationsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum = {
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
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum = typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum[keyof typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFilterPreviewTypeEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum = {
    PreviewType: 'previewType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppPreviews: 'appPreviews'
} as const;
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum = typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum[keyof typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewSetsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = {
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
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum[keyof typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = {
    Locale: 'locale',
    PromotionalText: 'promotionalText',
    AppCustomProductPageVersion: 'appCustomProductPageVersion',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum[keyof typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = {
    Locale: 'locale',
    AppStoreVersionExperimentTreatment: 'appStoreVersionExperimentTreatment',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum[keyof typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum = {
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
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum = typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum[keyof typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedFieldsAppPreviewsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum = {
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppPreviews: 'appPreviews'
} as const;
export type AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum = typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum[keyof typeof AppStoreVersionLocalizationsAppPreviewSetsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum = {
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
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum = typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum[keyof typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFilterScreenshotDisplayTypeEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum = {
    ScreenshotDisplayType: 'screenshotDisplayType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppScreenshots: 'appScreenshots'
} as const;
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum = typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum[keyof typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = {
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
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum = typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum[keyof typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = {
    Locale: 'locale',
    PromotionalText: 'promotionalText',
    AppCustomProductPageVersion: 'appCustomProductPageVersion',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum = typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum[keyof typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppCustomProductPageLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = {
    Locale: 'locale',
    AppStoreVersionExperimentTreatment: 'appStoreVersionExperimentTreatment',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum = typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum[keyof typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppStoreVersionExperimentTreatmentLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum = {
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
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum = typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum[keyof typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedFieldsAppScreenshotsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum = {
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppScreenshots: 'appScreenshots'
} as const;
export type AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum = typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum[keyof typeof AppStoreVersionLocalizationsAppScreenshotSetsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsGetInstanceFieldsAppStoreVersionLocalizationsEnum = {
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
export type AppStoreVersionLocalizationsGetInstanceFieldsAppStoreVersionLocalizationsEnum = typeof AppStoreVersionLocalizationsGetInstanceFieldsAppStoreVersionLocalizationsEnum[keyof typeof AppStoreVersionLocalizationsGetInstanceFieldsAppStoreVersionLocalizationsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsGetInstanceFieldsAppScreenshotSetsEnum = {
    ScreenshotDisplayType: 'screenshotDisplayType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppScreenshots: 'appScreenshots'
} as const;
export type AppStoreVersionLocalizationsGetInstanceFieldsAppScreenshotSetsEnum = typeof AppStoreVersionLocalizationsGetInstanceFieldsAppScreenshotSetsEnum[keyof typeof AppStoreVersionLocalizationsGetInstanceFieldsAppScreenshotSetsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsGetInstanceFieldsAppPreviewSetsEnum = {
    PreviewType: 'previewType',
    AppStoreVersionLocalization: 'appStoreVersionLocalization',
    AppCustomProductPageLocalization: 'appCustomProductPageLocalization',
    AppStoreVersionExperimentTreatmentLocalization: 'appStoreVersionExperimentTreatmentLocalization',
    AppPreviews: 'appPreviews'
} as const;
export type AppStoreVersionLocalizationsGetInstanceFieldsAppPreviewSetsEnum = typeof AppStoreVersionLocalizationsGetInstanceFieldsAppPreviewSetsEnum[keyof typeof AppStoreVersionLocalizationsGetInstanceFieldsAppPreviewSetsEnum];
/**
 * @export
 */
export const AppStoreVersionLocalizationsGetInstanceIncludeEnum = {
    AppStoreVersion: 'appStoreVersion',
    AppScreenshotSets: 'appScreenshotSets',
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppStoreVersionLocalizationsGetInstanceIncludeEnum = typeof AppStoreVersionLocalizationsGetInstanceIncludeEnum[keyof typeof AppStoreVersionLocalizationsGetInstanceIncludeEnum];
