/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const OutputDatadogType = {
  Datadog: "datadog",
} as const;
export type OutputDatadogType = ClosedEnum<typeof OutputDatadogType>;

/**
 * The content type to use when sending logs
 */
export const SendLogsAs = {
  Text: "text",
  Json: "json",
} as const;
/**
 * The content type to use when sending logs
 */
export type SendLogsAs = ClosedEnum<typeof SendLogsAs>;

/**
 * Default value for message severity. When you send logs as JSON objects, the event's '__severity' field (if set) will override this value.
 */
export const OutputDatadogSeverity = {
  Emergency: "emergency",
  Alert: "alert",
  Critical: "critical",
  Error: "error",
  Warning: "warning",
  Notice: "notice",
  Info: "info",
  Debug: "debug",
} as const;
/**
 * Default value for message severity. When you send logs as JSON objects, the event's '__severity' field (if set) will override this value.
 */
export type OutputDatadogSeverity = ClosedEnum<typeof OutputDatadogSeverity>;

/**
 * Datadog site to which events should be sent
 */
export const DatadogSite = {
  Us: "us",
  Us3: "us3",
  Us5: "us5",
  Eu: "eu",
  Fed1: "fed1",
  Ap1: "ap1",
  Custom: "custom",
} as const;
/**
 * Datadog site to which events should be sent
 */
export type DatadogSite = ClosedEnum<typeof DatadogSite>;

export type OutputDatadogExtraHttpHeader = {
  name?: string | undefined;
  value: string;
};

/**
 * Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.
 */
export const OutputDatadogFailedRequestLoggingMode = {
  Payload: "payload",
  PayloadAndHeaders: "payloadAndHeaders",
  None: "none",
} as const;
/**
 * Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.
 */
export type OutputDatadogFailedRequestLoggingMode = ClosedEnum<
  typeof OutputDatadogFailedRequestLoggingMode
>;

