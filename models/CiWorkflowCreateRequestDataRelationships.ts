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
import type { CiWorkflowCreateRequestDataRelationshipsProduct } from './CiWorkflowCreateRequestDataRelationshipsProduct';
import {
    CiWorkflowCreateRequestDataRelationshipsProductFromJSON,
    CiWorkflowCreateRequestDataRelationshipsProductFromJSONTyped,
    CiWorkflowCreateRequestDataRelationshipsProductToJSON,
    CiWorkflowCreateRequestDataRelationshipsProductToJSONTyped,
} from './CiWorkflowCreateRequestDataRelationshipsProduct';
import type { CiWorkflowCreateRequestDataRelationshipsXcodeVersion } from './CiWorkflowCreateRequestDataRelationshipsXcodeVersion';
import {
    CiWorkflowCreateRequestDataRelationshipsXcodeVersionFromJSON,
    CiWorkflowCreateRequestDataRelationshipsXcodeVersionFromJSONTyped,
    CiWorkflowCreateRequestDataRelationshipsXcodeVersionToJSON,
    CiWorkflowCreateRequestDataRelationshipsXcodeVersionToJSONTyped,
} from './CiWorkflowCreateRequestDataRelationshipsXcodeVersion';
import type { CiWorkflowCreateRequestDataRelationshipsMacOsVersion } from './CiWorkflowCreateRequestDataRelationshipsMacOsVersion';
import {
    CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSON,
    CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSONTyped,
    CiWorkflowCreateRequestDataRelationshipsMacOsVersionToJSON,
    CiWorkflowCreateRequestDataRelationshipsMacOsVersionToJSONTyped,
} from './CiWorkflowCreateRequestDataRelationshipsMacOsVersion';
import type { CiWorkflowCreateRequestDataRelationshipsRepository } from './CiWorkflowCreateRequestDataRelationshipsRepository';
import {
    CiWorkflowCreateRequestDataRelationshipsRepositoryFromJSON,
    CiWorkflowCreateRequestDataRelationshipsRepositoryFromJSONTyped,
    CiWorkflowCreateRequestDataRelationshipsRepositoryToJSON,
    CiWorkflowCreateRequestDataRelationshipsRepositoryToJSONTyped,
} from './CiWorkflowCreateRequestDataRelationshipsRepository';

/**
 * 
 * @export
 * @interface CiWorkflowCreateRequestDataRelationships
 */
export interface CiWorkflowCreateRequestDataRelationships {
    /**
     * 
     * @type {CiWorkflowCreateRequestDataRelationshipsProduct}
     * @memberof CiWorkflowCreateRequestDataRelationships
     */
    product: CiWorkflowCreateRequestDataRelationshipsProduct;
    /**
     * 
     * @type {CiWorkflowCreateRequestDataRelationshipsRepository}
     * @memberof CiWorkflowCreateRequestDataRelationships
     */
    repository: CiWorkflowCreateRequestDataRelationshipsRepository;
    /**
     * 
     * @type {CiWorkflowCreateRequestDataRelationshipsXcodeVersion}
     * @memberof CiWorkflowCreateRequestDataRelationships
     */
    xcodeVersion: CiWorkflowCreateRequestDataRelationshipsXcodeVersion;
    /**
     * 
     * @type {CiWorkflowCreateRequestDataRelationshipsMacOsVersion}
     * @memberof CiWorkflowCreateRequestDataRelationships
     */
    macOsVersion: CiWorkflowCreateRequestDataRelationshipsMacOsVersion;
}

/**
 * Check if a given object implements the CiWorkflowCreateRequestDataRelationships interface.
 */
export function instanceOfCiWorkflowCreateRequestDataRelationships(value: object): value is CiWorkflowCreateRequestDataRelationships {
    if (!('product' in value) || value['product'] === undefined) return false;
    if (!('repository' in value) || value['repository'] === undefined) return false;
    if (!('xcodeVersion' in value) || value['xcodeVersion'] === undefined) return false;
    if (!('macOsVersion' in value) || value['macOsVersion'] === undefined) return false;
    return true;
}

export function CiWorkflowCreateRequestDataRelationshipsFromJSON(json: any): CiWorkflowCreateRequestDataRelationships {
    return CiWorkflowCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'product': CiWorkflowCreateRequestDataRelationshipsProductFromJSON(json['product']),
        'repository': CiWorkflowCreateRequestDataRelationshipsRepositoryFromJSON(json['repository']),
        'xcodeVersion': CiWorkflowCreateRequestDataRelationshipsXcodeVersionFromJSON(json['xcodeVersion']),
        'macOsVersion': CiWorkflowCreateRequestDataRelationshipsMacOsVersionFromJSON(json['macOsVersion']),
    };
}

export function CiWorkflowCreateRequestDataRelationshipsToJSON(json: any): CiWorkflowCreateRequestDataRelationships {
    return CiWorkflowCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function CiWorkflowCreateRequestDataRelationshipsToJSONTyped(value?: CiWorkflowCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'product': CiWorkflowCreateRequestDataRelationshipsProductToJSON(value['product']),
        'repository': CiWorkflowCreateRequestDataRelationshipsRepositoryToJSON(value['repository']),
        'xcodeVersion': CiWorkflowCreateRequestDataRelationshipsXcodeVersionToJSON(value['xcodeVersion']),
        'macOsVersion': CiWorkflowCreateRequestDataRelationshipsMacOsVersionToJSON(value['macOsVersion']),
    };
}

