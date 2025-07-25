/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const OutputNewrelicEventsType = {
  NewrelicEvents: "newrelic_events",
} as const;
export type OutputNewrelicEventsType = ClosedEnum<
  typeof OutputNewrelicEventsType
>;

/**
 * Which New Relic region endpoint to use.
 */
export const OutputNewrelicEventsRegion = {
  Us: "US",
  Eu: "EU",
  Custom: "Custom",
} as const;
/**
 * Which New Relic region endpoint to use.
 */
export type OutputNewrelicEventsRegion = ClosedEnum<
  typeof OutputNewrelicEventsRegion
>;

export type OutputNewrelicEventsExtraHttpHeader = {
  name?: string | undefined;
  value: string;
};

/**
 * Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.
 */
export const OutputNewrelicEventsFailedRequestLoggingMode = {
  Payload: "payload",
  PayloadAndHeaders: "payloadAndHeaders",
  None: "none",
} as const;
/**
 * Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.
 */
export type OutputNewrelicEventsFailedRequestLoggingMode = ClosedEnum<
  typeof OutputNewrelicEventsFailedRequestLoggingMode
>;

export type OutputNewrelicEventsResponseRetrySetting = {
  /**
   * The HTTP response status code that will trigger retries
   */
  httpStatus: number;
  /**
   * How long, in milliseconds, Cribl Stream should wait before initiating backoff. Maximum interval is 600,000 ms (10 minutes).
   */
  initialBackoff?: number | undefined;
  /**
   * Base for exponential backoff. A value of 2 (default) means Cribl Stream will retry after 2 seconds, then 4 seconds, then 8 seconds, etc.
   */
  backoffRate?: number | undefined;
  /**
   * The maximum backoff interval, in milliseconds, Cribl Stream should apply. Default (and minimum) is 10,000 ms (10 seconds); maximum is 180,000 ms (180 seconds).
   */
  maxBackoff?: number | undefined;
};

export type OutputNewrelicEventsTimeoutRetrySettings = {
  timeoutRetry?: boolean | undefined;
  /**
   * How long, in milliseconds, Cribl Stream should wait before initiating backoff. Maximum interval is 600,000 ms (10 minutes).
   */
  initialBackoff?: number | undefined;
  /**
   * Base for exponential backoff. A value of 2 (default) means Cribl Stream will retry after 2 seconds, then 4 seconds, then 8 seconds, etc.
   */
  backoffRate?: number | undefined;
  /**
   * The maximum backoff interval, in milliseconds, Cribl Stream should apply. Default (and minimum) is 10,000 ms (10 seconds); maximum is 180,000 ms (180 seconds).
   */
  maxBackoff?: number | undefined;
};

/**
 * How to handle events when all receivers are exerting backpressure
 */
export const OutputNewrelicEventsBackpressureBehavior = {
  Block: "block",
  Drop: "drop",
  Queue: "queue",
} as const;
/**
 * How to handle events when all receivers are exerting backpressure
 */
export type OutputNewrelicEventsBackpressureBehavior = ClosedEnum<
  typeof OutputNewrelicEventsBackpressureBehavior
>;

/**
 * Enter API key directly, or select a stored secret
 */
export const OutputNewrelicEventsAuthenticationMethod = {
  Manual: "manual",
  Secret: "secret",
} as const;
/**
 * Enter API key directly, or select a stored secret
 */
export type OutputNewrelicEventsAuthenticationMethod = ClosedEnum<
  typeof OutputNewrelicEventsAuthenticationMethod
>;

/**
 * Codec to use to compress the persisted data
 */
export const OutputNewrelicEventsCompression = {
  None: "none",
  Gzip: "gzip",
} as const;
/**
 * Codec to use to compress the persisted data
 */
export type OutputNewrelicEventsCompression = ClosedEnum<
  typeof OutputNewrelicEventsCompression
>;

/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export const OutputNewrelicEventsQueueFullBehavior = {
  Block: "block",
  Drop: "drop",
} as const;
/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export type OutputNewrelicEventsQueueFullBehavior = ClosedEnum<
  typeof OutputNewrelicEventsQueueFullBehavior
>;

/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export const OutputNewrelicEventsMode = {
  Error: "error",
  Backpressure: "backpressure",
  Always: "always",
} as const;
/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export type OutputNewrelicEventsMode = ClosedEnum<
  typeof OutputNewrelicEventsMode
>;

