import { Configuration } from '../runtime';
import * as APIs from '../apis';

export class AppStoreConnectClient {
    private readonly config: Configuration;
    private apis: { [key: string]: any } = {};

    constructor(config: Configuration) {
        this.config = config;
    }

    private getApi<T>(apiName: string, ApiClass: new (config: Configuration) => T): T {
        if (!this.apis[apiName]) {
            this.apis[apiName] = new ApiClass(this.config);
        }
        return this.apis[apiName] as T;
    }

    get actorsUapi(): APIs.ActorsApi {
        return this.getApi('actorsUapi', APIs.ActorsApi);
    }

    get ageUratingUdeclarationsUapi(): APIs.AgeRatingDeclarationsApi {
        return this.getApi('ageUratingUdeclarationsUapi', APIs.AgeRatingDeclarationsApi);
    }

    get alternativeUdistributionUdomainsUapi(): APIs.AlternativeDistributionDomainsApi {
        return this.getApi('alternativeUdistributionUdomainsUapi', APIs.AlternativeDistributionDomainsApi);
    }

    get alternativeUdistributionUkeysUapi(): APIs.AlternativeDistributionKeysApi {
        return this.getApi('alternativeUdistributionUkeysUapi', APIs.AlternativeDistributionKeysApi);
    }

    get alternativeUdistributionUpackageUdeltasUapi(): APIs.AlternativeDistributionPackageDeltasApi {
        return this.getApi('alternativeUdistributionUpackageUdeltasUapi', APIs.AlternativeDistributionPackageDeltasApi);
    }

    get alternativeUdistributionUpackageUvariantsUapi(): APIs.AlternativeDistributionPackageVariantsApi {
        return this.getApi('alternativeUdistributionUpackageUvariantsUapi', APIs.AlternativeDistributionPackageVariantsApi);
    }

    get alternativeUdistributionUpackageUversionsUapi(): APIs.AlternativeDistributionPackageVersionsApi {
        return this.getApi('alternativeUdistributionUpackageUversionsUapi', APIs.AlternativeDistributionPackageVersionsApi);
    }

    get alternativeUdistributionUpackagesUapi(): APIs.AlternativeDistributionPackagesApi {
        return this.getApi('alternativeUdistributionUpackagesUapi', APIs.AlternativeDistributionPackagesApi);
    }

    get analyticsUreportUinstancesUapi(): APIs.AnalyticsReportInstancesApi {
        return this.getApi('analyticsUreportUinstancesUapi', APIs.AnalyticsReportInstancesApi);
    }

    get analyticsUreportUrequestsUapi(): APIs.AnalyticsReportRequestsApi {
        return this.getApi('analyticsUreportUrequestsUapi', APIs.AnalyticsReportRequestsApi);
    }

    get analyticsUreportUsegmentsUapi(): APIs.AnalyticsReportSegmentsApi {
        return this.getApi('analyticsUreportUsegmentsUapi', APIs.AnalyticsReportSegmentsApi);
    }

    get analyticsUreportsUapi(): APIs.AnalyticsReportsApi {
        return this.getApi('analyticsUreportsUapi', APIs.AnalyticsReportsApi);
    }

    get appUavailabilitiesUapi(): APIs.AppAvailabilitiesApi {
        return this.getApi('appUavailabilitiesUapi', APIs.AppAvailabilitiesApi);
    }

    get appUcategoriesUapi(): APIs.AppCategoriesApi {
        return this.getApi('appUcategoriesUapi', APIs.AppCategoriesApi);
    }

    get appUclipUadvancedUexperienceUimagesUapi(): APIs.AppClipAdvancedExperienceImagesApi {
        return this.getApi('appUclipUadvancedUexperienceUimagesUapi', APIs.AppClipAdvancedExperienceImagesApi);
    }

    get appUclipUadvancedUexperiencesUapi(): APIs.AppClipAdvancedExperiencesApi {
        return this.getApi('appUclipUadvancedUexperiencesUapi', APIs.AppClipAdvancedExperiencesApi);
    }

    get appUclipUappUstoreUreviewUdetailsUapi(): APIs.AppClipAppStoreReviewDetailsApi {
        return this.getApi('appUclipUappUstoreUreviewUdetailsUapi', APIs.AppClipAppStoreReviewDetailsApi);
    }

