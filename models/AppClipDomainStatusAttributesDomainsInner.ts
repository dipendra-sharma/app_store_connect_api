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
 * @interface AppClipDomainStatusAttributesDomainsInner
 */
export interface AppClipDomainStatusAttributesDomainsInner {
    /**
     * 
     * @type {string}
     * @memberof AppClipDomainStatusAttributesDomainsInner
     */
    domain?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AppClipDomainStatusAttributesDomainsInner
     */
    isValid?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof AppClipDomainStatusAttributesDomainsInner
     */
    lastUpdatedDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof AppClipDomainStatusAttributesDomainsInner
     */
    errorCode?: AppClipDomainStatusAttributesDomainsInnerErrorCodeEnum;
}


/**
 * @export
 */
export const AppClipDomainStatusAttributesDomainsInnerErrorCodeEnum = {
    BadHttpResponse: 'BAD_HTTP_RESPONSE',
    BadJsonContent: 'BAD_JSON_CONTENT',
    BadPkcs7Signature: 'BAD_PKCS7_SIGNATURE',
    CannotReachAasaFile: 'CANNOT_REACH_AASA_FILE',
    DnsError: 'DNS_ERROR',
    InsecureRedirectsForbidden: 'INSECURE_REDIRECTS_FORBIDDEN',
    InvalidEntitlementMissingSection: 'INVALID_ENTITLEMENT_MISSING_SECTION',
    InvalidEntitlementSyntaxError: 'INVALID_ENTITLEMENT_SYNTAX_ERROR',
    InvalidEntitlementUnhandledSection: 'INVALID_ENTITLEMENT_UNHANDLED_SECTION',
    InvalidEntitlementUnknownId: 'INVALID_ENTITLEMENT_UNKNOWN_ID',
    NetworkError: 'NETWORK_ERROR',
    NetworkErrorTemporary: 'NETWORK_ERROR_TEMPORARY',
    OtherError: 'OTHER_ERROR',
    Timeout: 'TIMEOUT',
    TlsError: 'TLS_ERROR',
    UnexpectedError: 'UNEXPECTED_ERROR'
} as const;
export type AppClipDomainStatusAttributesDomainsInnerErrorCodeEnum = typeof AppClipDomainStatusAttributesDomainsInnerErrorCodeEnum[keyof typeof AppClipDomainStatusAttributesDomainsInnerErrorCodeEnum];


/**
 * Check if a given object implements the AppClipDomainStatusAttributesDomainsInner interface.
 */
export function instanceOfAppClipDomainStatusAttributesDomainsInner(value: object): value is AppClipDomainStatusAttributesDomainsInner {
    return true;
}

export function AppClipDomainStatusAttributesDomainsInnerFromJSON(json: any): AppClipDomainStatusAttributesDomainsInner {
    return AppClipDomainStatusAttributesDomainsInnerFromJSONTyped(json, false);
}

export function AppClipDomainStatusAttributesDomainsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDomainStatusAttributesDomainsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'domain': json['domain'] == null ? undefined : json['domain'],
        'isValid': json['isValid'] == null ? undefined : json['isValid'],
        'lastUpdatedDate': json['lastUpdatedDate'] == null ? undefined : (new Date(json['lastUpdatedDate'])),
        'errorCode': json['errorCode'] == null ? undefined : json['errorCode'],
    };
}

export function AppClipDomainStatusAttributesDomainsInnerToJSON(json: any): AppClipDomainStatusAttributesDomainsInner {
    return AppClipDomainStatusAttributesDomainsInnerToJSONTyped(json, false);
}

export function AppClipDomainStatusAttributesDomainsInnerToJSONTyped(value?: AppClipDomainStatusAttributesDomainsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'domain': value['domain'],
        'isValid': value['isValid'],
        'lastUpdatedDate': value['lastUpdatedDate'] == null ? undefined : ((value['lastUpdatedDate']).toISOString()),
        'errorCode': value['errorCode'],
    };
}