export type OutputNewrelicEventsPqControls = {};

export type OutputNewrelicEvents = {
  /**
   * Unique ID for this output
   */
  id?: string | undefined;
  type?: OutputNewrelicEventsType | undefined;
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
   * Which New Relic region endpoint to use.
   */
  region?: OutputNewrelicEventsRegion | undefined;
  /**
   * New Relic account ID
   */
  accountId: string;
  /**
   * Default eventType to use when not present in an event. For more information, see [here](https://docs.newrelic.com/docs/telemetry-data-platform/custom-data/custom-events/data-requirements-limits-custom-event-data/#reserved-words).
   */
  eventType: string;
  /**
   * Maximum number of ongoing requests before blocking
   */
  concurrency?: number | undefined;
  /**
   * Maximum size, in KB, of the request body
   */
  maxPayloadSizeKB?: number | undefined;
  /**
   * Maximum number of events to include in the request body. Default is 0 (unlimited).
   */
  maxPayloadEvents?: number | undefined;
  /**
   * Compress the payload body before sending
   */
  compress?: boolean | undefined;
  /**
   * Reject certificates not authorized by a CA in the CA certificate path or by another trusted CA (such as the system's).
   *
   * @remarks
   *         Enabled by default. When this setting is also present in TLS Settings (Client Side),
   *         that value will take precedence.
   */
  rejectUnauthorized?: boolean | undefined;
  /**
   * Amount of time, in seconds, to wait for a request to complete before canceling it
   */
  timeoutSec?: number | undefined;
  /**
   * Maximum time between requests. Small values could cause the payload size to be smaller than the configured Body size limit.
   */
  flushPeriodSec?: number | undefined;
  /**
   * Headers to add to all events
   */
  extraHttpHeaders?: Array<OutputNewrelicEventsExtraHttpHeader> | undefined;
  /**
   * Enable round-robin DNS lookup. When a DNS server returns multiple addresses, @{product} will cycle through them in the order returned. For optimal performance, consider enabling this setting for non-load balanced destinations.
   */
  useRoundRobinDns?: boolean | undefined;
  /**
   * Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.
   */
  failedRequestLoggingMode?:
    | OutputNewrelicEventsFailedRequestLoggingMode
    | undefined;
  /**
   * List of headers that are safe to log in plain text
   */
  safeHeaders?: Array<string> | undefined;
  /**
   * Automatically retry after unsuccessful response status codes, such as 429 (Too Many Requests) or 503 (Service Unavailable)
   */
  responseRetrySettings?:
    | Array<OutputNewrelicEventsResponseRetrySetting>
    | undefined;
  timeoutRetrySettings?: OutputNewrelicEventsTimeoutRetrySettings | undefined;
  /**
   * Honor any Retry-After header that specifies a delay (in seconds) no longer than 180 seconds after the retry request. @{product} limits the delay to 180 seconds, even if the Retry-After header specifies a longer delay. When enabled, takes precedence over user-configured retry options. When disabled, all Retry-After headers are ignored.
   */
  responseHonorRetryAfterHeader?: boolean | undefined;
  /**
   * How to handle events when all receivers are exerting backpressure
   */
  onBackpressure?: OutputNewrelicEventsBackpressureBehavior | undefined;
  /**
   * Enter API key directly, or select a stored secret
   */
  authType?: OutputNewrelicEventsAuthenticationMethod | undefined;
  description?: string | undefined;
  customUrl?: string | undefined;
  /**
   * The maximum size to store in each queue file before closing and optionally compressing (KB, MB, etc.)
   */
  pqMaxFileSize?: string | undefined;
  /**
   * The maximum disk space that the queue can consume (as an average per Worker Process) before queueing stops. Enter a numeral with units of KB, MB, etc.
   */
  pqMaxSize?: string | undefined;
  /**
   * The location for the persistent queue files. To this field's value, the system will append: /<worker-id>/<output-id>.
   */
  pqPath?: string | undefined;
  /**
   * Codec to use to compress the persisted data
   */
  pqCompress?: OutputNewrelicEventsCompression | undefined;
  /**
   * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
   */
  pqOnBackpressure?: OutputNewrelicEventsQueueFullBehavior | undefined;
  /**
   * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
   */
  pqMode?: OutputNewrelicEventsMode | undefined;
  pqControls?: OutputNewrelicEventsPqControls | undefined;
  /**
   * New Relic API key. Can be overridden using __newRelic_apiKey field.
   */
  apiKey?: string | undefined;
  /**
   * Select or create a stored text secret
   */
  textSecret?: string | undefined;
};

