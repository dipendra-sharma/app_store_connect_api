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
import type { AppStoreVersionRelationshipsAppStoreVersionPhasedRelease } from './AppStoreVersionRelationshipsAppStoreVersionPhasedRelease';
import {
    AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSON,
    AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSONTyped,
    AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseToJSON,
    AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseToJSONTyped,
} from './AppStoreVersionRelationshipsAppStoreVersionPhasedRelease';
import type { AppStoreVersionRelationshipsRoutingAppCoverage } from './AppStoreVersionRelationshipsRoutingAppCoverage';
import {
    AppStoreVersionRelationshipsRoutingAppCoverageFromJSON,
    AppStoreVersionRelationshipsRoutingAppCoverageFromJSONTyped,
    AppStoreVersionRelationshipsRoutingAppCoverageToJSON,
    AppStoreVersionRelationshipsRoutingAppCoverageToJSONTyped,
} from './AppStoreVersionRelationshipsRoutingAppCoverage';
import type { AppStoreVersionRelationshipsAppStoreVersionExperiments } from './AppStoreVersionRelationshipsAppStoreVersionExperiments';
import {
    AppStoreVersionRelationshipsAppStoreVersionExperimentsFromJSON,
    AppStoreVersionRelationshipsAppStoreVersionExperimentsFromJSONTyped,
    AppStoreVersionRelationshipsAppStoreVersionExperimentsToJSON,
    AppStoreVersionRelationshipsAppStoreVersionExperimentsToJSONTyped,
} from './AppStoreVersionRelationshipsAppStoreVersionExperiments';
import type { AppStoreVersionRelationshipsBuild } from './AppStoreVersionRelationshipsBuild';
import {
    AppStoreVersionRelationshipsBuildFromJSON,
    AppStoreVersionRelationshipsBuildFromJSONTyped,
    AppStoreVersionRelationshipsBuildToJSON,
    AppStoreVersionRelationshipsBuildToJSONTyped,
} from './AppStoreVersionRelationshipsBuild';
import type { AppStoreVersionRelationshipsAgeRatingDeclaration } from './AppStoreVersionRelationshipsAgeRatingDeclaration';
import {
    AppStoreVersionRelationshipsAgeRatingDeclarationFromJSON,
    AppStoreVersionRelationshipsAgeRatingDeclarationFromJSONTyped,
    AppStoreVersionRelationshipsAgeRatingDeclarationToJSON,
    AppStoreVersionRelationshipsAgeRatingDeclarationToJSONTyped,
} from './AppStoreVersionRelationshipsAgeRatingDeclaration';
import type { AppStoreVersionRelationshipsAppClipDefaultExperience } from './AppStoreVersionRelationshipsAppClipDefaultExperience';
import {
    AppStoreVersionRelationshipsAppClipDefaultExperienceFromJSON,
    AppStoreVersionRelationshipsAppClipDefaultExperienceFromJSONTyped,
    AppStoreVersionRelationshipsAppClipDefaultExperienceToJSON,
    AppStoreVersionRelationshipsAppClipDefaultExperienceToJSONTyped,
} from './AppStoreVersionRelationshipsAppClipDefaultExperience';
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsApp } from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSONTyped,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import type { AnalyticsReportInstanceRelationshipsSegments } from './AnalyticsReportInstanceRelationshipsSegments';
import {
    AnalyticsReportInstanceRelationshipsSegmentsFromJSON,
    AnalyticsReportInstanceRelationshipsSegmentsFromJSONTyped,
    AnalyticsReportInstanceRelationshipsSegmentsToJSON,
    AnalyticsReportInstanceRelationshipsSegmentsToJSONTyped,
} from './AnalyticsReportInstanceRelationshipsSegments';
import type { AppStoreVersionRelationshipsAppStoreVersionLocalizations } from './AppStoreVersionRelationshipsAppStoreVersionLocalizations';
import {
    AppStoreVersionRelationshipsAppStoreVersionLocalizationsFromJSON,
    AppStoreVersionRelationshipsAppStoreVersionLocalizationsFromJSONTyped,
    AppStoreVersionRelationshipsAppStoreVersionLocalizationsToJSON,
    AppStoreVersionRelationshipsAppStoreVersionLocalizationsToJSONTyped,
} from './AppStoreVersionRelationshipsAppStoreVersionLocalizations';
import type { AppStoreVersionRelationshipsGameCenterAppVersion } from './AppStoreVersionRelationshipsGameCenterAppVersion';
import {
    AppStoreVersionRelationshipsGameCenterAppVersionFromJSON,
    AppStoreVersionRelationshipsGameCenterAppVersionFromJSONTyped,
    AppStoreVersionRelationshipsGameCenterAppVersionToJSON,
    AppStoreVersionRelationshipsGameCenterAppVersionToJSONTyped,
} from './AppStoreVersionRelationshipsGameCenterAppVersion';
import type { AppStoreVersionRelationshipsAlternativeDistributionPackage } from './AppStoreVersionRelationshipsAlternativeDistributionPackage';
import {
    AppStoreVersionRelationshipsAlternativeDistributionPackageFromJSON,
    AppStoreVersionRelationshipsAlternativeDistributionPackageFromJSONTyped,
    AppStoreVersionRelationshipsAlternativeDistributionPackageToJSON,
    AppStoreVersionRelationshipsAlternativeDistributionPackageToJSONTyped,
} from './AppStoreVersionRelationshipsAlternativeDistributionPackage';
import type { AppStoreVersionRelationshipsAppStoreVersionSubmission } from './AppStoreVersionRelationshipsAppStoreVersionSubmission';
import {
    AppStoreVersionRelationshipsAppStoreVersionSubmissionFromJSON,
    AppStoreVersionRelationshipsAppStoreVersionSubmissionFromJSONTyped,
    AppStoreVersionRelationshipsAppStoreVersionSubmissionToJSON,
    AppStoreVersionRelationshipsAppStoreVersionSubmissionToJSONTyped,
} from './AppStoreVersionRelationshipsAppStoreVersionSubmission';
import type { AppStoreVersionRelationshipsAppStoreReviewDetail } from './AppStoreVersionRelationshipsAppStoreReviewDetail';
import {
    AppStoreVersionRelationshipsAppStoreReviewDetailFromJSON,
    AppStoreVersionRelationshipsAppStoreReviewDetailFromJSONTyped,
    AppStoreVersionRelationshipsAppStoreReviewDetailToJSON,
    AppStoreVersionRelationshipsAppStoreReviewDetailToJSONTyped,
} from './AppStoreVersionRelationshipsAppStoreReviewDetail';

