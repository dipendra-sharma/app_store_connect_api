
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


/**
 * 
 * @export
 */
export const ExternalBetaState = {
    Processing: 'PROCESSING',
    ProcessingException: 'PROCESSING_EXCEPTION',
    MissingExportCompliance: 'MISSING_EXPORT_COMPLIANCE',
    ReadyForBetaTesting: 'READY_FOR_BETA_TESTING',
    InBetaTesting: 'IN_BETA_TESTING',
    Expired: 'EXPIRED',
    ReadyForBetaSubmission: 'READY_FOR_BETA_SUBMISSION',
    InExportComplianceReview: 'IN_EXPORT_COMPLIANCE_REVIEW',
    WaitingForBetaReview: 'WAITING_FOR_BETA_REVIEW',
    InBetaReview: 'IN_BETA_REVIEW',
    BetaRejected: 'BETA_REJECTED',
    BetaApproved: 'BETA_APPROVED'
} as const;
export type ExternalBetaState = typeof ExternalBetaState[keyof typeof ExternalBetaState];


export function instanceOfExternalBetaState(value: any): boolean {
    for (const key in ExternalBetaState) {
        if (Object.prototype.hasOwnProperty.call(ExternalBetaState, key)) {
            if (ExternalBetaState[key as keyof typeof ExternalBetaState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ExternalBetaStateFromJSON(json: any): ExternalBetaState {
    return ExternalBetaStateFromJSONTyped(json, false);
}

export function ExternalBetaStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalBetaState {
    return json as ExternalBetaState;
}

export function ExternalBetaStateToJSON(value?: ExternalBetaState | null): any {
    return value as any;
}

export function ExternalBetaStateToJSONTyped(value: any, ignoreDiscriminator: boolean): ExternalBetaState {
    return value as ExternalBetaState;
}