/** @internal */
export const OutputNewrelicEventsType$inboundSchema: z.ZodNativeEnum<
  typeof OutputNewrelicEventsType
> = z.nativeEnum(OutputNewrelicEventsType);

/** @internal */
export const OutputNewrelicEventsType$outboundSchema: z.ZodNativeEnum<
  typeof OutputNewrelicEventsType
> = OutputNewrelicEventsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsType$ {
  /** @deprecated use `OutputNewrelicEventsType$inboundSchema` instead. */
  export const inboundSchema = OutputNewrelicEventsType$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsType$outboundSchema` instead. */
  export const outboundSchema = OutputNewrelicEventsType$outboundSchema;
}

/** @internal */
export const OutputNewrelicEventsRegion$inboundSchema: z.ZodNativeEnum<
  typeof OutputNewrelicEventsRegion
> = z.nativeEnum(OutputNewrelicEventsRegion);

/** @internal */
export const OutputNewrelicEventsRegion$outboundSchema: z.ZodNativeEnum<
  typeof OutputNewrelicEventsRegion
> = OutputNewrelicEventsRegion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsRegion$ {
  /** @deprecated use `OutputNewrelicEventsRegion$inboundSchema` instead. */
  export const inboundSchema = OutputNewrelicEventsRegion$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsRegion$outboundSchema` instead. */
  export const outboundSchema = OutputNewrelicEventsRegion$outboundSchema;
}

/** @internal */
export const OutputNewrelicEventsExtraHttpHeader$inboundSchema: z.ZodType<
  OutputNewrelicEventsExtraHttpHeader,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  value: z.string(),
});

/** @internal */
export type OutputNewrelicEventsExtraHttpHeader$Outbound = {
  name?: string | undefined;
  value: string;
};

/** @internal */
export const OutputNewrelicEventsExtraHttpHeader$outboundSchema: z.ZodType<
  OutputNewrelicEventsExtraHttpHeader$Outbound,
  z.ZodTypeDef,
  OutputNewrelicEventsExtraHttpHeader
