
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
import type { CiActionType } from './CiActionType';
import {
    CiActionTypeFromJSON,
    CiActionTypeFromJSONTyped,
    CiActionTypeToJSON,
    CiActionTypeToJSONTyped,
} from './CiActionType';
import type { CiActionTestConfiguration } from './CiActionTestConfiguration';
import {
    CiActionTestConfigurationFromJSON,
    CiActionTestConfigurationFromJSONTyped,
    CiActionTestConfigurationToJSON,
    CiActionTestConfigurationToJSONTyped,
} from './CiActionTestConfiguration';
import type { BuildAudienceType } from './BuildAudienceType';
import {
    BuildAudienceTypeFromJSON,
    BuildAudienceTypeFromJSONTyped,
    BuildAudienceTypeToJSON,
    BuildAudienceTypeToJSONTyped,
} from './BuildAudienceType';

/**
 * 
 * @export
 * @interface CiAction
 */
export interface CiAction {
    /**
     * 
     * @type {string}
     * @memberof CiAction
     */
    name?: string;
    /**
     * 
     * @type {CiActionType}
     * @memberof CiAction
     */
    actionType?: CiActionType;
    /**
     * 
     * @type {string}
     * @memberof CiAction
     */
    destination?: CiActionDestinationEnum;
    /**
     * 
     * @type {BuildAudienceType}
     * @memberof CiAction
     */
    buildDistributionAudience?: BuildAudienceType;
    /**
     * 
     * @type {CiActionTestConfiguration}
     * @memberof CiAction
     */
    testConfiguration?: CiActionTestConfiguration;
    /**
     * 
     * @type {string}
     * @memberof CiAction
     */
    scheme?: string;
    /**
     * 
     * @type {string}
     * @memberof CiAction
     */
    platform?: CiActionPlatformEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CiAction
     */
    isRequiredToPass?: boolean;
}


/**
 * @export
 */
export const CiActionDestinationEnum = {
    IosDevice: 'ANY_IOS_DEVICE',
    IosSimulator: 'ANY_IOS_SIMULATOR',
    TvosDevice: 'ANY_TVOS_DEVICE',
    TvosSimulator: 'ANY_TVOS_SIMULATOR',
    WatchosDevice: 'ANY_WATCHOS_DEVICE',
    WatchosSimulator: 'ANY_WATCHOS_SIMULATOR',
    Mac: 'ANY_MAC',
    MacCatalyst: 'ANY_MAC_CATALYST',
    VisionosDevice: 'ANY_VISIONOS_DEVICE',
    VisionosSimulator: 'ANY_VISIONOS_SIMULATOR'
} as const;
export type CiActionDestinationEnum = typeof CiActionDestinationEnum[keyof typeof CiActionDestinationEnum];

/**
 * @export
 */
export const CiActionPlatformEnum = {
    Macos: 'MACOS',
    Ios: 'IOS',
    Tvos: 'TVOS',
    Watchos: 'WATCHOS',
    Visionos: 'VISIONOS'
} as const;
export type CiActionPlatformEnum = typeof CiActionPlatformEnum[keyof typeof CiActionPlatformEnum];


/**
 * Check if a given object implements the CiAction interface.
 */
export function instanceOfCiAction(value: object): value is CiAction {
    return true;
}

export function CiActionFromJSON(json: any): CiAction {
    return CiActionFromJSONTyped(json, false);
}

export function CiActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiAction {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'actionType': json['actionType'] == null ? undefined : CiActionTypeFromJSON(json['actionType']),
        'destination': json['destination'] == null ? undefined : json['destination'],
        'buildDistributionAudience': json['buildDistributionAudience'] == null ? undefined : BuildAudienceTypeFromJSON(json['buildDistributionAudience']),
        'testConfiguration': json['testConfiguration'] == null ? undefined : CiActionTestConfigurationFromJSON(json['testConfiguration']),
        'scheme': json['scheme'] == null ? undefined : json['scheme'],
        'platform': json['platform'] == null ? undefined : json['platform'],
        'isRequiredToPass': json['isRequiredToPass'] == null ? undefined : json['isRequiredToPass'],
    };
}

export function CiActionToJSON(json: any): CiAction {
    return CiActionToJSONTyped(json, false);
}

export function CiActionToJSONTyped(value?: CiAction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'actionType': CiActionTypeToJSON(value['actionType']),
        'destination': value['destination'],
        'buildDistributionAudience': BuildAudienceTypeToJSON(value['buildDistributionAudience']),
        'testConfiguration': CiActionTestConfigurationToJSON(value['testConfiguration']),
        'scheme': value['scheme'],
        'platform': value['platform'],
        'isRequiredToPass': value['isRequiredToPass'],
    };
}

