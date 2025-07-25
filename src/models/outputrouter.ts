/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const OutputRouterType = {
  Router: "router",
} as const;
export type OutputRouterType = ClosedEnum<typeof OutputRouterType>;

export type OutputRouterRule = {
  /**
   * JavaScript expression to select events to send to output
   */
  filter: string;
  /**
   * Output to send matching events to
   */
  output: string;
  /**
   * Description of this rule's purpose
   */
  description?: string | undefined;
  /**
   * Flag to control whether to stop the event from being checked against other rules
   */
  final?: boolean | undefined;
};

export type OutputRouter = {
  /**
   * Unique ID for this output
   */
  id?: string | undefined;
  type: OutputRouterType;
  /**
   * Pipeline to process data before sending out to this output
   */
  pipeline?: string | undefined;
  /**
   * Fields to automatically add to events, such as cribl_pipe. Supports wildcards.
   */
  systemFields?: Array<string> | undefined;
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.
   */
  environment?: string | undefined;
  /**
   * Tags for filtering and grouping in @{product}
   */
  streamtags?: Array<string> | undefined;
  /**
   * Event routing rules
   */
  rules: Array<OutputRouterRule>;
  description?: string | undefined;
};

/** @internal */
export const OutputRouterType$inboundSchema: z.ZodNativeEnum<
  typeof OutputRouterType
> = z.nativeEnum(OutputRouterType);

/** @internal */
export const OutputRouterType$outboundSchema: z.ZodNativeEnum<
  typeof OutputRouterType
> = OutputRouterType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputRouterType$ {
  /** @deprecated use `OutputRouterType$inboundSchema` instead. */
  export const inboundSchema = OutputRouterType$inboundSchema;
  /** @deprecated use `OutputRouterType$outboundSchema` instead. */
  export const outboundSchema = OutputRouterType$outboundSchema;
}

/** @internal */
export const OutputRouterRule$inboundSchema: z.ZodType<
  OutputRouterRule,
  z.ZodTypeDef,
  unknown
> = z.object({
  filter: z.string(),
  output: z.string(),
  description: z.string().optional(),
  final: z.boolean().default(true),
});

/** @internal */
export type OutputRouterRule$Outbound = {
  filter: string;
  output: string;
  description?: string | undefined;
  final: boolean;
};

/** @internal */
export const OutputRouterRule$outboundSchema: z.ZodType<
  OutputRouterRule$Outbound,
  z.ZodTypeDef,
  OutputRouterRule
> = z.object({
  filter: z.string(),
  output: z.string(),
  description: z.string().optional(),
  final: z.boolean().default(true),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputRouterRule$ {
  /** @deprecated use `OutputRouterRule$inboundSchema` instead. */
  export const inboundSchema = OutputRouterRule$inboundSchema;
  /** @deprecated use `OutputRouterRule$outboundSchema` instead. */
  export const outboundSchema = OutputRouterRule$outboundSchema;
  /** @deprecated use `OutputRouterRule$Outbound` instead. */
  export type Outbound = OutputRouterRule$Outbound;
}

export function outputRouterRuleToJSON(
  outputRouterRule: OutputRouterRule,
): string {
  return JSON.stringify(
    OutputRouterRule$outboundSchema.parse(outputRouterRule),
  );
}

export function outputRouterRuleFromJSON(
  jsonString: string,
): SafeParseResult<OutputRouterRule, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputRouterRule$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputRouterRule' from JSON`,
  );
}

/** @internal */
export const OutputRouter$inboundSchema: z.ZodType<
  OutputRouter,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: OutputRouterType$inboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  rules: z.array(z.lazy(() => OutputRouterRule$inboundSchema)),
  description: z.string().optional(),
});

/** @internal */
export type OutputRouter$Outbound = {
  id?: string | undefined;
  type: string;
  pipeline?: string | undefined;
  systemFields?: Array<string> | undefined;
  environment?: string | undefined;
  streamtags?: Array<string> | undefined;
  rules: Array<OutputRouterRule$Outbound>;
  description?: string | undefined;
};

/** @internal */
export const OutputRouter$outboundSchema: z.ZodType<
  OutputRouter$Outbound,
  z.ZodTypeDef,
  OutputRouter
> = z.object({
  id: z.string().optional(),
  type: OutputRouterType$outboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  rules: z.array(z.lazy(() => OutputRouterRule$outboundSchema)),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputRouter$ {
  /** @deprecated use `OutputRouter$inboundSchema` instead. */
  export const inboundSchema = OutputRouter$inboundSchema;
  /** @deprecated use `OutputRouter$outboundSchema` instead. */
  export const outboundSchema = OutputRouter$outboundSchema;
  /** @deprecated use `OutputRouter$Outbound` instead. */
  export type Outbound = OutputRouter$Outbound;
}

export function outputRouterToJSON(outputRouter: OutputRouter): string {
  return JSON.stringify(OutputRouter$outboundSchema.parse(outputRouter));
}

export function outputRouterFromJSON(
  jsonString: string,
): SafeParseResult<OutputRouter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputRouter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputRouter' from JSON`,
  );
}
