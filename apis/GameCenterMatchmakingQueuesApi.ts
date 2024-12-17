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
  GameCenterMatchmakingQueueCreateRequest,
  GameCenterMatchmakingQueueRequestsV1MetricResponse,
  GameCenterMatchmakingQueueResponse,
  GameCenterMatchmakingQueueSizesV1MetricResponse,
  GameCenterMatchmakingQueueUpdateRequest,
  GameCenterMatchmakingQueuesResponse,
  GameCenterMatchmakingSessionsV1MetricResponse,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GameCenterMatchmakingQueueCreateRequestFromJSON,
    GameCenterMatchmakingQueueCreateRequestToJSON,
    GameCenterMatchmakingQueueRequestsV1MetricResponseFromJSON,
    GameCenterMatchmakingQueueRequestsV1MetricResponseToJSON,
    GameCenterMatchmakingQueueResponseFromJSON,
    GameCenterMatchmakingQueueResponseToJSON,
    GameCenterMatchmakingQueueSizesV1MetricResponseFromJSON,
    GameCenterMatchmakingQueueSizesV1MetricResponseToJSON,
    GameCenterMatchmakingQueueUpdateRequestFromJSON,
    GameCenterMatchmakingQueueUpdateRequestToJSON,
    GameCenterMatchmakingQueuesResponseFromJSON,
    GameCenterMatchmakingQueuesResponseToJSON,
    GameCenterMatchmakingSessionsV1MetricResponseFromJSON,
    GameCenterMatchmakingSessionsV1MetricResponseToJSON,
} from '../models/index';

export interface GameCenterMatchmakingQueuesCreateInstanceRequest {
    gameCenterMatchmakingQueueCreateRequest: GameCenterMatchmakingQueueCreateRequest;
}

export interface GameCenterMatchmakingQueuesDeleteInstanceRequest {
    id: string;
}

export interface GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsRequest {
    id: string;
    granularity: GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsGranularityEnum;
    sort?: Array<GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsSortEnum>;
    limit?: number;
}

export interface GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsRequest {
    id: string;
    granularity: GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGranularityEnum;
    groupBy?: Array<GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGroupByEnum>;
    filterResult?: GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsFilterResultEnum;
    filterGameCenterDetail?: string;
    sort?: Array<GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsSortEnum>;
    limit?: number;
}

export interface GameCenterMatchmakingQueuesGetCollectionRequest {
    fieldsGameCenterMatchmakingQueues?: Array<GameCenterMatchmakingQueuesGetCollectionFieldsGameCenterMatchmakingQueuesEnum>;
    limit?: number;
    include?: Array<GameCenterMatchmakingQueuesGetCollectionIncludeEnum>;
}

export interface GameCenterMatchmakingQueuesGetInstanceRequest {
    id: string;
    fieldsGameCenterMatchmakingQueues?: Array<GameCenterMatchmakingQueuesGetInstanceFieldsGameCenterMatchmakingQueuesEnum>;
    include?: Array<GameCenterMatchmakingQueuesGetInstanceIncludeEnum>;
}

export interface GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsRequest {
    id: string;
    granularity: GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsGranularityEnum;
    sort?: Array<GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsSortEnum>;
    limit?: number;
}

export interface GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsRequest {
    id: string;
    granularity: GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGranularityEnum;
    groupBy?: Array<GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGroupByEnum>;
    filterResult?: GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsFilterResultEnum;
    filterGameCenterDetail?: string;
    sort?: Array<GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsSortEnum>;
    limit?: number;
}

export interface GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsRequest {
    id: string;
    granularity: GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsGranularityEnum;
    sort?: Array<GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsSortEnum>;
    limit?: number;
}

export interface GameCenterMatchmakingQueuesUpdateInstanceRequest {
    id: string;
    gameCenterMatchmakingQueueUpdateRequest: GameCenterMatchmakingQueueUpdateRequest;
}

/**
 * 
 */
export class GameCenterMatchmakingQueuesApi extends runtime.BaseAPI {