export type OutputDatadogResponseRetrySetting = {
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

export type OutputDatadogTimeoutRetrySettings = {
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
export const OutputDatadogBackpressureBehavior = {
  Block: "block",
  Drop: "drop",
  Queue: "queue",
} as const;
/**
 * How to handle events when all receivers are exerting backpressure
 */
export type OutputDatadogBackpressureBehavior = ClosedEnum<
  typeof OutputDatadogBackpressureBehavior
>;

/**
 * Enter API key directly, or select a stored secret
 */
export const OutputDatadogAuthenticationMethod = {
  Manual: "manual",
  Secret: "secret",
} as const;
/**
 * Enter API key directly, or select a stored secret
 */
export type OutputDatadogAuthenticationMethod = ClosedEnum<
  typeof OutputDatadogAuthenticationMethod
>;

/**
 * Codec to use to compress the persisted data
 */
export const OutputDatadogCompression = {
  None: "none",
  Gzip: "gzip",
} as const;
/**
 * Codec to use to compress the persisted data
 */
export type OutputDatadogCompression = ClosedEnum<
  typeof OutputDatadogCompression
>;

/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export const OutputDatadogQueueFullBehavior = {
  Block: "block",
  Drop: "drop",
} as const;
/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export type OutputDatadogQueueFullBehavior = ClosedEnum<
  typeof OutputDatadogQueueFullBehavior
>;

/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export const OutputDatadogMode = {
  Error: "error",
  Backpressure: "backpressure",
  Always: "always",
} as const;
/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export type OutputDatadogMode = ClosedEnum<typeof OutputDatadogMode>;

export type OutputDatadogPqControls = {};

export type OutputDatadog = {
  /**
   * Unique ID for this output
   */
  id: string;
  type: OutputDatadogType;
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
   * The content type to use when sending logs
   */
  contentType?: SendLogsAs | undefined;
  /**
   * Name of the event field that contains the message to send. If not specified, Stream sends a JSON representation of the whole event.
   */
  message?: string | undefined;
  /**
   * Name of the source to send with logs. When you send logs as JSON objects, the event's 'source' field (if set) will override this value.
   */
  source?: string | undefined;
  /**
   * Name of the host to send with logs. When you send logs as JSON objects, the event's 'host' field (if set) will override this value.
   */
  host?: string | undefined;
  /**
   * Name of the service to send with logs. When you send logs as JSON objects, the event's '__service' field (if set) will override this value.
   */
  service?: string | undefined;
  /**
   * List of tags to send with logs, such as 'env:prod' and 'env_staging:east'
   */
  tags?: Array<string> | undefined;
  /**
   * Batch events by API key and the ddtags field on the event. When disabled, batches events only by API key. If incoming events have high cardinality in the ddtags field, disabling this setting may improve Destination performance.
   */
  batchByTags?: boolean | undefined;
  /**
   * Allow API key to be set from the event's '__agent_api_key' field
   */
  allowApiKeyFromEvents?: boolean | undefined;
  /**
   * Default value for message severity. When you send logs as JSON objects, the event's '__severity' field (if set) will override this value.
   */
  severity?: OutputDatadogSeverity | undefined;
  /**
   * Datadog site to which events should be sent
   */
  site?: DatadogSite | undefined;
  /**
   * If not enabled, Datadog will transform 'counter' metrics to 'gauge'. [Learn more about Datadog metrics types.](https://docs.datadoghq.com/metrics/types/?tab=count)
   */
  sendCountersAsCount?: boolean | undefined;
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
  extraHttpHeaders?: Array<OutputDatadogExtraHttpHeader> | undefined;
  /**
   * Enable round-robin DNS lookup. When a DNS server returns multiple addresses, @{product} will cycle through them in the order returned. For optimal performance, consider enabling this setting for non-load balanced destinations.
   */
  useRoundRobinDns?: boolean | undefined;
  /**
   * Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.
   */
  failedRequestLoggingMode?: OutputDatadogFailedRequestLoggingMode | undefined;
  /**
   * List of headers that are safe to log in plain text
   */
  safeHeaders?: Array<string> | undefined;
  /**
   * Automatically retry after unsuccessful response status codes, such as 429 (Too Many Requests) or 503 (Service Unavailable)
   */
  responseRetrySettings?: Array<OutputDatadogResponseRetrySetting> | undefined;
  timeoutRetrySettings?: OutputDatadogTimeoutRetrySettings | undefined;
  /**
   * Honor any Retry-After header that specifies a delay (in seconds) no longer than 180 seconds after the retry request. @{product} limits the delay to 180 seconds, even if the Retry-After header specifies a longer delay. When enabled, takes precedence over user-configured retry options. When disabled, all Retry-After headers are ignored.
   */
  responseHonorRetryAfterHeader?: boolean | undefined;
  /**
   * How to handle events when all receivers are exerting backpressure
   */
  onBackpressure?: OutputDatadogBackpressureBehavior | undefined;
  /**
   * Enter API key directly, or select a stored secret
   */
  authType?: OutputDatadogAuthenticationMethod | undefined;
  /**
   * Maximum total size of the batches waiting to be sent. If left blank, defaults to 5 times the max body size (if set). If 0, no limit is enforced.
   */
  totalMemoryLimitKB?: number | undefined;
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
  pqCompress?: OutputDatadogCompression | undefined;
  /**
   * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
   */
  pqOnBackpressure?: OutputDatadogQueueFullBehavior | undefined;
  /**
   * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
   */
  pqMode?: OutputDatadogMode | undefined;
  pqControls?: OutputDatadogPqControls | undefined;
  /**
   * Organization's API key in Datadog
   */
  apiKey?: string | undefined;
  /**
   * Select or create a stored text secret
   */
  textSecret?: string | undefined;
};

/** @internal */
export const OutputDatadogType$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogType
> = z.nativeEnum(OutputDatadogType);

/** @internal */
export const OutputDatadogType$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogType
> = OutputDatadogType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatadogType$ {
  /** @deprecated use `OutputDatadogType$inboundSchema` instead. */
  export const inboundSchema = OutputDatadogType$inboundSchema;
  /** @deprecated use `OutputDatadogType$outboundSchema` instead. */
  export const outboundSchema = OutputDatadogType$outboundSchema;
}

/** @internal */
export const SendLogsAs$inboundSchema: z.ZodNativeEnum<typeof SendLogsAs> = z
  .nativeEnum(SendLogsAs);

/** @internal */
export const SendLogsAs$outboundSchema: z.ZodNativeEnum<typeof SendLogsAs> =
  SendLogsAs$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SendLogsAs$ {
  /** @deprecated use `SendLogsAs$inboundSchema` instead. */
  export const inboundSchema = SendLogsAs$inboundSchema;
  /** @deprecated use `SendLogsAs$outboundSchema` instead. */
  export const outboundSchema = SendLogsAs$outboundSchema;
}

/** @internal */
export const OutputDatadogSeverity$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogSeverity
> = z.nativeEnum(OutputDatadogSeverity);

/** @internal */
export const OutputDatadogSeverity$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogSeverity
> = OutputDatadogSeverity$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatadogSeverity$ {
  /** @deprecated use `OutputDatadogSeverity$inboundSchema` instead. */
  export const inboundSchema = OutputDatadogSeverity$inboundSchema;
  /** @deprecated use `OutputDatadogSeverity$outboundSchema` instead. */
  export const outboundSchema = OutputDatadogSeverity$outboundSchema;
}

/** @internal */
export const DatadogSite$inboundSchema: z.ZodNativeEnum<typeof DatadogSite> = z
  .nativeEnum(DatadogSite);

/** @internal */
export const DatadogSite$outboundSchema: z.ZodNativeEnum<typeof DatadogSite> =
  DatadogSite$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DatadogSite$ {
  /** @deprecated use `DatadogSite$inboundSchema` instead. */
  export const inboundSchema = DatadogSite$inboundSchema;
  /** @deprecated use `DatadogSite$outboundSchema` instead. */
  export const outboundSchema = DatadogSite$outboundSchema;
}

/** @internal */
export const OutputDatadogExtraHttpHeader$inboundSchema: z.ZodType<
  OutputDatadogExtraHttpHeader,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  value: z.string(),
});

