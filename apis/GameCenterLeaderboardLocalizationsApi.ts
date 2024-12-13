
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
  GameCenterLeaderboardImageResponse,
  GameCenterLeaderboardLocalizationCreateRequest,
  GameCenterLeaderboardLocalizationResponse,
  GameCenterLeaderboardLocalizationUpdateRequest,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GameCenterLeaderboardImageResponseFromJSON,
    GameCenterLeaderboardImageResponseToJSON,
    GameCenterLeaderboardLocalizationCreateRequestFromJSON,
    GameCenterLeaderboardLocalizationCreateRequestToJSON,
    GameCenterLeaderboardLocalizationResponseFromJSON,
    GameCenterLeaderboardLocalizationResponseToJSON,
    GameCenterLeaderboardLocalizationUpdateRequestFromJSON,
    GameCenterLeaderboardLocalizationUpdateRequestToJSON,
} from '../models/index';

export interface GameCenterLeaderboardLocalizationsCreateInstanceRequest {
    gameCenterLeaderboardLocalizationCreateRequest: GameCenterLeaderboardLocalizationCreateRequest;
}

export interface GameCenterLeaderboardLocalizationsDeleteInstanceRequest {
    id: string;
}

export interface GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedRequest {
    id: string;
    fieldsGameCenterLeaderboardImages?: Array<GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedFieldsGameCenterLeaderboardImagesEnum>;
    fieldsGameCenterLeaderboardLocalizations?: Array<GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedFieldsGameCenterLeaderboardLocalizationsEnum>;
    include?: Array<GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedIncludeEnum>;
}

export interface GameCenterLeaderboardLocalizationsGetInstanceRequest {
    id: string;
    fieldsGameCenterLeaderboardLocalizations?: Array<GameCenterLeaderboardLocalizationsGetInstanceFieldsGameCenterLeaderboardLocalizationsEnum>;
    fieldsGameCenterLeaderboardImages?: Array<GameCenterLeaderboardLocalizationsGetInstanceFieldsGameCenterLeaderboardImagesEnum>;
    include?: Array<GameCenterLeaderboardLocalizationsGetInstanceIncludeEnum>;
}

export interface GameCenterLeaderboardLocalizationsUpdateInstanceRequest {
    id: string;
    gameCenterLeaderboardLocalizationUpdateRequest: GameCenterLeaderboardLocalizationUpdateRequest;
}

/**
 * 
 */
export class GameCenterLeaderboardLocalizationsApi extends runtime.BaseAPI {

