
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
/**
 * 
 * @export
 * @interface CiProductRelationshipsPrimaryRepositoriesDataInner
 */
export interface CiProductRelationshipsPrimaryRepositoriesDataInner {
    /**
     * 
     * @type {string}
     * @memberof CiProductRelationshipsPrimaryRepositoriesDataInner
     */
    type: CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CiProductRelationshipsPrimaryRepositoriesDataInner
     */
    id: string;
}


/**
 * @export
 */
export const CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum = {
    ScmRepositories: 'scmRepositories'
} as const;
export type CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum = typeof CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum[keyof typeof CiProductRelationshipsPrimaryRepositoriesDataInnerTypeEnum];


/**
 * Check if a given object implements the CiProductRelationshipsPrimaryRepositoriesDataInner interface.
 */
export function instanceOfCiProductRelationshipsPrimaryRepositoriesDataInner(value: object): value is CiProductRelationshipsPrimaryRepositoriesDataInner {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSON(json: any): CiProductRelationshipsPrimaryRepositoriesDataInner {
    return CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSONTyped(json, false);
}

export function CiProductRelationshipsPrimaryRepositoriesDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductRelationshipsPrimaryRepositoriesDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function CiProductRelationshipsPrimaryRepositoriesDataInnerToJSON(json: any): CiProductRelationshipsPrimaryRepositoriesDataInner {
    return CiProductRelationshipsPrimaryRepositoriesDataInnerToJSONTyped(json, false);
}

export function CiProductRelationshipsPrimaryRepositoriesDataInnerToJSONTyped(value?: CiProductRelationshipsPrimaryRepositoriesDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

