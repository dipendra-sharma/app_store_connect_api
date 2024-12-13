
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
export const BrazilAgeRating = {
    L: 'L',
    Ten: 'TEN',
    Twelve: 'TWELVE',
    Fourteen: 'FOURTEEN',
    Sixteen: 'SIXTEEN',
    Eighteen: 'EIGHTEEN'
} as const;
export type BrazilAgeRating = typeof BrazilAgeRating[keyof typeof BrazilAgeRating];


export function instanceOfBrazilAgeRating(value: any): boolean {
    for (const key in BrazilAgeRating) {
        if (Object.prototype.hasOwnProperty.call(BrazilAgeRating, key)) {
            if (BrazilAgeRating[key as keyof typeof BrazilAgeRating] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BrazilAgeRatingFromJSON(json: any): BrazilAgeRating {
    return BrazilAgeRatingFromJSONTyped(json, false);
}

export function BrazilAgeRatingFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrazilAgeRating {
    return json as BrazilAgeRating;
}

export function BrazilAgeRatingToJSON(value?: BrazilAgeRating | null): any {
    return value as any;
}

export function BrazilAgeRatingToJSONTyped(value: any, ignoreDiscriminator: boolean): BrazilAgeRating {
    return value as BrazilAgeRating;
}