    get appUclipUdefaultUexperienceUlocalizationsUapi(): APIs.AppClipDefaultExperienceLocalizationsApi {
        return this.getApi('appUclipUdefaultUexperienceUlocalizationsUapi', APIs.AppClipDefaultExperienceLocalizationsApi);
    }

    get appUclipUdefaultUexperiencesUapi(): APIs.AppClipDefaultExperiencesApi {
        return this.getApi('appUclipUdefaultUexperiencesUapi', APIs.AppClipDefaultExperiencesApi);
    }

    get appUclipUheaderUimagesUapi(): APIs.AppClipHeaderImagesApi {
        return this.getApi('appUclipUheaderUimagesUapi', APIs.AppClipHeaderImagesApi);
    }

    get appUclipsUapi(): APIs.AppClipsApi {
        return this.getApi('appUclipsUapi', APIs.AppClipsApi);
    }

    get appUcustomUproductUpageUlocalizationsUapi(): APIs.AppCustomProductPageLocalizationsApi {
        return this.getApi('appUcustomUproductUpageUlocalizationsUapi', APIs.AppCustomProductPageLocalizationsApi);
    }

    get appUcustomUproductUpageUversionsUapi(): APIs.AppCustomProductPageVersionsApi {
        return this.getApi('appUcustomUproductUpageUversionsUapi', APIs.AppCustomProductPageVersionsApi);
    }

    get appUcustomUproductUpagesUapi(): APIs.AppCustomProductPagesApi {
        return this.getApi('appUcustomUproductUpagesUapi', APIs.AppCustomProductPagesApi);
    }

    get appUencryptionUdeclarationUdocumentsUapi(): APIs.AppEncryptionDeclarationDocumentsApi {
        return this.getApi('appUencryptionUdeclarationUdocumentsUapi', APIs.AppEncryptionDeclarationDocumentsApi);
    }

    get appUencryptionUdeclarationsUapi(): APIs.AppEncryptionDeclarationsApi {
        return this.getApi('appUencryptionUdeclarationsUapi', APIs.AppEncryptionDeclarationsApi);
    }

    get appUeventUlocalizationsUapi(): APIs.AppEventLocalizationsApi {
        return this.getApi('appUeventUlocalizationsUapi', APIs.AppEventLocalizationsApi);
    }

    get appUeventUscreenshotsUapi(): APIs.AppEventScreenshotsApi {
        return this.getApi('appUeventUscreenshotsUapi', APIs.AppEventScreenshotsApi);
    }

    get appUeventUvideoUclipsUapi(): APIs.AppEventVideoClipsApi {
        return this.getApi('appUeventUvideoUclipsUapi', APIs.AppEventVideoClipsApi);
    }

    get appUeventsUapi(): APIs.AppEventsApi {
        return this.getApi('appUeventsUapi', APIs.AppEventsApi);
    }

    get appUinfoUlocalizationsUapi(): APIs.AppInfoLocalizationsApi {
        return this.getApi('appUinfoUlocalizationsUapi', APIs.AppInfoLocalizationsApi);
    }

    get appUinfosUapi(): APIs.AppInfosApi {
        return this.getApi('appUinfosUapi', APIs.AppInfosApi);
    }

    get appUpreviewUsetsUapi(): APIs.AppPreviewSetsApi {
        return this.getApi('appUpreviewUsetsUapi', APIs.AppPreviewSetsApi);
    }

    get appUpreviewsUapi(): APIs.AppPreviewsApi {
        return this.getApi('appUpreviewsUapi', APIs.AppPreviewsApi);
    }

    get appUpriceUpointsUapi(): APIs.AppPricePointsApi {
        return this.getApi('appUpriceUpointsUapi', APIs.AppPricePointsApi);
    }

    get appUpriceUschedulesUapi(): APIs.AppPriceSchedulesApi {
        return this.getApi('appUpriceUschedulesUapi', APIs.AppPriceSchedulesApi);
    }

    get appUscreenshotUsetsUapi(): APIs.AppScreenshotSetsApi {
        return this.getApi('appUscreenshotUsetsUapi', APIs.AppScreenshotSetsApi);
    }

    get appUscreenshotsUapi(): APIs.AppScreenshotsApi {
        return this.getApi('appUscreenshotsUapi', APIs.AppScreenshotsApi);
    }