/** @internal */
export type OutputDatadogExtraHttpHeader$Outbound = {
  name?: string | undefined;
  value: string;
};

/** @internal */
export const OutputDatadogExtraHttpHeader$outboundSchema: z.ZodType<
  OutputDatadogExtraHttpHeader$Outbound,
  z.ZodTypeDef,
  OutputDatadogExtraHttpHeader
> = z.object({
  name: z.string().optional(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatadogExtraHttpHeader$ {
  /** @deprecated use `OutputDatadogExtraHttpHeader$inboundSchema` instead. */
  export const inboundSchema = OutputDatadogExtraHttpHeader$inboundSchema;
  /** @deprecated use `OutputDatadogExtraHttpHeader$outboundSchema` instead. */
  export const outboundSchema = OutputDatadogExtraHttpHeader$outboundSchema;
  /** @deprecated use `OutputDatadogExtraHttpHeader$Outbound` instead. */
  export type Outbound = OutputDatadogExtraHttpHeader$Outbound;
}

export function outputDatadogExtraHttpHeaderToJSON(
  outputDatadogExtraHttpHeader: OutputDatadogExtraHttpHeader,
): string {
  return JSON.stringify(
    OutputDatadogExtraHttpHeader$outboundSchema.parse(
      outputDatadogExtraHttpHeader,
    ),
  );
}

export function outputDatadogExtraHttpHeaderFromJSON(
  jsonString: string,
): SafeParseResult<OutputDatadogExtraHttpHeader, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputDatadogExtraHttpHeader$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputDatadogExtraHttpHeader' from JSON`,
  );
}

/** @internal */
export const OutputDatadogFailedRequestLoggingMode$inboundSchema:
  z.ZodNativeEnum<typeof OutputDatadogFailedRequestLoggingMode> = z.nativeEnum(
    OutputDatadogFailedRequestLoggingMode,
  );

/** @internal */
export const OutputDatadogFailedRequestLoggingMode$outboundSchema:
  z.ZodNativeEnum<typeof OutputDatadogFailedRequestLoggingMode> =
    OutputDatadogFailedRequestLoggingMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatadogFailedRequestLoggingMode$ {
  /** @deprecated use `OutputDatadogFailedRequestLoggingMode$inboundSchema` instead. */
  export const inboundSchema =
    OutputDatadogFailedRequestLoggingMode$inboundSchema;
  /** @deprecated use `OutputDatadogFailedRequestLoggingMode$outboundSchema` instead. */
  export const outboundSchema =
    OutputDatadogFailedRequestLoggingMode$outboundSchema;
}

/** @internal */
export const OutputDatadogResponseRetrySetting$inboundSchema: z.ZodType<
  OutputDatadogResponseRetrySetting,
  z.ZodTypeDef,
  unknown
> = z.object({
  httpStatus: z.number(),
  initialBackoff: z.number().default(1000),
  backoffRate: z.number().default(2),
  maxBackoff: z.number().default(10000),
});

/** @internal */
export type OutputDatadogResponseRetrySetting$Outbound = {
  httpStatus: number;
  initialBackoff: number;
  backoffRate: number;
  maxBackoff: number;
};

/** @internal */
export const OutputDatadogResponseRetrySetting$outboundSchema: z.ZodType<
  OutputDatadogResponseRetrySetting$Outbound,
  z.ZodTypeDef,
  OutputDatadogResponseRetrySetting
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
export namespace OutputDatadogResponseRetrySetting$ {
  /** @deprecated use `OutputDatadogResponseRetrySetting$inboundSchema` instead. */
  export const inboundSchema = OutputDatadogResponseRetrySetting$inboundSchema;
  /** @deprecated use `OutputDatadogResponseRetrySetting$outboundSchema` instead. */
  export const outboundSchema =
    OutputDatadogResponseRetrySetting$outboundSchema;
  /** @deprecated use `OutputDatadogResponseRetrySetting$Outbound` instead. */
  export type Outbound = OutputDatadogResponseRetrySetting$Outbound;
}

export function outputDatadogResponseRetrySettingToJSON(
  outputDatadogResponseRetrySetting: OutputDatadogResponseRetrySetting,
): string {
  return JSON.stringify(
    OutputDatadogResponseRetrySetting$outboundSchema.parse(
      outputDatadogResponseRetrySetting,
    ),
  );
}

export function outputDatadogResponseRetrySettingFromJSON(
  jsonString: string,
): SafeParseResult<OutputDatadogResponseRetrySetting, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputDatadogResponseRetrySetting$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputDatadogResponseRetrySetting' from JSON`,
  );
}

