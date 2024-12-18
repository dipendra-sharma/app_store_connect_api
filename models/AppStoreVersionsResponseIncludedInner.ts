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

import type { AgeRatingDeclaration } from './AgeRatingDeclaration';
import {
    instanceOfAgeRatingDeclaration,
    AgeRatingDeclarationFromJSON,
    AgeRatingDeclarationFromJSONTyped,
    AgeRatingDeclarationToJSON,
} from './AgeRatingDeclaration';
import type { AlternativeDistributionPackage } from './AlternativeDistributionPackage';
import {
    instanceOfAlternativeDistributionPackage,
    AlternativeDistributionPackageFromJSON,
    AlternativeDistributionPackageFromJSONTyped,
    AlternativeDistributionPackageToJSON,
} from './AlternativeDistributionPackage';
import type { App } from './App';
import {
    instanceOfApp,
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import type { AppClipDefaultExperience } from './AppClipDefaultExperience';
import {
    instanceOfAppClipDefaultExperience,
    AppClipDefaultExperienceFromJSON,
    AppClipDefaultExperienceFromJSONTyped,
    AppClipDefaultExperienceToJSON,
} from './AppClipDefaultExperience';
import type { AppStoreReviewDetail } from './AppStoreReviewDetail';
import {
    instanceOfAppStoreReviewDetail,
    AppStoreReviewDetailFromJSON,
    AppStoreReviewDetailFromJSONTyped,
    AppStoreReviewDetailToJSON,
} from './AppStoreReviewDetail';
import type { AppStoreVersionExperiment } from './AppStoreVersionExperiment';
import {
    instanceOfAppStoreVersionExperiment,
    AppStoreVersionExperimentFromJSON,
    AppStoreVersionExperimentFromJSONTyped,
    AppStoreVersionExperimentToJSON,
} from './AppStoreVersionExperiment';
import type { AppStoreVersionExperimentV2 } from './AppStoreVersionExperimentV2';
import {
    instanceOfAppStoreVersionExperimentV2,
    AppStoreVersionExperimentV2FromJSON,
    AppStoreVersionExperimentV2FromJSONTyped,
    AppStoreVersionExperimentV2ToJSON,
} from './AppStoreVersionExperimentV2';
import type { AppStoreVersionLocalization } from './AppStoreVersionLocalization';
import {
    instanceOfAppStoreVersionLocalization,
    AppStoreVersionLocalizationFromJSON,
    AppStoreVersionLocalizationFromJSONTyped,
    AppStoreVersionLocalizationToJSON,
} from './AppStoreVersionLocalization';
import type { AppStoreVersionPhasedRelease } from './AppStoreVersionPhasedRelease';
import {
    instanceOfAppStoreVersionPhasedRelease,
    AppStoreVersionPhasedReleaseFromJSON,
    AppStoreVersionPhasedReleaseFromJSONTyped,
    AppStoreVersionPhasedReleaseToJSON,
} from './AppStoreVersionPhasedRelease';
import type { AppStoreVersionSubmission } from './AppStoreVersionSubmission';
import {
    instanceOfAppStoreVersionSubmission,
    AppStoreVersionSubmissionFromJSON,
    AppStoreVersionSubmissionFromJSONTyped,
    AppStoreVersionSubmissionToJSON,
} from './AppStoreVersionSubmission';
import type { Build } from './Build';
import {
    instanceOfBuild,
    BuildFromJSON,
    BuildFromJSONTyped,
    BuildToJSON,
} from './Build';
import type { GameCenterAppVersion } from './GameCenterAppVersion';
import {
    instanceOfGameCenterAppVersion,
    GameCenterAppVersionFromJSON,
    GameCenterAppVersionFromJSONTyped,
    GameCenterAppVersionToJSON,
} from './GameCenterAppVersion';
import type { RoutingAppCoverage } from './RoutingAppCoverage';
import {
    instanceOfRoutingAppCoverage,
    RoutingAppCoverageFromJSON,
    RoutingAppCoverageFromJSONTyped,
    RoutingAppCoverageToJSON,
} from './RoutingAppCoverage';

/**
 * @type AppStoreVersionsResponseIncludedInner
 * 
 * @export
 */
export type AppStoreVersionsResponseIncludedInner = AgeRatingDeclaration | AlternativeDistributionPackage | App | AppClipDefaultExperience | AppStoreReviewDetail | AppStoreVersionExperiment | AppStoreVersionExperimentV2 | AppStoreVersionLocalization | AppStoreVersionPhasedRelease | AppStoreVersionSubmission | Build | GameCenterAppVersion | RoutingAppCoverage;

export function AppStoreVersionsResponseIncludedInnerFromJSON(json: any): AppStoreVersionsResponseIncludedInner {
    return AppStoreVersionsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppStoreVersionsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionsResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfAgeRatingDeclaration(json)) {
        return AgeRatingDeclarationFromJSONTyped(json, true);
    }
    if (instanceOfAlternativeDistributionPackage(json)) {
        return AlternativeDistributionPackageFromJSONTyped(json, true);
    }
    if (instanceOfApp(json)) {
        return AppFromJSONTyped(json, true);
    }
    if (instanceOfAppClipDefaultExperience(json)) {
        return AppClipDefaultExperienceFromJSONTyped(json, true);
    }
    if (instanceOfAppStoreReviewDetail(json)) {
        return AppStoreReviewDetailFromJSONTyped(json, true);
    }
    if (instanceOfAppStoreVersionExperiment(json)) {
        return AppStoreVersionExperimentFromJSONTyped(json, true);
    }
    if (instanceOfAppStoreVersionExperimentV2(json)) {
        return AppStoreVersionExperimentV2FromJSONTyped(json, true);
    }
    if (instanceOfAppStoreVersionLocalization(json)) {
        return AppStoreVersionLocalizationFromJSONTyped(json, true);
    }
    if (instanceOfAppStoreVersionPhasedRelease(json)) {
        return AppStoreVersionPhasedReleaseFromJSONTyped(json, true);
    }
    if (instanceOfAppStoreVersionSubmission(json)) {
        return AppStoreVersionSubmissionFromJSONTyped(json, true);
    }
    if (instanceOfBuild(json)) {
        return BuildFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterAppVersion(json)) {
        return GameCenterAppVersionFromJSONTyped(json, true);
    }
    if (instanceOfRoutingAppCoverage(json)) {
        return RoutingAppCoverageFromJSONTyped(json, true);
    }

    return {} as any;
}

