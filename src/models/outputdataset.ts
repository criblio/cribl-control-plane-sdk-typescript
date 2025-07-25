/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const OutputDatasetType = {
  Dataset: "dataset",
} as const;
export type OutputDatasetType = ClosedEnum<typeof OutputDatasetType>;

/**
 * Default value for event severity. If the `sev` or `__severity` fields are set on an event, the first one matching will override this value.
 */
export const OutputDatasetSeverity = {
  Finest: "finest",
  Finer: "finer",
  Fine: "fine",
  Info: "info",
  Warning: "warning",
  Error: "error",
  Fatal: "fatal",
} as const;
/**
 * Default value for event severity. If the `sev` or `__severity` fields are set on an event, the first one matching will override this value.
 */
export type OutputDatasetSeverity = ClosedEnum<typeof OutputDatasetSeverity>;

export type OutputDatasetResponseRetrySetting = {
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

export type OutputDatasetTimeoutRetrySettings = {
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
 * DataSet site to which events should be sent
 */
export const DataSetSite = {
  Us: "us",
  Eu: "eu",
  Custom: "custom",
} as const;
/**
 * DataSet site to which events should be sent
 */
export type DataSetSite = ClosedEnum<typeof DataSetSite>;

export type OutputDatasetExtraHttpHeader = {
  name?: string | undefined;
  value: string;
};

/**
 * Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.
 */
export const OutputDatasetFailedRequestLoggingMode = {
  Payload: "payload",
  PayloadAndHeaders: "payloadAndHeaders",
  None: "none",
} as const;
/**
 * Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.
 */
export type OutputDatasetFailedRequestLoggingMode = ClosedEnum<
  typeof OutputDatasetFailedRequestLoggingMode
>;

/**
 * How to handle events when all receivers are exerting backpressure
 */
export const OutputDatasetBackpressureBehavior = {
  Block: "block",
  Drop: "drop",
  Queue: "queue",
} as const;
/**
 * How to handle events when all receivers are exerting backpressure
 */
export type OutputDatasetBackpressureBehavior = ClosedEnum<
  typeof OutputDatasetBackpressureBehavior
>;

/**
 * Enter API key directly, or select a stored secret
 */
export const OutputDatasetAuthenticationMethod = {
  Manual: "manual",
  Secret: "secret",
} as const;
/**
 * Enter API key directly, or select a stored secret
 */
export type OutputDatasetAuthenticationMethod = ClosedEnum<
  typeof OutputDatasetAuthenticationMethod
>;

/**
 * Codec to use to compress the persisted data
 */
export const OutputDatasetCompression = {
  None: "none",
  Gzip: "gzip",
} as const;
/**
 * Codec to use to compress the persisted data
 */
export type OutputDatasetCompression = ClosedEnum<
  typeof OutputDatasetCompression
>;

/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export const OutputDatasetQueueFullBehavior = {
  Block: "block",
  Drop: "drop",
} as const;
/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export type OutputDatasetQueueFullBehavior = ClosedEnum<
  typeof OutputDatasetQueueFullBehavior
>;

/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export const OutputDatasetMode = {
  Error: "error",
  Backpressure: "backpressure",
  Always: "always",
} as const;
/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export type OutputDatasetMode = ClosedEnum<typeof OutputDatasetMode>;

export type OutputDatasetPqControls = {};

export type OutputDataset = {
  /**
   * Unique ID for this output
   */
  id: string;
  type: OutputDatasetType;
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
   * Name of the event field that contains the message or attributes to send. If not specified, all of the event's non-internal fields will be sent as attributes.
   */
  messageField?: string | undefined;
  /**
   * Fields to exclude from the event if the Message field is either unspecified or refers to an object. Ignored if the Message field is a string. If empty, we send all non-internal fields.
   */
  excludeFields?: Array<string> | undefined;
  /**
   * Name of the event field that contains the `serverHost` identifier. If not specified, defaults to `cribl_<outputId>`.
   */
  serverHostField?: string | undefined;
  /**
   * Name of the event field that contains the timestamp. If not specified, defaults to `ts`, `_time`, or `Date.now()`, in that order.
   */
  timestampField?: string | undefined;
  /**
   * Default value for event severity. If the `sev` or `__severity` fields are set on an event, the first one matching will override this value.
   */
  defaultSeverity?: OutputDatasetSeverity | undefined;
  /**
   * Automatically retry after unsuccessful response status codes, such as 429 (Too Many Requests) or 503 (Service Unavailable)
   */
  responseRetrySettings?: Array<OutputDatasetResponseRetrySetting> | undefined;
  timeoutRetrySettings?: OutputDatasetTimeoutRetrySettings | undefined;
  /**
   * Honor any Retry-After header that specifies a delay (in seconds) no longer than 180 seconds after the retry request. @{product} limits the delay to 180 seconds, even if the Retry-After header specifies a longer delay. When enabled, takes precedence over user-configured retry options. When disabled, all Retry-After headers are ignored.
   */
  responseHonorRetryAfterHeader?: boolean | undefined;
  /**
   * DataSet site to which events should be sent
   */
  site?: DataSetSite | undefined;
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
  extraHttpHeaders?: Array<OutputDatasetExtraHttpHeader> | undefined;
  /**
   * Enable round-robin DNS lookup. When a DNS server returns multiple addresses, @{product} will cycle through them in the order returned. For optimal performance, consider enabling this setting for non-load balanced destinations.
   */
  useRoundRobinDns?: boolean | undefined;
  /**
   * Data to log when a request fails. All headers are redacted by default, unless listed as safe headers below.
   */
  failedRequestLoggingMode?: OutputDatasetFailedRequestLoggingMode | undefined;
  /**
   * List of headers that are safe to log in plain text
   */
  safeHeaders?: Array<string> | undefined;
  /**
   * How to handle events when all receivers are exerting backpressure
   */
  onBackpressure?: OutputDatasetBackpressureBehavior | undefined;
  /**
   * Enter API key directly, or select a stored secret
   */
  authType?: OutputDatasetAuthenticationMethod | undefined;
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
  pqCompress?: OutputDatasetCompression | undefined;
  /**
   * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
   */
  pqOnBackpressure?: OutputDatasetQueueFullBehavior | undefined;
  /**
   * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
   */
  pqMode?: OutputDatasetMode | undefined;
  pqControls?: OutputDatasetPqControls | undefined;
  /**
   * A 'Log Write Access' API key for the DataSet account
   */
  apiKey?: string | undefined;
  /**
   * Select or create a stored text secret
   */
  textSecret?: string | undefined;
};

/** @internal */
export const OutputDatasetType$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetType
> = z.nativeEnum(OutputDatasetType);

/** @internal */
export const OutputDatasetType$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetType
> = OutputDatasetType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatasetType$ {
  /** @deprecated use `OutputDatasetType$inboundSchema` instead. */
  export const inboundSchema = OutputDatasetType$inboundSchema;
  /** @deprecated use `OutputDatasetType$outboundSchema` instead. */
  export const outboundSchema = OutputDatasetType$outboundSchema;
}

/** @internal */
export const OutputDatasetSeverity$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetSeverity
> = z.nativeEnum(OutputDatasetSeverity);

/** @internal */
export const OutputDatasetSeverity$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetSeverity
> = OutputDatasetSeverity$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatasetSeverity$ {
  /** @deprecated use `OutputDatasetSeverity$inboundSchema` instead. */
  export const inboundSchema = OutputDatasetSeverity$inboundSchema;
  /** @deprecated use `OutputDatasetSeverity$outboundSchema` instead. */
  export const outboundSchema = OutputDatasetSeverity$outboundSchema;
}

/** @internal */
export const OutputDatasetResponseRetrySetting$inboundSchema: z.ZodType<
  OutputDatasetResponseRetrySetting,
  z.ZodTypeDef,
  unknown
> = z.object({
  httpStatus: z.number(),
  initialBackoff: z.number().default(1000),
  backoffRate: z.number().default(2),
  maxBackoff: z.number().default(10000),
});

/** @internal */
export type OutputDatasetResponseRetrySetting$Outbound = {
  httpStatus: number;
  initialBackoff: number;
  backoffRate: number;
  maxBackoff: number;
};

/** @internal */
export const OutputDatasetResponseRetrySetting$outboundSchema: z.ZodType<
  OutputDatasetResponseRetrySetting$Outbound,
  z.ZodTypeDef,
  OutputDatasetResponseRetrySetting
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
export namespace OutputDatasetResponseRetrySetting$ {
  /** @deprecated use `OutputDatasetResponseRetrySetting$inboundSchema` instead. */
  export const inboundSchema = OutputDatasetResponseRetrySetting$inboundSchema;
  /** @deprecated use `OutputDatasetResponseRetrySetting$outboundSchema` instead. */
  export const outboundSchema =
    OutputDatasetResponseRetrySetting$outboundSchema;
  /** @deprecated use `OutputDatasetResponseRetrySetting$Outbound` instead. */
  export type Outbound = OutputDatasetResponseRetrySetting$Outbound;
}

export function outputDatasetResponseRetrySettingToJSON(
  outputDatasetResponseRetrySetting: OutputDatasetResponseRetrySetting,
): string {
  return JSON.stringify(
    OutputDatasetResponseRetrySetting$outboundSchema.parse(
      outputDatasetResponseRetrySetting,
    ),
  );
}

export function outputDatasetResponseRetrySettingFromJSON(
  jsonString: string,
): SafeParseResult<OutputDatasetResponseRetrySetting, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputDatasetResponseRetrySetting$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputDatasetResponseRetrySetting' from JSON`,
  );
}

