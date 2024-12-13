
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
import type { BetaAppLocalizationRelationshipsApp } from './BetaAppLocalizationRelationshipsApp';
import {
    BetaAppLocalizationRelationshipsAppFromJSON,
    BetaAppLocalizationRelationshipsAppFromJSONTyped,
    BetaAppLocalizationRelationshipsAppToJSON,
    BetaAppLocalizationRelationshipsAppToJSONTyped,
} from './BetaAppLocalizationRelationshipsApp';
import type { BundleIdRelationshipsBundleIdCapabilities } from './BundleIdRelationshipsBundleIdCapabilities';
import {
    BundleIdRelationshipsBundleIdCapabilitiesFromJSON,
    BundleIdRelationshipsBundleIdCapabilitiesFromJSONTyped,
    BundleIdRelationshipsBundleIdCapabilitiesToJSON,
    BundleIdRelationshipsBundleIdCapabilitiesToJSONTyped,
} from './BundleIdRelationshipsBundleIdCapabilities';
import type { BundleIdRelationshipsProfiles } from './BundleIdRelationshipsProfiles';
import {
    BundleIdRelationshipsProfilesFromJSON,
    BundleIdRelationshipsProfilesFromJSONTyped,
    BundleIdRelationshipsProfilesToJSON,
    BundleIdRelationshipsProfilesToJSONTyped,
} from './BundleIdRelationshipsProfiles';

/**
 * 
 * @export
 * @interface BundleIdRelationships
 */
export interface BundleIdRelationships {
    /**
     * 
     * @type {BundleIdRelationshipsProfiles}
     * @memberof BundleIdRelationships
     */
    profiles?: BundleIdRelationshipsProfiles;
    /**
     * 
     * @type {BundleIdRelationshipsBundleIdCapabilities}
     * @memberof BundleIdRelationships
     */
    bundleIdCapabilities?: BundleIdRelationshipsBundleIdCapabilities;
    /**
     * 
     * @type {BetaAppLocalizationRelationshipsApp}
     * @memberof BundleIdRelationships
     */
    app?: BetaAppLocalizationRelationshipsApp;
}

/**
 * Check if a given object implements the BundleIdRelationships interface.
 */
export function instanceOfBundleIdRelationships(value: object): value is BundleIdRelationships {
    return true;
}

export function BundleIdRelationshipsFromJSON(json: any): BundleIdRelationships {
    return BundleIdRelationshipsFromJSONTyped(json, false);
}

export function BundleIdRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundleIdRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'profiles': json['profiles'] == null ? undefined : BundleIdRelationshipsProfilesFromJSON(json['profiles']),
        'bundleIdCapabilities': json['bundleIdCapabilities'] == null ? undefined : BundleIdRelationshipsBundleIdCapabilitiesFromJSON(json['bundleIdCapabilities']),
        'app': json['app'] == null ? undefined : BetaAppLocalizationRelationshipsAppFromJSON(json['app']),
    };
}

export function BundleIdRelationshipsToJSON(json: any): BundleIdRelationships {
    return BundleIdRelationshipsToJSONTyped(json, false);
}

export function BundleIdRelationshipsToJSONTyped(value?: BundleIdRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'profiles': BundleIdRelationshipsProfilesToJSON(value['profiles']),
        'bundleIdCapabilities': BundleIdRelationshipsBundleIdCapabilitiesToJSON(value['bundleIdCapabilities']),
        'app': BetaAppLocalizationRelationshipsAppToJSON(value['app']),
    };
}

