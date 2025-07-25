/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const OutputAzureEventhubType = {
  AzureEventhub: "azure_eventhub",
} as const;
export type OutputAzureEventhubType = ClosedEnum<
  typeof OutputAzureEventhubType
>;

/**
 * Control the number of required acknowledgments
 */
export const OutputAzureEventhubAcknowledgments = {
  One: 1,
  Zero: 0,
  Minus1: -1,
} as const;
/**
 * Control the number of required acknowledgments
 */
export type OutputAzureEventhubAcknowledgments = ClosedEnum<
  typeof OutputAzureEventhubAcknowledgments
>;

/**
 * Format to use to serialize events before writing to the Event Hubs Kafka brokers
 */
export const OutputAzureEventhubRecordDataFormat = {
  Json: "json",
  Raw: "raw",
} as const;
/**
 * Format to use to serialize events before writing to the Event Hubs Kafka brokers
 */
export type OutputAzureEventhubRecordDataFormat = ClosedEnum<
  typeof OutputAzureEventhubRecordDataFormat
>;

export const OutputAzureEventhubSASLMechanism = {
  Plain: "plain",
  Oauthbearer: "oauthbearer",
} as const;
export type OutputAzureEventhubSASLMechanism = ClosedEnum<
  typeof OutputAzureEventhubSASLMechanism
>;

/**
 * Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.
 */
export type OutputAzureEventhubAuthentication = {
  disabled?: boolean | undefined;
  mechanism?: OutputAzureEventhubSASLMechanism | undefined;
};

export type OutputAzureEventhubTLSSettingsClientSide = {
  disabled?: boolean | undefined;
  /**
   * Reject certificates that are not authorized by a CA in the CA certificate path, or by another trusted CA (such as the system's)
   */
  rejectUnauthorized?: boolean | undefined;
};

/**
 * How to handle events when all receivers are exerting backpressure
 */
export const OutputAzureEventhubBackpressureBehavior = {
  Block: "block",
  Drop: "drop",
  Queue: "queue",
} as const;
/**
 * How to handle events when all receivers are exerting backpressure
 */
export type OutputAzureEventhubBackpressureBehavior = ClosedEnum<
  typeof OutputAzureEventhubBackpressureBehavior
>;

/**
 * Codec to use to compress the persisted data
 */
export const OutputAzureEventhubCompression = {
  None: "none",
  Gzip: "gzip",
} as const;
/**
 * Codec to use to compress the persisted data
 */
export type OutputAzureEventhubCompression = ClosedEnum<
  typeof OutputAzureEventhubCompression
>;

/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export const OutputAzureEventhubQueueFullBehavior = {
  Block: "block",
  Drop: "drop",
} as const;
/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export type OutputAzureEventhubQueueFullBehavior = ClosedEnum<
  typeof OutputAzureEventhubQueueFullBehavior
>;

/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export const OutputAzureEventhubMode = {
  Error: "error",
  Backpressure: "backpressure",
  Always: "always",
} as const;
/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export type OutputAzureEventhubMode = ClosedEnum<
  typeof OutputAzureEventhubMode
>;

export type OutputAzureEventhubPqControls = {};