/** @internal */
export const OutputDatasetTimeoutRetrySettings$inboundSchema: z.ZodType<
  OutputDatasetTimeoutRetrySettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  timeoutRetry: z.boolean().default(false),
  initialBackoff: z.number().default(1000),
  backoffRate: z.number().default(2),
  maxBackoff: z.number().default(10000),
});

/** @internal */
export type OutputDatasetTimeoutRetrySettings$Outbound = {
  timeoutRetry: boolean;
  initialBackoff: number;
  backoffRate: number;
  maxBackoff: number;
};

/** @internal */
export const OutputDatasetTimeoutRetrySettings$outboundSchema: z.ZodType<
  OutputDatasetTimeoutRetrySettings$Outbound,
  z.ZodTypeDef,
  OutputDatasetTimeoutRetrySettings
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
export namespace OutputDatasetTimeoutRetrySettings$ {
  /** @deprecated use `OutputDatasetTimeoutRetrySettings$inboundSchema` instead. */
  export const inboundSchema = OutputDatasetTimeoutRetrySettings$inboundSchema;
  /** @deprecated use `OutputDatasetTimeoutRetrySettings$outboundSchema` instead. */
  export const outboundSchema =
    OutputDatasetTimeoutRetrySettings$outboundSchema;
  /** @deprecated use `OutputDatasetTimeoutRetrySettings$Outbound` instead. */
  export type Outbound = OutputDatasetTimeoutRetrySettings$Outbound;
}

