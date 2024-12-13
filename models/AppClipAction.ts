
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
export const AppClipAction = {
    Open: 'OPEN',
    View: 'VIEW',
    Play: 'PLAY'
} as const;
export type AppClipAction = typeof AppClipAction[keyof typeof AppClipAction];


export function instanceOfAppClipAction(value: any): boolean {
    for (const key in AppClipAction) {
        if (Object.prototype.hasOwnProperty.call(AppClipAction, key)) {
            if (AppClipAction[key as keyof typeof AppClipAction] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AppClipActionFromJSON(json: any): AppClipAction {
    return AppClipActionFromJSONTyped(json, false);
}

export function AppClipActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAction {
    return json as AppClipAction;
}

export function AppClipActionToJSON(value?: AppClipAction | null): any {
    return value as any;
}

export function AppClipActionToJSONTyped(value: any, ignoreDiscriminator: boolean): AppClipAction {
    return value as AppClipAction;
}