> = z.object({
  name: z.string().optional(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsExtraHttpHeader$ {
  /** @deprecated use `OutputNewrelicEventsExtraHttpHeader$inboundSchema` instead. */
  export const inboundSchema =
    OutputNewrelicEventsExtraHttpHeader$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsExtraHttpHeader$outboundSchema` instead. */
  export const outboundSchema =
    OutputNewrelicEventsExtraHttpHeader$outboundSchema;
  /** @deprecated use `OutputNewrelicEventsExtraHttpHeader$Outbound` instead. */
  export type Outbound = OutputNewrelicEventsExtraHttpHeader$Outbound;
}

export function outputNewrelicEventsExtraHttpHeaderToJSON(
  outputNewrelicEventsExtraHttpHeader: OutputNewrelicEventsExtraHttpHeader,
): string {
  return JSON.stringify(
    OutputNewrelicEventsExtraHttpHeader$outboundSchema.parse(
      outputNewrelicEventsExtraHttpHeader,
    ),
  );
}

export function outputNewrelicEventsExtraHttpHeaderFromJSON(
  jsonString: string,
): SafeParseResult<OutputNewrelicEventsExtraHttpHeader, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      OutputNewrelicEventsExtraHttpHeader$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputNewrelicEventsExtraHttpHeader' from JSON`,
  );
}

/** @internal */
export const OutputNewrelicEventsFailedRequestLoggingMode$inboundSchema:
  z.ZodNativeEnum<typeof OutputNewrelicEventsFailedRequestLoggingMode> = z
    .nativeEnum(OutputNewrelicEventsFailedRequestLoggingMode);

/** @internal */
export const OutputNewrelicEventsFailedRequestLoggingMode$outboundSchema:
  z.ZodNativeEnum<typeof OutputNewrelicEventsFailedRequestLoggingMode> =
    OutputNewrelicEventsFailedRequestLoggingMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsFailedRequestLoggingMode$ {
  /** @deprecated use `OutputNewrelicEventsFailedRequestLoggingMode$inboundSchema` instead. */
  export const inboundSchema =
    OutputNewrelicEventsFailedRequestLoggingMode$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsFailedRequestLoggingMode$outboundSchema` instead. */
  export const outboundSchema =
    OutputNewrelicEventsFailedRequestLoggingMode$outboundSchema;
}

/** @internal */
export const OutputNewrelicEventsResponseRetrySetting$inboundSchema: z.ZodType<
  OutputNewrelicEventsResponseRetrySetting,
  z.ZodTypeDef,
  unknown
> = z.object({
  httpStatus: z.number(),
  initialBackoff: z.number().default(1000),
  backoffRate: z.number().default(2),
  maxBackoff: z.number().default(10000),
});

/** @internal */
export type OutputNewrelicEventsResponseRetrySetting$Outbound = {
  httpStatus: number;
  initialBackoff: number;
  backoffRate: number;
  maxBackoff: number;
};

/** @internal */
export const OutputNewrelicEventsResponseRetrySetting$outboundSchema: z.ZodType<
  OutputNewrelicEventsResponseRetrySetting$Outbound,
  z.ZodTypeDef,
  OutputNewrelicEventsResponseRetrySetting
> = z.object({
  httpStatus: z.number(),
  initialBackoff: z.number().default(1000),
  backoffRate: z.number().default(2),
  maxBackoff: z.number().default(10000),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsResponseRetrySetting$ {
  /** @deprecated use `OutputNewrelicEventsResponseRetrySetting$inboundSchema` instead. */
  export const inboundSchema =
    OutputNewrelicEventsResponseRetrySetting$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsResponseRetrySetting$outboundSchema` instead. */
  export const outboundSchema =
    OutputNewrelicEventsResponseRetrySetting$outboundSchema;
  /** @deprecated use `OutputNewrelicEventsResponseRetrySetting$Outbound` instead. */
  export type Outbound = OutputNewrelicEventsResponseRetrySetting$Outbound;
}

export function outputNewrelicEventsResponseRetrySettingToJSON(
  outputNewrelicEventsResponseRetrySetting:
    OutputNewrelicEventsResponseRetrySetting,
): string {
  return JSON.stringify(
    OutputNewrelicEventsResponseRetrySetting$outboundSchema.parse(
      outputNewrelicEventsResponseRetrySetting,
    ),
  );
}

export function outputNewrelicEventsResponseRetrySettingFromJSON(
  jsonString: string,
): SafeParseResult<
  OutputNewrelicEventsResponseRetrySetting,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      OutputNewrelicEventsResponseRetrySetting$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'OutputNewrelicEventsResponseRetrySetting' from JSON`,
  );
}

/** @internal */
export const OutputNewrelicEventsTimeoutRetrySettings$inboundSchema: z.ZodType<
  OutputNewrelicEventsTimeoutRetrySettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  timeoutRetry: z.boolean().default(false),
  initialBackoff: z.number().default(1000),
  backoffRate: z.number().default(2),
  maxBackoff: z.number().default(10000),
});

/** @internal */
export type OutputNewrelicEventsTimeoutRetrySettings$Outbound = {
  timeoutRetry: boolean;
  initialBackoff: number;
  backoffRate: number;
  maxBackoff: number;
};

/** @internal */
export const OutputNewrelicEventsTimeoutRetrySettings$outboundSchema: z.ZodType<
  OutputNewrelicEventsTimeoutRetrySettings$Outbound,
  z.ZodTypeDef,
  OutputNewrelicEventsTimeoutRetrySettings
> = z.object({
  timeoutRetry: z.boolean().default(false),
  initialBackoff: z.number().default(1000),
  backoffRate: z.number().default(2),
  maxBackoff: z.number().default(10000),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsTimeoutRetrySettings$ {
  /** @deprecated use `OutputNewrelicEventsTimeoutRetrySettings$inboundSchema` instead. */
  export const inboundSchema =
    OutputNewrelicEventsTimeoutRetrySettings$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsTimeoutRetrySettings$outboundSchema` instead. */
  export const outboundSchema =
    OutputNewrelicEventsTimeoutRetrySettings$outboundSchema;
  /** @deprecated use `OutputNewrelicEventsTimeoutRetrySettings$Outbound` instead. */
  export type Outbound = OutputNewrelicEventsTimeoutRetrySettings$Outbound;
}

export function outputNewrelicEventsTimeoutRetrySettingsToJSON(
  outputNewrelicEventsTimeoutRetrySettings:
    OutputNewrelicEventsTimeoutRetrySettings,
): string {
  return JSON.stringify(
    OutputNewrelicEventsTimeoutRetrySettings$outboundSchema.parse(
      outputNewrelicEventsTimeoutRetrySettings,
    ),
  );
}

export function outputNewrelicEventsTimeoutRetrySettingsFromJSON(
  jsonString: string,
): SafeParseResult<
  OutputNewrelicEventsTimeoutRetrySettings,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      OutputNewrelicEventsTimeoutRetrySettings$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'OutputNewrelicEventsTimeoutRetrySettings' from JSON`,
  );
}

/** @internal */
export const OutputNewrelicEventsBackpressureBehavior$inboundSchema:
  z.ZodNativeEnum<typeof OutputNewrelicEventsBackpressureBehavior> = z
    .nativeEnum(OutputNewrelicEventsBackpressureBehavior);

/** @internal */
export const OutputNewrelicEventsBackpressureBehavior$outboundSchema:
  z.ZodNativeEnum<typeof OutputNewrelicEventsBackpressureBehavior> =
    OutputNewrelicEventsBackpressureBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsBackpressureBehavior$ {
  /** @deprecated use `OutputNewrelicEventsBackpressureBehavior$inboundSchema` instead. */
  export const inboundSchema =
    OutputNewrelicEventsBackpressureBehavior$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsBackpressureBehavior$outboundSchema` instead. */
  export const outboundSchema =
    OutputNewrelicEventsBackpressureBehavior$outboundSchema;
}