export function outputDatasetTimeoutRetrySettingsToJSON(
  outputDatasetTimeoutRetrySettings: OutputDatasetTimeoutRetrySettings,
): string {
  return JSON.stringify(
    OutputDatasetTimeoutRetrySettings$outboundSchema.parse(
      outputDatasetTimeoutRetrySettings,
    ),
  );
}

export function outputDatasetTimeoutRetrySettingsFromJSON(
  jsonString: string,
): SafeParseResult<OutputDatasetTimeoutRetrySettings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputDatasetTimeoutRetrySettings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputDatasetTimeoutRetrySettings' from JSON`,
  );
}

/** @internal */
export const DataSetSite$inboundSchema: z.ZodNativeEnum<typeof DataSetSite> = z
  .nativeEnum(DataSetSite);

/** @internal */
export const DataSetSite$outboundSchema: z.ZodNativeEnum<typeof DataSetSite> =
  DataSetSite$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataSetSite$ {
  /** @deprecated use `DataSetSite$inboundSchema` instead. */
  export const inboundSchema = DataSetSite$inboundSchema;
  /** @deprecated use `DataSetSite$outboundSchema` instead. */
  export const outboundSchema = DataSetSite$outboundSchema;
}

/** @internal */
export const OutputDatasetExtraHttpHeader$inboundSchema: z.ZodType<
  OutputDatasetExtraHttpHeader,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  value: z.string(),
});

/** @internal */
export type OutputDatasetExtraHttpHeader$Outbound = {
  name?: string | undefined;
  value: string;
};

/** @internal */
export const OutputDatasetExtraHttpHeader$outboundSchema: z.ZodType<
  OutputDatasetExtraHttpHeader$Outbound,
  z.ZodTypeDef,
  OutputDatasetExtraHttpHeader
