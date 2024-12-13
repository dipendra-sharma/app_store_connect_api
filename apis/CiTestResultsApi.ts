
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
  CiTestResultResponse,
  ErrorResponse,
} from '../models/index';
import {
    CiTestResultResponseFromJSON,
    CiTestResultResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface CiTestResultsGetInstanceRequest {
    id: string;
    fieldsCiTestResults?: Array<CiTestResultsGetInstanceFieldsCiTestResultsEnum>;
}

/**
 * 
 */
export class CiTestResultsApi extends runtime.BaseAPI {

    /**
     */
    async ciTestResultsGetInstanceRaw(requestParameters: CiTestResultsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiTestResultResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ciTestResultsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsCiTestResults'] != null) {
            queryParameters['fields[ciTestResults]'] = requestParameters['fieldsCiTestResults']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/ciTestResults/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiTestResultResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciTestResultsGetInstance(requestParameters: CiTestResultsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiTestResultResponse> {
        const response = await this.ciTestResultsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CiTestResultsGetInstanceFieldsCiTestResultsEnum = {
    ClassName: 'className',
    Name: 'name',
    Status: 'status',
    FileSource: 'fileSource',
    Message: 'message',
    DestinationTestResults: 'destinationTestResults'
} as const;
export type CiTestResultsGetInstanceFieldsCiTestResultsEnum = typeof CiTestResultsGetInstanceFieldsCiTestResultsEnum[keyof typeof CiTestResultsGetInstanceFieldsCiTestResultsEnum];