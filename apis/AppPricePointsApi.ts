
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
  AppPricePointV3Response,
  AppPricePointsV3Response,
  ErrorResponse,
} from '../models/index';
import {
    AppPricePointV3ResponseFromJSON,
    AppPricePointV3ResponseToJSON,
    AppPricePointsV3ResponseFromJSON,
    AppPricePointsV3ResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface AppPricePointsV3EqualizationsGetToManyRelatedRequest {
    id: string;
    filterTerritory?: Array<string>;
    fieldsAppPricePoints?: Array<AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppPricePointsEnum>;
    fieldsApps?: Array<AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppsEnum>;
    fieldsTerritories?: Array<AppPricePointsV3EqualizationsGetToManyRelatedFieldsTerritoriesEnum>;
    limit?: number;
    include?: Array<AppPricePointsV3EqualizationsGetToManyRelatedIncludeEnum>;
}

export interface AppPricePointsV3GetInstanceRequest {
    id: string;
    fieldsAppPricePoints?: Array<AppPricePointsV3GetInstanceFieldsAppPricePointsEnum>;
    include?: Array<AppPricePointsV3GetInstanceIncludeEnum>;
}

/**
 * 
 */
export class AppPricePointsApi extends runtime.BaseAPI {

    /**
     */
    async appPricePointsV3EqualizationsGetToManyRelatedRaw(requestParameters: AppPricePointsV3EqualizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPricePointsV3Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appPricePointsV3EqualizationsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filterTerritory'] != null) {
            queryParameters['filter[territory]'] = requestParameters['filterTerritory']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsAppPricePoints'] != null) {
            queryParameters['fields[appPricePoints]'] = requestParameters['fieldsAppPricePoints']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsApps'] != null) {
            queryParameters['fields[apps]'] = requestParameters['fieldsApps']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsTerritories'] != null) {
            queryParameters['fields[territories]'] = requestParameters['fieldsTerritories']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v3/appPricePoints/{id}/equalizations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppPricePointsV3ResponseFromJSON(jsonValue));
    }

    /**
     */
    async appPricePointsV3EqualizationsGetToManyRelated(requestParameters: AppPricePointsV3EqualizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPricePointsV3Response> {
        const response = await this.appPricePointsV3EqualizationsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appPricePointsV3GetInstanceRaw(requestParameters: AppPricePointsV3GetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppPricePointV3Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling appPricePointsV3GetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsAppPricePoints'] != null) {
            queryParameters['fields[appPricePoints]'] = requestParameters['fieldsAppPricePoints']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v3/appPricePoints/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppPricePointV3ResponseFromJSON(jsonValue));
    }

    /**
     */
    async appPricePointsV3GetInstance(requestParameters: AppPricePointsV3GetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppPricePointV3Response> {
        const response = await this.appPricePointsV3GetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppPricePointsEnum = {
    CustomerPrice: 'customerPrice',
    Proceeds: 'proceeds',
    App: 'app',
    Equalizations: 'equalizations',
    Territory: 'territory'
} as const;
export type AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppPricePointsEnum = typeof AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppPricePointsEnum[keyof typeof AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppPricePointsEnum];
/**
 * @export
 */
export const AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppsEnum = {
    Name: 'name',
    BundleId: 'bundleId',
    Sku: 'sku',
    PrimaryLocale: 'primaryLocale',
    IsOrEverWasMadeForKids: 'isOrEverWasMadeForKids',
    SubscriptionStatusUrl: 'subscriptionStatusUrl',
    SubscriptionStatusUrlVersion: 'subscriptionStatusUrlVersion',
    SubscriptionStatusUrlForSandbox: 'subscriptionStatusUrlForSandbox',
    SubscriptionStatusUrlVersionForSandbox: 'subscriptionStatusUrlVersionForSandbox',
    ContentRightsDeclaration: 'contentRightsDeclaration',
    StreamlinedPurchasingEnabled: 'streamlinedPurchasingEnabled',
    AppEncryptionDeclarations: 'appEncryptionDeclarations',
    CiProduct: 'ciProduct',
    BetaTesters: 'betaTesters',
    BetaGroups: 'betaGroups',
    AppStoreVersions: 'appStoreVersions',
    PreReleaseVersions: 'preReleaseVersions',
    BetaAppLocalizations: 'betaAppLocalizations',
    Builds: 'builds',
    BetaLicenseAgreement: 'betaLicenseAgreement',
    BetaAppReviewDetail: 'betaAppReviewDetail',
    AppInfos: 'appInfos',
    AppClips: 'appClips',
    AppPricePoints: 'appPricePoints',
    EndUserLicenseAgreement: 'endUserLicenseAgreement',
    AppPriceSchedule: 'appPriceSchedule',
    AppAvailabilityV2: 'appAvailabilityV2',
    InAppPurchases: 'inAppPurchases',
    SubscriptionGroups: 'subscriptionGroups',
    GameCenterEnabledVersions: 'gameCenterEnabledVersions',
    PerfPowerMetrics: 'perfPowerMetrics',
    AppCustomProductPages: 'appCustomProductPages',
    InAppPurchasesV2: 'inAppPurchasesV2',
    PromotedPurchases: 'promotedPurchases',
    AppEvents: 'appEvents',
    ReviewSubmissions: 'reviewSubmissions',
    SubscriptionGracePeriod: 'subscriptionGracePeriod',
    CustomerReviews: 'customerReviews',
    GameCenterDetail: 'gameCenterDetail',
    AppStoreVersionExperimentsV2: 'appStoreVersionExperimentsV2',
    AlternativeDistributionKey: 'alternativeDistributionKey',
    AnalyticsReportRequests: 'analyticsReportRequests',
    MarketplaceSearchDetail: 'marketplaceSearchDetail'
} as const;
export type AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppsEnum = typeof AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppsEnum[keyof typeof AppPricePointsV3EqualizationsGetToManyRelatedFieldsAppsEnum];
/**
 * @export
 */
export const AppPricePointsV3EqualizationsGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type AppPricePointsV3EqualizationsGetToManyRelatedFieldsTerritoriesEnum = typeof AppPricePointsV3EqualizationsGetToManyRelatedFieldsTerritoriesEnum[keyof typeof AppPricePointsV3EqualizationsGetToManyRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export const AppPricePointsV3EqualizationsGetToManyRelatedIncludeEnum = {
    App: 'app',
    Territory: 'territory'
} as const;
export type AppPricePointsV3EqualizationsGetToManyRelatedIncludeEnum = typeof AppPricePointsV3EqualizationsGetToManyRelatedIncludeEnum[keyof typeof AppPricePointsV3EqualizationsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const AppPricePointsV3GetInstanceFieldsAppPricePointsEnum = {
    CustomerPrice: 'customerPrice',
    Proceeds: 'proceeds',
    App: 'app',
    Equalizations: 'equalizations',
    Territory: 'territory'
} as const;
export type AppPricePointsV3GetInstanceFieldsAppPricePointsEnum = typeof AppPricePointsV3GetInstanceFieldsAppPricePointsEnum[keyof typeof AppPricePointsV3GetInstanceFieldsAppPricePointsEnum];
/**
 * @export
 */
export const AppPricePointsV3GetInstanceIncludeEnum = {
    App: 'app',
    Territory: 'territory'
} as const;
export type AppPricePointsV3GetInstanceIncludeEnum = typeof AppPricePointsV3GetInstanceIncludeEnum[keyof typeof AppPricePointsV3GetInstanceIncludeEnum];
