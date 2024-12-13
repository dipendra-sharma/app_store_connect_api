
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
  SubscriptionPricePointResponse,
  SubscriptionPricePointsResponse,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    SubscriptionPricePointResponseFromJSON,
    SubscriptionPricePointResponseToJSON,
    SubscriptionPricePointsResponseFromJSON,
    SubscriptionPricePointsResponseToJSON,
} from '../models/index';

export interface SubscriptionPricePointsEqualizationsGetToManyRelatedRequest {
    id: string;
    filterTerritory?: Array<string>;
    filterSubscription?: Array<string>;
    fieldsSubscriptionPricePoints?: Array<SubscriptionPricePointsEqualizationsGetToManyRelatedFieldsSubscriptionPricePointsEnum>;
    fieldsTerritories?: Array<SubscriptionPricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum>;
    limit?: number;
    include?: Array<SubscriptionPricePointsEqualizationsGetToManyRelatedIncludeEnum>;
}

export interface SubscriptionPricePointsGetInstanceRequest {
    id: string;
    fieldsSubscriptionPricePoints?: Array<SubscriptionPricePointsGetInstanceFieldsSubscriptionPricePointsEnum>;
    include?: Array<SubscriptionPricePointsGetInstanceIncludeEnum>;
}

/**
 * 
 */
export class SubscriptionPricePointsApi extends runtime.BaseAPI {

    /**
     */
    async subscriptionPricePointsEqualizationsGetToManyRelatedRaw(requestParameters: SubscriptionPricePointsEqualizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPricePointsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling subscriptionPricePointsEqualizationsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['filterTerritory'] != null) {
            queryParameters['filter[territory]'] = requestParameters['filterTerritory']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterSubscription'] != null) {
            queryParameters['filter[subscription]'] = requestParameters['filterSubscription']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsSubscriptionPricePoints'] != null) {
            queryParameters['fields[subscriptionPricePoints]'] = requestParameters['fieldsSubscriptionPricePoints']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/subscriptionPricePoints/{id}/equalizations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionPricePointsResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionPricePointsEqualizationsGetToManyRelated(requestParameters: SubscriptionPricePointsEqualizationsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPricePointsResponse> {
        const response = await this.subscriptionPricePointsEqualizationsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionPricePointsGetInstanceRaw(requestParameters: SubscriptionPricePointsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionPricePointResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling subscriptionPricePointsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsSubscriptionPricePoints'] != null) {
            queryParameters['fields[subscriptionPricePoints]'] = requestParameters['fieldsSubscriptionPricePoints']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/subscriptionPricePoints/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionPricePointResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionPricePointsGetInstance(requestParameters: SubscriptionPricePointsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionPricePointResponse> {
        const response = await this.subscriptionPricePointsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SubscriptionPricePointsEqualizationsGetToManyRelatedFieldsSubscriptionPricePointsEnum = {
    CustomerPrice: 'customerPrice',
    Proceeds: 'proceeds',
    ProceedsYear2: 'proceedsYear2',
    Territory: 'territory',
    Equalizations: 'equalizations'
} as const;
export type SubscriptionPricePointsEqualizationsGetToManyRelatedFieldsSubscriptionPricePointsEnum = typeof SubscriptionPricePointsEqualizationsGetToManyRelatedFieldsSubscriptionPricePointsEnum[keyof typeof SubscriptionPricePointsEqualizationsGetToManyRelatedFieldsSubscriptionPricePointsEnum];
/**
 * @export
 */
export const SubscriptionPricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type SubscriptionPricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum = typeof SubscriptionPricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum[keyof typeof SubscriptionPricePointsEqualizationsGetToManyRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export const SubscriptionPricePointsEqualizationsGetToManyRelatedIncludeEnum = {
    Territory: 'territory'
} as const;
export type SubscriptionPricePointsEqualizationsGetToManyRelatedIncludeEnum = typeof SubscriptionPricePointsEqualizationsGetToManyRelatedIncludeEnum[keyof typeof SubscriptionPricePointsEqualizationsGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const SubscriptionPricePointsGetInstanceFieldsSubscriptionPricePointsEnum = {
    CustomerPrice: 'customerPrice',
    Proceeds: 'proceeds',
    ProceedsYear2: 'proceedsYear2',
    Territory: 'territory',
    Equalizations: 'equalizations'
} as const;
export type SubscriptionPricePointsGetInstanceFieldsSubscriptionPricePointsEnum = typeof SubscriptionPricePointsGetInstanceFieldsSubscriptionPricePointsEnum[keyof typeof SubscriptionPricePointsGetInstanceFieldsSubscriptionPricePointsEnum];
/**
 * @export
 */
export const SubscriptionPricePointsGetInstanceIncludeEnum = {
    Territory: 'territory'
} as const;
export type SubscriptionPricePointsGetInstanceIncludeEnum = typeof SubscriptionPricePointsGetInstanceIncludeEnum[keyof typeof SubscriptionPricePointsGetInstanceIncludeEnum];