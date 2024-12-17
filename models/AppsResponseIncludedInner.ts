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

import type { AppClip } from './AppClip';
import {
    instanceOfAppClip,
    AppClipFromJSON,
    AppClipFromJSONTyped,
    AppClipToJSON,
} from './AppClip';
import type { AppCustomProductPage } from './AppCustomProductPage';
import {
    instanceOfAppCustomProductPage,
    AppCustomProductPageFromJSON,
    AppCustomProductPageFromJSONTyped,
    AppCustomProductPageToJSON,
} from './AppCustomProductPage';
import type { AppEncryptionDeclaration } from './AppEncryptionDeclaration';
import {
    instanceOfAppEncryptionDeclaration,
    AppEncryptionDeclarationFromJSON,
    AppEncryptionDeclarationFromJSONTyped,
    AppEncryptionDeclarationToJSON,
} from './AppEncryptionDeclaration';
import type { AppEvent } from './AppEvent';
import {
    instanceOfAppEvent,
    AppEventFromJSON,
    AppEventFromJSONTyped,
    AppEventToJSON,
} from './AppEvent';
import type { AppInfo } from './AppInfo';
import {
    instanceOfAppInfo,
    AppInfoFromJSON,
    AppInfoFromJSONTyped,
    AppInfoToJSON,
} from './AppInfo';
import type { AppStoreVersion } from './AppStoreVersion';
import {
    instanceOfAppStoreVersion,
    AppStoreVersionFromJSON,
    AppStoreVersionFromJSONTyped,
    AppStoreVersionToJSON,
} from './AppStoreVersion';
import type { AppStoreVersionExperimentV2 } from './AppStoreVersionExperimentV2';
import {
    instanceOfAppStoreVersionExperimentV2,
    AppStoreVersionExperimentV2FromJSON,
    AppStoreVersionExperimentV2FromJSONTyped,
    AppStoreVersionExperimentV2ToJSON,
} from './AppStoreVersionExperimentV2';
import type { BetaAppLocalization } from './BetaAppLocalization';
import {
    instanceOfBetaAppLocalization,
    BetaAppLocalizationFromJSON,
    BetaAppLocalizationFromJSONTyped,
    BetaAppLocalizationToJSON,
} from './BetaAppLocalization';
import type { BetaAppReviewDetail } from './BetaAppReviewDetail';
import {
    instanceOfBetaAppReviewDetail,
    BetaAppReviewDetailFromJSON,
    BetaAppReviewDetailFromJSONTyped,
    BetaAppReviewDetailToJSON,
} from './BetaAppReviewDetail';
import type { BetaGroup } from './BetaGroup';
import {
    instanceOfBetaGroup,
    BetaGroupFromJSON,
    BetaGroupFromJSONTyped,
    BetaGroupToJSON,
} from './BetaGroup';
import type { BetaLicenseAgreement } from './BetaLicenseAgreement';
import {
    instanceOfBetaLicenseAgreement,
    BetaLicenseAgreementFromJSON,
    BetaLicenseAgreementFromJSONTyped,
    BetaLicenseAgreementToJSON,
} from './BetaLicenseAgreement';
import type { Build } from './Build';
import {
    instanceOfBuild,
    BuildFromJSON,
    BuildFromJSONTyped,
    BuildToJSON,
} from './Build';
import type { CiProduct } from './CiProduct';
import {
    instanceOfCiProduct,
    CiProductFromJSON,
    CiProductFromJSONTyped,
    CiProductToJSON,
} from './CiProduct';
import type { EndUserLicenseAgreement } from './EndUserLicenseAgreement';
import {
    instanceOfEndUserLicenseAgreement,
    EndUserLicenseAgreementFromJSON,
    EndUserLicenseAgreementFromJSONTyped,
    EndUserLicenseAgreementToJSON,
} from './EndUserLicenseAgreement';
import type { GameCenterDetail } from './GameCenterDetail';
import {
    instanceOfGameCenterDetail,
    GameCenterDetailFromJSON,
    GameCenterDetailFromJSONTyped,
    GameCenterDetailToJSON,
} from './GameCenterDetail';
import type { GameCenterEnabledVersion } from './GameCenterEnabledVersion';
import {
    instanceOfGameCenterEnabledVersion,
    GameCenterEnabledVersionFromJSON,
    GameCenterEnabledVersionFromJSONTyped,
    GameCenterEnabledVersionToJSON,
} from './GameCenterEnabledVersion';
import type { InAppPurchase } from './InAppPurchase';
import {
    instanceOfInAppPurchase,
    InAppPurchaseFromJSON,
    InAppPurchaseFromJSONTyped,
    InAppPurchaseToJSON,
} from './InAppPurchase';
import type { InAppPurchaseV2 } from './InAppPurchaseV2';
import {
    instanceOfInAppPurchaseV2,
    InAppPurchaseV2FromJSON,
    InAppPurchaseV2FromJSONTyped,
    InAppPurchaseV2ToJSON,
} from './InAppPurchaseV2';
import type { PrereleaseVersion } from './PrereleaseVersion';
import {
    instanceOfPrereleaseVersion,
    PrereleaseVersionFromJSON,
    PrereleaseVersionFromJSONTyped,
    PrereleaseVersionToJSON,
} from './PrereleaseVersion';
import type { PromotedPurchase } from './PromotedPurchase';
import {
    instanceOfPromotedPurchase,
    PromotedPurchaseFromJSON,
    PromotedPurchaseFromJSONTyped,
    PromotedPurchaseToJSON,
} from './PromotedPurchase';
import type { ReviewSubmission } from './ReviewSubmission';
import {
    instanceOfReviewSubmission,
    ReviewSubmissionFromJSON,
    ReviewSubmissionFromJSONTyped,
    ReviewSubmissionToJSON,
} from './ReviewSubmission';
import type { SubscriptionGracePeriod } from './SubscriptionGracePeriod';
import {
    instanceOfSubscriptionGracePeriod,
    SubscriptionGracePeriodFromJSON,
    SubscriptionGracePeriodFromJSONTyped,
    SubscriptionGracePeriodToJSON,
} from './SubscriptionGracePeriod';
import type { SubscriptionGroup } from './SubscriptionGroup';
import {
    instanceOfSubscriptionGroup,
    SubscriptionGroupFromJSON,
    SubscriptionGroupFromJSONTyped,
    SubscriptionGroupToJSON,
} from './SubscriptionGroup';

