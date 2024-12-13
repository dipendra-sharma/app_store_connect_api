
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
import type { CiArtifact } from './CiArtifact';
import {
    CiArtifactFromJSON,
    CiArtifactFromJSONTyped,
    CiArtifactToJSON,
    CiArtifactToJSONTyped,
} from './CiArtifact';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
    DocumentLinksToJSONTyped,
} from './DocumentLinks';

/**
 * 
 * @export
 * @interface CiArtifactResponse
 */
export interface CiArtifactResponse {
    /**
     * 
     * @type {CiArtifact}
     * @memberof CiArtifactResponse
     */
    data: CiArtifact;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof CiArtifactResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the CiArtifactResponse interface.
 */
export function instanceOfCiArtifactResponse(value: object): value is CiArtifactResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    return true;
}

export function CiArtifactResponseFromJSON(json: any): CiArtifactResponse {
    return CiArtifactResponseFromJSONTyped(json, false);
}

export function CiArtifactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiArtifactResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CiArtifactFromJSON(json['data']),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function CiArtifactResponseToJSON(json: any): CiArtifactResponse {
    return CiArtifactResponseToJSONTyped(json, false);
}

export function CiArtifactResponseToJSONTyped(value?: CiArtifactResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CiArtifactToJSON(value['data']),
        'links': DocumentLinksToJSON(value['links']),
    };
}