/** @internal */
export const OutputNewrelicEventsAuthenticationMethod$inboundSchema:
  z.ZodNativeEnum<typeof OutputNewrelicEventsAuthenticationMethod> = z
    .nativeEnum(OutputNewrelicEventsAuthenticationMethod);

/** @internal */
export const OutputNewrelicEventsAuthenticationMethod$outboundSchema:
  z.ZodNativeEnum<typeof OutputNewrelicEventsAuthenticationMethod> =
    OutputNewrelicEventsAuthenticationMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsAuthenticationMethod$ {
  /** @deprecated use `OutputNewrelicEventsAuthenticationMethod$inboundSchema` instead. */
  export const inboundSchema =
    OutputNewrelicEventsAuthenticationMethod$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsAuthenticationMethod$outboundSchema` instead. */
  export const outboundSchema =
    OutputNewrelicEventsAuthenticationMethod$outboundSchema;
}

/** @internal */
export const OutputNewrelicEventsCompression$inboundSchema: z.ZodNativeEnum<
  typeof OutputNewrelicEventsCompression
> = z.nativeEnum(OutputNewrelicEventsCompression);

/** @internal */
export const OutputNewrelicEventsCompression$outboundSchema: z.ZodNativeEnum<
  typeof OutputNewrelicEventsCompression
> = OutputNewrelicEventsCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsCompression$ {
  /** @deprecated use `OutputNewrelicEventsCompression$inboundSchema` instead. */
  export const inboundSchema = OutputNewrelicEventsCompression$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsCompression$outboundSchema` instead. */
  export const outboundSchema = OutputNewrelicEventsCompression$outboundSchema;
}

/** @internal */
export const OutputNewrelicEventsQueueFullBehavior$inboundSchema:
  z.ZodNativeEnum<typeof OutputNewrelicEventsQueueFullBehavior> = z.nativeEnum(
    OutputNewrelicEventsQueueFullBehavior,
  );

/** @internal */
export const OutputNewrelicEventsQueueFullBehavior$outboundSchema:
  z.ZodNativeEnum<typeof OutputNewrelicEventsQueueFullBehavior> =
    OutputNewrelicEventsQueueFullBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsQueueFullBehavior$ {
  /** @deprecated use `OutputNewrelicEventsQueueFullBehavior$inboundSchema` instead. */
  export const inboundSchema =
    OutputNewrelicEventsQueueFullBehavior$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsQueueFullBehavior$outboundSchema` instead. */
  export const outboundSchema =
    OutputNewrelicEventsQueueFullBehavior$outboundSchema;
}

/** @internal */
export const OutputNewrelicEventsMode$inboundSchema: z.ZodNativeEnum<
  typeof OutputNewrelicEventsMode
> = z.nativeEnum(OutputNewrelicEventsMode);

/** @internal */
export const OutputNewrelicEventsMode$outboundSchema: z.ZodNativeEnum<
  typeof OutputNewrelicEventsMode
> = OutputNewrelicEventsMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsMode$ {
  /** @deprecated use `OutputNewrelicEventsMode$inboundSchema` instead. */
  export const inboundSchema = OutputNewrelicEventsMode$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsMode$outboundSchema` instead. */
  export const outboundSchema = OutputNewrelicEventsMode$outboundSchema;
}