    get appUstoreUreviewUattachmentsUapi(): APIs.AppStoreReviewAttachmentsApi {
        return this.getApi('appUstoreUreviewUattachmentsUapi', APIs.AppStoreReviewAttachmentsApi);
    }

    get appUstoreUreviewUdetailsUapi(): APIs.AppStoreReviewDetailsApi {
        return this.getApi('appUstoreUreviewUdetailsUapi', APIs.AppStoreReviewDetailsApi);
    }

    get appUstoreUversionUexperimentUtreatmentUlocalizationsUapi(): APIs.AppStoreVersionExperimentTreatmentLocalizationsApi {
        return this.getApi('appUstoreUversionUexperimentUtreatmentUlocalizationsUapi', APIs.AppStoreVersionExperimentTreatmentLocalizationsApi);
    }

    get appUstoreUversionUexperimentUtreatmentsUapi(): APIs.AppStoreVersionExperimentTreatmentsApi {
        return this.getApi('appUstoreUversionUexperimentUtreatmentsUapi', APIs.AppStoreVersionExperimentTreatmentsApi);
    }

    get appUstoreUversionUexperimentsUapi(): APIs.AppStoreVersionExperimentsApi {
        return this.getApi('appUstoreUversionUexperimentsUapi', APIs.AppStoreVersionExperimentsApi);
    }

    get appUstoreUversionUlocalizationsUapi(): APIs.AppStoreVersionLocalizationsApi {
        return this.getApi('appUstoreUversionUlocalizationsUapi', APIs.AppStoreVersionLocalizationsApi);
    }

    get appUstoreUversionUphasedUreleasesUapi(): APIs.AppStoreVersionPhasedReleasesApi {
        return this.getApi('appUstoreUversionUphasedUreleasesUapi', APIs.AppStoreVersionPhasedReleasesApi);
    }

    get appUstoreUversionUpromotionsUapi(): APIs.AppStoreVersionPromotionsApi {
        return this.getApi('appUstoreUversionUpromotionsUapi', APIs.AppStoreVersionPromotionsApi);
    }

    get appUstoreUversionUreleaseUrequestsUapi(): APIs.AppStoreVersionReleaseRequestsApi {
        return this.getApi('appUstoreUversionUreleaseUrequestsUapi', APIs.AppStoreVersionReleaseRequestsApi);
    }

    get appUstoreUversionUsubmissionsUapi(): APIs.AppStoreVersionSubmissionsApi {
        return this.getApi('appUstoreUversionUsubmissionsUapi', APIs.AppStoreVersionSubmissionsApi);
    }

    get appUstoreUversionsUapi(): APIs.AppStoreVersionsApi {
        return this.getApi('appUstoreUversionsUapi', APIs.AppStoreVersionsApi);
    }

    get appsUapi(): APIs.AppsApi {
        return this.getApi('appsUapi', APIs.AppsApi);
    }

    get betaUappUclipUinvocationUlocalizationsUapi(): APIs.BetaAppClipInvocationLocalizationsApi {
        return this.getApi('betaUappUclipUinvocationUlocalizationsUapi', APIs.BetaAppClipInvocationLocalizationsApi);
    }

    get betaUappUclipUinvocationsUapi(): APIs.BetaAppClipInvocationsApi {
        return this.getApi('betaUappUclipUinvocationsUapi', APIs.BetaAppClipInvocationsApi);
    }

    get betaUappUlocalizationsUapi(): APIs.BetaAppLocalizationsApi {
        return this.getApi('betaUappUlocalizationsUapi', APIs.BetaAppLocalizationsApi);
    }

    get betaUappUreviewUdetailsUapi(): APIs.BetaAppReviewDetailsApi {
        return this.getApi('betaUappUreviewUdetailsUapi', APIs.BetaAppReviewDetailsApi);
    }

    get betaUappUreviewUsubmissionsUapi(): APIs.BetaAppReviewSubmissionsApi {
        return this.getApi('betaUappUreviewUsubmissionsUapi', APIs.BetaAppReviewSubmissionsApi);
    }

    get betaUbuildUlocalizationsUapi(): APIs.BetaBuildLocalizationsApi {
        return this.getApi('betaUbuildUlocalizationsUapi', APIs.BetaBuildLocalizationsApi);
    }

