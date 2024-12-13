
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
 * @interface BuildRelationshipsBuildBetaDetailData
 */
export interface BuildRelationshipsBuildBetaDetailData {
    /**
     * 
     * @type {string}
     * @memberof BuildRelationshipsBuildBetaDetailData
     */
    type: BuildRelationshipsBuildBetaDetailDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BuildRelationshipsBuildBetaDetailData
     */
    id: string;
}


/**
 * @export
 */
export const BuildRelationshipsBuildBetaDetailDataTypeEnum = {
    BuildBetaDetails: 'buildBetaDetails'
} as const;
export type BuildRelationshipsBuildBetaDetailDataTypeEnum = typeof BuildRelationshipsBuildBetaDetailDataTypeEnum[keyof typeof BuildRelationshipsBuildBetaDetailDataTypeEnum];


/**
 * Check if a given object implements the BuildRelationshipsBuildBetaDetailData interface.
 */
export function instanceOfBuildRelationshipsBuildBetaDetailData(value: object): value is BuildRelationshipsBuildBetaDetailData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function BuildRelationshipsBuildBetaDetailDataFromJSON(json: any): BuildRelationshipsBuildBetaDetailData {
    return BuildRelationshipsBuildBetaDetailDataFromJSONTyped(json, false);
}

export function BuildRelationshipsBuildBetaDetailDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildRelationshipsBuildBetaDetailData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function BuildRelationshipsBuildBetaDetailDataToJSON(json: any): BuildRelationshipsBuildBetaDetailData {
    return BuildRelationshipsBuildBetaDetailDataToJSONTyped(json, false);
}

export function BuildRelationshipsBuildBetaDetailDataToJSONTyped(value?: BuildRelationshipsBuildBetaDetailData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}