/**
 * 
 * @export
 * @interface AppStoreVersionRelationships
 */
export interface AppStoreVersionRelationships {
    /**
     * 
     * @type {AlternativeDistributionKeyCreateRequestDataRelationshipsApp}
     * @memberof AppStoreVersionRelationships
     */
    app?: AlternativeDistributionKeyCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAgeRatingDeclaration}
     * @memberof AppStoreVersionRelationships
     * @deprecated
     */
    ageRatingDeclaration?: AppStoreVersionRelationshipsAgeRatingDeclaration;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAppStoreVersionLocalizations}
     * @memberof AppStoreVersionRelationships
     */
    appStoreVersionLocalizations?: AppStoreVersionRelationshipsAppStoreVersionLocalizations;
    /**
     * 
     * @type {AppStoreVersionRelationshipsBuild}
     * @memberof AppStoreVersionRelationships
     */
    build?: AppStoreVersionRelationshipsBuild;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAppStoreVersionPhasedRelease}
     * @memberof AppStoreVersionRelationships
     */
    appStoreVersionPhasedRelease?: AppStoreVersionRelationshipsAppStoreVersionPhasedRelease;
    /**
     * 
     * @type {AppStoreVersionRelationshipsGameCenterAppVersion}
     * @memberof AppStoreVersionRelationships
     */
    gameCenterAppVersion?: AppStoreVersionRelationshipsGameCenterAppVersion;
    /**
     * 
     * @type {AppStoreVersionRelationshipsRoutingAppCoverage}
     * @memberof AppStoreVersionRelationships
     */
    routingAppCoverage?: AppStoreVersionRelationshipsRoutingAppCoverage;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAppStoreReviewDetail}
     * @memberof AppStoreVersionRelationships
     */
    appStoreReviewDetail?: AppStoreVersionRelationshipsAppStoreReviewDetail;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAppStoreVersionSubmission}
     * @memberof AppStoreVersionRelationships
     */
    appStoreVersionSubmission?: AppStoreVersionRelationshipsAppStoreVersionSubmission;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAppClipDefaultExperience}
     * @memberof AppStoreVersionRelationships
     */
    appClipDefaultExperience?: AppStoreVersionRelationshipsAppClipDefaultExperience;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAppStoreVersionExperiments}
     * @memberof AppStoreVersionRelationships
     */
    appStoreVersionExperiments?: AppStoreVersionRelationshipsAppStoreVersionExperiments;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAppStoreVersionExperiments}
     * @memberof AppStoreVersionRelationships
     */
    appStoreVersionExperimentsV2?: AppStoreVersionRelationshipsAppStoreVersionExperiments;
    /**
     * 
     * @type {AnalyticsReportInstanceRelationshipsSegments}
     * @memberof AppStoreVersionRelationships
     */
    customerReviews?: AnalyticsReportInstanceRelationshipsSegments;
    /**
     * 
     * @type {AppStoreVersionRelationshipsAlternativeDistributionPackage}
     * @memberof AppStoreVersionRelationships
     */
    alternativeDistributionPackage?: AppStoreVersionRelationshipsAlternativeDistributionPackage;
}

/**
 * Check if a given object implements the AppStoreVersionRelationships interface.
 */
export function instanceOfAppStoreVersionRelationships(value: object): value is AppStoreVersionRelationships {
    return true;
}

