
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
import type { CiBranchPatternsPatternsInner } from './CiBranchPatternsPatternsInner';
import {
    CiBranchPatternsPatternsInnerFromJSON,
    CiBranchPatternsPatternsInnerFromJSONTyped,
    CiBranchPatternsPatternsInnerToJSON,
    CiBranchPatternsPatternsInnerToJSONTyped,
} from './CiBranchPatternsPatternsInner';

/**
 * 
 * @export
 * @interface CiBranchPatterns
 */
export interface CiBranchPatterns {
    /**
     * 
     * @type {boolean}
     * @memberof CiBranchPatterns
     */
    isAllMatch?: boolean;
    /**
     * 
     * @type {Array<CiBranchPatternsPatternsInner>}
     * @memberof CiBranchPatterns
     */
    patterns?: Array<CiBranchPatternsPatternsInner>;
}

/**
 * Check if a given object implements the CiBranchPatterns interface.
 */
export function instanceOfCiBranchPatterns(value: object): value is CiBranchPatterns {
    return true;
}

export function CiBranchPatternsFromJSON(json: any): CiBranchPatterns {
    return CiBranchPatternsFromJSONTyped(json, false);
}

export function CiBranchPatternsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBranchPatterns {
    if (json == null) {
        return json;
    }
    return {
        
        'isAllMatch': json['isAllMatch'] == null ? undefined : json['isAllMatch'],
        'patterns': json['patterns'] == null ? undefined : ((json['patterns'] as Array<any>).map(CiBranchPatternsPatternsInnerFromJSON)),
    };
}

export function CiBranchPatternsToJSON(json: any): CiBranchPatterns {
    return CiBranchPatternsToJSONTyped(json, false);
}

export function CiBranchPatternsToJSONTyped(value?: CiBranchPatterns | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'isAllMatch': value['isAllMatch'],
        'patterns': value['patterns'] == null ? undefined : ((value['patterns'] as Array<any>).map(CiBranchPatternsPatternsInnerToJSON)),
    };
}