export type OutputAzureEventhub = {
  /**
   * Unique ID for this output
   */
  id?: string | undefined;
  type?: OutputAzureEventhubType | undefined;
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
   * List of Event Hubs Kafka brokers to connect to, eg. yourdomain.servicebus.windows.net:9093. The hostname can be found in the host portion of the primary or secondary connection string in Shared Access Policies.
   */
  brokers: Array<string>;
  /**
   * The name of the Event Hub (Kafka Topic) to publish events. Can be overwritten using field __topicOut.
   */
  topic: string;
  /**
   * Control the number of required acknowledgments
   */
  ack?: OutputAzureEventhubAcknowledgments | undefined;
  /**
   * Format to use to serialize events before writing to the Event Hubs Kafka brokers
   */
  format?: OutputAzureEventhubRecordDataFormat | undefined;
  /**
   * Maximum size of each record batch before compression. Setting should be < message.max.bytes settings in Event Hubs brokers.
   */
  maxRecordSizeKB?: number | undefined;
  /**
   * Maximum number of events in a batch before forcing a flush
   */
  flushEventCount?: number | undefined;
  /**
   * Maximum time between requests. Small values could cause the payload size to be smaller than the configured Max record size.
   */
  flushPeriodSec?: number | undefined;
  /**
   * Maximum time to wait for a connection to complete successfully
   */
  connectionTimeout?: number | undefined;
  /**
   * Maximum time to wait for Kafka to respond to a request
   */
  requestTimeout?: number | undefined;
  /**
   * If messages are failing, you can set the maximum number of retries as high as 100 to prevent loss of data
   */
  maxRetries?: number | undefined;
  /**
   * The maximum wait time for a retry, in milliseconds. Default (and minimum) is 30,000 ms (30 seconds); maximum is 180,000 ms (180 seconds).
   */
  maxBackOff?: number | undefined;
  /**
   * Initial value used to calculate the retry, in milliseconds. Maximum is 600,000 ms (10 minutes).
   */
  initialBackoff?: number | undefined;
  /**
   * Set the backoff multiplier (2-20) to control the retry frequency for failed messages. For faster retries, use a lower multiplier. For slower retries with more delay between attempts, use a higher multiplier. The multiplier is used in an exponential backoff formula; see the Kafka [documentation](https://kafka.js.org/docs/retry-detailed) for details.
   */
  backoffRate?: number | undefined;
  /**
   * Maximum time to wait for Kafka to respond to an authentication request
   */
  authenticationTimeout?: number | undefined;
  /**
   * Specifies a time window during which @{product} can reauthenticate if needed. Creates the window measuring backward from the moment when credentials are set to expire.
   */
  reauthenticationThreshold?: number | undefined;
  /**
   * Authentication parameters to use when connecting to brokers. Using TLS is highly recommended.
   */
  sasl?: OutputAzureEventhubAuthentication | undefined;
  tls?: OutputAzureEventhubTLSSettingsClientSide | undefined;
  /**
   * How to handle events when all receivers are exerting backpressure
   */
  onBackpressure?: OutputAzureEventhubBackpressureBehavior | undefined;
  description?: string | undefined;
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
  pqCompress?: OutputAzureEventhubCompression | undefined;
  /**
   * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
   */
  pqOnBackpressure?: OutputAzureEventhubQueueFullBehavior | undefined;
  /**
   * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
   */
  pqMode?: OutputAzureEventhubMode | undefined;
  pqControls?: OutputAzureEventhubPqControls | undefined;
};

/** @internal */
export const OutputAzureEventhubType$inboundSchema: z.ZodNativeEnum<
  typeof OutputAzureEventhubType
> = z.nativeEnum(OutputAzureEventhubType);

/** @internal */
export const OutputAzureEventhubType$outboundSchema: z.ZodNativeEnum<
  typeof OutputAzureEventhubType
> = OutputAzureEventhubType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhubType$ {
  /** @deprecated use `OutputAzureEventhubType$inboundSchema` instead. */
  export const inboundSchema = OutputAzureEventhubType$inboundSchema;
  /** @deprecated use `OutputAzureEventhubType$outboundSchema` instead. */
  export const outboundSchema = OutputAzureEventhubType$outboundSchema;
}

/** @internal */
export const OutputAzureEventhubAcknowledgments$inboundSchema: z.ZodNativeEnum<
  typeof OutputAzureEventhubAcknowledgments
> = z.nativeEnum(OutputAzureEventhubAcknowledgments);

/** @internal */
export const OutputAzureEventhubAcknowledgments$outboundSchema: z.ZodNativeEnum<
  typeof OutputAzureEventhubAcknowledgments
> = OutputAzureEventhubAcknowledgments$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhubAcknowledgments$ {
  /** @deprecated use `OutputAzureEventhubAcknowledgments$inboundSchema` instead. */
  export const inboundSchema = OutputAzureEventhubAcknowledgments$inboundSchema;
  /** @deprecated use `OutputAzureEventhubAcknowledgments$outboundSchema` instead. */
  export const outboundSchema =
    OutputAzureEventhubAcknowledgments$outboundSchema;
}