/** @internal */
export const OutputDatadogTimeoutRetrySettings$inboundSchema: z.ZodType<
  OutputDatadogTimeoutRetrySettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  timeoutRetry: z.boolean().default(false),
  initialBackoff: z.number().default(1000),
  backoffRate: z.number().default(2),
  maxBackoff: z.number().default(10000),
});

/** @internal */
export type OutputDatadogTimeoutRetrySettings$Outbound = {
  timeoutRetry: boolean;
  initialBackoff: number;
  backoffRate: number;
  maxBackoff: number;
};

/** @internal */
export const OutputDatadogTimeoutRetrySettings$outboundSchema: z.ZodType<
  OutputDatadogTimeoutRetrySettings$Outbound,
  z.ZodTypeDef,
  OutputDatadogTimeoutRetrySettings
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
export namespace OutputDatadogTimeoutRetrySettings$ {
  /** @deprecated use `OutputDatadogTimeoutRetrySettings$inboundSchema` instead. */
  export const inboundSchema = OutputDatadogTimeoutRetrySettings$inboundSchema;
  /** @deprecated use `OutputDatadogTimeoutRetrySettings$outboundSchema` instead. */
  export const outboundSchema =
    OutputDatadogTimeoutRetrySettings$outboundSchema;
  /** @deprecated use `OutputDatadogTimeoutRetrySettings$Outbound` instead. */
  export type Outbound = OutputDatadogTimeoutRetrySettings$Outbound;
}

export function outputDatadogTimeoutRetrySettingsToJSON(
  outputDatadogTimeoutRetrySettings: OutputDatadogTimeoutRetrySettings,
): string {
  return JSON.stringify(
    OutputDatadogTimeoutRetrySettings$outboundSchema.parse(
      outputDatadogTimeoutRetrySettings,
    ),
  );
}