export function AppStoreVersionsResponseIncludedInnerToJSON(json: any): any {
    return AppStoreVersionsResponseIncludedInnerToJSONTyped(json, false);
}

export function AppStoreVersionsResponseIncludedInnerToJSONTyped(value?: AppStoreVersionsResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfAgeRatingDeclaration(value)) {
        return AgeRatingDeclarationToJSON(value as AgeRatingDeclaration);
    }
    if (instanceOfAlternativeDistributionPackage(value)) {
        return AlternativeDistributionPackageToJSON(value as AlternativeDistributionPackage);
    }
    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfAppClipDefaultExperience(value)) {
        return AppClipDefaultExperienceToJSON(value as AppClipDefaultExperience);
    }
    if (instanceOfAppStoreReviewDetail(value)) {
        return AppStoreReviewDetailToJSON(value as AppStoreReviewDetail);
    }
    if (instanceOfAppStoreVersionExperiment(value)) {
        return AppStoreVersionExperimentToJSON(value as AppStoreVersionExperiment);
    }
    if (instanceOfAppStoreVersionExperimentV2(value)) {
        return AppStoreVersionExperimentV2ToJSON(value as AppStoreVersionExperimentV2);
    }
    if (instanceOfAppStoreVersionLocalization(value)) {
        return AppStoreVersionLocalizationToJSON(value as AppStoreVersionLocalization);
    }
    if (instanceOfAppStoreVersionPhasedRelease(value)) {
        return AppStoreVersionPhasedReleaseToJSON(value as AppStoreVersionPhasedRelease);
    }
    if (instanceOfAppStoreVersionSubmission(value)) {
        return AppStoreVersionSubmissionToJSON(value as AppStoreVersionSubmission);
    }
    if (instanceOfBuild(value)) {
        return BuildToJSON(value as Build);
    }
    if (instanceOfGameCenterAppVersion(value)) {
        return GameCenterAppVersionToJSON(value as GameCenterAppVersion);
    }
    if (instanceOfRoutingAppCoverage(value)) {
        return RoutingAppCoverageToJSON(value as RoutingAppCoverage);
    }

    return {};
}

