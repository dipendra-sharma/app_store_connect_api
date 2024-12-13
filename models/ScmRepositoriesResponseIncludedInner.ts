
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

import type { ScmGitReference } from './ScmGitReference';
import {
    instanceOfScmGitReference,
    ScmGitReferenceFromJSON,
    ScmGitReferenceFromJSONTyped,
    ScmGitReferenceToJSON,
} from './ScmGitReference';
import type { ScmProvider } from './ScmProvider';
import {
    instanceOfScmProvider,
    ScmProviderFromJSON,
    ScmProviderFromJSONTyped,
    ScmProviderToJSON,
} from './ScmProvider';

/**
 * @type ScmRepositoriesResponseIncludedInner
 * 
 * @export
 */
export type ScmRepositoriesResponseIncludedInner = ScmGitReference | ScmProvider;

export function ScmRepositoriesResponseIncludedInnerFromJSON(json: any): ScmRepositoriesResponseIncludedInner {
    return ScmRepositoriesResponseIncludedInnerFromJSONTyped(json, false);
}

export function ScmRepositoriesResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScmRepositoriesResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfScmGitReference(json)) {
        return ScmGitReferenceFromJSONTyped(json, true);
    }
    if (instanceOfScmProvider(json)) {
        return ScmProviderFromJSONTyped(json, true);
    }

    return {} as any;
}

export function ScmRepositoriesResponseIncludedInnerToJSON(json: any): any {
    return ScmRepositoriesResponseIncludedInnerToJSONTyped(json, false);
}

export function ScmRepositoriesResponseIncludedInnerToJSONTyped(value?: ScmRepositoriesResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfScmGitReference(value)) {
        return ScmGitReferenceToJSON(value as ScmGitReference);
    }
    if (instanceOfScmProvider(value)) {
        return ScmProviderToJSON(value as ScmProvider);
    }

    return {};
}