    get betaUgroupsUapi(): APIs.BetaGroupsApi {
        return this.getApi('betaUgroupsUapi', APIs.BetaGroupsApi);
    }

    get betaUlicenseUagreementsUapi(): APIs.BetaLicenseAgreementsApi {
        return this.getApi('betaUlicenseUagreementsUapi', APIs.BetaLicenseAgreementsApi);
    }

    get betaUtesterUinvitationsUapi(): APIs.BetaTesterInvitationsApi {
        return this.getApi('betaUtesterUinvitationsUapi', APIs.BetaTesterInvitationsApi);
    }

    get betaUtestersUapi(): APIs.BetaTestersApi {
        return this.getApi('betaUtestersUapi', APIs.BetaTestersApi);
    }

    get buildUbetaUdetailsUapi(): APIs.BuildBetaDetailsApi {
        return this.getApi('buildUbetaUdetailsUapi', APIs.BuildBetaDetailsApi);
    }

    get buildUbetaUnotificationsUapi(): APIs.BuildBetaNotificationsApi {
        return this.getApi('buildUbetaUnotificationsUapi', APIs.BuildBetaNotificationsApi);
    }

    get buildUbundlesUapi(): APIs.BuildBundlesApi {
        return this.getApi('buildUbundlesUapi', APIs.BuildBundlesApi);
    }

    get buildsUapi(): APIs.BuildsApi {
        return this.getApi('buildsUapi', APIs.BuildsApi);
    }

    get bundleUidUcapabilitiesUapi(): APIs.BundleIdCapabilitiesApi {
        return this.getApi('bundleUidUcapabilitiesUapi', APIs.BundleIdCapabilitiesApi);
    }

    get bundleUidsUapi(): APIs.BundleIdsApi {
        return this.getApi('bundleUidsUapi', APIs.BundleIdsApi);
    }

    get certificatesUapi(): APIs.CertificatesApi {
        return this.getApi('certificatesUapi', APIs.CertificatesApi);
    }

    get ciUartifactsUapi(): APIs.CiArtifactsApi {
        return this.getApi('ciUartifactsUapi', APIs.CiArtifactsApi);
    }

    get ciUbuildUactionsUapi(): APIs.CiBuildActionsApi {
        return this.getApi('ciUbuildUactionsUapi', APIs.CiBuildActionsApi);
    }

    get ciUbuildUrunsUapi(): APIs.CiBuildRunsApi {
        return this.getApi('ciUbuildUrunsUapi', APIs.CiBuildRunsApi);
    }

    get ciUissuesUapi(): APIs.CiIssuesApi {
        return this.getApi('ciUissuesUapi', APIs.CiIssuesApi);
    }

    get ciUmacUosUversionsUapi(): APIs.CiMacOsVersionsApi {
        return this.getApi('ciUmacUosUversionsUapi', APIs.CiMacOsVersionsApi);
    }

    get ciUproductsUapi(): APIs.CiProductsApi {
        return this.getApi('ciUproductsUapi', APIs.CiProductsApi);
    }

    get ciUtestUresultsUapi(): APIs.CiTestResultsApi {
        return this.getApi('ciUtestUresultsUapi', APIs.CiTestResultsApi);
    }

    get ciUworkflowsUapi(): APIs.CiWorkflowsApi {
        return this.getApi('ciUworkflowsUapi', APIs.CiWorkflowsApi);
    }

    get ciUxcodeUversionsUapi(): APIs.CiXcodeVersionsApi {
        return this.getApi('ciUxcodeUversionsUapi', APIs.CiXcodeVersionsApi);
    }

    get customerUreviewUresponsesUapi(): APIs.CustomerReviewResponsesApi {
        return this.getApi('customerUreviewUresponsesUapi', APIs.CustomerReviewResponsesApi);
    }

    get customerUreviewsUapi(): APIs.CustomerReviewsApi {
        return this.getApi('customerUreviewsUapi', APIs.CustomerReviewsApi);
    }

    get devicesUapi(): APIs.DevicesApi {
        return this.getApi('devicesUapi', APIs.DevicesApi);
    }

    get diagnosticUsignaturesUapi(): APIs.DiagnosticSignaturesApi {
        return this.getApi('diagnosticUsignaturesUapi', APIs.DiagnosticSignaturesApi);
    }