/** @internal */
export const OutputAzureEventhubRecordDataFormat$inboundSchema: z.ZodNativeEnum<
  typeof OutputAzureEventhubRecordDataFormat
> = z.nativeEnum(OutputAzureEventhubRecordDataFormat);

/** @internal */
export const OutputAzureEventhubRecordDataFormat$outboundSchema:
  z.ZodNativeEnum<typeof OutputAzureEventhubRecordDataFormat> =
    OutputAzureEventhubRecordDataFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhubRecordDataFormat$ {
  /** @deprecated use `OutputAzureEventhubRecordDataFormat$inboundSchema` instead. */
  export const inboundSchema =
    OutputAzureEventhubRecordDataFormat$inboundSchema;
  /** @deprecated use `OutputAzureEventhubRecordDataFormat$outboundSchema` instead. */
  export const outboundSchema =
    OutputAzureEventhubRecordDataFormat$outboundSchema;
}

/** @internal */
export const OutputAzureEventhubSASLMechanism$inboundSchema: z.ZodNativeEnum<
  typeof OutputAzureEventhubSASLMechanism
> = z.nativeEnum(OutputAzureEventhubSASLMechanism);

/** @internal */
export const OutputAzureEventhubSASLMechanism$outboundSchema: z.ZodNativeEnum<
  typeof OutputAzureEventhubSASLMechanism
> = OutputAzureEventhubSASLMechanism$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhubSASLMechanism$ {
  /** @deprecated use `OutputAzureEventhubSASLMechanism$inboundSchema` instead. */
  export const inboundSchema = OutputAzureEventhubSASLMechanism$inboundSchema;
  /** @deprecated use `OutputAzureEventhubSASLMechanism$outboundSchema` instead. */
  export const outboundSchema = OutputAzureEventhubSASLMechanism$outboundSchema;
}

/** @internal */
export const OutputAzureEventhubAuthentication$inboundSchema: z.ZodType<
  OutputAzureEventhubAuthentication,
  z.ZodTypeDef,
  unknown
> = z.object({
  disabled: z.boolean().default(false),
  mechanism: OutputAzureEventhubSASLMechanism$inboundSchema.default("plain"),
});

/** @internal */
export type OutputAzureEventhubAuthentication$Outbound = {
  disabled: boolean;
  mechanism: string;
};

/** @internal */
export const OutputAzureEventhubAuthentication$outboundSchema: z.ZodType<
  OutputAzureEventhubAuthentication$Outbound,
  z.ZodTypeDef,
  OutputAzureEventhubAuthentication
