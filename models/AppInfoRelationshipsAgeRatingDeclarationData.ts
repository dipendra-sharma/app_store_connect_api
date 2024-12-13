
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
 * @interface AppInfoRelationshipsAgeRatingDeclarationData
 */
export interface AppInfoRelationshipsAgeRatingDeclarationData {
    /**
     * 
     * @type {string}
     * @memberof AppInfoRelationshipsAgeRatingDeclarationData
     */
    type: AppInfoRelationshipsAgeRatingDeclarationDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppInfoRelationshipsAgeRatingDeclarationData
     */
    id: string;
}


/**
 * @export
 */
export const AppInfoRelationshipsAgeRatingDeclarationDataTypeEnum = {
    AgeRatingDeclarations: 'ageRatingDeclarations'
} as const;
export type AppInfoRelationshipsAgeRatingDeclarationDataTypeEnum = typeof AppInfoRelationshipsAgeRatingDeclarationDataTypeEnum[keyof typeof AppInfoRelationshipsAgeRatingDeclarationDataTypeEnum];


/**
 * Check if a given object implements the AppInfoRelationshipsAgeRatingDeclarationData interface.
 */
export function instanceOfAppInfoRelationshipsAgeRatingDeclarationData(value: object): value is AppInfoRelationshipsAgeRatingDeclarationData {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function AppInfoRelationshipsAgeRatingDeclarationDataFromJSON(json: any): AppInfoRelationshipsAgeRatingDeclarationData {
    return AppInfoRelationshipsAgeRatingDeclarationDataFromJSONTyped(json, false);
}

export function AppInfoRelationshipsAgeRatingDeclarationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoRelationshipsAgeRatingDeclarationData {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppInfoRelationshipsAgeRatingDeclarationDataToJSON(json: any): AppInfoRelationshipsAgeRatingDeclarationData {
    return AppInfoRelationshipsAgeRatingDeclarationDataToJSONTyped(json, false);
}

export function AppInfoRelationshipsAgeRatingDeclarationDataToJSONTyped(value?: AppInfoRelationshipsAgeRatingDeclarationData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'id': value['id'],
    };
}

