
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

import { mapValues } from '../runtime';
import type { CiBranchPatterns } from './CiBranchPatterns';
import {
    CiBranchPatternsFromJSON,
    CiBranchPatternsFromJSONTyped,
    CiBranchPatternsToJSON,
    CiBranchPatternsToJSONTyped,
} from './CiBranchPatterns';

/**
 * 
 * @export
 * @interface CiManualPullRequestStartCondition
 */
export interface CiManualPullRequestStartCondition {
    /**
     * 
     * @type {CiBranchPatterns}
     * @memberof CiManualPullRequestStartCondition
     */
    source?: CiBranchPatterns;
    /**
     * 
     * @type {CiBranchPatterns}
     * @memberof CiManualPullRequestStartCondition
     */
    destination?: CiBranchPatterns;
}

/**
 * Check if a given object implements the CiManualPullRequestStartCondition interface.
 */
export function instanceOfCiManualPullRequestStartCondition(value: object): value is CiManualPullRequestStartCondition {
    return true;
}

export function CiManualPullRequestStartConditionFromJSON(json: any): CiManualPullRequestStartCondition {
    return CiManualPullRequestStartConditionFromJSONTyped(json, false);
}

export function CiManualPullRequestStartConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiManualPullRequestStartCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'source': json['source'] == null ? undefined : CiBranchPatternsFromJSON(json['source']),
        'destination': json['destination'] == null ? undefined : CiBranchPatternsFromJSON(json['destination']),
    };
}

export function CiManualPullRequestStartConditionToJSON(json: any): CiManualPullRequestStartCondition {
    return CiManualPullRequestStartConditionToJSONTyped(json, false);
}

export function CiManualPullRequestStartConditionToJSONTyped(value?: CiManualPullRequestStartCondition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'source': CiBranchPatternsToJSON(value['source']),
        'destination': CiBranchPatternsToJSON(value['destination']),
    };
}
