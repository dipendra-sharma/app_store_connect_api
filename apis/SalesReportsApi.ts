
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
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface SalesReportsGetCollectionRequest {
    filterVendorNumber: Array<string>;
    filterReportType: Array<SalesReportsGetCollectionFilterReportTypeEnum>;
    filterReportSubType: Array<SalesReportsGetCollectionFilterReportSubTypeEnum>;
    filterFrequency: Array<SalesReportsGetCollectionFilterFrequencyEnum>;
    filterReportDate?: Array<string>;
    filterVersion?: Array<string>;
}

/**
 * 
 */
export class SalesReportsApi extends runtime.BaseAPI {

    /**
     */
    async salesReportsGetCollectionRaw(requestParameters: SalesReportsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters['filterVendorNumber'] == null) {
            throw new runtime.RequiredError(
                'filterVendorNumber',
                'Required parameter "filterVendorNumber" was null or undefined when calling salesReportsGetCollection().'
            );
        }

        if (requestParameters['filterReportType'] == null) {
            throw new runtime.RequiredError(
                'filterReportType',
                'Required parameter "filterReportType" was null or undefined when calling salesReportsGetCollection().'
            );
        }

        if (requestParameters['filterReportSubType'] == null) {
            throw new runtime.RequiredError(
                'filterReportSubType',
                'Required parameter "filterReportSubType" was null or undefined when calling salesReportsGetCollection().'
            );
        }

        if (requestParameters['filterFrequency'] == null) {
            throw new runtime.RequiredError(
                'filterFrequency',
                'Required parameter "filterFrequency" was null or undefined when calling salesReportsGetCollection().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filterVendorNumber'] != null) {
            queryParameters['filter[vendorNumber]'] = requestParameters['filterVendorNumber']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterReportType'] != null) {
            queryParameters['filter[reportType]'] = requestParameters['filterReportType']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterReportSubType'] != null) {
            queryParameters['filter[reportSubType]'] = requestParameters['filterReportSubType']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterFrequency'] != null) {
            queryParameters['filter[frequency]'] = requestParameters['filterFrequency']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterReportDate'] != null) {
            queryParameters['filter[reportDate]'] = requestParameters['filterReportDate']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterVersion'] != null) {
            queryParameters['filter[version]'] = requestParameters['filterVersion']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/salesReports`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     */
    async salesReportsGetCollection(requestParameters: SalesReportsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.salesReportsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SalesReportsGetCollectionFilterReportTypeEnum = {
    Sales: 'SALES',
    PreOrder: 'PRE_ORDER',
    Newsstand: 'NEWSSTAND',
    Subscription: 'SUBSCRIPTION',
    SubscriptionEvent: 'SUBSCRIPTION_EVENT',
    Subscriber: 'SUBSCRIBER',
    SubscriptionOfferCodeRedemption: 'SUBSCRIPTION_OFFER_CODE_REDEMPTION',
    Installs: 'INSTALLS',
    FirstAnnual: 'FIRST_ANNUAL',
    WinBackEligibility: 'WIN_BACK_ELIGIBILITY'
} as const;
export type SalesReportsGetCollectionFilterReportTypeEnum = typeof SalesReportsGetCollectionFilterReportTypeEnum[keyof typeof SalesReportsGetCollectionFilterReportTypeEnum];
/**
 * @export
 */
export const SalesReportsGetCollectionFilterReportSubTypeEnum = {
    Summary: 'SUMMARY',
    Detailed: 'DETAILED',
    SummaryInstallType: 'SUMMARY_INSTALL_TYPE',
    SummaryTerritory: 'SUMMARY_TERRITORY',
    SummaryChannel: 'SUMMARY_CHANNEL'
} as const;
export type SalesReportsGetCollectionFilterReportSubTypeEnum = typeof SalesReportsGetCollectionFilterReportSubTypeEnum[keyof typeof SalesReportsGetCollectionFilterReportSubTypeEnum];
/**
 * @export
 */
export const SalesReportsGetCollectionFilterFrequencyEnum = {
    Daily: 'DAILY',
    Weekly: 'WEEKLY',
    Monthly: 'MONTHLY',
    Yearly: 'YEARLY'
} as const;
export type SalesReportsGetCollectionFilterFrequencyEnum = typeof SalesReportsGetCollectionFilterFrequencyEnum[keyof typeof SalesReportsGetCollectionFilterFrequencyEnum];
