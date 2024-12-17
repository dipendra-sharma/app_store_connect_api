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
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
    PagingInformationToJSONTyped,
} from './PagingInformation';
import type { AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData } from './AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData';
import {
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSONTyped,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON,
    AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSONTyped,
} from './AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData';

/**
 * 
 * @export
 * @interface AppStoreVersionExperimentV2RelationshipsControlVersions
 */
export interface AppStoreVersionExperimentV2RelationshipsControlVersions {
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppStoreVersionExperimentV2RelationshipsControlVersions
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData>}
     * @memberof AppStoreVersionExperimentV2RelationshipsControlVersions
     */
    data?: Array<AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionData>;
}

/**
 * Check if a given object implements the AppStoreVersionExperimentV2RelationshipsControlVersions interface.
 */
export function instanceOfAppStoreVersionExperimentV2RelationshipsControlVersions(value: object): value is AppStoreVersionExperimentV2RelationshipsControlVersions {
    return true;
}

export function AppStoreVersionExperimentV2RelationshipsControlVersionsFromJSON(json: any): AppStoreVersionExperimentV2RelationshipsControlVersions {
    return AppStoreVersionExperimentV2RelationshipsControlVersionsFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2RelationshipsControlVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentV2RelationshipsControlVersions {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': json['meta'] == null ? undefined : PagingInformationFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataFromJSON)),
    };
}

export function AppStoreVersionExperimentV2RelationshipsControlVersionsToJSON(json: any): AppStoreVersionExperimentV2RelationshipsControlVersions {
    return AppStoreVersionExperimentV2RelationshipsControlVersionsToJSONTyped(json, false);
}

export function AppStoreVersionExperimentV2RelationshipsControlVersionsToJSONTyped(value?: AppStoreVersionExperimentV2RelationshipsControlVersions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'meta': PagingInformationToJSON(value['meta']),
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AlternativeDistributionPackageCreateRequestDataRelationshipsAppStoreVersionDataToJSON)),
    };
}