/**
 * @type AppsResponseIncludedInner
 * 
 * @export
 */
export type AppsResponseIncludedInner = AppClip | AppCustomProductPage | AppEncryptionDeclaration | AppEvent | AppInfo | AppStoreVersion | AppStoreVersionExperimentV2 | BetaAppLocalization | BetaAppReviewDetail | BetaGroup | BetaLicenseAgreement | Build | CiProduct | EndUserLicenseAgreement | GameCenterDetail | GameCenterEnabledVersion | InAppPurchase | InAppPurchaseV2 | PrereleaseVersion | PromotedPurchase | ReviewSubmission | SubscriptionGracePeriod | SubscriptionGroup;

export function AppsResponseIncludedInnerFromJSON(json: any): AppsResponseIncludedInner {
    return AppsResponseIncludedInnerFromJSONTyped(json, false);
}

export function AppsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppsResponseIncludedInner {
    if (json == null) {
        return json;
    }
    if (instanceOfAppClip(json)) {
        return AppClipFromJSONTyped(json, true);
    }
    if (instanceOfAppCustomProductPage(json)) {
        return AppCustomProductPageFromJSONTyped(json, true);
    }
    if (instanceOfAppEncryptionDeclaration(json)) {
        return AppEncryptionDeclarationFromJSONTyped(json, true);
    }
    if (instanceOfAppEvent(json)) {
        return AppEventFromJSONTyped(json, true);
    }
    if (instanceOfAppInfo(json)) {
        return AppInfoFromJSONTyped(json, true);
    }
    if (instanceOfAppStoreVersion(json)) {
        return AppStoreVersionFromJSONTyped(json, true);
    }
    if (instanceOfAppStoreVersionExperimentV2(json)) {
        return AppStoreVersionExperimentV2FromJSONTyped(json, true);
    }
    if (instanceOfBetaAppLocalization(json)) {
        return BetaAppLocalizationFromJSONTyped(json, true);
    }
    if (instanceOfBetaAppReviewDetail(json)) {
        return BetaAppReviewDetailFromJSONTyped(json, true);
    }
    if (instanceOfBetaGroup(json)) {
        return BetaGroupFromJSONTyped(json, true);
    }
    if (instanceOfBetaLicenseAgreement(json)) {
        return BetaLicenseAgreementFromJSONTyped(json, true);
    }
    if (instanceOfBuild(json)) {
        return BuildFromJSONTyped(json, true);
    }
    if (instanceOfCiProduct(json)) {
        return CiProductFromJSONTyped(json, true);
    }
    if (instanceOfEndUserLicenseAgreement(json)) {
        return EndUserLicenseAgreementFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterDetail(json)) {
        return GameCenterDetailFromJSONTyped(json, true);
    }
    if (instanceOfGameCenterEnabledVersion(json)) {
        return GameCenterEnabledVersionFromJSONTyped(json, true);
    }
    if (instanceOfInAppPurchase(json)) {
        return InAppPurchaseFromJSONTyped(json, true);
    }
    if (instanceOfInAppPurchaseV2(json)) {
        return InAppPurchaseV2FromJSONTyped(json, true);
    }
    if (instanceOfPrereleaseVersion(json)) {
        return PrereleaseVersionFromJSONTyped(json, true);
    }
    if (instanceOfPromotedPurchase(json)) {
        return PromotedPurchaseFromJSONTyped(json, true);
    }
    if (instanceOfReviewSubmission(json)) {
        return ReviewSubmissionFromJSONTyped(json, true);
    }
    if (instanceOfSubscriptionGracePeriod(json)) {
        return SubscriptionGracePeriodFromJSONTyped(json, true);
    }
    if (instanceOfSubscriptionGroup(json)) {
        return SubscriptionGroupFromJSONTyped(json, true);
    }

    return {} as any;
}