    get endUappUavailabilityUpreUordersUapi(): APIs.EndAppAvailabilityPreOrdersApi {
        return this.getApi('endUappUavailabilityUpreUordersUapi', APIs.EndAppAvailabilityPreOrdersApi);
    }

    get endUuserUlicenseUagreementsUapi(): APIs.EndUserLicenseAgreementsApi {
        return this.getApi('endUuserUlicenseUagreementsUapi', APIs.EndUserLicenseAgreementsApi);
    }

    get financeUreportsUapi(): APIs.FinanceReportsApi {
        return this.getApi('financeUreportsUapi', APIs.FinanceReportsApi);
    }

    get gameUcenterUachievementUimagesUapi(): APIs.GameCenterAchievementImagesApi {
        return this.getApi('gameUcenterUachievementUimagesUapi', APIs.GameCenterAchievementImagesApi);
    }

    get gameUcenterUachievementUlocalizationsUapi(): APIs.GameCenterAchievementLocalizationsApi {
        return this.getApi('gameUcenterUachievementUlocalizationsUapi', APIs.GameCenterAchievementLocalizationsApi);
    }

    get gameUcenterUachievementUreleasesUapi(): APIs.GameCenterAchievementReleasesApi {
        return this.getApi('gameUcenterUachievementUreleasesUapi', APIs.GameCenterAchievementReleasesApi);
    }

    get gameUcenterUachievementsUapi(): APIs.GameCenterAchievementsApi {
        return this.getApi('gameUcenterUachievementsUapi', APIs.GameCenterAchievementsApi);
    }

    get gameUcenterUappUversionsUapi(): APIs.GameCenterAppVersionsApi {
        return this.getApi('gameUcenterUappUversionsUapi', APIs.GameCenterAppVersionsApi);
    }

    get gameUcenterUdetailsUapi(): APIs.GameCenterDetailsApi {
        return this.getApi('gameUcenterUdetailsUapi', APIs.GameCenterDetailsApi);
    }

    get gameUcenterUenabledUversionsUapi(): APIs.GameCenterEnabledVersionsApi {
        return this.getApi('gameUcenterUenabledUversionsUapi', APIs.GameCenterEnabledVersionsApi);
    }

    get gameUcenterUgroupsUapi(): APIs.GameCenterGroupsApi {
        return this.getApi('gameUcenterUgroupsUapi', APIs.GameCenterGroupsApi);
    }

    get gameUcenterUleaderboardUentryUsubmissionsUapi(): APIs.GameCenterLeaderboardEntrySubmissionsApi {
        return this.getApi('gameUcenterUleaderboardUentryUsubmissionsUapi', APIs.GameCenterLeaderboardEntrySubmissionsApi);
    }

    get gameUcenterUleaderboardUimagesUapi(): APIs.GameCenterLeaderboardImagesApi {
        return this.getApi('gameUcenterUleaderboardUimagesUapi', APIs.GameCenterLeaderboardImagesApi);
    }

    get gameUcenterUleaderboardUlocalizationsUapi(): APIs.GameCenterLeaderboardLocalizationsApi {
        return this.getApi('gameUcenterUleaderboardUlocalizationsUapi', APIs.GameCenterLeaderboardLocalizationsApi);
    }

    get gameUcenterUleaderboardUreleasesUapi(): APIs.GameCenterLeaderboardReleasesApi {
        return this.getApi('gameUcenterUleaderboardUreleasesUapi', APIs.GameCenterLeaderboardReleasesApi);
    }

    get gameUcenterUleaderboardUsetUimagesUapi(): APIs.GameCenterLeaderboardSetImagesApi {
        return this.getApi('gameUcenterUleaderboardUsetUimagesUapi', APIs.GameCenterLeaderboardSetImagesApi);
    }

    get gameUcenterUleaderboardUsetUlocalizationsUapi(): APIs.GameCenterLeaderboardSetLocalizationsApi {
        return this.getApi('gameUcenterUleaderboardUsetUlocalizationsUapi', APIs.GameCenterLeaderboardSetLocalizationsApi);
    }

    get gameUcenterUleaderboardUsetUmemberUlocalizationsUapi(): APIs.GameCenterLeaderboardSetMemberLocalizationsApi {
        return this.getApi('gameUcenterUleaderboardUsetUmemberUlocalizationsUapi', APIs.GameCenterLeaderboardSetMemberLocalizationsApi);
    }