export function outputDatadogTimeoutRetrySettingsFromJSON(
  jsonString: string,
): SafeParseResult<OutputDatadogTimeoutRetrySettings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputDatadogTimeoutRetrySettings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputDatadogTimeoutRetrySettings' from JSON`,
  );
}

/** @internal */
export const OutputDatadogBackpressureBehavior$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogBackpressureBehavior
> = z.nativeEnum(OutputDatadogBackpressureBehavior);

/** @internal */
export const OutputDatadogBackpressureBehavior$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogBackpressureBehavior
> = OutputDatadogBackpressureBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatadogBackpressureBehavior$ {
  /** @deprecated use `OutputDatadogBackpressureBehavior$inboundSchema` instead. */
  export const inboundSchema = OutputDatadogBackpressureBehavior$inboundSchema;
  /** @deprecated use `OutputDatadogBackpressureBehavior$outboundSchema` instead. */
  export const outboundSchema =
    OutputDatadogBackpressureBehavior$outboundSchema;
}

/** @internal */
export const OutputDatadogAuthenticationMethod$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogAuthenticationMethod
> = z.nativeEnum(OutputDatadogAuthenticationMethod);

/** @internal */
export const OutputDatadogAuthenticationMethod$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogAuthenticationMethod
> = OutputDatadogAuthenticationMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatadogAuthenticationMethod$ {
  /** @deprecated use `OutputDatadogAuthenticationMethod$inboundSchema` instead. */
  export const inboundSchema = OutputDatadogAuthenticationMethod$inboundSchema;
  /** @deprecated use `OutputDatadogAuthenticationMethod$outboundSchema` instead. */
  export const outboundSchema =
    OutputDatadogAuthenticationMethod$outboundSchema;
}

/** @internal */
export const OutputDatadogCompression$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogCompression
> = z.nativeEnum(OutputDatadogCompression);

/** @internal */
export const OutputDatadogCompression$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogCompression
> = OutputDatadogCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatadogCompression$ {
  /** @deprecated use `OutputDatadogCompression$inboundSchema` instead. */
  export const inboundSchema = OutputDatadogCompression$inboundSchema;
  /** @deprecated use `OutputDatadogCompression$outboundSchema` instead. */
  export const outboundSchema = OutputDatadogCompression$outboundSchema;
}

/** @internal */
export const OutputDatadogQueueFullBehavior$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogQueueFullBehavior
> = z.nativeEnum(OutputDatadogQueueFullBehavior);

/** @internal */
export const OutputDatadogQueueFullBehavior$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogQueueFullBehavior
> = OutputDatadogQueueFullBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatadogQueueFullBehavior$ {
  /** @deprecated use `OutputDatadogQueueFullBehavior$inboundSchema` instead. */
  export const inboundSchema = OutputDatadogQueueFullBehavior$inboundSchema;
  /** @deprecated use `OutputDatadogQueueFullBehavior$outboundSchema` instead. */
  export const outboundSchema = OutputDatadogQueueFullBehavior$outboundSchema;
}

/** @internal */
export const OutputDatadogMode$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogMode
> = z.nativeEnum(OutputDatadogMode);

/** @internal */
export const OutputDatadogMode$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatadogMode
> = OutputDatadogMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatadogMode$ {
  /** @deprecated use `OutputDatadogMode$inboundSchema` instead. */
  export const inboundSchema = OutputDatadogMode$inboundSchema;
  /** @deprecated use `OutputDatadogMode$outboundSchema` instead. */
  export const outboundSchema = OutputDatadogMode$outboundSchema;
}

/** @internal */
export const OutputDatadogPqControls$inboundSchema: z.ZodType<
  OutputDatadogPqControls,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type OutputDatadogPqControls$Outbound = {};

/** @internal */
export const OutputDatadogPqControls$outboundSchema: z.ZodType<
  OutputDatadogPqControls$Outbound,
  z.ZodTypeDef,
  OutputDatadogPqControls
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatadogPqControls$ {
  /** @deprecated use `OutputDatadogPqControls$inboundSchema` instead. */
  export const inboundSchema = OutputDatadogPqControls$inboundSchema;
  /** @deprecated use `OutputDatadogPqControls$outboundSchema` instead. */
  export const outboundSchema = OutputDatadogPqControls$outboundSchema;
  /** @deprecated use `OutputDatadogPqControls$Outbound` instead. */
  export type Outbound = OutputDatadogPqControls$Outbound;
}