export function AppsResponseIncludedInnerToJSON(json: any): any {
    return AppsResponseIncludedInnerToJSONTyped(json, false);
}

export function AppsResponseIncludedInnerToJSONTyped(value?: AppsResponseIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfAppClip(value)) {
        return AppClipToJSON(value as AppClip);
    }
    if (instanceOfAppCustomProductPage(value)) {
        return AppCustomProductPageToJSON(value as AppCustomProductPage);
    }
    if (instanceOfAppEncryptionDeclaration(value)) {
        return AppEncryptionDeclarationToJSON(value as AppEncryptionDeclaration);
    }
    if (instanceOfAppEvent(value)) {
        return AppEventToJSON(value as AppEvent);
    }
    if (instanceOfAppInfo(value)) {
        return AppInfoToJSON(value as AppInfo);
    }
    if (instanceOfAppStoreVersion(value)) {
        return AppStoreVersionToJSON(value as AppStoreVersion);
    }
    if (instanceOfAppStoreVersionExperimentV2(value)) {
        return AppStoreVersionExperimentV2ToJSON(value as AppStoreVersionExperimentV2);
    }
    if (instanceOfBetaAppLocalization(value)) {
        return BetaAppLocalizationToJSON(value as BetaAppLocalization);
    }
    if (instanceOfBetaAppReviewDetail(value)) {
        return BetaAppReviewDetailToJSON(value as BetaAppReviewDetail);
    }
    if (instanceOfBetaGroup(value)) {
        return BetaGroupToJSON(value as BetaGroup);
    }
    if (instanceOfBetaLicenseAgreement(value)) {
        return BetaLicenseAgreementToJSON(value as BetaLicenseAgreement);
    }
    if (instanceOfBuild(value)) {
        return BuildToJSON(value as Build);
    }
    if (instanceOfCiProduct(value)) {
        return CiProductToJSON(value as CiProduct);
    }
    if (instanceOfEndUserLicenseAgreement(value)) {
        return EndUserLicenseAgreementToJSON(value as EndUserLicenseAgreement);
    }
    if (instanceOfGameCenterDetail(value)) {
        return GameCenterDetailToJSON(value as GameCenterDetail);
    }
    if (instanceOfGameCenterEnabledVersion(value)) {
        return GameCenterEnabledVersionToJSON(value as GameCenterEnabledVersion);
    }
    if (instanceOfInAppPurchase(value)) {
        return InAppPurchaseToJSON(value as InAppPurchase);
    }
    if (instanceOfInAppPurchaseV2(value)) {
        return InAppPurchaseV2ToJSON(value as InAppPurchaseV2);
    }
    if (instanceOfPrereleaseVersion(value)) {
        return PrereleaseVersionToJSON(value as PrereleaseVersion);
    }
    if (instanceOfPromotedPurchase(value)) {
        return PromotedPurchaseToJSON(value as PromotedPurchase);
    }
    if (instanceOfReviewSubmission(value)) {
        return ReviewSubmissionToJSON(value as ReviewSubmission);
    }
    if (instanceOfSubscriptionGracePeriod(value)) {
        return SubscriptionGracePeriodToJSON(value as SubscriptionGracePeriod);
    }
    if (instanceOfSubscriptionGroup(value)) {
        return SubscriptionGroupToJSON(value as SubscriptionGroup);
    }

    return {};
}