> = z.object({
  name: z.string().optional(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatasetExtraHttpHeader$ {
  /** @deprecated use `OutputDatasetExtraHttpHeader$inboundSchema` instead. */
  export const inboundSchema = OutputDatasetExtraHttpHeader$inboundSchema;
  /** @deprecated use `OutputDatasetExtraHttpHeader$outboundSchema` instead. */
  export const outboundSchema = OutputDatasetExtraHttpHeader$outboundSchema;
  /** @deprecated use `OutputDatasetExtraHttpHeader$Outbound` instead. */
  export type Outbound = OutputDatasetExtraHttpHeader$Outbound;
}

export function outputDatasetExtraHttpHeaderToJSON(
  outputDatasetExtraHttpHeader: OutputDatasetExtraHttpHeader,
): string {
  return JSON.stringify(
    OutputDatasetExtraHttpHeader$outboundSchema.parse(
      outputDatasetExtraHttpHeader,
    ),
  );
}

export function outputDatasetExtraHttpHeaderFromJSON(
  jsonString: string,
): SafeParseResult<OutputDatasetExtraHttpHeader, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputDatasetExtraHttpHeader$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputDatasetExtraHttpHeader' from JSON`,
  );
}

/** @internal */
export const OutputDatasetFailedRequestLoggingMode$inboundSchema:
  z.ZodNativeEnum<typeof OutputDatasetFailedRequestLoggingMode> = z.nativeEnum(
    OutputDatasetFailedRequestLoggingMode,
  );

/** @internal */
export const OutputDatasetFailedRequestLoggingMode$outboundSchema:
  z.ZodNativeEnum<typeof OutputDatasetFailedRequestLoggingMode> =
    OutputDatasetFailedRequestLoggingMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatasetFailedRequestLoggingMode$ {
  /** @deprecated use `OutputDatasetFailedRequestLoggingMode$inboundSchema` instead. */
  export const inboundSchema =
    OutputDatasetFailedRequestLoggingMode$inboundSchema;
  /** @deprecated use `OutputDatasetFailedRequestLoggingMode$outboundSchema` instead. */
  export const outboundSchema =
    OutputDatasetFailedRequestLoggingMode$outboundSchema;
}

/** @internal */
export const OutputDatasetBackpressureBehavior$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetBackpressureBehavior
> = z.nativeEnum(OutputDatasetBackpressureBehavior);

/** @internal */
export const OutputDatasetBackpressureBehavior$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetBackpressureBehavior
> = OutputDatasetBackpressureBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatasetBackpressureBehavior$ {
  /** @deprecated use `OutputDatasetBackpressureBehavior$inboundSchema` instead. */
  export const inboundSchema = OutputDatasetBackpressureBehavior$inboundSchema;
  /** @deprecated use `OutputDatasetBackpressureBehavior$outboundSchema` instead. */
  export const outboundSchema =
    OutputDatasetBackpressureBehavior$outboundSchema;
}

/** @internal */
export const OutputDatasetAuthenticationMethod$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetAuthenticationMethod
> = z.nativeEnum(OutputDatasetAuthenticationMethod);

/** @internal */
export const OutputDatasetAuthenticationMethod$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetAuthenticationMethod
> = OutputDatasetAuthenticationMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatasetAuthenticationMethod$ {
  /** @deprecated use `OutputDatasetAuthenticationMethod$inboundSchema` instead. */
  export const inboundSchema = OutputDatasetAuthenticationMethod$inboundSchema;
  /** @deprecated use `OutputDatasetAuthenticationMethod$outboundSchema` instead. */
  export const outboundSchema =
    OutputDatasetAuthenticationMethod$outboundSchema;
}

/** @internal */
export const OutputDatasetCompression$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetCompression
> = z.nativeEnum(OutputDatasetCompression);

/** @internal */
export const OutputDatasetCompression$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetCompression
> = OutputDatasetCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatasetCompression$ {
  /** @deprecated use `OutputDatasetCompression$inboundSchema` instead. */
  export const inboundSchema = OutputDatasetCompression$inboundSchema;
  /** @deprecated use `OutputDatasetCompression$outboundSchema` instead. */
  export const outboundSchema = OutputDatasetCompression$outboundSchema;
}

/** @internal */
export const OutputDatasetQueueFullBehavior$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetQueueFullBehavior
> = z.nativeEnum(OutputDatasetQueueFullBehavior);

/** @internal */
export const OutputDatasetQueueFullBehavior$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetQueueFullBehavior
> = OutputDatasetQueueFullBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatasetQueueFullBehavior$ {
  /** @deprecated use `OutputDatasetQueueFullBehavior$inboundSchema` instead. */
  export const inboundSchema = OutputDatasetQueueFullBehavior$inboundSchema;
  /** @deprecated use `OutputDatasetQueueFullBehavior$outboundSchema` instead. */
  export const outboundSchema = OutputDatasetQueueFullBehavior$outboundSchema;
}

/** @internal */
export const OutputDatasetMode$inboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetMode
> = z.nativeEnum(OutputDatasetMode);

/** @internal */
export const OutputDatasetMode$outboundSchema: z.ZodNativeEnum<
  typeof OutputDatasetMode
> = OutputDatasetMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatasetMode$ {
  /** @deprecated use `OutputDatasetMode$inboundSchema` instead. */
  export const inboundSchema = OutputDatasetMode$inboundSchema;
  /** @deprecated use `OutputDatasetMode$outboundSchema` instead. */
  export const outboundSchema = OutputDatasetMode$outboundSchema;
}

/** @internal */
export const OutputDatasetPqControls$inboundSchema: z.ZodType<
  OutputDatasetPqControls,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type OutputDatasetPqControls$Outbound = {};

/** @internal */
export const OutputDatasetPqControls$outboundSchema: z.ZodType<
  OutputDatasetPqControls$Outbound,
  z.ZodTypeDef,
  OutputDatasetPqControls
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDatasetPqControls$ {
  /** @deprecated use `OutputDatasetPqControls$inboundSchema` instead. */
  export const inboundSchema = OutputDatasetPqControls$inboundSchema;
  /** @deprecated use `OutputDatasetPqControls$outboundSchema` instead. */
  export const outboundSchema = OutputDatasetPqControls$outboundSchema;
  /** @deprecated use `OutputDatasetPqControls$Outbound` instead. */
  export type Outbound = OutputDatasetPqControls$Outbound;
}

export function outputDatasetPqControlsToJSON(
  outputDatasetPqControls: OutputDatasetPqControls,
): string {
  return JSON.stringify(
    OutputDatasetPqControls$outboundSchema.parse(outputDatasetPqControls),
  );
}

export function outputDatasetPqControlsFromJSON(
  jsonString: string,
): SafeParseResult<OutputDatasetPqControls, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputDatasetPqControls$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputDatasetPqControls' from JSON`,
  );
}