    /**
     */
    async gameCenterMatchmakingQueuesCreateInstanceRaw(requestParameters: GameCenterMatchmakingQueuesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueResponse>> {
        if (requestParameters['gameCenterMatchmakingQueueCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'gameCenterMatchmakingQueueCreateRequest',
                'Required parameter "gameCenterMatchmakingQueueCreateRequest" was null or undefined when calling gameCenterMatchmakingQueuesCreateInstance().'
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
            path: `/v1/gameCenterMatchmakingQueues`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterMatchmakingQueueCreateRequestToJSON(requestParameters['gameCenterMatchmakingQueueCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingQueueResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingQueuesCreateInstance(requestParameters: GameCenterMatchmakingQueuesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueResponse> {
        const response = await this.gameCenterMatchmakingQueuesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingQueuesDeleteInstanceRaw(requestParameters: GameCenterMatchmakingQueuesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterMatchmakingQueuesDeleteInstance().'
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
            path: `/v1/gameCenterMatchmakingQueues/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async gameCenterMatchmakingQueuesDeleteInstance(requestParameters: GameCenterMatchmakingQueuesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gameCenterMatchmakingQueuesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsRaw(requestParameters: GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueSizesV1MetricResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics().'
            );
        }

        if (requestParameters['granularity'] == null) {
            throw new runtime.RequiredError(
                'granularity',
                'Required parameter "granularity" was null or undefined when calling gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['granularity'] != null) {
            queryParameters['granularity'] = requestParameters['granularity'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
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
            path: `/v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingQueueSizes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingQueueSizesV1MetricResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetrics(requestParameters: GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueSizesV1MetricResponse> {
        const response = await this.gameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsRaw(requestParameters: GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueRequestsV1MetricResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics().'
            );
        }

        if (requestParameters['granularity'] == null) {
            throw new runtime.RequiredError(
                'granularity',
                'Required parameter "granularity" was null or undefined when calling gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['granularity'] != null) {
            queryParameters['granularity'] = requestParameters['granularity'];
        }

        if (requestParameters['groupBy'] != null) {
            queryParameters['groupBy'] = requestParameters['groupBy']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterResult'] != null) {
            queryParameters['filter[result]'] = requestParameters['filterResult'];
        }

        if (requestParameters['filterGameCenterDetail'] != null) {
            queryParameters['filter[gameCenterDetail]'] = requestParameters['filterGameCenterDetail'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
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
            path: `/v1/gameCenterMatchmakingQueues/{id}/metrics/experimentMatchmakingRequests`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingQueueRequestsV1MetricResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetrics(requestParameters: GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueRequestsV1MetricResponse> {
        const response = await this.gameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingQueuesGetCollectionRaw(requestParameters: GameCenterMatchmakingQueuesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueuesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['fieldsGameCenterMatchmakingQueues'] != null) {
            queryParameters['fields[gameCenterMatchmakingQueues]'] = requestParameters['fieldsGameCenterMatchmakingQueues']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/gameCenterMatchmakingQueues`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingQueuesResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingQueuesGetCollection(requestParameters: GameCenterMatchmakingQueuesGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueuesResponse> {
        const response = await this.gameCenterMatchmakingQueuesGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingQueuesGetInstanceRaw(requestParameters: GameCenterMatchmakingQueuesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterMatchmakingQueuesGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsGameCenterMatchmakingQueues'] != null) {
            queryParameters['fields[gameCenterMatchmakingQueues]'] = requestParameters['fieldsGameCenterMatchmakingQueues']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/gameCenterMatchmakingQueues/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingQueueResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingQueuesGetInstance(requestParameters: GameCenterMatchmakingQueuesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueResponse> {
        const response = await this.gameCenterMatchmakingQueuesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsRaw(requestParameters: GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueSizesV1MetricResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics().'
            );
        }

        if (requestParameters['granularity'] == null) {
            throw new runtime.RequiredError(
                'granularity',
                'Required parameter "granularity" was null or undefined when calling gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['granularity'] != null) {
            queryParameters['granularity'] = requestParameters['granularity'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
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
            path: `/v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingQueueSizes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingQueueSizesV1MetricResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetrics(requestParameters: GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueSizesV1MetricResponse> {
        const response = await this.gameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsRaw(requestParameters: GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueRequestsV1MetricResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics().'
            );
        }

        if (requestParameters['granularity'] == null) {
            throw new runtime.RequiredError(
                'granularity',
                'Required parameter "granularity" was null or undefined when calling gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['granularity'] != null) {
            queryParameters['granularity'] = requestParameters['granularity'];
        }

        if (requestParameters['groupBy'] != null) {
            queryParameters['groupBy'] = requestParameters['groupBy']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterResult'] != null) {
            queryParameters['filter[result]'] = requestParameters['filterResult'];
        }

        if (requestParameters['filterGameCenterDetail'] != null) {
            queryParameters['filter[gameCenterDetail]'] = requestParameters['filterGameCenterDetail'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
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
            path: `/v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingRequests`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingQueueRequestsV1MetricResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingQueuesMatchmakingRequestsGetMetrics(requestParameters: GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueRequestsV1MetricResponse> {
        const response = await this.gameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsRaw(requestParameters: GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingSessionsV1MetricResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics().'
            );
        }

        if (requestParameters['granularity'] == null) {
            throw new runtime.RequiredError(
                'granularity',
                'Required parameter "granularity" was null or undefined when calling gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['granularity'] != null) {
            queryParameters['granularity'] = requestParameters['granularity'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
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
            path: `/v1/gameCenterMatchmakingQueues/{id}/metrics/matchmakingSessions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingSessionsV1MetricResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingQueuesMatchmakingSessionsGetMetrics(requestParameters: GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingSessionsV1MetricResponse> {
        const response = await this.gameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingQueuesUpdateInstanceRaw(requestParameters: GameCenterMatchmakingQueuesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingQueueResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterMatchmakingQueuesUpdateInstance().'
            );
        }

        if (requestParameters['gameCenterMatchmakingQueueUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'gameCenterMatchmakingQueueUpdateRequest',
                'Required parameter "gameCenterMatchmakingQueueUpdateRequest" was null or undefined when calling gameCenterMatchmakingQueuesUpdateInstance().'
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
            path: `/v1/gameCenterMatchmakingQueues/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterMatchmakingQueueUpdateRequestToJSON(requestParameters['gameCenterMatchmakingQueueUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingQueueResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingQueuesUpdateInstance(requestParameters: GameCenterMatchmakingQueuesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingQueueResponse> {
        const response = await this.gameCenterMatchmakingQueuesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsGranularityEnum = {
    P1D: 'P1D',
    Pt1H: 'PT1H',
    Pt15M: 'PT15M'
} as const;
export type GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsGranularityEnum = typeof GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsGranularityEnum[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsGranularityEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsSortEnum = {
    Count: 'count',
    Count2: '-count',
    AverageNumberOfRequests: 'averageNumberOfRequests',
    AverageNumberOfRequests2: '-averageNumberOfRequests',
    P50NumberOfRequests: 'p50NumberOfRequests',
    P50NumberOfRequests2: '-p50NumberOfRequests',
    P95NumberOfRequests: 'p95NumberOfRequests',
    P95NumberOfRequests2: '-p95NumberOfRequests'
} as const;
export type GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsSortEnum = typeof GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsSortEnum[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingQueueSizesGetMetricsSortEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGranularityEnum = {
    P1D: 'P1D',
    Pt1H: 'PT1H',
    Pt15M: 'PT15M'
} as const;
export type GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGranularityEnum = typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGranularityEnum[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGranularityEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGroupByEnum = {
    Result: 'result',
    GameCenterDetail: 'gameCenterDetail'
} as const;
export type GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGroupByEnum = typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGroupByEnum[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsGroupByEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsFilterResultEnum = {
    Matched: 'MATCHED',
    Canceled: 'CANCELED',
    Expired: 'EXPIRED'
} as const;
export type GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsFilterResultEnum = typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsFilterResultEnum[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsFilterResultEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsSortEnum = {
    Count: 'count',
    Count2: '-count',
    AverageSecondsInQueue: 'averageSecondsInQueue',
    AverageSecondsInQueue2: '-averageSecondsInQueue',
    P50SecondsInQueue: 'p50SecondsInQueue',
    P50SecondsInQueue2: '-p50SecondsInQueue',
    P95SecondsInQueue: 'p95SecondsInQueue',
    P95SecondsInQueue2: '-p95SecondsInQueue'
} as const;
export type GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsSortEnum = typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsSortEnum[keyof typeof GameCenterMatchmakingQueuesExperimentMatchmakingRequestsGetMetricsSortEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesGetCollectionFieldsGameCenterMatchmakingQueuesEnum = {
    ReferenceName: 'referenceName',
    ClassicMatchmakingBundleIds: 'classicMatchmakingBundleIds',
    RuleSet: 'ruleSet',
    ExperimentRuleSet: 'experimentRuleSet'
} as const;
export type GameCenterMatchmakingQueuesGetCollectionFieldsGameCenterMatchmakingQueuesEnum = typeof GameCenterMatchmakingQueuesGetCollectionFieldsGameCenterMatchmakingQueuesEnum[keyof typeof GameCenterMatchmakingQueuesGetCollectionFieldsGameCenterMatchmakingQueuesEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesGetCollectionIncludeEnum = {
    RuleSet: 'ruleSet',
    ExperimentRuleSet: 'experimentRuleSet'
} as const;
export type GameCenterMatchmakingQueuesGetCollectionIncludeEnum = typeof GameCenterMatchmakingQueuesGetCollectionIncludeEnum[keyof typeof GameCenterMatchmakingQueuesGetCollectionIncludeEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesGetInstanceFieldsGameCenterMatchmakingQueuesEnum = {
    ReferenceName: 'referenceName',
    ClassicMatchmakingBundleIds: 'classicMatchmakingBundleIds',
    RuleSet: 'ruleSet',
    ExperimentRuleSet: 'experimentRuleSet'
} as const;
export type GameCenterMatchmakingQueuesGetInstanceFieldsGameCenterMatchmakingQueuesEnum = typeof GameCenterMatchmakingQueuesGetInstanceFieldsGameCenterMatchmakingQueuesEnum[keyof typeof GameCenterMatchmakingQueuesGetInstanceFieldsGameCenterMatchmakingQueuesEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesGetInstanceIncludeEnum = {
    RuleSet: 'ruleSet',
    ExperimentRuleSet: 'experimentRuleSet'
} as const;
export type GameCenterMatchmakingQueuesGetInstanceIncludeEnum = typeof GameCenterMatchmakingQueuesGetInstanceIncludeEnum[keyof typeof GameCenterMatchmakingQueuesGetInstanceIncludeEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsGranularityEnum = {
    P1D: 'P1D',
    Pt1H: 'PT1H',
    Pt15M: 'PT15M'
} as const;
export type GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsGranularityEnum = typeof GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsGranularityEnum[keyof typeof GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsGranularityEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsSortEnum = {
    Count: 'count',
    Count2: '-count',
    AverageNumberOfRequests: 'averageNumberOfRequests',
    AverageNumberOfRequests2: '-averageNumberOfRequests',
    P50NumberOfRequests: 'p50NumberOfRequests',
    P50NumberOfRequests2: '-p50NumberOfRequests',
    P95NumberOfRequests: 'p95NumberOfRequests',
    P95NumberOfRequests2: '-p95NumberOfRequests'
} as const;
export type GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsSortEnum = typeof GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsSortEnum[keyof typeof GameCenterMatchmakingQueuesMatchmakingQueueSizesGetMetricsSortEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGranularityEnum = {
    P1D: 'P1D',
    Pt1H: 'PT1H',
    Pt15M: 'PT15M'
} as const;
export type GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGranularityEnum = typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGranularityEnum[keyof typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGranularityEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGroupByEnum = {
    Result: 'result',
    GameCenterDetail: 'gameCenterDetail'
} as const;
export type GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGroupByEnum = typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGroupByEnum[keyof typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsGroupByEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsFilterResultEnum = {
    Matched: 'MATCHED',
    Canceled: 'CANCELED',
    Expired: 'EXPIRED'
} as const;
export type GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsFilterResultEnum = typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsFilterResultEnum[keyof typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsFilterResultEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsSortEnum = {
    Count: 'count',
    Count2: '-count',
    AverageSecondsInQueue: 'averageSecondsInQueue',
    AverageSecondsInQueue2: '-averageSecondsInQueue',
    P50SecondsInQueue: 'p50SecondsInQueue',
    P50SecondsInQueue2: '-p50SecondsInQueue',
    P95SecondsInQueue: 'p95SecondsInQueue',
    P95SecondsInQueue2: '-p95SecondsInQueue'
} as const;
export type GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsSortEnum = typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsSortEnum[keyof typeof GameCenterMatchmakingQueuesMatchmakingRequestsGetMetricsSortEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsGranularityEnum = {
    P1D: 'P1D',
    Pt1H: 'PT1H',
    Pt15M: 'PT15M'
} as const;
export type GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsGranularityEnum = typeof GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsGranularityEnum[keyof typeof GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsGranularityEnum];
/**
 * @export
 */
export const GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsSortEnum = {
    Count: 'count',
    Count2: '-count',
    AveragePlayerCount: 'averagePlayerCount',
    AveragePlayerCount2: '-averagePlayerCount',
    P50PlayerCount: 'p50PlayerCount',
    P50PlayerCount2: '-p50PlayerCount',
    P95PlayerCount: 'p95PlayerCount',
    P95PlayerCount2: '-p95PlayerCount'
} as const;
export type GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsSortEnum = typeof GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsSortEnum[keyof typeof GameCenterMatchmakingQueuesMatchmakingSessionsGetMetricsSortEnum];
