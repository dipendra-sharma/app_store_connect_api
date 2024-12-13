
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
import type { AppInfoRelationshipsAgeRatingDeclaration } from './AppInfoRelationshipsAgeRatingDeclaration';
import {
    AppInfoRelationshipsAgeRatingDeclarationFromJSON,
    AppInfoRelationshipsAgeRatingDeclarationFromJSONTyped,
    AppInfoRelationshipsAgeRatingDeclarationToJSON,
    AppInfoRelationshipsAgeRatingDeclarationToJSONTyped,
} from './AppInfoRelationshipsAgeRatingDeclaration';
import type { AppInfoRelationshipsAppInfoLocalizations } from './AppInfoRelationshipsAppInfoLocalizations';
import {
    AppInfoRelationshipsAppInfoLocalizationsFromJSON,
    AppInfoRelationshipsAppInfoLocalizationsFromJSONTyped,
    AppInfoRelationshipsAppInfoLocalizationsToJSON,
    AppInfoRelationshipsAppInfoLocalizationsToJSONTyped,
} from './AppInfoRelationshipsAppInfoLocalizations';
import type { AlternativeDistributionKeyCreateRequestDataRelationshipsApp } from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import {
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSONTyped,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON,
    AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSONTyped,
} from './AlternativeDistributionKeyCreateRequestDataRelationshipsApp';
import type { AppCategoryRelationshipsParent } from './AppCategoryRelationshipsParent';
import {
    AppCategoryRelationshipsParentFromJSON,
    AppCategoryRelationshipsParentFromJSONTyped,
    AppCategoryRelationshipsParentToJSON,
    AppCategoryRelationshipsParentToJSONTyped,
} from './AppCategoryRelationshipsParent';

/**
 * 
 * @export
 * @interface AppInfoRelationships
 */
export interface AppInfoRelationships {
    /**
     * 
     * @type {AlternativeDistributionKeyCreateRequestDataRelationshipsApp}
     * @memberof AppInfoRelationships
     */
    app?: AlternativeDistributionKeyCreateRequestDataRelationshipsApp;
    /**
     * 
     * @type {AppInfoRelationshipsAgeRatingDeclaration}
     * @memberof AppInfoRelationships
     */
    ageRatingDeclaration?: AppInfoRelationshipsAgeRatingDeclaration;
    /**
     * 
     * @type {AppInfoRelationshipsAppInfoLocalizations}
     * @memberof AppInfoRelationships
     */
    appInfoLocalizations?: AppInfoRelationshipsAppInfoLocalizations;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    primaryCategory?: AppCategoryRelationshipsParent;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    primarySubcategoryOne?: AppCategoryRelationshipsParent;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    primarySubcategoryTwo?: AppCategoryRelationshipsParent;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    secondaryCategory?: AppCategoryRelationshipsParent;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    secondarySubcategoryOne?: AppCategoryRelationshipsParent;
    /**
     * 
     * @type {AppCategoryRelationshipsParent}
     * @memberof AppInfoRelationships
     */
    secondarySubcategoryTwo?: AppCategoryRelationshipsParent;
}

/**
 * Check if a given object implements the AppInfoRelationships interface.
 */
export function instanceOfAppInfoRelationships(value: object): value is AppInfoRelationships {
    return true;
}

export function AppInfoRelationshipsFromJSON(json: any): AppInfoRelationships {
    return AppInfoRelationshipsFromJSONTyped(json, false);
}

export function AppInfoRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'app': json['app'] == null ? undefined : AlternativeDistributionKeyCreateRequestDataRelationshipsAppFromJSON(json['app']),
        'ageRatingDeclaration': json['ageRatingDeclaration'] == null ? undefined : AppInfoRelationshipsAgeRatingDeclarationFromJSON(json['ageRatingDeclaration']),
        'appInfoLocalizations': json['appInfoLocalizations'] == null ? undefined : AppInfoRelationshipsAppInfoLocalizationsFromJSON(json['appInfoLocalizations']),
        'primaryCategory': json['primaryCategory'] == null ? undefined : AppCategoryRelationshipsParentFromJSON(json['primaryCategory']),
        'primarySubcategoryOne': json['primarySubcategoryOne'] == null ? undefined : AppCategoryRelationshipsParentFromJSON(json['primarySubcategoryOne']),
        'primarySubcategoryTwo': json['primarySubcategoryTwo'] == null ? undefined : AppCategoryRelationshipsParentFromJSON(json['primarySubcategoryTwo']),
        'secondaryCategory': json['secondaryCategory'] == null ? undefined : AppCategoryRelationshipsParentFromJSON(json['secondaryCategory']),
        'secondarySubcategoryOne': json['secondarySubcategoryOne'] == null ? undefined : AppCategoryRelationshipsParentFromJSON(json['secondarySubcategoryOne']),
        'secondarySubcategoryTwo': json['secondarySubcategoryTwo'] == null ? undefined : AppCategoryRelationshipsParentFromJSON(json['secondarySubcategoryTwo']),
    };
}

export function AppInfoRelationshipsToJSON(json: any): AppInfoRelationships {
    return AppInfoRelationshipsToJSONTyped(json, false);
}

export function AppInfoRelationshipsToJSONTyped(value?: AppInfoRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'app': AlternativeDistributionKeyCreateRequestDataRelationshipsAppToJSON(value['app']),
        'ageRatingDeclaration': AppInfoRelationshipsAgeRatingDeclarationToJSON(value['ageRatingDeclaration']),
        'appInfoLocalizations': AppInfoRelationshipsAppInfoLocalizationsToJSON(value['appInfoLocalizations']),
        'primaryCategory': AppCategoryRelationshipsParentToJSON(value['primaryCategory']),
        'primarySubcategoryOne': AppCategoryRelationshipsParentToJSON(value['primarySubcategoryOne']),
        'primarySubcategoryTwo': AppCategoryRelationshipsParentToJSON(value['primarySubcategoryTwo']),
        'secondaryCategory': AppCategoryRelationshipsParentToJSON(value['secondaryCategory']),
        'secondarySubcategoryOne': AppCategoryRelationshipsParentToJSON(value['secondarySubcategoryOne']),
        'secondarySubcategoryTwo': AppCategoryRelationshipsParentToJSON(value['secondarySubcategoryTwo']),
    };
}
