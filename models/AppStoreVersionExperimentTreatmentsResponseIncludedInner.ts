
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

import type { AppStoreVersionExperiment } from './AppStoreVersionExperiment';
import {
    instanceOfAppStoreVersionExperiment,
    AppStoreVersionExperimentFromJSON,
    AppStoreVersionExperimentFromJSONTyped,
    AppStoreVersionExperimentToJSON,
} from './AppStoreVersionExperiment';
import type { AppStoreVersionExperimentTreatmentLocalization } from './AppStoreVersionExperimentTreatmentLocalization';
import {
    instanceOfAppStoreVersionExperimentTreatmentLocalization,
    AppStoreVersionExperimentTreatmentLocalizationFromJSON,
    AppStoreVersionExperimentTreatmentLocalizationFromJSONTyped,
    AppStoreVersionExperimentTreatmentLocalizationToJSON,
} from './AppStoreVersionExperimentTreatmentLocalization';
import type { AppStoreVersionExperimentV2 } from './AppStoreVersionExperimentV2';
import {
    instanceOfAppStoreVersionExperimentV2,
    AppStoreVersionExperimentV2FromJSON,
    AppStoreVersionExperimentV2FromJSONTyped,
    AppStoreVersionExperimentV2ToJSON,
} from './AppStoreVersionExperimentV2';

/**
 * @type AppStoreVersionExperimentTreatmentsResponseIncludedInner
 * 
 * @export
 */
export type AppStoreVersionExperimentTreatmentsResponseIncludedInner = AppStoreVersionExperiment | AppStoreVersionExperimentTreatmentLocalization | AppStoreVersionExperimentV2;

export function AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSON(json: any): AppStoreVersionExperimentTreatmentsResponseIncludedInner {
    return AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionExperimentTreatmentsResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfAppStoreVersionExperiment(json)) {
        return AppStoreVersionExperimentFromJSONTyped(json, true);
    }
    if (instanceOfAppStoreVersionExperimentTreatmentLocalization(json)) {
        return AppStoreVersionExperimentTreatmentLocalizationFromJSONTyped(json, true);
    }
    if (instanceOfAppStoreVersionExperimentV2(json)) {
        return AppStoreVersionExperimentV2FromJSONTyped(json, true);
    }

    return {} as any;
}

export function AppStoreVersionExperimentTreatmentsResponseIncludedInnerToJSON(json: any): any {
    return AppStoreVersionExperimentTreatmentsResponseIncludedInnerToJSONTyped(json, false);
}

export function AppStoreVersionExperimentTreatmentsResponseIncludedInnerToJSONTyped(value?: AppStoreVersionExperimentTreatmentsResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfAppStoreVersionExperiment(value)) {
        return AppStoreVersionExperimentToJSON(value as AppStoreVersionExperiment);
    }
    if (instanceOfAppStoreVersionExperimentTreatmentLocalization(value)) {
        return AppStoreVersionExperimentTreatmentLocalizationToJSON(value as AppStoreVersionExperimentTreatmentLocalization);
    }
    if (instanceOfAppStoreVersionExperimentV2(value)) {
        return AppStoreVersionExperimentV2ToJSON(value as AppStoreVersionExperimentV2);
    }

    return {};
}
