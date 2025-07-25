/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type UpdateOutputByIdRequest = {
  /**
   * Unique ID to PATCH
   */
  id: string;
  /**
   * Destination object to be updated
   */
  output: models.Output;
};

/**
 * a list of Destination objects
 */
export type UpdateOutputByIdResponse = {
  /**
   * number of items present in the items array
   */
  count?: number | undefined;
  items?: Array<models.Output> | undefined;
};

/** @internal */
export const UpdateOutputByIdRequest$inboundSchema: z.ZodType<
  UpdateOutputByIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  Output: models.Output$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Output": "output",
  });
});

/** @internal */
export type UpdateOutputByIdRequest$Outbound = {
  id: string;
  Output: models.Output$Outbound;
};

/** @internal */
export const UpdateOutputByIdRequest$outboundSchema: z.ZodType<
  UpdateOutputByIdRequest$Outbound,
  z.ZodTypeDef,
  UpdateOutputByIdRequest
> = z.object({
  id: z.string(),
  output: models.Output$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    output: "Output",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOutputByIdRequest$ {
  /** @deprecated use `UpdateOutputByIdRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateOutputByIdRequest$inboundSchema;
  /** @deprecated use `UpdateOutputByIdRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateOutputByIdRequest$outboundSchema;
  /** @deprecated use `UpdateOutputByIdRequest$Outbound` instead. */
  export type Outbound = UpdateOutputByIdRequest$Outbound;
}

export function updateOutputByIdRequestToJSON(
  updateOutputByIdRequest: UpdateOutputByIdRequest,
): string {
  return JSON.stringify(
    UpdateOutputByIdRequest$outboundSchema.parse(updateOutputByIdRequest),
  );
}

export function updateOutputByIdRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateOutputByIdRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateOutputByIdRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateOutputByIdRequest' from JSON`,
  );
}

/** @internal */
export const UpdateOutputByIdResponse$inboundSchema: z.ZodType<
  UpdateOutputByIdResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  count: z.number().int().optional(),
  items: z.array(models.Output$inboundSchema).optional(),
});

/** @internal */
export type UpdateOutputByIdResponse$Outbound = {
  count?: number | undefined;
  items?: Array<models.Output$Outbound> | undefined;
};

/** @internal */
export const UpdateOutputByIdResponse$outboundSchema: z.ZodType<
  UpdateOutputByIdResponse$Outbound,
  z.ZodTypeDef,
  UpdateOutputByIdResponse
> = z.object({
  count: z.number().int().optional(),
  items: z.array(models.Output$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateOutputByIdResponse$ {
  /** @deprecated use `UpdateOutputByIdResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateOutputByIdResponse$inboundSchema;
  /** @deprecated use `UpdateOutputByIdResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateOutputByIdResponse$outboundSchema;
  /** @deprecated use `UpdateOutputByIdResponse$Outbound` instead. */
  export type Outbound = UpdateOutputByIdResponse$Outbound;
}

export function updateOutputByIdResponseToJSON(
  updateOutputByIdResponse: UpdateOutputByIdResponse,
): string {
  return JSON.stringify(
    UpdateOutputByIdResponse$outboundSchema.parse(updateOutputByIdResponse),
  );
}

export function updateOutputByIdResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateOutputByIdResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateOutputByIdResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateOutputByIdResponse' from JSON`,
  );
}