export function AppStoreVersionRelationshipsFromJSON(json: any): AppStoreVersionRelationships {
    return AppStoreVersionRelationshipsFromJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': json['app'] == null ? undefined : AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'ageRatingDeclaration': json['ageRatingDeclaration'] == null ? undefined : AppStoreVersionRelationshipsAgeRatingDeclarationFromJSON(json['ageRatingDeclaration']),
        'appStoreVersionLocalizations': json['appStoreVersionLocalizations'] == null ? undefined : AppStoreVersionRelationshipsAppStoreVersionLocalizationsFromJSON(json['appStoreVersionLocalizations']),
        'build': json['build'] == null ? undefined : AppStoreVersionRelationshipsBuildFromJSON(json['build']),
        'appStoreVersionPhasedRelease': json['appStoreVersionPhasedRelease'] == null ? undefined : AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseFromJSON(json['appStoreVersionPhasedRelease']),
        'gameCenterAppVersion': json['gameCenterAppVersion'] == null ? undefined : AppStoreVersionRelationshipsGameCenterAppVersionFromJSON(json['gameCenterAppVersion']),
        'routingAppCoverage': json['routingAppCoverage'] == null ? undefined : AppStoreVersionRelationshipsRoutingAppCoverageFromJSON(json['routingAppCoverage']),
        'appStoreReviewDetail': json['appStoreReviewDetail'] == null ? undefined : AppStoreVersionRelationshipsAppStoreReviewDetailFromJSON(json['appStoreReviewDetail']),
        'appStoreVersionSubmission': json['appStoreVersionSubmission'] == null ? undefined : AppStoreVersionRelationshipsAppStoreVersionSubmissionFromJSON(json['appStoreVersionSubmission']),
        'appClipDefaultExperience': json['appClipDefaultExperience'] == null ? undefined : AppStoreVersionRelationshipsAppClipDefaultExperienceFromJSON(json['appClipDefaultExperience']),
        'appStoreVersionExperiments': json['appStoreVersionExperiments'] == null ? undefined : AppStoreVersionRelationshipsAppStoreVersionExperimentsFromJSON(json['appStoreVersionExperiments']),
        'appStoreVersionExperimentsV2': json['appStoreVersionExperimentsV2'] == null ? undefined : AppStoreVersionRelationshipsAppStoreVersionExperimentsFromJSON(json['appStoreVersionExperimentsV2']),
        'customerReviews': json['customerReviews'] == null ? undefined : AnalyticsReportInstanceRelationshipsSegmentsFromJSON(json['customerReviews']),
        'alternativeDistributionPackage': json['alternativeDistributionPackage'] == null ? undefined : AppStoreVersionRelationshipsAlternativeDistributionPackageFromJSON(json['alternativeDistributionPackage']),
    };
}

export function AppStoreVersionRelationshipsToJSON(json: any): AppStoreVersionRelationships {
    return AppStoreVersionRelationshipsToJSONTyped(json, false);
}

export function AppStoreVersionRelationshipsToJSONTyped(value?: AppStoreVersionRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON(value['app']),
        'ageRatingDeclaration': AppStoreVersionRelationshipsAgeRatingDeclarationToJSON(value['ageRatingDeclaration']),
        'appStoreVersionLocalizations': AppStoreVersionRelationshipsAppStoreVersionLocalizationsToJSON(value['appStoreVersionLocalizations']),
        'build': AppStoreVersionRelationshipsBuildToJSON(value['build']),
        'appStoreVersionPhasedRelease': AppStoreVersionRelationshipsAppStoreVersionPhasedReleaseToJSON(value['appStoreVersionPhasedRelease']),
        'gameCenterAppVersion': AppStoreVersionRelationshipsGameCenterAppVersionToJSON(value['gameCenterAppVersion']),
        'routingAppCoverage': AppStoreVersionRelationshipsRoutingAppCoverageToJSON(value['routingAppCoverage']),
        'appStoreReviewDetail': AppStoreVersionRelationshipsAppStoreReviewDetailToJSON(value['appStoreReviewDetail']),
        'appStoreVersionSubmission': AppStoreVersionRelationshipsAppStoreVersionSubmissionToJSON(value['appStoreVersionSubmission']),
        'appClipDefaultExperience': AppStoreVersionRelationshipsAppClipDefaultExperienceToJSON(value['appClipDefaultExperience']),
        'appStoreVersionExperiments': AppStoreVersionRelationshipsAppStoreVersionExperimentsToJSON(value['appStoreVersionExperiments']),
        'appStoreVersionExperimentsV2': AppStoreVersionRelationshipsAppStoreVersionExperimentsToJSON(value['appStoreVersionExperimentsV2']),
        'customerReviews': AnalyticsReportInstanceRelationshipsSegmentsToJSON(value['customerReviews']),
        'alternativeDistributionPackage': AppStoreVersionRelationshipsAlternativeDistributionPackageToJSON(value['alternativeDistributionPackage']),
    };
}