export function outputDatadogPqControlsToJSON(
  outputDatadogPqControls: OutputDatadogPqControls,
): string {
  return JSON.stringify(
    OutputDatadogPqControls$outboundSchema.parse(outputDatadogPqControls),
  );
}

export function outputDatadogPqControlsFromJSON(
  jsonString: string,
): SafeParseResult<OutputDatadogPqControls, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputDatadogPqControls$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputDatadogPqControls' from JSON`,
  );
}

/** @internal */
export const OutputDatadog$inboundSchema: z.ZodType<
  OutputDatadog,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: OutputDatadogType$inboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  contentType: SendLogsAs$inboundSchema.default("json"),
  message: z.string().optional(),
  source: z.string().optional(),
  host: z.string().optional(),
  service: z.string().optional(),
  tags: z.array(z.string()).optional(),
  batchByTags: z.boolean().default(true),
  allowApiKeyFromEvents: z.boolean().default(false),
  severity: OutputDatadogSeverity$inboundSchema.optional(),
  site: DatadogSite$inboundSchema.default("us"),
  sendCountersAsCount: z.boolean().default(false),
  concurrency: z.number().default(5),
  maxPayloadSizeKB: z.number().default(4096),
  maxPayloadEvents: z.number().default(0),
  compress: z.boolean().default(true),
  rejectUnauthorized: z.boolean().default(true),
  timeoutSec: z.number().default(30),
  flushPeriodSec: z.number().default(1),
  extraHttpHeaders: z.array(
    z.lazy(() => OutputDatadogExtraHttpHeader$inboundSchema),
  ).optional(),
  useRoundRobinDns: z.boolean().default(false),
  failedRequestLoggingMode: OutputDatadogFailedRequestLoggingMode$inboundSchema
    .default("none"),
  safeHeaders: z.array(z.string()).optional(),
  responseRetrySettings: z.array(
    z.lazy(() => OutputDatadogResponseRetrySetting$inboundSchema),
  ).optional(),
  timeoutRetrySettings: z.lazy(() =>
    OutputDatadogTimeoutRetrySettings$inboundSchema
  ).optional(),
  responseHonorRetryAfterHeader: z.boolean().default(false),
  onBackpressure: OutputDatadogBackpressureBehavior$inboundSchema.default(
    "block",
  ),
  authType: OutputDatadogAuthenticationMethod$inboundSchema.default("manual"),
  totalMemoryLimitKB: z.number().optional(),
  description: z.string().optional(),
  customUrl: z.string().optional(),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputDatadogCompression$inboundSchema.default("none"),
  pqOnBackpressure: OutputDatadogQueueFullBehavior$inboundSchema.default(
    "block",
  ),
  pqMode: OutputDatadogMode$inboundSchema.default("error"),
  pqControls: z.lazy(() => OutputDatadogPqControls$inboundSchema).optional(),
  apiKey: z.string().optional(),
  textSecret: z.string().optional(),
});

/** @internal */
export type OutputDatadog$Outbound = {
  id: string;
  type: string;
  pipeline?: string | undefined;
  systemFields?: Array<string> | undefined;
  environment?: string | undefined;
  streamtags?: Array<string> | undefined;
  contentType: string;
  message?: string | undefined;
  source?: string | undefined;
  host?: string | undefined;
  service?: string | undefined;
  tags?: Array<string> | undefined;
  batchByTags: boolean;
  allowApiKeyFromEvents: boolean;
  severity?: string | undefined;
  site: string;
  sendCountersAsCount: boolean;
  concurrency: number;
  maxPayloadSizeKB: number;
  maxPayloadEvents: number;
  compress: boolean;
  rejectUnauthorized: boolean;
  timeoutSec: number;
  flushPeriodSec: number;
  extraHttpHeaders?: Array<OutputDatadogExtraHttpHeader$Outbound> | undefined;
  useRoundRobinDns: boolean;
  failedRequestLoggingMode: string;
  safeHeaders?: Array<string> | undefined;
  responseRetrySettings?:
    | Array<OutputDatadogResponseRetrySetting$Outbound>
    | undefined;
  timeoutRetrySettings?: OutputDatadogTimeoutRetrySettings$Outbound | undefined;
  responseHonorRetryAfterHeader: boolean;
  onBackpressure: string;
  authType: string;
  totalMemoryLimitKB?: number | undefined;
  description?: string | undefined;
  customUrl?: string | undefined;
  pqMaxFileSize: string;
  pqMaxSize: string;
  pqPath: string;
  pqCompress: string;
  pqOnBackpressure: string;
  pqMode: string;
  pqControls?: OutputDatadogPqControls$Outbound | undefined;
  apiKey?: string | undefined;
  textSecret?: string | undefined;
};