> = z.object({
  disabled: z.boolean().default(false),
  mechanism: OutputAzureEventhubSASLMechanism$outboundSchema.default("plain"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhubAuthentication$ {
  /** @deprecated use `OutputAzureEventhubAuthentication$inboundSchema` instead. */
  export const inboundSchema = OutputAzureEventhubAuthentication$inboundSchema;
  /** @deprecated use `OutputAzureEventhubAuthentication$outboundSchema` instead. */
  export const outboundSchema =
    OutputAzureEventhubAuthentication$outboundSchema;
  /** @deprecated use `OutputAzureEventhubAuthentication$Outbound` instead. */
  export type Outbound = OutputAzureEventhubAuthentication$Outbound;
}

export function outputAzureEventhubAuthenticationToJSON(
  outputAzureEventhubAuthentication: OutputAzureEventhubAuthentication,
): string {
  return JSON.stringify(
    OutputAzureEventhubAuthentication$outboundSchema.parse(
      outputAzureEventhubAuthentication,
    ),
  );
}

export function outputAzureEventhubAuthenticationFromJSON(
  jsonString: string,
): SafeParseResult<OutputAzureEventhubAuthentication, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputAzureEventhubAuthentication$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputAzureEventhubAuthentication' from JSON`,
  );
}

/** @internal */
export const OutputAzureEventhubTLSSettingsClientSide$inboundSchema: z.ZodType<
  OutputAzureEventhubTLSSettingsClientSide,
  z.ZodTypeDef,
  unknown
> = z.object({
  disabled: z.boolean().default(false),
  rejectUnauthorized: z.boolean().default(true),
});

/** @internal */
export type OutputAzureEventhubTLSSettingsClientSide$Outbound = {
  disabled: boolean;
  rejectUnauthorized: boolean;
};

/** @internal */
export const OutputAzureEventhubTLSSettingsClientSide$outboundSchema: z.ZodType<
  OutputAzureEventhubTLSSettingsClientSide$Outbound,
  z.ZodTypeDef,
  OutputAzureEventhubTLSSettingsClientSide
> = z.object({
  disabled: z.boolean().default(false),
  rejectUnauthorized: z.boolean().default(true),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhubTLSSettingsClientSide$ {
  /** @deprecated use `OutputAzureEventhubTLSSettingsClientSide$inboundSchema` instead. */
  export const inboundSchema =
    OutputAzureEventhubTLSSettingsClientSide$inboundSchema;
  /** @deprecated use `OutputAzureEventhubTLSSettingsClientSide$outboundSchema` instead. */
  export const outboundSchema =
    OutputAzureEventhubTLSSettingsClientSide$outboundSchema;
  /** @deprecated use `OutputAzureEventhubTLSSettingsClientSide$Outbound` instead. */
  export type Outbound = OutputAzureEventhubTLSSettingsClientSide$Outbound;
}

export function outputAzureEventhubTLSSettingsClientSideToJSON(
  outputAzureEventhubTLSSettingsClientSide:
    OutputAzureEventhubTLSSettingsClientSide,
): string {
  return JSON.stringify(
    OutputAzureEventhubTLSSettingsClientSide$outboundSchema.parse(
      outputAzureEventhubTLSSettingsClientSide,
    ),
  );
}

export function outputAzureEventhubTLSSettingsClientSideFromJSON(
  jsonString: string,
): SafeParseResult<
  OutputAzureEventhubTLSSettingsClientSide,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      OutputAzureEventhubTLSSettingsClientSide$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'OutputAzureEventhubTLSSettingsClientSide' from JSON`,
  );
}

/** @internal */
export const OutputAzureEventhubBackpressureBehavior$inboundSchema:
  z.ZodNativeEnum<typeof OutputAzureEventhubBackpressureBehavior> = z
    .nativeEnum(OutputAzureEventhubBackpressureBehavior);

/** @internal */
export const OutputAzureEventhubBackpressureBehavior$outboundSchema:
  z.ZodNativeEnum<typeof OutputAzureEventhubBackpressureBehavior> =
    OutputAzureEventhubBackpressureBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhubBackpressureBehavior$ {
  /** @deprecated use `OutputAzureEventhubBackpressureBehavior$inboundSchema` instead. */
  export const inboundSchema =
    OutputAzureEventhubBackpressureBehavior$inboundSchema;
  /** @deprecated use `OutputAzureEventhubBackpressureBehavior$outboundSchema` instead. */
  export const outboundSchema =
    OutputAzureEventhubBackpressureBehavior$outboundSchema;
}

/** @internal */
export const OutputAzureEventhubCompression$inboundSchema: z.ZodNativeEnum<
  typeof OutputAzureEventhubCompression
> = z.nativeEnum(OutputAzureEventhubCompression);

/** @internal */
export const OutputAzureEventhubCompression$outboundSchema: z.ZodNativeEnum<
  typeof OutputAzureEventhubCompression
> = OutputAzureEventhubCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhubCompression$ {
  /** @deprecated use `OutputAzureEventhubCompression$inboundSchema` instead. */
  export const inboundSchema = OutputAzureEventhubCompression$inboundSchema;
  /** @deprecated use `OutputAzureEventhubCompression$outboundSchema` instead. */
  export const outboundSchema = OutputAzureEventhubCompression$outboundSchema;
}

/** @internal */
export const OutputAzureEventhubQueueFullBehavior$inboundSchema:
  z.ZodNativeEnum<typeof OutputAzureEventhubQueueFullBehavior> = z.nativeEnum(
    OutputAzureEventhubQueueFullBehavior,
  );

/** @internal */
export const OutputAzureEventhubQueueFullBehavior$outboundSchema:
  z.ZodNativeEnum<typeof OutputAzureEventhubQueueFullBehavior> =
    OutputAzureEventhubQueueFullBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhubQueueFullBehavior$ {
  /** @deprecated use `OutputAzureEventhubQueueFullBehavior$inboundSchema` instead. */
  export const inboundSchema =
    OutputAzureEventhubQueueFullBehavior$inboundSchema;
  /** @deprecated use `OutputAzureEventhubQueueFullBehavior$outboundSchema` instead. */
  export const outboundSchema =
    OutputAzureEventhubQueueFullBehavior$outboundSchema;
}

/** @internal */
export const OutputAzureEventhubMode$inboundSchema: z.ZodNativeEnum<
  typeof OutputAzureEventhubMode
> = z.nativeEnum(OutputAzureEventhubMode);

/** @internal */
export const OutputAzureEventhubMode$outboundSchema: z.ZodNativeEnum<
  typeof OutputAzureEventhubMode
> = OutputAzureEventhubMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhubMode$ {
  /** @deprecated use `OutputAzureEventhubMode$inboundSchema` instead. */
  export const inboundSchema = OutputAzureEventhubMode$inboundSchema;
  /** @deprecated use `OutputAzureEventhubMode$outboundSchema` instead. */
  export const outboundSchema = OutputAzureEventhubMode$outboundSchema;
}

/** @internal */
export const OutputAzureEventhubPqControls$inboundSchema: z.ZodType<
  OutputAzureEventhubPqControls,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type OutputAzureEventhubPqControls$Outbound = {};

/** @internal */
export const OutputAzureEventhubPqControls$outboundSchema: z.ZodType<
  OutputAzureEventhubPqControls$Outbound,
  z.ZodTypeDef,
  OutputAzureEventhubPqControls
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhubPqControls$ {
  /** @deprecated use `OutputAzureEventhubPqControls$inboundSchema` instead. */
  export const inboundSchema = OutputAzureEventhubPqControls$inboundSchema;
  /** @deprecated use `OutputAzureEventhubPqControls$outboundSchema` instead. */
  export const outboundSchema = OutputAzureEventhubPqControls$outboundSchema;
  /** @deprecated use `OutputAzureEventhubPqControls$Outbound` instead. */
  export type Outbound = OutputAzureEventhubPqControls$Outbound;
}

export function outputAzureEventhubPqControlsToJSON(
  outputAzureEventhubPqControls: OutputAzureEventhubPqControls,
): string {
  return JSON.stringify(
    OutputAzureEventhubPqControls$outboundSchema.parse(
      outputAzureEventhubPqControls,
    ),
  );
}

export function outputAzureEventhubPqControlsFromJSON(
  jsonString: string,
): SafeParseResult<OutputAzureEventhubPqControls, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputAzureEventhubPqControls$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputAzureEventhubPqControls' from JSON`,
  );
}

/** @internal */
export const OutputAzureEventhub$inboundSchema: z.ZodType<
  OutputAzureEventhub,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: OutputAzureEventhubType$inboundSchema.optional(),
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  brokers: z.array(z.string()),
  topic: z.string(),
  ack: OutputAzureEventhubAcknowledgments$inboundSchema.default(1),
  format: OutputAzureEventhubRecordDataFormat$inboundSchema.default("json"),
  maxRecordSizeKB: z.number().default(768),
  flushEventCount: z.number().default(1000),
  flushPeriodSec: z.number().default(1),
  connectionTimeout: z.number().default(10000),
  requestTimeout: z.number().default(60000),
  maxRetries: z.number().default(5),
  maxBackOff: z.number().default(30000),
  initialBackoff: z.number().default(300),
  backoffRate: z.number().default(2),
  authenticationTimeout: z.number().default(10000),
  reauthenticationThreshold: z.number().default(10000),
  sasl: z.lazy(() => OutputAzureEventhubAuthentication$inboundSchema)
    .optional(),
  tls: z.lazy(() => OutputAzureEventhubTLSSettingsClientSide$inboundSchema)
    .optional(),
  onBackpressure: OutputAzureEventhubBackpressureBehavior$inboundSchema.default(
    "block",
  ),
  description: z.string().optional(),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputAzureEventhubCompression$inboundSchema.default("none"),
  pqOnBackpressure: OutputAzureEventhubQueueFullBehavior$inboundSchema.default(
    "block",
  ),
  pqMode: OutputAzureEventhubMode$inboundSchema.default("error"),
  pqControls: z.lazy(() => OutputAzureEventhubPqControls$inboundSchema)
    .optional(),
});

