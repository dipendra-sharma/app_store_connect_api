
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
export const BetaTesterState = {
    NotInvited: 'NOT_INVITED',
    Invited: 'INVITED',
    Accepted: 'ACCEPTED',
    Installed: 'INSTALLED',
    Revoked: 'REVOKED'
} as const;
export type BetaTesterState = typeof BetaTesterState[keyof typeof BetaTesterState];


export function instanceOfBetaTesterState(value: any): boolean {
    for (const key in BetaTesterState) {
        if (Object.prototype.hasOwnProperty.call(BetaTesterState, key)) {
            if (BetaTesterState[key as keyof typeof BetaTesterState] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BetaTesterStateFromJSON(json: any): BetaTesterState {
    return BetaTesterStateFromJSONTyped(json, false);
}

export function BetaTesterStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaTesterState {
    return json as BetaTesterState;
}

export function BetaTesterStateToJSON(value?: BetaTesterState | null): any {
    return value as any;
}

export function BetaTesterStateToJSONTyped(value: any, ignoreDiscriminator: boolean): BetaTesterState {
    return value as BetaTesterState;
}
