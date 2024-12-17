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
  DeviceCreateRequest,
  DeviceResponse,
  DeviceUpdateRequest,
  DevicesResponse,
  ErrorResponse,
} from '../models/index';
import {
    DeviceCreateRequestFromJSON,
    DeviceCreateRequestToJSON,
    DeviceResponseFromJSON,
    DeviceResponseToJSON,
    DeviceUpdateRequestFromJSON,
    DeviceUpdateRequestToJSON,
    DevicesResponseFromJSON,
    DevicesResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface DevicesCreateInstanceRequest {
    deviceCreateRequest: DeviceCreateRequest;
}

export interface DevicesGetCollectionRequest {
    filterName?: Array<string>;
    filterPlatform?: Array<DevicesGetCollectionFilterPlatformEnum>;
    filterUdid?: Array<string>;
    filterStatus?: Array<DevicesGetCollectionFilterStatusEnum>;
    filterId?: Array<string>;
    sort?: Array<DevicesGetCollectionSortEnum>;
    fieldsDevices?: Array<DevicesGetCollectionFieldsDevicesEnum>;
    limit?: number;
}

export interface DevicesGetInstanceRequest {
    id: string;
    fieldsDevices?: Array<DevicesGetInstanceFieldsDevicesEnum>;
}

export interface DevicesUpdateInstanceRequest {
    id: string;
    deviceUpdateRequest: DeviceUpdateRequest;
}

/**
 * 
 */
export class DevicesApi extends runtime.BaseAPI {

    /**
     */
    async devicesCreateInstanceRaw(requestParameters: DevicesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeviceResponse>> {
        if (requestParameters['deviceCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'deviceCreateRequest',
                'Required parameter "deviceCreateRequest" was null or undefined when calling devicesCreateInstance().'
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
            path: `/v1/devices`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeviceCreateRequestToJSON(requestParameters['deviceCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceResponseFromJSON(jsonValue));
    }

    /**
     */
    async devicesCreateInstance(requestParameters: DevicesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceResponse> {
        const response = await this.devicesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async devicesGetCollectionRaw(requestParameters: DevicesGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DevicesResponse>> {
        const queryParameters: any = {};

        if (requestParameters['filterName'] != null) {
            queryParameters['filter[name]'] = requestParameters['filterName']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterPlatform'] != null) {
            queryParameters['filter[platform]'] = requestParameters['filterPlatform']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterUdid'] != null) {
            queryParameters['filter[udid]'] = requestParameters['filterUdid']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterStatus'] != null) {
            queryParameters['filter[status]'] = requestParameters['filterStatus']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['filterId'] != null) {
            queryParameters['filter[id]'] = requestParameters['filterId']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsDevices'] != null) {
            queryParameters['fields[devices]'] = requestParameters['fieldsDevices']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/devices`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DevicesResponseFromJSON(jsonValue));
    }

    /**
     */
    async devicesGetCollection(requestParameters: DevicesGetCollectionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DevicesResponse> {
        const response = await this.devicesGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async devicesGetInstanceRaw(requestParameters: DevicesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeviceResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling devicesGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsDevices'] != null) {
            queryParameters['fields[devices]'] = requestParameters['fieldsDevices']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/devices/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceResponseFromJSON(jsonValue));
    }

    /**
     */
    async devicesGetInstance(requestParameters: DevicesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceResponse> {
        const response = await this.devicesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async devicesUpdateInstanceRaw(requestParameters: DevicesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeviceResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling devicesUpdateInstance().'
            );
        }

        if (requestParameters['deviceUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'deviceUpdateRequest',
                'Required parameter "deviceUpdateRequest" was null or undefined when calling devicesUpdateInstance().'
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
            path: `/v1/devices/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: DeviceUpdateRequestToJSON(requestParameters['deviceUpdateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeviceResponseFromJSON(jsonValue));
    }

    /**
     */
    async devicesUpdateInstance(requestParameters: DevicesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeviceResponse> {
        const response = await this.devicesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const DevicesGetCollectionFilterPlatformEnum = {
    Ios: 'IOS',
    MacOs: 'MAC_OS',
    Universal: 'UNIVERSAL'
} as const;
export type DevicesGetCollectionFilterPlatformEnum = typeof DevicesGetCollectionFilterPlatformEnum[keyof typeof DevicesGetCollectionFilterPlatformEnum];
/**
 * @export
 */
export const DevicesGetCollectionFilterStatusEnum = {
    Enabled: 'ENABLED',
    Disabled: 'DISABLED'
} as const;
export type DevicesGetCollectionFilterStatusEnum = typeof DevicesGetCollectionFilterStatusEnum[keyof typeof DevicesGetCollectionFilterStatusEnum];
/**
 * @export
 */
export const DevicesGetCollectionSortEnum = {
    Name: 'name',
    Name2: '-name',
    Platform: 'platform',
    Platform2: '-platform',
    Udid: 'udid',
    Udid2: '-udid',
    Status: 'status',
    Status2: '-status',
    Id: 'id',
    Id2: '-id'
} as const;
export type DevicesGetCollectionSortEnum = typeof DevicesGetCollectionSortEnum[keyof typeof DevicesGetCollectionSortEnum];
/**
 * @export
 */
export const DevicesGetCollectionFieldsDevicesEnum = {
    Name: 'name',
    Platform: 'platform',
    Udid: 'udid',
    DeviceClass: 'deviceClass',
    Status: 'status',
    Model: 'model',
    AddedDate: 'addedDate'
} as const;
export type DevicesGetCollectionFieldsDevicesEnum = typeof DevicesGetCollectionFieldsDevicesEnum[keyof typeof DevicesGetCollectionFieldsDevicesEnum];
/**
 * @export
 */
export const DevicesGetInstanceFieldsDevicesEnum = {
    Name: 'name',
    Platform: 'platform',
    Udid: 'udid',
    DeviceClass: 'deviceClass',
    Status: 'status',
    Model: 'model',
    AddedDate: 'addedDate'
} as const;
export type DevicesGetInstanceFieldsDevicesEnum = typeof DevicesGetInstanceFieldsDevicesEnum[keyof typeof DevicesGetInstanceFieldsDevicesEnum];
