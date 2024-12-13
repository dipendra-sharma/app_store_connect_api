
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
import type { CiFilesAndFoldersRule } from './CiFilesAndFoldersRule';
import {
    CiFilesAndFoldersRuleFromJSON,
    CiFilesAndFoldersRuleFromJSONTyped,
    CiFilesAndFoldersRuleToJSON,
    CiFilesAndFoldersRuleToJSONTyped,
} from './CiFilesAndFoldersRule';

/**
 * 
 * @export
 * @interface CiPullRequestStartCondition
 */
export interface CiPullRequestStartCondition {
    /**
     * 
     * @type {CiBranchPatterns}
     * @memberof CiPullRequestStartCondition
     */
    source?: CiBranchPatterns;
    /**
     * 
     * @type {CiBranchPatterns}
     * @memberof CiPullRequestStartCondition
     */
    destination?: CiBranchPatterns;
    /**
     * 
     * @type {CiFilesAndFoldersRule}
     * @memberof CiPullRequestStartCondition
     */
    filesAndFoldersRule?: CiFilesAndFoldersRule;
    /**
     * 
     * @type {boolean}
     * @memberof CiPullRequestStartCondition
     */
    autoCancel?: boolean;
}

/**
 * Check if a given object implements the CiPullRequestStartCondition interface.
 */
export function instanceOfCiPullRequestStartCondition(value: object): value is CiPullRequestStartCondition {
    return true;
}

export function CiPullRequestStartConditionFromJSON(json: any): CiPullRequestStartCondition {
    return CiPullRequestStartConditionFromJSONTyped(json, false);
}

export function CiPullRequestStartConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiPullRequestStartCondition {
    if (json == null) {
        return json;
    }
    return {
        
        'source': json['source'] == null ? undefined : CiBranchPatternsFromJSON(json['source']),
        'destination': json['destination'] == null ? undefined : CiBranchPatternsFromJSON(json['destination']),
        'filesAndFoldersRule': json['filesAndFoldersRule'] == null ? undefined : CiFilesAndFoldersRuleFromJSON(json['filesAndFoldersRule']),
        'autoCancel': json['autoCancel'] == null ? undefined : json['autoCancel'],
    };
}

export function CiPullRequestStartConditionToJSON(json: any): CiPullRequestStartCondition {
    return CiPullRequestStartConditionToJSONTyped(json, false);
}

export function CiPullRequestStartConditionToJSONTyped(value?: CiPullRequestStartCondition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'source': CiBranchPatternsToJSON(value['source']),
        'destination': CiBranchPatternsToJSON(value['destination']),
        'filesAndFoldersRule': CiFilesAndFoldersRuleToJSON(value['filesAndFoldersRule']),
        'autoCancel': value['autoCancel'],
    };
}
