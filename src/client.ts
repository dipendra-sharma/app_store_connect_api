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

    get actorsApi(): APIs.ActorsApi {
        return this.getApi('actorsApi', APIs.ActorsApi);
    }

    get ageRatingDeclarationsApi(): APIs.AgeRatingDeclarationsApi {
        return this.getApi('ageRatingDeclarationsApi', APIs.AgeRatingDeclarationsApi);
    }

    get alternativeDistributionDomainsApi(): APIs.AlternativeDistributionDomainsApi {
        return this.getApi('alternativeDistributionDomainsApi', APIs.AlternativeDistributionDomainsApi);
    }

    get alternativeDistributionKeysApi(): APIs.AlternativeDistributionKeysApi {
        return this.getApi('alternativeDistributionKeysApi', APIs.AlternativeDistributionKeysApi);
    }

    get alternativeDistributionPackageDeltasApi(): APIs.AlternativeDistributionPackageDeltasApi {
        return this.getApi('alternativeDistributionPackageDeltasApi', APIs.AlternativeDistributionPackageDeltasApi);
    }

    get alternativeDistributionPackageVariantsApi(): APIs.AlternativeDistributionPackageVariantsApi {
        return this.getApi('alternativeDistributionPackageVariantsApi', APIs.AlternativeDistributionPackageVariantsApi);
    }

    get alternativeDistributionPackageVersionsApi(): APIs.AlternativeDistributionPackageVersionsApi {
        return this.getApi('alternativeDistributionPackageVersionsApi', APIs.AlternativeDistributionPackageVersionsApi);
    }

    get alternativeDistributionPackagesApi(): APIs.AlternativeDistributionPackagesApi {
        return this.getApi('alternativeDistributionPackagesApi', APIs.AlternativeDistributionPackagesApi);
    }

    get analyticsReportInstancesApi(): APIs.AnalyticsReportInstancesApi {
        return this.getApi('analyticsReportInstancesApi', APIs.AnalyticsReportInstancesApi);
    }

    get analyticsReportRequestsApi(): APIs.AnalyticsReportRequestsApi {
        return this.getApi('analyticsReportRequestsApi', APIs.AnalyticsReportRequestsApi);
    }

    get analyticsReportSegmentsApi(): APIs.AnalyticsReportSegmentsApi {
        return this.getApi('analyticsReportSegmentsApi', APIs.AnalyticsReportSegmentsApi);
    }

    get analyticsReportsApi(): APIs.AnalyticsReportsApi {
        return this.getApi('analyticsReportsApi', APIs.AnalyticsReportsApi);
    }

    get appAvailabilitiesApi(): APIs.AppAvailabilitiesApi {
        return this.getApi('appAvailabilitiesApi', APIs.AppAvailabilitiesApi);
    }

    get appCategoriesApi(): APIs.AppCategoriesApi {
        return this.getApi('appCategoriesApi', APIs.AppCategoriesApi);
    }

    get appClipAdvancedExperienceImagesApi(): APIs.AppClipAdvancedExperienceImagesApi {
        return this.getApi('appClipAdvancedExperienceImagesApi', APIs.AppClipAdvancedExperienceImagesApi);
    }

    get appClipAdvancedExperiencesApi(): APIs.AppClipAdvancedExperiencesApi {
        return this.getApi('appClipAdvancedExperiencesApi', APIs.AppClipAdvancedExperiencesApi);
    }

    get appClipAppStoreReviewDetailsApi(): APIs.AppClipAppStoreReviewDetailsApi {
        return this.getApi('appClipAppStoreReviewDetailsApi', APIs.AppClipAppStoreReviewDetailsApi);
    }

    get appClipDefaultExperienceLocalizationsApi(): APIs.AppClipDefaultExperienceLocalizationsApi {
        return this.getApi('appClipDefaultExperienceLocalizationsApi', APIs.AppClipDefaultExperienceLocalizationsApi);
    }

    get appClipDefaultExperiencesApi(): APIs.AppClipDefaultExperiencesApi {
        return this.getApi('appClipDefaultExperiencesApi', APIs.AppClipDefaultExperiencesApi);
    }

    get appClipHeaderImagesApi(): APIs.AppClipHeaderImagesApi {
        return this.getApi('appClipHeaderImagesApi', APIs.AppClipHeaderImagesApi);
    }

    get appClipsApi(): APIs.AppClipsApi {
        return this.getApi('appClipsApi', APIs.AppClipsApi);
    }

    get appCustomProductPageLocalizationsApi(): APIs.AppCustomProductPageLocalizationsApi {
        return this.getApi('appCustomProductPageLocalizationsApi', APIs.AppCustomProductPageLocalizationsApi);
    }

    get appCustomProductPageVersionsApi(): APIs.AppCustomProductPageVersionsApi {
        return this.getApi('appCustomProductPageVersionsApi', APIs.AppCustomProductPageVersionsApi);
    }

    get appCustomProductPagesApi(): APIs.AppCustomProductPagesApi {
        return this.getApi('appCustomProductPagesApi', APIs.AppCustomProductPagesApi);
    }

    get appEncryptionDeclarationDocumentsApi(): APIs.AppEncryptionDeclarationDocumentsApi {
        return this.getApi('appEncryptionDeclarationDocumentsApi', APIs.AppEncryptionDeclarationDocumentsApi);
    }

    get appEncryptionDeclarationsApi(): APIs.AppEncryptionDeclarationsApi {
        return this.getApi('appEncryptionDeclarationsApi', APIs.AppEncryptionDeclarationsApi);
    }

    get appEventLocalizationsApi(): APIs.AppEventLocalizationsApi {
        return this.getApi('appEventLocalizationsApi', APIs.AppEventLocalizationsApi);
    }

    get appEventScreenshotsApi(): APIs.AppEventScreenshotsApi {
        return this.getApi('appEventScreenshotsApi', APIs.AppEventScreenshotsApi);
    }

    get appEventVideoClipsApi(): APIs.AppEventVideoClipsApi {
        return this.getApi('appEventVideoClipsApi', APIs.AppEventVideoClipsApi);
    }

    get appEventsApi(): APIs.AppEventsApi {
        return this.getApi('appEventsApi', APIs.AppEventsApi);
    }

    get appInfoLocalizationsApi(): APIs.AppInfoLocalizationsApi {
        return this.getApi('appInfoLocalizationsApi', APIs.AppInfoLocalizationsApi);
    }

    get appInfosApi(): APIs.AppInfosApi {
        return this.getApi('appInfosApi', APIs.AppInfosApi);
    }

    get appPreviewSetsApi(): APIs.AppPreviewSetsApi {
        return this.getApi('appPreviewSetsApi', APIs.AppPreviewSetsApi);
    }

    get appPreviewsApi(): APIs.AppPreviewsApi {
        return this.getApi('appPreviewsApi', APIs.AppPreviewsApi);
    }

    get appPricePointsApi(): APIs.AppPricePointsApi {
        return this.getApi('appPricePointsApi', APIs.AppPricePointsApi);
    }

    get appPriceSchedulesApi(): APIs.AppPriceSchedulesApi {
        return this.getApi('appPriceSchedulesApi', APIs.AppPriceSchedulesApi);
    }

    get appScreenshotSetsApi(): APIs.AppScreenshotSetsApi {
        return this.getApi('appScreenshotSetsApi', APIs.AppScreenshotSetsApi);
    }

    get appScreenshotsApi(): APIs.AppScreenshotsApi {
        return this.getApi('appScreenshotsApi', APIs.AppScreenshotsApi);
    }

    get appStoreReviewAttachmentsApi(): APIs.AppStoreReviewAttachmentsApi {
        return this.getApi('appStoreReviewAttachmentsApi', APIs.AppStoreReviewAttachmentsApi);
    }

    get appStoreReviewDetailsApi(): APIs.AppStoreReviewDetailsApi {
        return this.getApi('appStoreReviewDetailsApi', APIs.AppStoreReviewDetailsApi);
    }

    get appStoreVersionExperimentTreatmentLocalizationsApi(): APIs.AppStoreVersionExperimentTreatmentLocalizationsApi {
        return this.getApi('appStoreVersionExperimentTreatmentLocalizationsApi', APIs.AppStoreVersionExperimentTreatmentLocalizationsApi);
    }

    get appStoreVersionExperimentTreatmentsApi(): APIs.AppStoreVersionExperimentTreatmentsApi {
        return this.getApi('appStoreVersionExperimentTreatmentsApi', APIs.AppStoreVersionExperimentTreatmentsApi);
    }

    get appStoreVersionExperimentsApi(): APIs.AppStoreVersionExperimentsApi {
        return this.getApi('appStoreVersionExperimentsApi', APIs.AppStoreVersionExperimentsApi);
    }

    get appStoreVersionLocalizationsApi(): APIs.AppStoreVersionLocalizationsApi {
        return this.getApi('appStoreVersionLocalizationsApi', APIs.AppStoreVersionLocalizationsApi);
    }

    get appStoreVersionPhasedReleasesApi(): APIs.AppStoreVersionPhasedReleasesApi {
        return this.getApi('appStoreVersionPhasedReleasesApi', APIs.AppStoreVersionPhasedReleasesApi);
    }

    get appStoreVersionPromotionsApi(): APIs.AppStoreVersionPromotionsApi {
        return this.getApi('appStoreVersionPromotionsApi', APIs.AppStoreVersionPromotionsApi);
    }

    get appStoreVersionReleaseRequestsApi(): APIs.AppStoreVersionReleaseRequestsApi {
        return this.getApi('appStoreVersionReleaseRequestsApi', APIs.AppStoreVersionReleaseRequestsApi);
    }

    get appStoreVersionSubmissionsApi(): APIs.AppStoreVersionSubmissionsApi {
        return this.getApi('appStoreVersionSubmissionsApi', APIs.AppStoreVersionSubmissionsApi);
    }

    get appStoreVersionsApi(): APIs.AppStoreVersionsApi {
        return this.getApi('appStoreVersionsApi', APIs.AppStoreVersionsApi);
    }

    get appsApi(): APIs.AppsApi {
        return this.getApi('appsApi', APIs.AppsApi);
    }

    get betaAppClipInvocationLocalizationsApi(): APIs.BetaAppClipInvocationLocalizationsApi {
        return this.getApi('betaAppClipInvocationLocalizationsApi', APIs.BetaAppClipInvocationLocalizationsApi);
    }

    get betaAppClipInvocationsApi(): APIs.BetaAppClipInvocationsApi {
        return this.getApi('betaAppClipInvocationsApi', APIs.BetaAppClipInvocationsApi);
    }

    get betaAppLocalizationsApi(): APIs.BetaAppLocalizationsApi {
        return this.getApi('betaAppLocalizationsApi', APIs.BetaAppLocalizationsApi);
    }

    get betaAppReviewDetailsApi(): APIs.BetaAppReviewDetailsApi {
        return this.getApi('betaAppReviewDetailsApi', APIs.BetaAppReviewDetailsApi);
    }

    get betaAppReviewSubmissionsApi(): APIs.BetaAppReviewSubmissionsApi {
        return this.getApi('betaAppReviewSubmissionsApi', APIs.BetaAppReviewSubmissionsApi);
    }

    get betaBuildLocalizationsApi(): APIs.BetaBuildLocalizationsApi {
        return this.getApi('betaBuildLocalizationsApi', APIs.BetaBuildLocalizationsApi);
    }

    get betaGroupsApi(): APIs.BetaGroupsApi {
        return this.getApi('betaGroupsApi', APIs.BetaGroupsApi);
    }

    get betaLicenseAgreementsApi(): APIs.BetaLicenseAgreementsApi {
        return this.getApi('betaLicenseAgreementsApi', APIs.BetaLicenseAgreementsApi);
    }

    get betaTesterInvitationsApi(): APIs.BetaTesterInvitationsApi {
        return this.getApi('betaTesterInvitationsApi', APIs.BetaTesterInvitationsApi);
    }

    get betaTestersApi(): APIs.BetaTestersApi {
        return this.getApi('betaTestersApi', APIs.BetaTestersApi);
    }

    get buildBetaDetailsApi(): APIs.BuildBetaDetailsApi {
        return this.getApi('buildBetaDetailsApi', APIs.BuildBetaDetailsApi);
    }

    get buildBetaNotificationsApi(): APIs.BuildBetaNotificationsApi {
        return this.getApi('buildBetaNotificationsApi', APIs.BuildBetaNotificationsApi);
    }

    get buildBundlesApi(): APIs.BuildBundlesApi {
        return this.getApi('buildBundlesApi', APIs.BuildBundlesApi);
    }

    get buildsApi(): APIs.BuildsApi {
        return this.getApi('buildsApi', APIs.BuildsApi);
    }

    get bundleIdCapabilitiesApi(): APIs.BundleIdCapabilitiesApi {
        return this.getApi('bundleIdCapabilitiesApi', APIs.BundleIdCapabilitiesApi);
    }

    get bundleIdsApi(): APIs.BundleIdsApi {
        return this.getApi('bundleIdsApi', APIs.BundleIdsApi);
    }

    get certificatesApi(): APIs.CertificatesApi {
        return this.getApi('certificatesApi', APIs.CertificatesApi);
    }

    get ciArtifactsApi(): APIs.CiArtifactsApi {
        return this.getApi('ciArtifactsApi', APIs.CiArtifactsApi);
    }

    get ciBuildActionsApi(): APIs.CiBuildActionsApi {
        return this.getApi('ciBuildActionsApi', APIs.CiBuildActionsApi);
    }

    get ciBuildRunsApi(): APIs.CiBuildRunsApi {
        return this.getApi('ciBuildRunsApi', APIs.CiBuildRunsApi);
    }

    get ciIssuesApi(): APIs.CiIssuesApi {
        return this.getApi('ciIssuesApi', APIs.CiIssuesApi);
    }

    get ciMacOsVersionsApi(): APIs.CiMacOsVersionsApi {
        return this.getApi('ciMacOsVersionsApi', APIs.CiMacOsVersionsApi);
    }

    get ciProductsApi(): APIs.CiProductsApi {
        return this.getApi('ciProductsApi', APIs.CiProductsApi);
    }

    get ciTestResultsApi(): APIs.CiTestResultsApi {
        return this.getApi('ciTestResultsApi', APIs.CiTestResultsApi);
    }

    get ciWorkflowsApi(): APIs.CiWorkflowsApi {
        return this.getApi('ciWorkflowsApi', APIs.CiWorkflowsApi);
    }

    get ciXcodeVersionsApi(): APIs.CiXcodeVersionsApi {
        return this.getApi('ciXcodeVersionsApi', APIs.CiXcodeVersionsApi);
    }

    get customerReviewResponsesApi(): APIs.CustomerReviewResponsesApi {
        return this.getApi('customerReviewResponsesApi', APIs.CustomerReviewResponsesApi);
    }

    get customerReviewsApi(): APIs.CustomerReviewsApi {
        return this.getApi('customerReviewsApi', APIs.CustomerReviewsApi);
    }

    get devicesApi(): APIs.DevicesApi {
        return this.getApi('devicesApi', APIs.DevicesApi);
    }

    get diagnosticSignaturesApi(): APIs.DiagnosticSignaturesApi {
        return this.getApi('diagnosticSignaturesApi', APIs.DiagnosticSignaturesApi);
    }

    get endAppAvailabilityPreOrdersApi(): APIs.EndAppAvailabilityPreOrdersApi {
        return this.getApi('endAppAvailabilityPreOrdersApi', APIs.EndAppAvailabilityPreOrdersApi);
    }

    get endUserLicenseAgreementsApi(): APIs.EndUserLicenseAgreementsApi {
        return this.getApi('endUserLicenseAgreementsApi', APIs.EndUserLicenseAgreementsApi);
    }

    get financeReportsApi(): APIs.FinanceReportsApi {
        return this.getApi('financeReportsApi', APIs.FinanceReportsApi);
    }

    get gameCenterAchievementImagesApi(): APIs.GameCenterAchievementImagesApi {
        return this.getApi('gameCenterAchievementImagesApi', APIs.GameCenterAchievementImagesApi);
    }

    get gameCenterAchievementLocalizationsApi(): APIs.GameCenterAchievementLocalizationsApi {
        return this.getApi('gameCenterAchievementLocalizationsApi', APIs.GameCenterAchievementLocalizationsApi);
    }

    get gameCenterAchievementReleasesApi(): APIs.GameCenterAchievementReleasesApi {
        return this.getApi('gameCenterAchievementReleasesApi', APIs.GameCenterAchievementReleasesApi);
    }

    get gameCenterAchievementsApi(): APIs.GameCenterAchievementsApi {
        return this.getApi('gameCenterAchievementsApi', APIs.GameCenterAchievementsApi);
    }

    get gameCenterAppVersionsApi(): APIs.GameCenterAppVersionsApi {
        return this.getApi('gameCenterAppVersionsApi', APIs.GameCenterAppVersionsApi);
    }

    get gameCenterDetailsApi(): APIs.GameCenterDetailsApi {
        return this.getApi('gameCenterDetailsApi', APIs.GameCenterDetailsApi);
    }

    get gameCenterEnabledVersionsApi(): APIs.GameCenterEnabledVersionsApi {
        return this.getApi('gameCenterEnabledVersionsApi', APIs.GameCenterEnabledVersionsApi);
    }

    get gameCenterGroupsApi(): APIs.GameCenterGroupsApi {
        return this.getApi('gameCenterGroupsApi', APIs.GameCenterGroupsApi);
    }

    get gameCenterLeaderboardEntrySubmissionsApi(): APIs.GameCenterLeaderboardEntrySubmissionsApi {
        return this.getApi('gameCenterLeaderboardEntrySubmissionsApi', APIs.GameCenterLeaderboardEntrySubmissionsApi);
    }

    get gameCenterLeaderboardImagesApi(): APIs.GameCenterLeaderboardImagesApi {
        return this.getApi('gameCenterLeaderboardImagesApi', APIs.GameCenterLeaderboardImagesApi);
    }

    get gameCenterLeaderboardLocalizationsApi(): APIs.GameCenterLeaderboardLocalizationsApi {
        return this.getApi('gameCenterLeaderboardLocalizationsApi', APIs.GameCenterLeaderboardLocalizationsApi);
    }

    get gameCenterLeaderboardReleasesApi(): APIs.GameCenterLeaderboardReleasesApi {
        return this.getApi('gameCenterLeaderboardReleasesApi', APIs.GameCenterLeaderboardReleasesApi);
    }

    get gameCenterLeaderboardSetImagesApi(): APIs.GameCenterLeaderboardSetImagesApi {
        return this.getApi('gameCenterLeaderboardSetImagesApi', APIs.GameCenterLeaderboardSetImagesApi);
    }

    get gameCenterLeaderboardSetLocalizationsApi(): APIs.GameCenterLeaderboardSetLocalizationsApi {
        return this.getApi('gameCenterLeaderboardSetLocalizationsApi', APIs.GameCenterLeaderboardSetLocalizationsApi);
    }

    get gameCenterLeaderboardSetMemberLocalizationsApi(): APIs.GameCenterLeaderboardSetMemberLocalizationsApi {
        return this.getApi('gameCenterLeaderboardSetMemberLocalizationsApi', APIs.GameCenterLeaderboardSetMemberLocalizationsApi);
    }

    get gameCenterLeaderboardSetReleasesApi(): APIs.GameCenterLeaderboardSetReleasesApi {
        return this.getApi('gameCenterLeaderboardSetReleasesApi', APIs.GameCenterLeaderboardSetReleasesApi);
    }

    get gameCenterLeaderboardSetsApi(): APIs.GameCenterLeaderboardSetsApi {
        return this.getApi('gameCenterLeaderboardSetsApi', APIs.GameCenterLeaderboardSetsApi);
    }

    get gameCenterLeaderboardsApi(): APIs.GameCenterLeaderboardsApi {
        return this.getApi('gameCenterLeaderboardsApi', APIs.GameCenterLeaderboardsApi);
    }

    get gameCenterMatchmakingQueuesApi(): APIs.GameCenterMatchmakingQueuesApi {
        return this.getApi('gameCenterMatchmakingQueuesApi', APIs.GameCenterMatchmakingQueuesApi);
    }

    get gameCenterMatchmakingRuleSetTestsApi(): APIs.GameCenterMatchmakingRuleSetTestsApi {
        return this.getApi('gameCenterMatchmakingRuleSetTestsApi', APIs.GameCenterMatchmakingRuleSetTestsApi);
    }

    get gameCenterMatchmakingRuleSetsApi(): APIs.GameCenterMatchmakingRuleSetsApi {
        return this.getApi('gameCenterMatchmakingRuleSetsApi', APIs.GameCenterMatchmakingRuleSetsApi);
    }

    get gameCenterMatchmakingRulesApi(): APIs.GameCenterMatchmakingRulesApi {
        return this.getApi('gameCenterMatchmakingRulesApi', APIs.GameCenterMatchmakingRulesApi);
    }

    get gameCenterMatchmakingTeamsApi(): APIs.GameCenterMatchmakingTeamsApi {
        return this.getApi('gameCenterMatchmakingTeamsApi', APIs.GameCenterMatchmakingTeamsApi);
    }

    get gameCenterPlayerAchievementSubmissionsApi(): APIs.GameCenterPlayerAchievementSubmissionsApi {
        return this.getApi('gameCenterPlayerAchievementSubmissionsApi', APIs.GameCenterPlayerAchievementSubmissionsApi);
    }

    get inAppPurchaseAppStoreReviewScreenshotsApi(): APIs.InAppPurchaseAppStoreReviewScreenshotsApi {
        return this.getApi('inAppPurchaseAppStoreReviewScreenshotsApi', APIs.InAppPurchaseAppStoreReviewScreenshotsApi);
    }

    get inAppPurchaseAvailabilitiesApi(): APIs.InAppPurchaseAvailabilitiesApi {
        return this.getApi('inAppPurchaseAvailabilitiesApi', APIs.InAppPurchaseAvailabilitiesApi);
    }

    get inAppPurchaseContentsApi(): APIs.InAppPurchaseContentsApi {
        return this.getApi('inAppPurchaseContentsApi', APIs.InAppPurchaseContentsApi);
    }

    get inAppPurchaseImagesApi(): APIs.InAppPurchaseImagesApi {
        return this.getApi('inAppPurchaseImagesApi', APIs.InAppPurchaseImagesApi);
    }

    get inAppPurchaseLocalizationsApi(): APIs.InAppPurchaseLocalizationsApi {
        return this.getApi('inAppPurchaseLocalizationsApi', APIs.InAppPurchaseLocalizationsApi);
    }

    get inAppPurchasePricePointsApi(): APIs.InAppPurchasePricePointsApi {
        return this.getApi('inAppPurchasePricePointsApi', APIs.InAppPurchasePricePointsApi);
    }

    get inAppPurchasePriceSchedulesApi(): APIs.InAppPurchasePriceSchedulesApi {
        return this.getApi('inAppPurchasePriceSchedulesApi', APIs.InAppPurchasePriceSchedulesApi);
    }

    get inAppPurchaseSubmissionsApi(): APIs.InAppPurchaseSubmissionsApi {
        return this.getApi('inAppPurchaseSubmissionsApi', APIs.InAppPurchaseSubmissionsApi);
    }

    get inAppPurchasesApi(): APIs.InAppPurchasesApi {
        return this.getApi('inAppPurchasesApi', APIs.InAppPurchasesApi);
    }

    get marketplaceDomainsApi(): APIs.MarketplaceDomainsApi {
        return this.getApi('marketplaceDomainsApi', APIs.MarketplaceDomainsApi);
    }

    get marketplaceSearchDetailsApi(): APIs.MarketplaceSearchDetailsApi {
        return this.getApi('marketplaceSearchDetailsApi', APIs.MarketplaceSearchDetailsApi);
    }

    get marketplaceWebhooksApi(): APIs.MarketplaceWebhooksApi {
        return this.getApi('marketplaceWebhooksApi', APIs.MarketplaceWebhooksApi);
    }

    get metricsApi(): APIs.MetricsApi {
        return this.getApi('metricsApi', APIs.MetricsApi);
    }

    get preReleaseVersionsApi(): APIs.PreReleaseVersionsApi {
        return this.getApi('preReleaseVersionsApi', APIs.PreReleaseVersionsApi);
    }

    get profilesApi(): APIs.ProfilesApi {
        return this.getApi('profilesApi', APIs.ProfilesApi);
    }

    get promotedPurchaseImagesApi(): APIs.PromotedPurchaseImagesApi {
        return this.getApi('promotedPurchaseImagesApi', APIs.PromotedPurchaseImagesApi);
    }

    get promotedPurchasesApi(): APIs.PromotedPurchasesApi {
        return this.getApi('promotedPurchasesApi', APIs.PromotedPurchasesApi);
    }

    get reviewSubmissionItemsApi(): APIs.ReviewSubmissionItemsApi {
        return this.getApi('reviewSubmissionItemsApi', APIs.ReviewSubmissionItemsApi);
    }

    get reviewSubmissionsApi(): APIs.ReviewSubmissionsApi {
        return this.getApi('reviewSubmissionsApi', APIs.ReviewSubmissionsApi);
    }

    get routingAppCoveragesApi(): APIs.RoutingAppCoveragesApi {
        return this.getApi('routingAppCoveragesApi', APIs.RoutingAppCoveragesApi);
    }

    get salesReportsApi(): APIs.SalesReportsApi {
        return this.getApi('salesReportsApi', APIs.SalesReportsApi);
    }

    get sandboxTestersApi(): APIs.SandboxTestersApi {
        return this.getApi('sandboxTestersApi', APIs.SandboxTestersApi);
    }

    get sandboxTestersClearPurchaseHistoryRequestApi(): APIs.SandboxTestersClearPurchaseHistoryRequestApi {
        return this.getApi('sandboxTestersClearPurchaseHistoryRequestApi', APIs.SandboxTestersClearPurchaseHistoryRequestApi);
    }

    get scmGitReferencesApi(): APIs.ScmGitReferencesApi {
        return this.getApi('scmGitReferencesApi', APIs.ScmGitReferencesApi);
    }

    get scmProvidersApi(): APIs.ScmProvidersApi {
        return this.getApi('scmProvidersApi', APIs.ScmProvidersApi);
    }

    get scmPullRequestsApi(): APIs.ScmPullRequestsApi {
        return this.getApi('scmPullRequestsApi', APIs.ScmPullRequestsApi);
    }

    get scmRepositoriesApi(): APIs.ScmRepositoriesApi {
        return this.getApi('scmRepositoriesApi', APIs.ScmRepositoriesApi);
    }

    get subscriptionAppStoreReviewScreenshotsApi(): APIs.SubscriptionAppStoreReviewScreenshotsApi {
        return this.getApi('subscriptionAppStoreReviewScreenshotsApi', APIs.SubscriptionAppStoreReviewScreenshotsApi);
    }

    get subscriptionAvailabilitiesApi(): APIs.SubscriptionAvailabilitiesApi {
        return this.getApi('subscriptionAvailabilitiesApi', APIs.SubscriptionAvailabilitiesApi);
    }

    get subscriptionGracePeriodsApi(): APIs.SubscriptionGracePeriodsApi {
        return this.getApi('subscriptionGracePeriodsApi', APIs.SubscriptionGracePeriodsApi);
    }

    get subscriptionGroupLocalizationsApi(): APIs.SubscriptionGroupLocalizationsApi {
        return this.getApi('subscriptionGroupLocalizationsApi', APIs.SubscriptionGroupLocalizationsApi);
    }

    get subscriptionGroupSubmissionsApi(): APIs.SubscriptionGroupSubmissionsApi {
        return this.getApi('subscriptionGroupSubmissionsApi', APIs.SubscriptionGroupSubmissionsApi);
    }

    get subscriptionGroupsApi(): APIs.SubscriptionGroupsApi {
        return this.getApi('subscriptionGroupsApi', APIs.SubscriptionGroupsApi);
    }

    get subscriptionImagesApi(): APIs.SubscriptionImagesApi {
        return this.getApi('subscriptionImagesApi', APIs.SubscriptionImagesApi);
    }

    get subscriptionIntroductoryOffersApi(): APIs.SubscriptionIntroductoryOffersApi {
        return this.getApi('subscriptionIntroductoryOffersApi', APIs.SubscriptionIntroductoryOffersApi);
    }

    get subscriptionLocalizationsApi(): APIs.SubscriptionLocalizationsApi {
        return this.getApi('subscriptionLocalizationsApi', APIs.SubscriptionLocalizationsApi);
    }

    get subscriptionOfferCodeCustomCodesApi(): APIs.SubscriptionOfferCodeCustomCodesApi {
        return this.getApi('subscriptionOfferCodeCustomCodesApi', APIs.SubscriptionOfferCodeCustomCodesApi);
    }

    get subscriptionOfferCodeOneTimeUseCodesApi(): APIs.SubscriptionOfferCodeOneTimeUseCodesApi {
        return this.getApi('subscriptionOfferCodeOneTimeUseCodesApi', APIs.SubscriptionOfferCodeOneTimeUseCodesApi);
    }

    get subscriptionOfferCodesApi(): APIs.SubscriptionOfferCodesApi {
        return this.getApi('subscriptionOfferCodesApi', APIs.SubscriptionOfferCodesApi);
    }

    get subscriptionPricePointsApi(): APIs.SubscriptionPricePointsApi {
        return this.getApi('subscriptionPricePointsApi', APIs.SubscriptionPricePointsApi);
    }

    get subscriptionPricesApi(): APIs.SubscriptionPricesApi {
        return this.getApi('subscriptionPricesApi', APIs.SubscriptionPricesApi);
    }

    get subscriptionPromotionalOffersApi(): APIs.SubscriptionPromotionalOffersApi {
        return this.getApi('subscriptionPromotionalOffersApi', APIs.SubscriptionPromotionalOffersApi);
    }

    get subscriptionSubmissionsApi(): APIs.SubscriptionSubmissionsApi {
        return this.getApi('subscriptionSubmissionsApi', APIs.SubscriptionSubmissionsApi);
    }

    get subscriptionsApi(): APIs.SubscriptionsApi {
        return this.getApi('subscriptionsApi', APIs.SubscriptionsApi);
    }

    get territoriesApi(): APIs.TerritoriesApi {
        return this.getApi('territoriesApi', APIs.TerritoriesApi);
    }

    get territoryAvailabilitiesApi(): APIs.TerritoryAvailabilitiesApi {
        return this.getApi('territoryAvailabilitiesApi', APIs.TerritoryAvailabilitiesApi);
    }

    get userInvitationsApi(): APIs.UserInvitationsApi {
        return this.getApi('userInvitationsApi', APIs.UserInvitationsApi);
    }

    get usersApi(): APIs.UsersApi {
        return this.getApi('usersApi', APIs.UsersApi);
    }

    get winBackOffersApi(): APIs.WinBackOffersApi {
        return this.getApi('winBackOffersApi', APIs.WinBackOffersApi);
    }
}
