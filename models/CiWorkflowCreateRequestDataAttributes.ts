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
import type { CiManualTagStartCondition } from './CiManualTagStartCondition';
import {
    CiManualTagStartConditionFromJSON,
    CiManualTagStartConditionFromJSONTyped,
    CiManualTagStartConditionToJSON,
    CiManualTagStartConditionToJSONTyped,
} from './CiManualTagStartCondition';
import type { CiManualBranchStartCondition } from './CiManualBranchStartCondition';
import {
    CiManualBranchStartConditionFromJSON,
    CiManualBranchStartConditionFromJSONTyped,
    CiManualBranchStartConditionToJSON,
    CiManualBranchStartConditionToJSONTyped,
} from './CiManualBranchStartCondition';
import type { CiTagStartCondition } from './CiTagStartCondition';
import {
    CiTagStartConditionFromJSON,
    CiTagStartConditionFromJSONTyped,
    CiTagStartConditionToJSON,
    CiTagStartConditionToJSONTyped,
} from './CiTagStartCondition';
import type { CiBranchStartCondition } from './CiBranchStartCondition';
import {
    CiBranchStartConditionFromJSON,
    CiBranchStartConditionFromJSONTyped,
    CiBranchStartConditionToJSON,
    CiBranchStartConditionToJSONTyped,
} from './CiBranchStartCondition';
import type { CiScheduledStartCondition } from './CiScheduledStartCondition';
import {
    CiScheduledStartConditionFromJSON,
    CiScheduledStartConditionFromJSONTyped,
    CiScheduledStartConditionToJSON,
    CiScheduledStartConditionToJSONTyped,
} from './CiScheduledStartCondition';
import type { CiManualPullRequestStartCondition } from './CiManualPullRequestStartCondition';
import {
    CiManualPullRequestStartConditionFromJSON,
    CiManualPullRequestStartConditionFromJSONTyped,
    CiManualPullRequestStartConditionToJSON,
    CiManualPullRequestStartConditionToJSONTyped,
} from './CiManualPullRequestStartCondition';
import type { CiAction } from './CiAction';
import {
    CiActionFromJSON,
    CiActionFromJSONTyped,
    CiActionToJSON,
    CiActionToJSONTyped,
} from './CiAction';
import type { CiPullRequestStartCondition } from './CiPullRequestStartCondition';
import {
    CiPullRequestStartConditionFromJSON,
    CiPullRequestStartConditionFromJSONTyped,
    CiPullRequestStartConditionToJSON,
    CiPullRequestStartConditionToJSONTyped,
} from './CiPullRequestStartCondition';

/**
 * 
 * @export
 * @interface CiWorkflowCreateRequestDataAttributes
 */
export interface CiWorkflowCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    description: string;
    /**
     * 
     * @type {CiBranchStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    branchStartCondition?: CiBranchStartCondition;
    /**
     * 
     * @type {CiTagStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    tagStartCondition?: CiTagStartCondition;
    /**
     * 
     * @type {CiPullRequestStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    pullRequestStartCondition?: CiPullRequestStartCondition;
    /**
     * 
     * @type {CiScheduledStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    scheduledStartCondition?: CiScheduledStartCondition;
    /**
     * 
     * @type {CiManualBranchStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    manualBranchStartCondition?: CiManualBranchStartCondition;
    /**
     * 
     * @type {CiManualTagStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    manualTagStartCondition?: CiManualTagStartCondition;
    /**
     * 
     * @type {CiManualPullRequestStartCondition}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    manualPullRequestStartCondition?: CiManualPullRequestStartCondition;
    /**
     * 
     * @type {Array<CiAction>}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    actions: Array<CiAction>;
    /**
     * 
     * @type {boolean}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    isEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    isLockedForEditing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    clean: boolean;
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowCreateRequestDataAttributes
     */
    containerFilePath: string;
}

/**
 * Check if a given object implements the CiWorkflowCreateRequestDataAttributes interface.
 */
export function instanceOfCiWorkflowCreateRequestDataAttributes(value: object): value is CiWorkflowCreateRequestDataAttributes {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('actions' in value) || value['actions'] === undefined) return false;
    if (!('isEnabled' in value) || value['isEnabled'] === undefined) return false;
    if (!('clean' in value) || value['clean'] === undefined) return false;
    if (!('containerFilePath' in value) || value['containerFilePath'] === undefined) return false;
    return true;
}

export function CiWorkflowCreateRequestDataAttributesFromJSON(json: any): CiWorkflowCreateRequestDataAttributes {
    return CiWorkflowCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowCreateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'branchStartCondition': json['branchStartCondition'] == null ? undefined : CiBranchStartConditionFromJSON(json['branchStartCondition']),
        'tagStartCondition': json['tagStartCondition'] == null ? undefined : CiTagStartConditionFromJSON(json['tagStartCondition']),
        'pullRequestStartCondition': json['pullRequestStartCondition'] == null ? undefined : CiPullRequestStartConditionFromJSON(json['pullRequestStartCondition']),
        'scheduledStartCondition': json['scheduledStartCondition'] == null ? undefined : CiScheduledStartConditionFromJSON(json['scheduledStartCondition']),
        'manualBranchStartCondition': json['manualBranchStartCondition'] == null ? undefined : CiManualBranchStartConditionFromJSON(json['manualBranchStartCondition']),
        'manualTagStartCondition': json['manualTagStartCondition'] == null ? undefined : CiManualTagStartConditionFromJSON(json['manualTagStartCondition']),
        'manualPullRequestStartCondition': json['manualPullRequestStartCondition'] == null ? undefined : CiManualPullRequestStartConditionFromJSON(json['manualPullRequestStartCondition']),
        'actions': ((json['actions'] as Array<any>).map(CiActionFromJSON)),
        'isEnabled': json['isEnabled'],
        'isLockedForEditing': json['isLockedForEditing'] == null ? undefined : json['isLockedForEditing'],
        'clean': json['clean'],
        'containerFilePath': json['containerFilePath'],
    };
}

export function CiWorkflowCreateRequestDataAttributesToJSON(json: any): CiWorkflowCreateRequestDataAttributes {
    return CiWorkflowCreateRequestDataAttributesToJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataAttributesToJSONTyped(value?: CiWorkflowCreateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'branchStartCondition': CiBranchStartConditionToJSON(value['branchStartCondition']),
        'tagStartCondition': CiTagStartConditionToJSON(value['tagStartCondition']),
        'pullRequestStartCondition': CiPullRequestStartConditionToJSON(value['pullRequestStartCondition']),
        'scheduledStartCondition': CiScheduledStartConditionToJSON(value['scheduledStartCondition']),
        'manualBranchStartCondition': CiManualBranchStartConditionToJSON(value['manualBranchStartCondition']),
        'manualTagStartCondition': CiManualTagStartConditionToJSON(value['manualTagStartCondition']),
        'manualPullRequestStartCondition': CiManualPullRequestStartConditionToJSON(value['manualPullRequestStartCondition']),
        'actions': ((value['actions'] as Array<any>).map(CiActionToJSON)),
        'isEnabled': value['isEnabled'],
        'isLockedForEditing': value['isLockedForEditing'],
        'clean': value['clean'],
        'containerFilePath': value['containerFilePath'],
    };
}

