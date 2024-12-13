
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
import type { AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion } from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
import {
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSONTyped,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON,
    AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSONTyped,
} from './AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion';
import type { AppEventLocalizationRelationshipsAppEvent } from './AppEventLocalizationRelationshipsAppEvent';
import {
    AppEventLocalizationRelationshipsAppEventFromJSON,
    AppEventLocalizationRelationshipsAppEventFromJSONTyped,
    AppEventLocalizationRelationshipsAppEventToJSON,
    AppEventLocalizationRelationshipsAppEventToJSONTyped,
} from './AppEventLocalizationRelationshipsAppEvent';
import type { AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion } from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion';
import {
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSON,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSONTyped,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionToJSON,
    AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionToJSONTyped,
} from './AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion';
import type { ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission } from './ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission';
import {
    ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmissionFromJSON,
    ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmissionFromJSONTyped,
    ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmissionToJSON,
    ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmissionToJSONTyped,
} from './ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission';
import type { AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment } from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment';
import {
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSON,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSONTyped,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSON,
    AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSONTyped,
} from './AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment';

/**
 * 
 * @export
 * @interface ReviewSubmissionItemCreateRequestDataRelationships
 */
export interface ReviewSubmissionItemCreateRequestDataRelationships {
    /**
     * 
     * @type {ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission}
     * @memberof ReviewSubmissionItemCreateRequestDataRelationships
     */
    reviewSubmission: ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmission;
    /**
     * 
     * @type {AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion}
     * @memberof ReviewSubmissionItemCreateRequestDataRelationships
     */
    appStoreVersion?: AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion;
    /**
     * 
     * @type {AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion}
     * @memberof ReviewSubmissionItemCreateRequestDataRelationships
     */
    appCustomProductPageVersion?: AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersion;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment}
     * @memberof ReviewSubmissionItemCreateRequestDataRelationships
     */
    appStoreVersionExperiment?: AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment;
    /**
     * 
     * @type {AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment}
     * @memberof ReviewSubmissionItemCreateRequestDataRelationships
     */
    appStoreVersionExperimentV2?: AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperiment;
    /**
     * 
     * @type {AppEventLocalizationRelationshipsAppEvent}
     * @memberof ReviewSubmissionItemCreateRequestDataRelationships
     */
    appEvent?: AppEventLocalizationRelationshipsAppEvent;
}

/**
 * Check if a given object implements the ReviewSubmissionItemCreateRequestDataRelationships interface.
 */
export function instanceOfReviewSubmissionItemCreateRequestDataRelationships(value: object): value is ReviewSubmissionItemCreateRequestDataRelationships {
    if (!('reviewSubmission' in value) || value['reviewSubmission'] === undefined) return false;
    return true;
}

export function ReviewSubmissionItemCreateRequestDataRelationshipsFromJSON(json: any): ReviewSubmissionItemCreateRequestDataRelationships {
    return ReviewSubmissionItemCreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function ReviewSubmissionItemCreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionItemCreateRequestDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'reviewSubmission': ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmissionFromJSON(json['reviewSubmission']),
        'appStoreVersion': json['appStoreVersion'] == null ? undefined : AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON(json['appStoreVersion']),
        'appCustomProductPageVersion': json['appCustomProductPageVersion'] == null ? undefined : AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionFromJSON(json['appCustomProductPageVersion']),
        'appStoreVersionExperiment': json['appStoreVersionExperiment'] == null ? undefined : AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSON(json['appStoreVersionExperiment']),
        'appStoreVersionExperimentV2': json['appStoreVersionExperimentV2'] == null ? undefined : AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentFromJSON(json['appStoreVersionExperimentV2']),
        'appEvent': json['appEvent'] == null ? undefined : AppEventLocalizationRelationshipsAppEventFromJSON(json['appEvent']),
    };
}

export function ReviewSubmissionItemCreateRequestDataRelationshipsToJSON(json: any): ReviewSubmissionItemCreateRequestDataRelationships {
    return ReviewSubmissionItemCreateRequestDataRelationshipsToJSONTyped(json, false);
}

export function ReviewSubmissionItemCreateRequestDataRelationshipsToJSONTyped(value?: ReviewSubmissionItemCreateRequestDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'reviewSubmission': ReviewSubmissionItemCreateRequestDataRelationshipsReviewSubmissionToJSON(value['reviewSubmission']),
        'appStoreVersion': AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON(value['appStoreVersion']),
        'appCustomProductPageVersion': AppCustomProductPageLocalizationRelationshipsAppCustomProductPageVersionToJSON(value['appCustomProductPageVersion']),
        'appStoreVersionExperiment': AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSON(value['appStoreVersionExperiment']),
        'appStoreVersionExperimentV2': AppStoreVersionExperimentTreatmentRelationshipsAppStoreVersionExperimentToJSON(value['appStoreVersionExperimentV2']),
        'appEvent': AppEventLocalizationRelationshipsAppEventToJSON(value['appEvent']),
    };
}
