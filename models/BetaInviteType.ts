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
export const BetaInviteType = {
    Email: 'EMAIL',
    PublicLink: 'PUBLIC_LINK'
} as const;
export type BetaInviteType = typeof BetaInviteType[keyof typeof BetaInviteType];


export function instanceOfBetaInviteType(value: any): boolean {
    for (const key in BetaInviteType) {
        if (Object.prototype.hasOwnProperty.call(BetaInviteType, key)) {
            if (BetaInviteType[key as keyof typeof BetaInviteType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BetaInviteTypeFromJSON(json: any): BetaInviteType {
    return BetaInviteTypeFromJSONTyped(json, false);
}

export function BetaInviteTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaInviteType {
    return json as BetaInviteType;
}

export function BetaInviteTypeToJSON(value?: BetaInviteType | null): any {
    return value as any;
}

export function BetaInviteTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): BetaInviteType {
    return value as BetaInviteType;
}