    get gameUcenterUleaderboardUsetUreleasesUapi(): APIs.GameCenterLeaderboardSetReleasesApi {
        return this.getApi('gameUcenterUleaderboardUsetUreleasesUapi', APIs.GameCenterLeaderboardSetReleasesApi);
    }

    get gameUcenterUleaderboardUsetsUapi(): APIs.GameCenterLeaderboardSetsApi {
        return this.getApi('gameUcenterUleaderboardUsetsUapi', APIs.GameCenterLeaderboardSetsApi);
    }

    get gameUcenterUleaderboardsUapi(): APIs.GameCenterLeaderboardsApi {
        return this.getApi('gameUcenterUleaderboardsUapi', APIs.GameCenterLeaderboardsApi);
    }

    get gameUcenterUmatchmakingUqueuesUapi(): APIs.GameCenterMatchmakingQueuesApi {
        return this.getApi('gameUcenterUmatchmakingUqueuesUapi', APIs.GameCenterMatchmakingQueuesApi);
    }

    get gameUcenterUmatchmakingUruleUsetUtestsUapi(): APIs.GameCenterMatchmakingRuleSetTestsApi {
        return this.getApi('gameUcenterUmatchmakingUruleUsetUtestsUapi', APIs.GameCenterMatchmakingRuleSetTestsApi);
    }

    get gameUcenterUmatchmakingUruleUsetsUapi(): APIs.GameCenterMatchmakingRuleSetsApi {
        return this.getApi('gameUcenterUmatchmakingUruleUsetsUapi', APIs.GameCenterMatchmakingRuleSetsApi);
    }

    get gameUcenterUmatchmakingUrulesUapi(): APIs.GameCenterMatchmakingRulesApi {
        return this.getApi('gameUcenterUmatchmakingUrulesUapi', APIs.GameCenterMatchmakingRulesApi);
    }

    get gameUcenterUmatchmakingUteamsUapi(): APIs.GameCenterMatchmakingTeamsApi {
        return this.getApi('gameUcenterUmatchmakingUteamsUapi', APIs.GameCenterMatchmakingTeamsApi);
    }

    get gameUcenterUplayerUachievementUsubmissionsUapi(): APIs.GameCenterPlayerAchievementSubmissionsApi {
        return this.getApi('gameUcenterUplayerUachievementUsubmissionsUapi', APIs.GameCenterPlayerAchievementSubmissionsApi);
    }

    get inUappUpurchaseUappUstoreUreviewUscreenshotsUapi(): APIs.InAppPurchaseAppStoreReviewScreenshotsApi {
        return this.getApi('inUappUpurchaseUappUstoreUreviewUscreenshotsUapi', APIs.InAppPurchaseAppStoreReviewScreenshotsApi);
    }

    get inUappUpurchaseUavailabilitiesUapi(): APIs.InAppPurchaseAvailabilitiesApi {
        return this.getApi('inUappUpurchaseUavailabilitiesUapi', APIs.InAppPurchaseAvailabilitiesApi);
    }

    get inUappUpurchaseUcontentsUapi(): APIs.InAppPurchaseContentsApi {
        return this.getApi('inUappUpurchaseUcontentsUapi', APIs.InAppPurchaseContentsApi);
    }

    get inUappUpurchaseUimagesUapi(): APIs.InAppPurchaseImagesApi {
        return this.getApi('inUappUpurchaseUimagesUapi', APIs.InAppPurchaseImagesApi);
    }

    get inUappUpurchaseUlocalizationsUapi(): APIs.InAppPurchaseLocalizationsApi {
        return this.getApi('inUappUpurchaseUlocalizationsUapi', APIs.InAppPurchaseLocalizationsApi);
    }

    get inUappUpurchaseUpriceUpointsUapi(): APIs.InAppPurchasePricePointsApi {
        return this.getApi('inUappUpurchaseUpriceUpointsUapi', APIs.InAppPurchasePricePointsApi);
    }

    get inUappUpurchaseUpriceUschedulesUapi(): APIs.InAppPurchasePriceSchedulesApi {
        return this.getApi('inUappUpurchaseUpriceUschedulesUapi', APIs.InAppPurchasePriceSchedulesApi);
    }

    get inUappUpurchaseUsubmissionsUapi(): APIs.InAppPurchaseSubmissionsApi {
        return this.getApi('inUappUpurchaseUsubmissionsUapi', APIs.InAppPurchaseSubmissionsApi);
    }