    /**
     */
    async gameCenterLeaderboardLocalizationsCreateInstanceRaw(requestParameters: GameCenterLeaderboardLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardLocalizationResponse>> {
        if (requestParameters['gameCenterLeaderboardLocalizationCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'gameCenterLeaderboardLocalizationCreateRequest',
                'Required parameter "gameCenterLeaderboardLocalizationCreateRequest" was null or undefined when calling gameCenterLeaderboardLocalizationsCreateInstance().'
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
            path: `/v1/gameCenterLeaderboardLocalizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterLeaderboardLocalizationCreateRequestToJSON(requestParameters['gameCenterLeaderboardLocalizationCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardLocalizationsCreateInstance(requestParameters: GameCenterLeaderboardLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardLocalizationResponse> {
        const response = await this.gameCenterLeaderboardLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterLeaderboardLocalizationsDeleteInstanceRaw(requestParameters: GameCenterLeaderboardLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterLeaderboardLocalizationsDeleteInstance().'
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
            path: `/v1/gameCenterLeaderboardLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async gameCenterLeaderboardLocalizationsDeleteInstance(requestParameters: GameCenterLeaderboardLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gameCenterLeaderboardLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedRaw(requestParameters: GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardImageResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsGameCenterLeaderboardImages'] != null) {
            queryParameters['fields[gameCenterLeaderboardImages]'] = requestParameters['fieldsGameCenterLeaderboardImages']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsGameCenterLeaderboardLocalizations'] != null) {
            queryParameters['fields[gameCenterLeaderboardLocalizations]'] = requestParameters['fieldsGameCenterLeaderboardLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/gameCenterLeaderboardLocalizations/{id}/gameCenterLeaderboardImage`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelated(requestParameters: GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardImageResponse> {
        const response = await this.gameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterLeaderboardLocalizationsGetInstanceRaw(requestParameters: GameCenterLeaderboardLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardLocalizationResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterLeaderboardLocalizationsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsGameCenterLeaderboardLocalizations'] != null) {
            queryParameters['fields[gameCenterLeaderboardLocalizations]'] = requestParameters['fieldsGameCenterLeaderboardLocalizations']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsGameCenterLeaderboardImages'] != null) {
            queryParameters['fields[gameCenterLeaderboardImages]'] = requestParameters['fieldsGameCenterLeaderboardImages']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/gameCenterLeaderboardLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardLocalizationsGetInstance(requestParameters: GameCenterLeaderboardLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardLocalizationResponse> {
        const response = await this.gameCenterLeaderboardLocalizationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterLeaderboardLocalizationsUpdateInstanceRaw(requestParameters: GameCenterLeaderboardLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterLeaderboardLocalizationResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gameCenterLeaderboardLocalizationsUpdateInstance().'
            );
        }

        if (requestParameters['gameCenterLeaderboardLocalizationUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'gameCenterLeaderboardLocalizationUpdateRequest',
                'Required parameter "gameCenterLeaderboardLocalizationUpdateRequest" was null or undefined when calling gameCenterLeaderboardLocalizationsUpdateInstance().'
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
            path: `/v1/gameCenterLeaderboardLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterLeaderboardLocalizationUpdateRequestToJSON(requestParameters['gameCenterLeaderboardLocalizationUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterLeaderboardLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterLeaderboardLocalizationsUpdateInstance(requestParameters: GameCenterLeaderboardLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterLeaderboardLocalizationResponse> {
        const response = await this.gameCenterLeaderboardLocalizationsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedFieldsGameCenterLeaderboardImagesEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    ImageAsset: 'imageAsset',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    GameCenterLeaderboardLocalization: 'gameCenterLeaderboardLocalization'
} as const;
export type GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedFieldsGameCenterLeaderboardImagesEnum = typeof GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedFieldsGameCenterLeaderboardImagesEnum[keyof typeof GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedFieldsGameCenterLeaderboardImagesEnum];
/**
 * @export
 */
export const GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedFieldsGameCenterLeaderboardLocalizationsEnum = {
    Locale: 'locale',
    Name: 'name',
    FormatterOverride: 'formatterOverride',
    FormatterSuffix: 'formatterSuffix',
    FormatterSuffixSingular: 'formatterSuffixSingular',
    GameCenterLeaderboard: 'gameCenterLeaderboard',
    GameCenterLeaderboardImage: 'gameCenterLeaderboardImage'
} as const;
export type GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedFieldsGameCenterLeaderboardLocalizationsEnum = typeof GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedFieldsGameCenterLeaderboardLocalizationsEnum[keyof typeof GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedFieldsGameCenterLeaderboardLocalizationsEnum];
/**
 * @export
 */
export const GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedIncludeEnum = {
    GameCenterLeaderboardLocalization: 'gameCenterLeaderboardLocalization'
} as const;
export type GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedIncludeEnum = typeof GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedIncludeEnum[keyof typeof GameCenterLeaderboardLocalizationsGameCenterLeaderboardImageGetToOneRelatedIncludeEnum];
/**
 * @export
 */
export const GameCenterLeaderboardLocalizationsGetInstanceFieldsGameCenterLeaderboardLocalizationsEnum = {
    Locale: 'locale',
    Name: 'name',
    FormatterOverride: 'formatterOverride',
    FormatterSuffix: 'formatterSuffix',
    FormatterSuffixSingular: 'formatterSuffixSingular',
    GameCenterLeaderboard: 'gameCenterLeaderboard',
    GameCenterLeaderboardImage: 'gameCenterLeaderboardImage'
} as const;
export type GameCenterLeaderboardLocalizationsGetInstanceFieldsGameCenterLeaderboardLocalizationsEnum = typeof GameCenterLeaderboardLocalizationsGetInstanceFieldsGameCenterLeaderboardLocalizationsEnum[keyof typeof GameCenterLeaderboardLocalizationsGetInstanceFieldsGameCenterLeaderboardLocalizationsEnum];
/**
 * @export
 */
export const GameCenterLeaderboardLocalizationsGetInstanceFieldsGameCenterLeaderboardImagesEnum = {
    FileSize: 'fileSize',
    FileName: 'fileName',
    ImageAsset: 'imageAsset',
    UploadOperations: 'uploadOperations',
    AssetDeliveryState: 'assetDeliveryState',
    GameCenterLeaderboardLocalization: 'gameCenterLeaderboardLocalization'
} as const;
export type GameCenterLeaderboardLocalizationsGetInstanceFieldsGameCenterLeaderboardImagesEnum = typeof GameCenterLeaderboardLocalizationsGetInstanceFieldsGameCenterLeaderboardImagesEnum[keyof typeof GameCenterLeaderboardLocalizationsGetInstanceFieldsGameCenterLeaderboardImagesEnum];
/**
 * @export
 */
export const GameCenterLeaderboardLocalizationsGetInstanceIncludeEnum = {
    GameCenterLeaderboard: 'gameCenterLeaderboard',
    GameCenterLeaderboardImage: 'gameCenterLeaderboardImage'
} as const;
export type GameCenterLeaderboardLocalizationsGetInstanceIncludeEnum = typeof GameCenterLeaderboardLocalizationsGetInstanceIncludeEnum[keyof typeof GameCenterLeaderboardLocalizationsGetInstanceIncludeEnum];
