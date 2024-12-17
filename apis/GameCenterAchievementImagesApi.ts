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
  GameCenterAchievementImageCreateRequest,
  GameCenterAchievementImageResponse,
  GameCenterAchievementImageUpdateRequest,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GameCenterAchievementImageCreateRequestFromJSON,
    GameCenterAchievementImageCreateRequestToJSON,
    GameCenterAchievementImageResponseFromJSON,
    GameCenterAchievementImageResponseToJSON,
    GameCenterAchievementImageUpdateRequestFromJSON,
    GameCenterAchievementImageUpdateRequestToJSON,
} from '../models/index';

export interface GameCenterAchievementImagesCreateInstanceRequest {
    gameCenterAchievementImageCreateRequest: GameCenterAchievementImageCreateRequest;
}

export interface GameCenterAchievementImagesDeleteInstanceRequest {
    id: string;
}

export interface GameCenterAchievementImagesGetInstanceRequest {
    id: string;
    fieldsGameCenterAchievementImages?: Array<GameCenterAchievementImagesGetInstanceFieldsGameCenterAchievementImagesEnum>;
    include?: Array<GameCenterAchievementImagesGetInstanceIncludeEnum>;
}

export interface GameCenterAchievementImagesUpdateInstanceRequest {
    id: string;
    gameCenterAchievementImageUpdateRequest: GameCenterAchievementImageUpdateRequest;
}

/**
 * 
 */
export class GameCenterAchievementImagesApi extends runtime.BaseAPI {

    /**
     */
    async gameCenterAchievementImagesCreateInstanceRaw(requestParameters: GameCenterAchievementImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterAchievementImageResponse>> {
        if (requestParameters['gameCenterAchievementImageCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'gameCenterAchievementImageCreateRequest',
                'Required parameter "gameCenterAchievementImageCreateRequest" was null or undefined when calling gameCenterAchievementImagesCreateInstance().'
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
            path: `/v1/gameCenterAchievementImages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterAchievementImageCreateRequestToJSON(requestParameters['gameCenterAchievementImageCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterAchievementImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterAchievementImagesCreateInstance(requestParameters: GameCenterAchievementImagesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterAchievementImageResponse> {
        const response = await this.gameCenterAchievementImagesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterAchievementImagesDeleteInstanceRaw(requestParameters: GameCenterAchievementImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterAchievementImagesDeleteInstance().'
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
            path: `/v1/gameCenterAchievementImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async gameCenterAchievementImagesDeleteInstance(requestParameters: GameCenterAchievementImagesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gameCenterAchievementImagesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async gameCenterAchievementImagesGetInstanceRaw(requestParameters: GameCenterAchievementImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterAchievementImageResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterAchievementImagesGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsGameCenterAchievementImages'] != null) {
            queryParameters['fields[gameCenterAchievementImages]'] = requestParameters['fieldsGameCenterAchievementImages']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/gameCenterAchievementImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterAchievementImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterAchievementImagesGetInstance(requestParameters: GameCenterAchievementImagesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterAchievementImageResponse> {
        const response = await this.gameCenterAchievementImagesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterAchievementImagesUpdateInstanceRaw(requestParameters: GameCenterAchievementImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterAchievementImageResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterAchievementImagesUpdateInstance().'
            );
        }

        if (requestParameters['gameCenterAchievementImageUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'gameCenterAchievementImageUpdateRequest',
                'Required parameter "gameCenterAchievementImageUpdateRequest" was null or undefined when calling gameCenterAchievementImagesUpdateInstance().'
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
            path: `/v1/gameCenterAchievementImages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterAchievementImageUpdateRequestToJSON(requestParameters['gameCenterAchievementImageUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterAchievementImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterAchievementImagesUpdateInstance(requestParameters: GameCenterAchievementImagesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterAchievementImageResponse> {
        const response = await this.gameCenterAchievementImagesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GameCenterAchievementImagesGetInstanceFieldsGameCenterAchievementImagesEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    ImageAsset: 'imageAsset',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    GameCenterAchievementLocalization: 'gameCenterAchievementLocalization'
} as const;
export type GameCenterAchievementImagesGetInstanceFieldsGameCenterAchievementImagesEnum = typeof GameCenterAchievementImagesGetInstanceFieldsGameCenterAchievementImagesEnum[keyof typeof GameCenterAchievementImagesGetInstanceFieldsGameCenterAchievementImagesEnum];
/**
 * @export
 */
export const GameCenterAchievementImagesGetInstanceIncludeEnum = {
    GameCenterAchievementLocalization: 'gameCenterAchievementLocalization'
} as const;
export type GameCenterAchievementImagesGetInstanceIncludeEnum = typeof GameCenterAchievementImagesGetInstanceIncludeEnum[keyof typeof GameCenterAchievementImagesGetInstanceIncludeEnum];
