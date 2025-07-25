/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type GetInputByIdRequest = {
  /**
   * Unique ID to GET
   */
  id: string;
};

/**
 * a list of Source objects
 */
export type GetInputByIdResponse = {
  /**
   * number of items present in the items array
   */
  count?: number | undefined;
  items?: Array<models.Input> | undefined;
};

/** @internal */
export const GetInputByIdRequest$inboundSchema: z.ZodType<
  GetInputByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetInputByIdRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetInputByIdRequest$outboundSchema: z.ZodType<
  GetInputByIdRequest$Outbound,
  z.ZodTypeDef,
  GetInputByIdRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetInputByIdRequest$ {
  /** @deprecated use `GetInputByIdRequest$inboundSchema` instead. */
  export const inboundSchema = GetInputByIdRequest$inboundSchema;
  /** @deprecated use `GetInputByIdRequest$outboundSchema` instead. */
  export const outboundSchema = GetInputByIdRequest$outboundSchema;
  /** @deprecated use `GetInputByIdRequest$Outbound` instead. */
  export type Outbound = GetInputByIdRequest$Outbound;
}

export function getInputByIdRequestToJSON(
  getInputByIdRequest: GetInputByIdRequest,
): string {
  return JSON.stringify(
    GetInputByIdRequest$outboundSchema.parse(getInputByIdRequest),
  );
}

export function getInputByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetInputByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInputByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInputByIdRequest' from JSON`,
  );
}

/** @internal */
export const GetInputByIdResponse$inboundSchema: z.ZodType<
  GetInputByIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  count: z.number().int().optional(),
  items: z.array(models.Input$inboundSchema).optional(),
});

/** @internal */
export type GetInputByIdResponse$Outbound = {
  count?: number | undefined;
  items?: Array<models.Input$Outbound> | undefined;
};

/** @internal */
export const GetInputByIdResponse$outboundSchema: z.ZodType<
  GetInputByIdResponse$Outbound,
  z.ZodTypeDef,
  GetInputByIdResponse
> = z.object({
  count: z.number().int().optional(),
  items: z.array(models.Input$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetInputByIdResponse$ {
  /** @deprecated use `GetInputByIdResponse$inboundSchema` instead. */
  export const inboundSchema = GetInputByIdResponse$inboundSchema;
  /** @deprecated use `GetInputByIdResponse$outboundSchema` instead. */
  export const outboundSchema = GetInputByIdResponse$outboundSchema;
  /** @deprecated use `GetInputByIdResponse$Outbound` instead. */
  export type Outbound = GetInputByIdResponse$Outbound;
}

export function getInputByIdResponseToJSON(
  getInputByIdResponse: GetInputByIdResponse,
): string {
  return JSON.stringify(
    GetInputByIdResponse$outboundSchema.parse(getInputByIdResponse),
  );
}

export function getInputByIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetInputByIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInputByIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInputByIdResponse' from JSON`,
  );
}
