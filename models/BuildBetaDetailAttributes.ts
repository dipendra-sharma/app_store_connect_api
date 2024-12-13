
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
import type { InternalBetaState } from './InternalBetaState';
import {
    InternalBetaStateFromJSON,
    InternalBetaStateFromJSONTyped,
    InternalBetaStateToJSON,
    InternalBetaStateToJSONTyped,
} from './InternalBetaState';
import type { ExternalBetaState } from './ExternalBetaState';
import {
    ExternalBetaStateFromJSON,
    ExternalBetaStateFromJSONTyped,
    ExternalBetaStateToJSON,
    ExternalBetaStateToJSONTyped,
} from './ExternalBetaState';

/**
 * 
 * @export
 * @interface BuildBetaDetailAttributes
 */
export interface BuildBetaDetailAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof BuildBetaDetailAttributes
     */
    autoNotifyEnabled?: boolean;
    /**
     * 
     * @type {InternalBetaState}
     * @memberof BuildBetaDetailAttributes
     */
    internalBuildState?: InternalBetaState;
    /**
     * 
     * @type {ExternalBetaState}
     * @memberof BuildBetaDetailAttributes
     */
    externalBuildState?: ExternalBetaState;
}



/**
 * Check if a given object implements the BuildBetaDetailAttributes interface.
 */
export function instanceOfBuildBetaDetailAttributes(value: object): value is BuildBetaDetailAttributes {
    return true;
}

export function BuildBetaDetailAttributesFromJSON(json: any): BuildBetaDetailAttributes {
    return BuildBetaDetailAttributesFromJSONTyped(json, false);
}

export function BuildBetaDetailAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildBetaDetailAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'autoNotifyEnabled': json['autoNotifyEnabled'] == null ? undefined : json['autoNotifyEnabled'],
        'internalBuildState': json['internalBuildState'] == null ? undefined : InternalBetaStateFromJSON(json['internalBuildState']),
        'externalBuildState': json['externalBuildState'] == null ? undefined : ExternalBetaStateFromJSON(json['externalBuildState']),
    };
}

export function BuildBetaDetailAttributesToJSON(json: any): BuildBetaDetailAttributes {
    return BuildBetaDetailAttributesToJSONTyped(json, false);
}

export function BuildBetaDetailAttributesToJSONTyped(value?: BuildBetaDetailAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'autoNotifyEnabled': value['autoNotifyEnabled'],
        'internalBuildState': InternalBetaStateToJSON(value['internalBuildState']),
        'externalBuildState': ExternalBetaStateToJSON(value['externalBuildState']),
    };
}

