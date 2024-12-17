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
  CiArtifactsResponse,
  CiBuildActionResponse,
  CiBuildRunResponse,
  CiIssuesResponse,
  CiTestResultsResponse,
  ErrorResponse,
} from '../models/index';
import {
    CiArtifactsResponseFromJSON,
    CiArtifactsResponseToJSON,
    CiBuildActionResponseFromJSON,
    CiBuildActionResponseToJSON,
    CiBuildRunResponseFromJSON,
    CiBuildRunResponseToJSON,
    CiIssuesResponseFromJSON,
    CiIssuesResponseToJSON,
    CiTestResultsResponseFromJSON,
    CiTestResultsResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface CiBuildActionsArtifactsGetToManyRelatedRequest {
    id: string;
    fieldsCiArtifacts?: Array<CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum>;
    limit?: number;
}

export interface CiBuildActionsBuildRunGetToOneRelatedRequest {
    id: string;
    fieldsCiBuildRuns?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum>;
    fieldsBuilds?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum>;
    fieldsCiWorkflows?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum>;
    fieldsCiProducts?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum>;
    fieldsScmGitReferences?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum>;
    fieldsScmPullRequests?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum>;
    include?: Array<CiBuildActionsBuildRunGetToOneRelatedIncludeEnum>;
    limitBuilds?: number;
}

export interface CiBuildActionsGetInstanceRequest {
    id: string;
    fieldsCiBuildActions?: Array<CiBuildActionsGetInstanceFieldsCiBuildActionsEnum>;
    fieldsCiBuildRuns?: Array<CiBuildActionsGetInstanceFieldsCiBuildRunsEnum>;
    include?: Array<CiBuildActionsGetInstanceIncludeEnum>;
}

export interface CiBuildActionsIssuesGetToManyRelatedRequest {
    id: string;
    fieldsCiIssues?: Array<CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum>;
    limit?: number;
}

export interface CiBuildActionsTestResultsGetToManyRelatedRequest {
    id: string;
    fieldsCiTestResults?: Array<CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum>;
    limit?: number;
}

/**
 * 
 */
export class CiBuildActionsApi extends runtime.BaseAPI {

    /**
     */
    async ciBuildActionsArtifactsGetToManyRelatedRaw(requestParameters: CiBuildActionsArtifactsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiArtifactsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ciBuildActionsArtifactsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsCiArtifacts'] != null) {
            queryParameters['fields[ciArtifacts]'] = requestParameters['fieldsCiArtifacts']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/ciBuildActions/{id}/artifacts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiArtifactsResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildActionsArtifactsGetToManyRelated(requestParameters: CiBuildActionsArtifactsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiArtifactsResponse> {
        const response = await this.ciBuildActionsArtifactsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciBuildActionsBuildRunGetToOneRelatedRaw(requestParameters: CiBuildActionsBuildRunGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiBuildRunResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ciBuildActionsBuildRunGetToOneRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsCiBuildRuns'] != null) {
            queryParameters['fields[ciBuildRuns]'] = requestParameters['fieldsCiBuildRuns']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsBuilds'] != null) {
            queryParameters['fields[builds]'] = requestParameters['fieldsBuilds']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsCiWorkflows'] != null) {
            queryParameters['fields[ciWorkflows]'] = requestParameters['fieldsCiWorkflows']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsCiProducts'] != null) {
            queryParameters['fields[ciProducts]'] = requestParameters['fieldsCiProducts']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsScmGitReferences'] != null) {
            queryParameters['fields[scmGitReferences]'] = requestParameters['fieldsScmGitReferences']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsScmPullRequests'] != null) {
            queryParameters['fields[scmPullRequests]'] = requestParameters['fieldsScmPullRequests']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['limitBuilds'] != null) {
            queryParameters['limit[builds]'] = requestParameters['limitBuilds'];
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
            path: `/v1/ciBuildActions/{id}/buildRun`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiBuildRunResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildActionsBuildRunGetToOneRelated(requestParameters: CiBuildActionsBuildRunGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiBuildRunResponse> {
        const response = await this.ciBuildActionsBuildRunGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciBuildActionsGetInstanceRaw(requestParameters: CiBuildActionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiBuildActionResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ciBuildActionsGetInstance().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsCiBuildActions'] != null) {
            queryParameters['fields[ciBuildActions]'] = requestParameters['fieldsCiBuildActions']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['fieldsCiBuildRuns'] != null) {
            queryParameters['fields[ciBuildRuns]'] = requestParameters['fieldsCiBuildRuns']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/ciBuildActions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiBuildActionResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildActionsGetInstance(requestParameters: CiBuildActionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiBuildActionResponse> {
        const response = await this.ciBuildActionsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciBuildActionsIssuesGetToManyRelatedRaw(requestParameters: CiBuildActionsIssuesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiIssuesResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ciBuildActionsIssuesGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsCiIssues'] != null) {
            queryParameters['fields[ciIssues]'] = requestParameters['fieldsCiIssues']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/ciBuildActions/{id}/issues`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiIssuesResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildActionsIssuesGetToManyRelated(requestParameters: CiBuildActionsIssuesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiIssuesResponse> {
        const response = await this.ciBuildActionsIssuesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciBuildActionsTestResultsGetToManyRelatedRaw(requestParameters: CiBuildActionsTestResultsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiTestResultsResponse>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling ciBuildActionsTestResultsGetToManyRelated().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['fieldsCiTestResults'] != null) {
            queryParameters['fields[ciTestResults]'] = requestParameters['fieldsCiTestResults']!.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/ciBuildActions/{id}/testResults`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiTestResultsResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildActionsTestResultsGetToManyRelated(requestParameters: CiBuildActionsTestResultsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiTestResultsResponse> {
        const response = await this.ciBuildActionsTestResultsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum = {
    FileType: 'fileType',
    FileName: 'fileName',
    FileSize: 'fileSize',
    DownloadUrl: 'downloadUrl'
} as const;
export type CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum = typeof CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum[keyof typeof CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum = {
    Number: 'number',
    CreatedDate: 'createdDate',
    StartedDate: 'startedDate',
    FinishedDate: 'finishedDate',
    SourceCommit: 'sourceCommit',
    DestinationCommit: 'destinationCommit',
    IsPullRequestBuild: 'isPullRequestBuild',
    IssueCounts: 'issueCounts',
    ExecutionProgress: 'executionProgress',
    CompletionStatus: 'completionStatus',
    StartReason: 'startReason',
    CancelReason: 'cancelReason',
    Builds: 'builds',
    Workflow: 'workflow',
    Product: 'product',
    SourceBranchOrTag: 'sourceBranchOrTag',
    DestinationBranch: 'destinationBranch',
    Actions: 'actions',
    PullRequest: 'pullRequest'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum = {
    Version: 'version',
    UploadedDate: 'uploadedDate',
    ExpirationDate: 'expirationDate',
    Expired: 'expired',
    MinOsVersion: 'minOsVersion',
    LsMinimumSystemVersion: 'lsMinimumSystemVersion',
    ComputedMinMacOsVersion: 'computedMinMacOsVersion',
    IconAssetToken: 'iconAssetToken',
    ProcessingState: 'processingState',
    BuildAudienceType: 'buildAudienceType',
    UsesNonExemptEncryption: 'usesNonExemptEncryption',
    PreReleaseVersion: 'preReleaseVersion',
    IndividualTesters: 'individualTesters',
    BetaGroups: 'betaGroups',
    BetaBuildLocalizations: 'betaBuildLocalizations',
    AppEncryptionDeclaration: 'appEncryptionDeclaration',
    BetaAppReviewSubmission: 'betaAppReviewSubmission',
    App: 'app',
    BuildBetaDetail: 'buildBetaDetail',
    AppStoreVersion: 'appStoreVersion',
    Icons: 'icons',
    BuildBundles: 'buildBundles',
    PerfPowerMetrics: 'perfPowerMetrics',
    DiagnosticSignatures: 'diagnosticSignatures'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum = {
    Name: 'name',
    Description: 'description',
    BranchStartCondition: 'branchStartCondition',
    TagStartCondition: 'tagStartCondition',
    PullRequestStartCondition: 'pullRequestStartCondition',
    ScheduledStartCondition: 'scheduledStartCondition',
    ManualBranchStartCondition: 'manualBranchStartCondition',
    ManualTagStartCondition: 'manualTagStartCondition',
    ManualPullRequestStartCondition: 'manualPullRequestStartCondition',
    Actions: 'actions',
    IsEnabled: 'isEnabled',
    IsLockedForEditing: 'isLockedForEditing',
    Clean: 'clean',
    ContainerFilePath: 'containerFilePath',
    LastModifiedDate: 'lastModifiedDate',
    Product: 'product',
    Repository: 'repository',
    XcodeVersion: 'xcodeVersion',
    MacOsVersion: 'macOsVersion',
    BuildRuns: 'buildRuns'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum = {
    Name: 'name',
    CreatedDate: 'createdDate',
    ProductType: 'productType',
    App: 'app',
    BundleId: 'bundleId',
    Workflows: 'workflows',
    PrimaryRepositories: 'primaryRepositories',
    AdditionalRepositories: 'additionalRepositories',
    BuildRuns: 'buildRuns'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum = {
    Name: 'name',
    CanonicalName: 'canonicalName',
    IsDeleted: 'isDeleted',
    Kind: 'kind',
    Repository: 'repository'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum = {
    Title: 'title',
    Number: 'number',
    WebUrl: 'webUrl',
    SourceRepositoryOwner: 'sourceRepositoryOwner',
    SourceRepositoryName: 'sourceRepositoryName',
    SourceBranchName: 'sourceBranchName',
    DestinationRepositoryOwner: 'destinationRepositoryOwner',
    DestinationRepositoryName: 'destinationRepositoryName',
    DestinationBranchName: 'destinationBranchName',
    IsClosed: 'isClosed',
    IsCrossRepository: 'isCrossRepository',
    Repository: 'repository'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedIncludeEnum = {
    Builds: 'builds',
    Workflow: 'workflow',
    Product: 'product',
    SourceBranchOrTag: 'sourceBranchOrTag',
    DestinationBranch: 'destinationBranch',
    PullRequest: 'pullRequest'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedIncludeEnum = typeof CiBuildActionsBuildRunGetToOneRelatedIncludeEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedIncludeEnum];
/**
 * @export
 */
export const CiBuildActionsGetInstanceFieldsCiBuildActionsEnum = {
    Name: 'name',
    ActionType: 'actionType',
    StartedDate: 'startedDate',
    FinishedDate: 'finishedDate',
    IssueCounts: 'issueCounts',
    ExecutionProgress: 'executionProgress',
    CompletionStatus: 'completionStatus',
    IsRequiredToPass: 'isRequiredToPass',
    BuildRun: 'buildRun',
    Artifacts: 'artifacts',
    Issues: 'issues',
    TestResults: 'testResults'
} as const;
export type CiBuildActionsGetInstanceFieldsCiBuildActionsEnum = typeof CiBuildActionsGetInstanceFieldsCiBuildActionsEnum[keyof typeof CiBuildActionsGetInstanceFieldsCiBuildActionsEnum];
/**
 * @export
 */
export const CiBuildActionsGetInstanceFieldsCiBuildRunsEnum = {
    Number: 'number',
    CreatedDate: 'createdDate',
    StartedDate: 'startedDate',
    FinishedDate: 'finishedDate',
    SourceCommit: 'sourceCommit',
    DestinationCommit: 'destinationCommit',
    IsPullRequestBuild: 'isPullRequestBuild',
    IssueCounts: 'issueCounts',
    ExecutionProgress: 'executionProgress',
    CompletionStatus: 'completionStatus',
    StartReason: 'startReason',
    CancelReason: 'cancelReason',
    Builds: 'builds',
    Workflow: 'workflow',
    Product: 'product',
    SourceBranchOrTag: 'sourceBranchOrTag',
    DestinationBranch: 'destinationBranch',
    Actions: 'actions',
    PullRequest: 'pullRequest'
} as const;
export type CiBuildActionsGetInstanceFieldsCiBuildRunsEnum = typeof CiBuildActionsGetInstanceFieldsCiBuildRunsEnum[keyof typeof CiBuildActionsGetInstanceFieldsCiBuildRunsEnum];
/**
 * @export
 */
export const CiBuildActionsGetInstanceIncludeEnum = {
    BuildRun: 'buildRun'
} as const;
export type CiBuildActionsGetInstanceIncludeEnum = typeof CiBuildActionsGetInstanceIncludeEnum[keyof typeof CiBuildActionsGetInstanceIncludeEnum];
/**
 * @export
 */
export const CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum = {
    IssueType: 'issueType',
    Message: 'message',
    FileSource: 'fileSource',
    Category: 'category'
} as const;
export type CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum = typeof CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum[keyof typeof CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum];
/**
 * @export
 */
export const CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum = {
    ClassName: 'className',
    Name: 'name',
    Status: 'status',
    FileSource: 'fileSource',
    Message: 'message',
    DestinationTestResults: 'destinationTestResults'
} as const;
export type CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum = typeof CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum[keyof typeof CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum];