/** @internal */
export const OutputDataset$inboundSchema: z.ZodType<
  OutputDataset,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: OutputDatasetType$inboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  messageField: z.string().optional(),
  excludeFields: z.array(z.string()).optional(),
  serverHostField: z.string().optional(),
  timestampField: z.string().optional(),
  defaultSeverity: OutputDatasetSeverity$inboundSchema.default("info"),
  responseRetrySettings: z.array(
    z.lazy(() => OutputDatasetResponseRetrySetting$inboundSchema),
  ).optional(),
  timeoutRetrySettings: z.lazy(() =>
    OutputDatasetTimeoutRetrySettings$inboundSchema
  ).optional(),
  responseHonorRetryAfterHeader: z.boolean().default(false),
  site: DataSetSite$inboundSchema.default("us"),
  concurrency: z.number().default(5),
  maxPayloadSizeKB: z.number().default(4096),
  maxPayloadEvents: z.number().default(0),
  compress: z.boolean().default(true),
  rejectUnauthorized: z.boolean().default(true),
  timeoutSec: z.number().default(30),
  flushPeriodSec: z.number().default(1),
  extraHttpHeaders: z.array(
    z.lazy(() => OutputDatasetExtraHttpHeader$inboundSchema),
  ).optional(),
  useRoundRobinDns: z.boolean().default(false),
  failedRequestLoggingMode: OutputDatasetFailedRequestLoggingMode$inboundSchema
    .default("none"),
  safeHeaders: z.array(z.string()).optional(),
  onBackpressure: OutputDatasetBackpressureBehavior$inboundSchema.default(
    "block",
  ),
  authType: OutputDatasetAuthenticationMethod$inboundSchema.default("manual"),
  totalMemoryLimitKB: z.number().optional(),
  description: z.string().optional(),
  customUrl: z.string().optional(),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputDatasetCompression$inboundSchema.default("none"),
  pqOnBackpressure: OutputDatasetQueueFullBehavior$inboundSchema.default(
    "block",
  ),
  pqMode: OutputDatasetMode$inboundSchema.default("error"),
  pqControls: z.lazy(() => OutputDatasetPqControls$inboundSchema).optional(),
  apiKey: z.string().optional(),
  textSecret: z.string().optional(),
});