/** @internal */
export const OutputNewrelicEventsPqControls$inboundSchema: z.ZodType<
  OutputNewrelicEventsPqControls,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type OutputNewrelicEventsPqControls$Outbound = {};

/** @internal */
export const OutputNewrelicEventsPqControls$outboundSchema: z.ZodType<
  OutputNewrelicEventsPqControls$Outbound,
  z.ZodTypeDef,
  OutputNewrelicEventsPqControls
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEventsPqControls$ {
  /** @deprecated use `OutputNewrelicEventsPqControls$inboundSchema` instead. */
  export const inboundSchema = OutputNewrelicEventsPqControls$inboundSchema;
  /** @deprecated use `OutputNewrelicEventsPqControls$outboundSchema` instead. */
  export const outboundSchema = OutputNewrelicEventsPqControls$outboundSchema;
  /** @deprecated use `OutputNewrelicEventsPqControls$Outbound` instead. */
  export type Outbound = OutputNewrelicEventsPqControls$Outbound;
}

export function outputNewrelicEventsPqControlsToJSON(
  outputNewrelicEventsPqControls: OutputNewrelicEventsPqControls,
): string {
  return JSON.stringify(
    OutputNewrelicEventsPqControls$outboundSchema.parse(
      outputNewrelicEventsPqControls,
    ),
  );
}

export function outputNewrelicEventsPqControlsFromJSON(
  jsonString: string,
): SafeParseResult<OutputNewrelicEventsPqControls, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputNewrelicEventsPqControls$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputNewrelicEventsPqControls' from JSON`,
  );
}

/** @internal */
export const OutputNewrelicEvents$inboundSchema: z.ZodType<
  OutputNewrelicEvents,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: OutputNewrelicEventsType$inboundSchema.optional(),
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  region: OutputNewrelicEventsRegion$inboundSchema.default("US"),
  accountId: z.string(),
  eventType: z.string(),
  concurrency: z.number().default(5),
  maxPayloadSizeKB: z.number().default(1024),
  maxPayloadEvents: z.number().default(0),
  compress: z.boolean().default(true),
  rejectUnauthorized: z.boolean().default(true),
  timeoutSec: z.number().default(30),
  flushPeriodSec: z.number().default(1),
  extraHttpHeaders: z.array(
    z.lazy(() => OutputNewrelicEventsExtraHttpHeader$inboundSchema),
  ).optional(),
  useRoundRobinDns: z.boolean().default(false),
  failedRequestLoggingMode:
    OutputNewrelicEventsFailedRequestLoggingMode$inboundSchema.default("none"),
  safeHeaders: z.array(z.string()).optional(),
  responseRetrySettings: z.array(
    z.lazy(() => OutputNewrelicEventsResponseRetrySetting$inboundSchema),
  ).optional(),
  timeoutRetrySettings: z.lazy(() =>
    OutputNewrelicEventsTimeoutRetrySettings$inboundSchema
  ).optional(),
  responseHonorRetryAfterHeader: z.boolean().default(false),
  onBackpressure: OutputNewrelicEventsBackpressureBehavior$inboundSchema
    .default("block"),
  authType: OutputNewrelicEventsAuthenticationMethod$inboundSchema.default(
    "manual",
  ),
  description: z.string().optional(),
  customUrl: z.string().optional(),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputNewrelicEventsCompression$inboundSchema.default("none"),
  pqOnBackpressure: OutputNewrelicEventsQueueFullBehavior$inboundSchema.default(
    "block",
  ),
  pqMode: OutputNewrelicEventsMode$inboundSchema.default("error"),
  pqControls: z.lazy(() => OutputNewrelicEventsPqControls$inboundSchema)
    .optional(),
  apiKey: z.string().optional(),
  textSecret: z.string().optional(),
});

