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
export const CiTestDestinationKind = {
    Simulator: 'SIMULATOR',
    Mac: 'MAC'
} as const;
export type CiTestDestinationKind = typeof CiTestDestinationKind[keyof typeof CiTestDestinationKind];


export function instanceOfCiTestDestinationKind(value: any): boolean {
    for (const key in CiTestDestinationKind) {
        if (Object.prototype.hasOwnProperty.call(CiTestDestinationKind, key)) {
            if (CiTestDestinationKind[key as keyof typeof CiTestDestinationKind] === value) {
                return true;
            }
        }
    }
    return false;
}

export function CiTestDestinationKindFromJSON(json: any): CiTestDestinationKind {
    return CiTestDestinationKindFromJSONTyped(json, false);
}

export function CiTestDestinationKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiTestDestinationKind {
    return json as CiTestDestinationKind;
}

export function CiTestDestinationKindToJSON(value?: CiTestDestinationKind | null): any {
    return value as any;
}

export function CiTestDestinationKindToJSONTyped(value: any, ignoreDiscriminator: boolean): CiTestDestinationKind {
    return value as CiTestDestinationKind;
}