/** @internal */
export type OutputDataset$Outbound = {
  id: string;
  type: string;
  pipeline?: string | undefined;
  systemFields?: Array<string> | undefined;
  environment?: string | undefined;
  streamtags?: Array<string> | undefined;
  messageField?: string | undefined;
  excludeFields?: Array<string> | undefined;
  serverHostField?: string | undefined;
  timestampField?: string | undefined;
  defaultSeverity: string;
  responseRetrySettings?:
    | Array<OutputDatasetResponseRetrySetting$Outbound>
    | undefined;
  timeoutRetrySettings?: OutputDatasetTimeoutRetrySettings$Outbound | undefined;
  responseHonorRetryAfterHeader: boolean;
  site: string;
  concurrency: number;
  maxPayloadSizeKB: number;
  maxPayloadEvents: number;
  compress: boolean;
  rejectUnauthorized: boolean;
  timeoutSec: number;
  flushPeriodSec: number;
  extraHttpHeaders?: Array<OutputDatasetExtraHttpHeader$Outbound> | undefined;
  useRoundRobinDns: boolean;
  failedRequestLoggingMode: string;
  safeHeaders?: Array<string> | undefined;
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
  pqControls?: OutputDatasetPqControls$Outbound | undefined;
  apiKey?: string | undefined;
  textSecret?: string | undefined;
};

/** @internal */
export const OutputDataset$outboundSchema: z.ZodType<
  OutputDataset$Outbound,
  z.ZodTypeDef,
  OutputDataset
> = z.object({
  id: z.string(),
  type: OutputDatasetType$outboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  messageField: z.string().optional(),
  excludeFields: z.array(z.string()).optional(),
  serverHostField: z.string().optional(),
  timestampField: z.string().optional(),
  defaultSeverity: OutputDatasetSeverity$outboundSchema.default("info"),
  responseRetrySettings: z.array(
    z.lazy(() => OutputDatasetResponseRetrySetting$outboundSchema),
  ).optional(),
  timeoutRetrySettings: z.lazy(() =>
    OutputDatasetTimeoutRetrySettings$outboundSchema
  ).optional(),
  responseHonorRetryAfterHeader: z.boolean().default(false),
  site: DataSetSite$outboundSchema.default("us"),
  concurrency: z.number().default(5),
  maxPayloadSizeKB: z.number().default(4096),
  maxPayloadEvents: z.number().default(0),
  compress: z.boolean().default(true),
  rejectUnauthorized: z.boolean().default(true),
  timeoutSec: z.number().default(30),
  flushPeriodSec: z.number().default(1),
  extraHttpHeaders: z.array(
    z.lazy(() => OutputDatasetExtraHttpHeader$outboundSchema),
  ).optional(),
  useRoundRobinDns: z.boolean().default(false),
  failedRequestLoggingMode: OutputDatasetFailedRequestLoggingMode$outboundSchema
    .default("none"),
  safeHeaders: z.array(z.string()).optional(),
  onBackpressure: OutputDatasetBackpressureBehavior$outboundSchema.default(
    "block",
  ),
  authType: OutputDatasetAuthenticationMethod$outboundSchema.default("manual"),
  totalMemoryLimitKB: z.number().optional(),
  description: z.string().optional(),
  customUrl: z.string().optional(),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputDatasetCompression$outboundSchema.default("none"),
  pqOnBackpressure: OutputDatasetQueueFullBehavior$outboundSchema.default(
    "block",
  ),
  pqMode: OutputDatasetMode$outboundSchema.default("error"),
  pqControls: z.lazy(() => OutputDatasetPqControls$outboundSchema).optional(),
  apiKey: z.string().optional(),
  textSecret: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputDataset$ {
  /** @deprecated use `OutputDataset$inboundSchema` instead. */
  export const inboundSchema = OutputDataset$inboundSchema;
  /** @deprecated use `OutputDataset$outboundSchema` instead. */
  export const outboundSchema = OutputDataset$outboundSchema;
  /** @deprecated use `OutputDataset$Outbound` instead. */
  export type Outbound = OutputDataset$Outbound;
}

export function outputDatasetToJSON(outputDataset: OutputDataset): string {
  return JSON.stringify(OutputDataset$outboundSchema.parse(outputDataset));
}

export function outputDatasetFromJSON(
  jsonString: string,
): SafeParseResult<OutputDataset, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputDataset$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputDataset' from JSON`,
  );
}