/** @internal */
export type OutputAzureEventhub$Outbound = {
  id?: string | undefined;
  type?: string | undefined;
  pipeline?: string | undefined;
  systemFields?: Array<string> | undefined;
  environment?: string | undefined;
  streamtags?: Array<string> | undefined;
  brokers: Array<string>;
  topic: string;
  ack: number;
  format: string;
  maxRecordSizeKB: number;
  flushEventCount: number;
  flushPeriodSec: number;
  connectionTimeout: number;
  requestTimeout: number;
  maxRetries: number;
  maxBackOff: number;
  initialBackoff: number;
  backoffRate: number;
  authenticationTimeout: number;
  reauthenticationThreshold: number;
  sasl?: OutputAzureEventhubAuthentication$Outbound | undefined;
  tls?: OutputAzureEventhubTLSSettingsClientSide$Outbound | undefined;
  onBackpressure: string;
  description?: string | undefined;
  pqMaxFileSize: string;
  pqMaxSize: string;
  pqPath: string;
  pqCompress: string;
  pqOnBackpressure: string;
  pqMode: string;
  pqControls?: OutputAzureEventhubPqControls$Outbound | undefined;
};

/** @internal */
export const OutputAzureEventhub$outboundSchema: z.ZodType<
  OutputAzureEventhub$Outbound,
  z.ZodTypeDef,
  OutputAzureEventhub