    get inUappUpurchasesUapi(): APIs.InAppPurchasesApi {
        return this.getApi('inUappUpurchasesUapi', APIs.InAppPurchasesApi);
    }

    get marketplaceUdomainsUapi(): APIs.MarketplaceDomainsApi {
        return this.getApi('marketplaceUdomainsUapi', APIs.MarketplaceDomainsApi);
    }

    get marketplaceUsearchUdetailsUapi(): APIs.MarketplaceSearchDetailsApi {
        return this.getApi('marketplaceUsearchUdetailsUapi', APIs.MarketplaceSearchDetailsApi);
    }

    get marketplaceUwebhooksUapi(): APIs.MarketplaceWebhooksApi {
        return this.getApi('marketplaceUwebhooksUapi', APIs.MarketplaceWebhooksApi);
    }

    get metricsUapi(): APIs.MetricsApi {
        return this.getApi('metricsUapi', APIs.MetricsApi);
    }

    get preUreleaseUversionsUapi(): APIs.PreReleaseVersionsApi {
        return this.getApi('preUreleaseUversionsUapi', APIs.PreReleaseVersionsApi);
    }

    get profilesUapi(): APIs.ProfilesApi {
        return this.getApi('profilesUapi', APIs.ProfilesApi);
    }

    get promotedUpurchaseUimagesUapi(): APIs.PromotedPurchaseImagesApi {
        return this.getApi('promotedUpurchaseUimagesUapi', APIs.PromotedPurchaseImagesApi);
    }

    get promotedUpurchasesUapi(): APIs.PromotedPurchasesApi {
        return this.getApi('promotedUpurchasesUapi', APIs.PromotedPurchasesApi);
    }

    get reviewUsubmissionUitemsUapi(): APIs.ReviewSubmissionItemsApi {
        return this.getApi('reviewUsubmissionUitemsUapi', APIs.ReviewSubmissionItemsApi);
    }

    get reviewUsubmissionsUapi(): APIs.ReviewSubmissionsApi {
        return this.getApi('reviewUsubmissionsUapi', APIs.ReviewSubmissionsApi);
    }

    get routingUappUcoveragesUapi(): APIs.RoutingAppCoveragesApi {
        return this.getApi('routingUappUcoveragesUapi', APIs.RoutingAppCoveragesApi);
    }

    get salesUreportsUapi(): APIs.SalesReportsApi {
        return this.getApi('salesUreportsUapi', APIs.SalesReportsApi);
    }

    get sandboxUtestersUapi(): APIs.SandboxTestersApi {
        return this.getApi('sandboxUtestersUapi', APIs.SandboxTestersApi);
    }

    get sandboxUtestersUclearUpurchaseUhistoryUrequestUapi(): APIs.SandboxTestersClearPurchaseHistoryRequestApi {
        return this.getApi('sandboxUtestersUclearUpurchaseUhistoryUrequestUapi', APIs.SandboxTestersClearPurchaseHistoryRequestApi);
    }

    get scmUgitUreferencesUapi(): APIs.ScmGitReferencesApi {
        return this.getApi('scmUgitUreferencesUapi', APIs.ScmGitReferencesApi);
    }

    get scmUprovidersUapi(): APIs.ScmProvidersApi {
        return this.getApi('scmUprovidersUapi', APIs.ScmProvidersApi);
    }

    get scmUpullUrequestsUapi(): APIs.ScmPullRequestsApi {
        return this.getApi('scmUpullUrequestsUapi', APIs.ScmPullRequestsApi);
    }

    get scmUrepositoriesUapi(): APIs.ScmRepositoriesApi {
        return this.getApi('scmUrepositoriesUapi', APIs.ScmRepositoriesApi);
    }

    get subscriptionUappUstoreUreviewUscreenshotsUapi(): APIs.SubscriptionAppStoreReviewScreenshotsApi {
        return this.getApi('subscriptionUappUstoreUreviewUscreenshotsUapi', APIs.SubscriptionAppStoreReviewScreenshotsApi);
    }

    get subscriptionUavailabilitiesUapi(): APIs.SubscriptionAvailabilitiesApi {
        return this.getApi('subscriptionUavailabilitiesUapi', APIs.SubscriptionAvailabilitiesApi);
    }

