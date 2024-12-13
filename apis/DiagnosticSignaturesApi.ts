
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
  DiagnosticLogs,
  ErrorResponse,
} from '../models/index';
import {
    DiagnosticLogsFromJSON,
    DiagnosticLogsToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface DiagnosticSignaturesLogsGetToManyRelatedRequest {
    id: string;
    limit?: number;
}

/**
 * 
 */
export class DiagnosticSignaturesApi extends runtime.BaseAPI {

    /**
     */
    async diagnosticSignaturesLogsGetToManyRelatedRaw(requestParameters: DiagnosticSignaturesLogsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiagnosticLogs>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling diagnosticSignaturesLogsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

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
            path: `/v1/diagnosticSignatures/{id}/logs`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiagnosticLogsFromJSON(jsonValue));
    }

    /**
     */
    async diagnosticSignaturesLogsGetToManyRelated(requestParameters: DiagnosticSignaturesLogsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiagnosticLogs> {
        const response = await this.diagnosticSignaturesLogsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