> = z.object({
  id: z.string().optional(),
  type: OutputAzureEventhubType$outboundSchema.optional(),
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  brokers: z.array(z.string()),
  topic: z.string(),
  ack: OutputAzureEventhubAcknowledgments$outboundSchema.default(1),
  format: OutputAzureEventhubRecordDataFormat$outboundSchema.default("json"),
  maxRecordSizeKB: z.number().default(768),
  flushEventCount: z.number().default(1000),
  flushPeriodSec: z.number().default(1),
  connectionTimeout: z.number().default(10000),
  requestTimeout: z.number().default(60000),
  maxRetries: z.number().default(5),
  maxBackOff: z.number().default(30000),
  initialBackoff: z.number().default(300),
  backoffRate: z.number().default(2),
  authenticationTimeout: z.number().default(10000),
  reauthenticationThreshold: z.number().default(10000),
  sasl: z.lazy(() => OutputAzureEventhubAuthentication$outboundSchema)
    .optional(),
  tls: z.lazy(() => OutputAzureEventhubTLSSettingsClientSide$outboundSchema)
    .optional(),
  onBackpressure: OutputAzureEventhubBackpressureBehavior$outboundSchema
    .default("block"),
  description: z.string().optional(),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputAzureEventhubCompression$outboundSchema.default("none"),
  pqOnBackpressure: OutputAzureEventhubQueueFullBehavior$outboundSchema.default(
    "block",
  ),
  pqMode: OutputAzureEventhubMode$outboundSchema.default("error"),
  pqControls: z.lazy(() => OutputAzureEventhubPqControls$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputAzureEventhub$ {
  /** @deprecated use `OutputAzureEventhub$inboundSchema` instead. */
  export const inboundSchema = OutputAzureEventhub$inboundSchema;
  /** @deprecated use `OutputAzureEventhub$outboundSchema` instead. */
  export const outboundSchema = OutputAzureEventhub$outboundSchema;
  /** @deprecated use `OutputAzureEventhub$Outbound` instead. */
  export type Outbound = OutputAzureEventhub$Outbound;
}

export function outputAzureEventhubToJSON(
  outputAzureEventhub: OutputAzureEventhub,
): string {
  return JSON.stringify(
    OutputAzureEventhub$outboundSchema.parse(outputAzureEventhub),
  );
}

export function outputAzureEventhubFromJSON(
  jsonString: string,
): SafeParseResult<OutputAzureEventhub, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputAzureEventhub$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputAzureEventhub' from JSON`,
  );
}
