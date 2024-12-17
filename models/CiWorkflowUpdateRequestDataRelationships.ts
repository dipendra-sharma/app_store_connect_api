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
import type { CiWorkflowRelationshipsXcodeVersion } from './CiWorkflowRelationshipsXcodeVersion';
import {
    CiWorkflowRelationshipsXcodeVersionFromJSON,
    CiWorkflowRelationshipsXcodeVersionFromJSONTyped,
    CiWorkflowRelationshipsXcodeVersionToJSON,
    CiWorkflowRelationshipsXcodeVersionToJSONTyped,
} from './CiWorkflowRelationshipsXcodeVersion';
import type { CiWorkflowRelationshipsMacOsVersion } from './CiWorkflowRelationshipsMacOsVersion';
import {
    CiWorkflowRelationshipsMacOsVersionFromJSON,
    CiWorkflowRelationshipsMacOsVersionFromJSONTyped,
    CiWorkflowRelationshipsMacOsVersionToJSON,
    CiWorkflowRelationshipsMacOsVersionToJSONTyped,
} from './CiWorkflowRelationshipsMacOsVersion';

/**
 * 
 * @export
 * @interface CiWorkflowUpdateRequestDataRelationships
 */
export interface CiWorkflowUpdateRequestDataRelationships {
    /**
     * 
     * @type {CiWorkflowRelationshipsXcodeVersion}
     * @memberof CiWorkflowUpdateRequestDataRelationships
     */
    xcodeVersion?: CiWorkflowRelationshipsXcodeVersion;
    /**
     * 
     * @type {CiWorkflowRelationshipsMacOsVersion}
     * @memberof CiWorkflowUpdateRequestDataRelationships
     */
    macOsVersion?: CiWorkflowRelationshipsMacOsVersion;
}

/**
 * Check if a given object implements the CiWorkflowUpdateRequestDataRelationships interface.
 */
export function instanceOfCiWorkflowUpdateRequestDataRelationships(value: object): value is CiWorkflowUpdateRequestDataRelationships {
    return true;
}

export function CiWorkflowUpdateRequestDataRelationshipsFromJSON(json: any): CiWorkflowUpdateRequestDataRelationships {
    return CiWorkflowUpdateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function CiWorkflowUpdateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowUpdateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'xcodeVersion': json['xcodeVersion'] == null ? undefined : CiWorkflowRelationshipsXcodeVersionFromJSON(json['xcodeVersion']),
        'macOsVersion': json['macOsVersion'] == null ? undefined : CiWorkflowRelationshipsMacOsVersionFromJSON(json['macOsVersion']),
    };
}

export function CiWorkflowUpdateRequestDataRelationshipsToJSON(json: any): CiWorkflowUpdateRequestDataRelationships {
    return CiWorkflowUpdateRequestDataRelationshipsToJSONTyped(json, false);
}

export function CiWorkflowUpdateRequestDataRelationshipsToJSONTyped(value?: CiWorkflowUpdateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'xcodeVersion': CiWorkflowRelationshipsXcodeVersionToJSON(value['xcodeVersion']),
        'macOsVersion': CiWorkflowRelationshipsMacOsVersionToJSON(value['macOsVersion']),
    };
}