    get subscriptionUgraceUperiodsUapi(): APIs.SubscriptionGracePeriodsApi {
        return this.getApi('subscriptionUgraceUperiodsUapi', APIs.SubscriptionGracePeriodsApi);
    }

    get subscriptionUgroupUlocalizationsUapi(): APIs.SubscriptionGroupLocalizationsApi {
        return this.getApi('subscriptionUgroupUlocalizationsUapi', APIs.SubscriptionGroupLocalizationsApi);
    }

    get subscriptionUgroupUsubmissionsUapi(): APIs.SubscriptionGroupSubmissionsApi {
        return this.getApi('subscriptionUgroupUsubmissionsUapi', APIs.SubscriptionGroupSubmissionsApi);
    }

    get subscriptionUgroupsUapi(): APIs.SubscriptionGroupsApi {
        return this.getApi('subscriptionUgroupsUapi', APIs.SubscriptionGroupsApi);
    }

    get subscriptionUimagesUapi(): APIs.SubscriptionImagesApi {
        return this.getApi('subscriptionUimagesUapi', APIs.SubscriptionImagesApi);
    }

    get subscriptionUintroductoryUoffersUapi(): APIs.SubscriptionIntroductoryOffersApi {
        return this.getApi('subscriptionUintroductoryUoffersUapi', APIs.SubscriptionIntroductoryOffersApi);
    }

    get subscriptionUlocalizationsUapi(): APIs.SubscriptionLocalizationsApi {
        return this.getApi('subscriptionUlocalizationsUapi', APIs.SubscriptionLocalizationsApi);
    }

    get subscriptionUofferUcodeUcustomUcodesUapi(): APIs.SubscriptionOfferCodeCustomCodesApi {
        return this.getApi('subscriptionUofferUcodeUcustomUcodesUapi', APIs.SubscriptionOfferCodeCustomCodesApi);
    }

    get subscriptionUofferUcodeUoneUtimeUuseUcodesUapi(): APIs.SubscriptionOfferCodeOneTimeUseCodesApi {
        return this.getApi('subscriptionUofferUcodeUoneUtimeUuseUcodesUapi', APIs.SubscriptionOfferCodeOneTimeUseCodesApi);
    }

    get subscriptionUofferUcodesUapi(): APIs.SubscriptionOfferCodesApi {
        return this.getApi('subscriptionUofferUcodesUapi', APIs.SubscriptionOfferCodesApi);
    }

    get subscriptionUpriceUpointsUapi(): APIs.SubscriptionPricePointsApi {
        return this.getApi('subscriptionUpriceUpointsUapi', APIs.SubscriptionPricePointsApi);
    }

    get subscriptionUpricesUapi(): APIs.SubscriptionPricesApi {
        return this.getApi('subscriptionUpricesUapi', APIs.SubscriptionPricesApi);
    }

    get subscriptionUpromotionalUoffersUapi(): APIs.SubscriptionPromotionalOffersApi {
        return this.getApi('subscriptionUpromotionalUoffersUapi', APIs.SubscriptionPromotionalOffersApi);
    }

    get subscriptionUsubmissionsUapi(): APIs.SubscriptionSubmissionsApi {
        return this.getApi('subscriptionUsubmissionsUapi', APIs.SubscriptionSubmissionsApi);
    }

    get subscriptionsUapi(): APIs.SubscriptionsApi {
        return this.getApi('subscriptionsUapi', APIs.SubscriptionsApi);
    }

    get territoriesUapi(): APIs.TerritoriesApi {
        return this.getApi('territoriesUapi', APIs.TerritoriesApi);
    }

    get territoryUavailabilitiesUapi(): APIs.TerritoryAvailabilitiesApi {
        return this.getApi('territoryUavailabilitiesUapi', APIs.TerritoryAvailabilitiesApi);
    }

    get userUinvitationsUapi(): APIs.UserInvitationsApi {
        return this.getApi('userUinvitationsUapi', APIs.UserInvitationsApi);
    }

    get usersUapi(): APIs.UsersApi {
        return this.getApi('usersUapi', APIs.UsersApi);
    }

    get winUbackUoffersUapi(): APIs.WinBackOffersApi {
        return this.getApi('winUbackUoffersUapi', APIs.WinBackOffersApi);
    }
}
