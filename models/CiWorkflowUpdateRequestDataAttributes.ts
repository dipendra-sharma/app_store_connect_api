
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
 * @interface CiWorkflowUpdateRequestDataAttributes
 */
export interface CiWorkflowUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    description?: string;
    /**
     * 
     * @type {CiBranchStartCondition}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    branchStartCondition?: CiBranchStartCondition;
    /**
     * 
     * @type {CiTagStartCondition}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    tagStartCondition?: CiTagStartCondition;
    /**
     * 
     * @type {CiPullRequestStartCondition}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    pullRequestStartCondition?: CiPullRequestStartCondition;
    /**
     * 
     * @type {CiScheduledStartCondition}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    scheduledStartCondition?: CiScheduledStartCondition;
    /**
     * 
     * @type {CiManualBranchStartCondition}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    manualBranchStartCondition?: CiManualBranchStartCondition;
    /**
     * 
     * @type {CiManualTagStartCondition}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    manualTagStartCondition?: CiManualTagStartCondition;
    /**
     * 
     * @type {CiManualPullRequestStartCondition}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    manualPullRequestStartCondition?: CiManualPullRequestStartCondition;
    /**
     * 
     * @type {Array<CiAction>}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    actions?: Array<CiAction>;
    /**
     * 
     * @type {boolean}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    isEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    isLockedForEditing?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    clean?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CiWorkflowUpdateRequestDataAttributes
     */
    containerFilePath?: string;
}

/**
 * Check if a given object implements the CiWorkflowUpdateRequestDataAttributes interface.
 */
export function instanceOfCiWorkflowUpdateRequestDataAttributes(value: object): value is CiWorkflowUpdateRequestDataAttributes {
    return true;
}

export function CiWorkflowUpdateRequestDataAttributesFromJSON(json: any): CiWorkflowUpdateRequestDataAttributes {
    return CiWorkflowUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function CiWorkflowUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowUpdateRequestDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'branchStartCondition': json['branchStartCondition'] == null ? undefined : CiBranchStartConditionFromJSON(json['branchStartCondition']),
        'tagStartCondition': json['tagStartCondition'] == null ? undefined : CiTagStartConditionFromJSON(json['tagStartCondition']),
        'pullRequestStartCondition': json['pullRequestStartCondition'] == null ? undefined : CiPullRequestStartConditionFromJSON(json['pullRequestStartCondition']),
        'scheduledStartCondition': json['scheduledStartCondition'] == null ? undefined : CiScheduledStartConditionFromJSON(json['scheduledStartCondition']),
        'manualBranchStartCondition': json['manualBranchStartCondition'] == null ? undefined : CiManualBranchStartConditionFromJSON(json['manualBranchStartCondition']),
        'manualTagStartCondition': json['manualTagStartCondition'] == null ? undefined : CiManualTagStartConditionFromJSON(json['manualTagStartCondition']),
        'manualPullRequestStartCondition': json['manualPullRequestStartCondition'] == null ? undefined : CiManualPullRequestStartConditionFromJSON(json['manualPullRequestStartCondition']),
        'actions': json['actions'] == null ? undefined : ((json['actions'] as Array<any>).map(CiActionFromJSON)),
        'isEnabled': json['isEnabled'] == null ? undefined : json['isEnabled'],
        'isLockedForEditing': json['isLockedForEditing'] == null ? undefined : json['isLockedForEditing'],
        'clean': json['clean'] == null ? undefined : json['clean'],
        'containerFilePath': json['containerFilePath'] == null ? undefined : json['containerFilePath'],
    };
}

export function CiWorkflowUpdateRequestDataAttributesToJSON(json: any): CiWorkflowUpdateRequestDataAttributes {
    return CiWorkflowUpdateRequestDataAttributesToJSONTyped(json, false);
}

export function CiWorkflowUpdateRequestDataAttributesToJSONTyped(value?: CiWorkflowUpdateRequestDataAttributes | null, ignoreDiscriminator: boolean = false): any {
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
        'actions': value['actions'] == null ? undefined : ((value['actions'] as Array<any>).map(CiActionToJSON)),
        'isEnabled': value['isEnabled'],
        'isLockedForEditing': value['isLockedForEditing'],
        'clean': value['clean'],
        'containerFilePath': value['containerFilePath'],
    };
}