/** @internal */
export const OutputDatadog$outboundSchema: z.ZodType<
  OutputDatadog$Outbound,
  z.ZodTypeDef,
  OutputDatadog
> = z.object({
  id: z.string(),
  type: OutputDatadogType$outboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  contentType: SendLogsAs$outboundSchema.default("json"),
  message: z.string().optional(),
  source: z.string().optional(),
  host: z.string().optional(),
  service: z.string().optional(),
  tags: z.array(z.string()).optional(),
  batchByTags: z.boolean().default(true),
  allowApiKeyFromEvents: z.boolean().default(false),
  severity: OutputDatadogSeverity$outboundSchema.optional(),
  site: DatadogSite$outboundSchema.default("us"),
  sendCountersAsCount: z.boolean().default(false),
  concurrency: z.number().default(5),
  maxPayloadSizeKB: z.number().default(4096),
  maxPayloadEvents: z.number().default(0),
  compress: z.boolean().default(true),
  rejectUnauthorized: z.boolean().default(true),
  timeoutSec: z.number().default(30),
  flushPeriodSec: z.number().default(1),
  extraHttpHeaders: z.array(
    z.lazy(() => OutputDatadogExtraHttpHeader$outboundSchema),
  ).optional(),
  useRoundRobinDns: z.boolean().default(false),
  failedRequestLoggingMode: OutputDatadogFailedRequestLoggingMode$outboundSchema
    .default("none"),
  safeHeaders: z.array(z.string()).optional(),
  responseRetrySettings: z.array(
    z.lazy(() => OutputDatadogResponseRetrySetting$outboundSchema),
  ).optional(),
  timeoutRetrySettings: z.lazy(() =>
    OutputDatadogTimeoutRetrySettings$outboundSchema
  ).optional(),
  responseHonorRetryAfterHeader: z.boolean().default(false),
  onBackpressure: OutputDatadogBackpressureBehavior$outboundSchema.default(
    "block",
  ),
  authType: OutputDatadogAuthenticationMethod$outboundSchema.default("manual"),
  totalMemoryLimitKB: z.number().optional(),
  description: z.string().optional(),
  customUrl: z.string().optional(),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputDatadogCompression$outboundSchema.default("none"),
  pqOnBackpressure: OutputDatadogQueueFullBehavior$outboundSchema.default(
    "block",
  ),
  pqMode: OutputDatadogMode$outboundSchema.default("error"),
  pqControls: z.lazy(() => OutputDatadogPqControls$outboundSchema).optional(),
  apiKey: z.string().optional(),
  textSecret: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatadog$ {
  /** @deprecated use `OutputDatadog$inboundSchema` instead. */
  export const inboundSchema = OutputDatadog$inboundSchema;
  /** @deprecated use `OutputDatadog$outboundSchema` instead. */
  export const outboundSchema = OutputDatadog$outboundSchema;
  /** @deprecated use `OutputDatadog$Outbound` instead. */
  export type Outbound = OutputDatadog$Outbound;
}

export function outputDatadogToJSON(outputDatadog: OutputDatadog): string {
  return JSON.stringify(OutputDatadog$outboundSchema.parse(outputDatadog));
}

export function outputDatadogFromJSON(
  jsonString: string,
): SafeParseResult<OutputDatadog, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputDatadog$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputDatadog' from JSON`,
  );
}
