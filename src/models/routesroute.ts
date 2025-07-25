/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import {
  collectExtraKeys as collectExtraKeys$,
  safeParse,
} from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type RoutesRoute = {
  id?: string | undefined;
  name: string;
  /**
   * Disable this routing rule
   */
  disabled?: boolean | undefined;
  /**
   * JavaScript expression to select data to route
   */
  filter?: string | undefined;
  /**
   * Pipeline to send the matching data to
   */
  pipeline: string;
  /**
   * Enable to use a JavaScript expression that evaluates to the name of the Description below
   */
  enableOutputExpression?: boolean | undefined;
  output?: any | undefined;
  outputExpression?: any | undefined;
  description?: string | undefined;
  /**
   * Flag to control whether the event gets consumed by this Route (Final), or cloned into it
   */
  final?: boolean | undefined;
  additionalProperties?: { [k: string]: any };
};

/** @internal */
export const RoutesRoute$inboundSchema: z.ZodType<
  RoutesRoute,
  z.ZodTypeDef,
  unknown
> = collectExtraKeys$(
  z.object({
    id: z.string().optional(),
    name: z.string(),
    disabled: z.boolean().optional(),
    filter: z.string().default("true"),
    pipeline: z.string(),
    enableOutputExpression: z.boolean().default(false),
    output: z.any().optional(),
    outputExpression: z.any().optional(),
    description: z.string().optional(),
    final: z.boolean().default(true),
  }).catchall(z.any()),
  "additionalProperties",
  true,
);

/** @internal */
export type RoutesRoute$Outbound = {
  id?: string | undefined;
  name: string;
  disabled?: boolean | undefined;
  filter: string;
  pipeline: string;
  enableOutputExpression: boolean;
  output?: any | undefined;
  outputExpression?: any | undefined;
  description?: string | undefined;
  final: boolean;
  [additionalProperties: string]: unknown;
};

/** @internal */
export const RoutesRoute$outboundSchema: z.ZodType<
  RoutesRoute$Outbound,
  z.ZodTypeDef,
  RoutesRoute
> = z.object({
  id: z.string().optional(),
  name: z.string(),
  disabled: z.boolean().optional(),
  filter: z.string().default("true"),
  pipeline: z.string(),
  enableOutputExpression: z.boolean().default(false),
  output: z.any().optional(),
  outputExpression: z.any().optional(),
  description: z.string().optional(),
  final: z.boolean().default(true),
  additionalProperties: z.record(z.any()),
}).transform((v) => {
  return {
    ...v.additionalProperties,
    ...remap$(v, {
      additionalProperties: null,
    }),
  };
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RoutesRoute$ {
  /** @deprecated use `RoutesRoute$inboundSchema` instead. */
  export const inboundSchema = RoutesRoute$inboundSchema;
  /** @deprecated use `RoutesRoute$outboundSchema` instead. */
  export const outboundSchema = RoutesRoute$outboundSchema;
  /** @deprecated use `RoutesRoute$Outbound` instead. */
  export type Outbound = RoutesRoute$Outbound;
}

export function routesRouteToJSON(routesRoute: RoutesRoute): string {
  return JSON.stringify(RoutesRoute$outboundSchema.parse(routesRoute));
}

export function routesRouteFromJSON(
  jsonString: string,
): SafeParseResult<RoutesRoute, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RoutesRoute$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RoutesRoute' from JSON`,
  );
}