/** @internal */
export type OutputNewrelicEvents$Outbound = {
  id?: string | undefined;
  type?: string | undefined;
  pipeline?: string | undefined;
  systemFields?: Array<string> | undefined;
  environment?: string | undefined;
  streamtags?: Array<string> | undefined;
  region: string;
  accountId: string;
  eventType: string;
  concurrency: number;
  maxPayloadSizeKB: number;
  maxPayloadEvents: number;
  compress: boolean;
  rejectUnauthorized: boolean;
  timeoutSec: number;
  flushPeriodSec: number;
  extraHttpHeaders?:
    | Array<OutputNewrelicEventsExtraHttpHeader$Outbound>
    | undefined;
  useRoundRobinDns: boolean;
  failedRequestLoggingMode: string;
  safeHeaders?: Array<string> | undefined;
  responseRetrySettings?:
    | Array<OutputNewrelicEventsResponseRetrySetting$Outbound>
    | undefined;
  timeoutRetrySettings?:
    | OutputNewrelicEventsTimeoutRetrySettings$Outbound
    | undefined;
  responseHonorRetryAfterHeader: boolean;
  onBackpressure: string;
  authType: string;
  description?: string | undefined;
  customUrl?: string | undefined;
  pqMaxFileSize: string;
  pqMaxSize: string;
  pqPath: string;
  pqCompress: string;
  pqOnBackpressure: string;
  pqMode: string;
  pqControls?: OutputNewrelicEventsPqControls$Outbound | undefined;
  apiKey?: string | undefined;
  textSecret?: string | undefined;
};

/** @internal */
export const OutputNewrelicEvents$outboundSchema: z.ZodType<
  OutputNewrelicEvents$Outbound,
  z.ZodTypeDef,
  OutputNewrelicEvents
> = z.object({
  id: z.string().optional(),
  type: OutputNewrelicEventsType$outboundSchema.optional(),
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  region: OutputNewrelicEventsRegion$outboundSchema.default("US"),
  accountId: z.string(),
  eventType: z.string(),
  concurrency: z.number().default(5),
  maxPayloadSizeKB: z.number().default(1024),
  maxPayloadEvents: z.number().default(0),
  compress: z.boolean().default(true),
  rejectUnauthorized: z.boolean().default(true),
  timeoutSec: z.number().default(30),
  flushPeriodSec: z.number().default(1),
  extraHttpHeaders: z.array(
    z.lazy(() => OutputNewrelicEventsExtraHttpHeader$outboundSchema),
  ).optional(),
  useRoundRobinDns: z.boolean().default(false),
  failedRequestLoggingMode:
    OutputNewrelicEventsFailedRequestLoggingMode$outboundSchema.default("none"),
  safeHeaders: z.array(z.string()).optional(),
  responseRetrySettings: z.array(
    z.lazy(() => OutputNewrelicEventsResponseRetrySetting$outboundSchema),
  ).optional(),
  timeoutRetrySettings: z.lazy(() =>
    OutputNewrelicEventsTimeoutRetrySettings$outboundSchema
  ).optional(),
  responseHonorRetryAfterHeader: z.boolean().default(false),
  onBackpressure: OutputNewrelicEventsBackpressureBehavior$outboundSchema
    .default("block"),
  authType: OutputNewrelicEventsAuthenticationMethod$outboundSchema.default(
    "manual",
  ),
  description: z.string().optional(),
  customUrl: z.string().optional(),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputNewrelicEventsCompression$outboundSchema.default("none"),
  pqOnBackpressure: OutputNewrelicEventsQueueFullBehavior$outboundSchema
    .default("block"),
  pqMode: OutputNewrelicEventsMode$outboundSchema.default("error"),
  pqControls: z.lazy(() => OutputNewrelicEventsPqControls$outboundSchema)
    .optional(),
  apiKey: z.string().optional(),
  textSecret: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputNewrelicEvents$ {
  /** @deprecated use `OutputNewrelicEvents$inboundSchema` instead. */
  export const inboundSchema = OutputNewrelicEvents$inboundSchema;
  /** @deprecated use `OutputNewrelicEvents$outboundSchema` instead. */
  export const outboundSchema = OutputNewrelicEvents$outboundSchema;
  /** @deprecated use `OutputNewrelicEvents$Outbound` instead. */
  export type Outbound = OutputNewrelicEvents$Outbound;
}

export function outputNewrelicEventsToJSON(
  outputNewrelicEvents: OutputNewrelicEvents,
): string {
  return JSON.stringify(
    OutputNewrelicEvents$outboundSchema.parse(outputNewrelicEvents),
  );
}

export function outputNewrelicEventsFromJSON(
  jsonString: string,
): SafeParseResult<OutputNewrelicEvents, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputNewrelicEvents$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputNewrelicEvents' from JSON`,
  );
}
