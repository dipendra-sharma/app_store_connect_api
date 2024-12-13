
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
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsApp } from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSONTyped,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';

/**
 * 
 * @export
 * @interface AlternativeDistributionKeyCreateRequestDataRelationships
 */
export interface AlternativeDistributionKeyCreateRequestDataRelationships {
    /**
     * 
     * @type {AlternativeDistributionKeyCreateRequestDataRelationshipsApp}
     * @memberof AlternativeDistributionKeyCreateRequestDataRelationships
     */
    app?: AlternativeDistributionKeyCreateRequestDataRelationshipsApp;
}

/**
 * Check if a given object implements the AlternativeDistributionKeyCreateRequestDataRelationships interface.
 */
export function instanceOfAlternativeDistributionKeyCreateRequestDataRelationships(value: object): value is AlternativeDistributionKeyCreateRequestDataRelationships {
    return true;
}

export function AlternativeDistributionKeyCreateRequestDataRelationshipsFromJSON(json: any): AlternativeDistributionKeyCreateRequestDataRelationships {
    return AlternativeDistributionKeyCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function AlternativeDistributionKeyCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlternativeDistributionKeyCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': json['app'] == null ? undefined : AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON(json['app']),
    };
}

export function AlternativeDistributionKeyCreateRequestDataRelationshipsToJSON(json: any): AlternativeDistributionKeyCreateRequestDataRelationships {
    return AlternativeDistributionKeyCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function AlternativeDistributionKeyCreateRequestDataRelationshipsToJSONTyped(value?: AlternativeDistributionKeyCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON(value['app']),
    };
}
