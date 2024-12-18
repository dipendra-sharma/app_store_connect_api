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
import type { AppClipAdvancedExperienceAttributesPlaceDisplayPoint } from './AppClipAdvancedExperienceAttributesPlaceDisplayPoint';
import {
    AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSON,
    AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSONTyped,
    AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSON,
    AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSONTyped,
} from './AppClipAdvancedExperienceAttributesPlaceDisplayPoint';
import type { AppClipAdvancedExperienceAttributesPlaceMainAddress } from './AppClipAdvancedExperienceAttributesPlaceMainAddress';
import {
    AppClipAdvancedExperienceAttributesPlaceMainAddressFromJSON,
    AppClipAdvancedExperienceAttributesPlaceMainAddressFromJSONTyped,
    AppClipAdvancedExperienceAttributesPlaceMainAddressToJSON,
    AppClipAdvancedExperienceAttributesPlaceMainAddressToJSONTyped,
} from './AppClipAdvancedExperienceAttributesPlaceMainAddress';
import type { AppClipAdvancedExperienceAttributesPlacePhoneNumber } from './AppClipAdvancedExperienceAttributesPlacePhoneNumber';
import {
    AppClipAdvancedExperienceAttributesPlacePhoneNumberFromJSON,
    AppClipAdvancedExperienceAttributesPlacePhoneNumberFromJSONTyped,
    AppClipAdvancedExperienceAttributesPlacePhoneNumberToJSON,
    AppClipAdvancedExperienceAttributesPlacePhoneNumberToJSONTyped,
} from './AppClipAdvancedExperienceAttributesPlacePhoneNumber';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceAttributesPlace
 */
export interface AppClipAdvancedExperienceAttributesPlace {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    placeId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    names?: Array<string>;
    /**
     * 
     * @type {AppClipAdvancedExperienceAttributesPlaceMainAddress}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    mainAddress?: AppClipAdvancedExperienceAttributesPlaceMainAddress;
    /**
     * 
     * @type {AppClipAdvancedExperienceAttributesPlaceDisplayPoint}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    displayPoint?: AppClipAdvancedExperienceAttributesPlaceDisplayPoint;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    mapAction?: AppClipAdvancedExperienceAttributesPlaceMapActionEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    relationship?: AppClipAdvancedExperienceAttributesPlaceRelationshipEnum;
    /**
     * 
     * @type {AppClipAdvancedExperienceAttributesPlacePhoneNumber}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    phoneNumber?: AppClipAdvancedExperienceAttributesPlacePhoneNumber;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    homePage?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof AppClipAdvancedExperienceAttributesPlace
     */
    categories?: Array<string>;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceAttributesPlaceMapActionEnum = {
    BuyTickets: 'BUY_TICKETS',
    ViewAvailability: 'VIEW_AVAILABILITY',
    ViewPricing: 'VIEW_PRICING',
    HotelBookRoom: 'HOTEL_BOOK_ROOM',
    ParkingReserveParking: 'PARKING_RESERVE_PARKING',
    RestaurantJoinWaitlist: 'RESTAURANT_JOIN_WAITLIST',
    RestaurantOrderDelivery: 'RESTAURANT_ORDER_DELIVERY',
    RestaurantOrderFood: 'RESTAURANT_ORDER_FOOD',
    RestaurantOrderTakeout: 'RESTAURANT_ORDER_TAKEOUT',
    RestaurantReservation: 'RESTAURANT_RESERVATION',
    ScheduleAppointment: 'SCHEDULE_APPOINTMENT',
    RestaurantViewMenu: 'RESTAURANT_VIEW_MENU',
    TheaterNowPlaying: 'THEATER_NOW_PLAYING'
} as const;
export type AppClipAdvancedExperienceAttributesPlaceMapActionEnum = typeof AppClipAdvancedExperienceAttributesPlaceMapActionEnum[keyof typeof AppClipAdvancedExperienceAttributesPlaceMapActionEnum];

/**
 * @export
 */
export const AppClipAdvancedExperienceAttributesPlaceRelationshipEnum = {
    Owner: 'OWNER',
    Authorized: 'AUTHORIZED',
    Other: 'OTHER'
} as const;
export type AppClipAdvancedExperienceAttributesPlaceRelationshipEnum = typeof AppClipAdvancedExperienceAttributesPlaceRelationshipEnum[keyof typeof AppClipAdvancedExperienceAttributesPlaceRelationshipEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceAttributesPlace interface.
 */
export function instanceOfAppClipAdvancedExperienceAttributesPlace(value: object): value is AppClipAdvancedExperienceAttributesPlace {
    return true;
}

export function AppClipAdvancedExperienceAttributesPlaceFromJSON(json: any): AppClipAdvancedExperienceAttributesPlace {
    return AppClipAdvancedExperienceAttributesPlaceFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceAttributesPlaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceAttributesPlace {
    if (json == null) {
        return json;
    }
    return {
        
        'placeId': json['placeId'] == null ? undefined : json['placeId'],
        'names': json['names'] == null ? undefined : json['names'],
        'mainAddress': json['mainAddress'] == null ? undefined : AppClipAdvancedExperienceAttributesPlaceMainAddressFromJSON(json['mainAddress']),
        'displayPoint': json['displayPoint'] == null ? undefined : AppClipAdvancedExperienceAttributesPlaceDisplayPointFromJSON(json['displayPoint']),
        'mapAction': json['mapAction'] == null ? undefined : json['mapAction'],
        'relationship': json['relationship'] == null ? undefined : json['relationship'],
        'phoneNumber': json['phoneNumber'] == null ? undefined : AppClipAdvancedExperienceAttributesPlacePhoneNumberFromJSON(json['phoneNumber']),
        'homePage': json['homePage'] == null ? undefined : json['homePage'],
        'categories': json['categories'] == null ? undefined : json['categories'],
    };
}

export function AppClipAdvancedExperienceAttributesPlaceToJSON(json: any): AppClipAdvancedExperienceAttributesPlace {
    return AppClipAdvancedExperienceAttributesPlaceToJSONTyped(json, false);
}

export function AppClipAdvancedExperienceAttributesPlaceToJSONTyped(value?: AppClipAdvancedExperienceAttributesPlace | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'placeId': value['placeId'],
        'names': value['names'],
        'mainAddress': AppClipAdvancedExperienceAttributesPlaceMainAddressToJSON(value['mainAddress']),
        'displayPoint': AppClipAdvancedExperienceAttributesPlaceDisplayPointToJSON(value['displayPoint']),
        'mapAction': value['mapAction'],
        'relationship': value['relationship'],
        'phoneNumber': AppClipAdvancedExperienceAttributesPlacePhoneNumberToJSON(value['phoneNumber']),
        'homePage': value['homePage'],
        'categories': value['categories'],
    };
}

