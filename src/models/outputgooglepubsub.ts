/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const OutputGooglePubsubTypeGooglePubsub = {
  GooglePubsub: "google_pubsub",
} as const;
export type OutputGooglePubsubTypeGooglePubsub = ClosedEnum<
  typeof OutputGooglePubsubTypeGooglePubsub
>;

/**
 * Choose Auto to use Google Application Default Credentials (ADC), Manual to enter Google service account credentials directly, or Secret to select or create a stored secret that references Google service account credentials.
 */
export const OutputGooglePubsubGoogleAuthenticationMethod = {
  Auto: "auto",
  Manual: "manual",
  Secret: "secret",
} as const;
/**
 * Choose Auto to use Google Application Default Credentials (ADC), Manual to enter Google service account credentials directly, or Secret to select or create a stored secret that references Google service account credentials.
 */
export type OutputGooglePubsubGoogleAuthenticationMethod = ClosedEnum<
  typeof OutputGooglePubsubGoogleAuthenticationMethod
>;

export const FlushPeriodSecType = {
  Number: "number",
} as const;
export type FlushPeriodSecType = ClosedEnum<typeof FlushPeriodSecType>;

/**
 * Maximum time to wait before sending a batch (when batch size limit is not reached).
 */
export type FlushPeriodSec = {
  type?: FlushPeriodSecType | undefined;
  default?: number | undefined;
};

/**
 * How to handle events when all receivers are exerting backpressure
 */
export const OutputGooglePubsubBackpressureBehavior = {
  Block: "block",
  Drop: "drop",
  Queue: "queue",
} as const;
/**
 * How to handle events when all receivers are exerting backpressure
 */
export type OutputGooglePubsubBackpressureBehavior = ClosedEnum<
  typeof OutputGooglePubsubBackpressureBehavior
>;

/**
 * Codec to use to compress the persisted data
 */
export const OutputGooglePubsubCompression = {
  None: "none",
  Gzip: "gzip",
} as const;
/**
 * Codec to use to compress the persisted data
 */
export type OutputGooglePubsubCompression = ClosedEnum<
  typeof OutputGooglePubsubCompression
>;

/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export const OutputGooglePubsubQueueFullBehavior = {
  Block: "block",
  Drop: "drop",
} as const;
/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export type OutputGooglePubsubQueueFullBehavior = ClosedEnum<
  typeof OutputGooglePubsubQueueFullBehavior
>;

/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export const OutputGooglePubsubMode = {
  Error: "error",
  Backpressure: "backpressure",
  Always: "always",
} as const;
/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export type OutputGooglePubsubMode = ClosedEnum<typeof OutputGooglePubsubMode>;

export type OutputGooglePubsubPqControls = {};

export type OutputGooglePubsub = {
  /**
   * Unique ID for this output
   */
  id?: string | undefined;
  type: OutputGooglePubsubTypeGooglePubsub;
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
   * ID of the topic to send events to.
   */
  topicName: string;
  /**
   * If enabled, create topic if it does not exist.
   */
  createTopic?: boolean | undefined;
  /**
   * If enabled, send events in the order they were added to the queue. For this to work correctly, the process receiving events must have ordering enabled.
   */
  orderedDelivery?: boolean | undefined;
  /**
   * Region to publish messages to. Select 'default' to allow Google to auto-select the nearest region. When using ordered delivery, the selected region must be allowed by message storage policy.
   */
  region?: string | undefined;
  /**
   * Choose Auto to use Google Application Default Credentials (ADC), Manual to enter Google service account credentials directly, or Secret to select or create a stored secret that references Google service account credentials.
   */
  googleAuthMethod?: OutputGooglePubsubGoogleAuthenticationMethod | undefined;
  /**
   * Contents of service account credentials (JSON keys) file downloaded from Google Cloud. To upload a file, click the upload button at this field's upper right.
   */
  serviceAccountCredentials?: string | undefined;
  /**
   * Select or create a stored text secret
   */
  secret?: string | undefined;
  /**
   * The maximum number of items the Google API should batch before it sends them to the topic.
   */
  batchSize?: number | undefined;
  /**
   * The maximum amount of time, in milliseconds, that the Google API should wait to send a batch (if the Batch size is not reached).
   */
  batchTimeout?: number | undefined;
  /**
   * Maximum number of queued batches before blocking.
   */
  maxQueueSize?: number | undefined;
  /**
   * Maximum size (KB) of batches to send.
   */
  maxRecordSizeKB?: number | undefined;
  /**
   * Maximum time to wait before sending a batch (when batch size limit is not reached).
   */
  flushPeriodSec?: FlushPeriodSec | undefined;
  /**
   * The maximum number of in-progress API requests before backpressure is applied.
   */
  maxInProgress?: number | undefined;
  /**
   * How to handle events when all receivers are exerting backpressure
   */
  onBackpressure?: OutputGooglePubsubBackpressureBehavior | undefined;
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
  pqCompress?: OutputGooglePubsubCompression | undefined;
  /**
   * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
   */
  pqOnBackpressure?: OutputGooglePubsubQueueFullBehavior | undefined;
  /**
   * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
   */
  pqMode?: OutputGooglePubsubMode | undefined;
  pqControls?: OutputGooglePubsubPqControls | undefined;
};

/** @internal */
export const OutputGooglePubsubTypeGooglePubsub$inboundSchema: z.ZodNativeEnum<
  typeof OutputGooglePubsubTypeGooglePubsub
> = z.nativeEnum(OutputGooglePubsubTypeGooglePubsub);

/** @internal */
export const OutputGooglePubsubTypeGooglePubsub$outboundSchema: z.ZodNativeEnum<
  typeof OutputGooglePubsubTypeGooglePubsub
> = OutputGooglePubsubTypeGooglePubsub$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputGooglePubsubTypeGooglePubsub$ {
  /** @deprecated use `OutputGooglePubsubTypeGooglePubsub$inboundSchema` instead. */
  export const inboundSchema = OutputGooglePubsubTypeGooglePubsub$inboundSchema;
  /** @deprecated use `OutputGooglePubsubTypeGooglePubsub$outboundSchema` instead. */
  export const outboundSchema =
    OutputGooglePubsubTypeGooglePubsub$outboundSchema;
}

/** @internal */
export const OutputGooglePubsubGoogleAuthenticationMethod$inboundSchema:
  z.ZodNativeEnum<typeof OutputGooglePubsubGoogleAuthenticationMethod> = z
    .nativeEnum(OutputGooglePubsubGoogleAuthenticationMethod);

/** @internal */
export const OutputGooglePubsubGoogleAuthenticationMethod$outboundSchema:
  z.ZodNativeEnum<typeof OutputGooglePubsubGoogleAuthenticationMethod> =
    OutputGooglePubsubGoogleAuthenticationMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputGooglePubsubGoogleAuthenticationMethod$ {
  /** @deprecated use `OutputGooglePubsubGoogleAuthenticationMethod$inboundSchema` instead. */
  export const inboundSchema =
    OutputGooglePubsubGoogleAuthenticationMethod$inboundSchema;
  /** @deprecated use `OutputGooglePubsubGoogleAuthenticationMethod$outboundSchema` instead. */
  export const outboundSchema =
    OutputGooglePubsubGoogleAuthenticationMethod$outboundSchema;
}

/** @internal */
export const FlushPeriodSecType$inboundSchema: z.ZodNativeEnum<
  typeof FlushPeriodSecType
> = z.nativeEnum(FlushPeriodSecType);

/** @internal */
export const FlushPeriodSecType$outboundSchema: z.ZodNativeEnum<
  typeof FlushPeriodSecType
> = FlushPeriodSecType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FlushPeriodSecType$ {
  /** @deprecated use `FlushPeriodSecType$inboundSchema` instead. */
  export const inboundSchema = FlushPeriodSecType$inboundSchema;
  /** @deprecated use `FlushPeriodSecType$outboundSchema` instead. */
  export const outboundSchema = FlushPeriodSecType$outboundSchema;
}

/** @internal */
export const FlushPeriodSec$inboundSchema: z.ZodType<
  FlushPeriodSec,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: FlushPeriodSecType$inboundSchema.optional(),
  default: z.number().optional(),
});

/** @internal */
export type FlushPeriodSec$Outbound = {
  type?: string | undefined;
  default?: number | undefined;
};

/** @internal */
export const FlushPeriodSec$outboundSchema: z.ZodType<
  FlushPeriodSec$Outbound,
  z.ZodTypeDef,
  FlushPeriodSec
> = z.object({
  type: FlushPeriodSecType$outboundSchema.optional(),
  default: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FlushPeriodSec$ {
  /** @deprecated use `FlushPeriodSec$inboundSchema` instead. */
  export const inboundSchema = FlushPeriodSec$inboundSchema;
  /** @deprecated use `FlushPeriodSec$outboundSchema` instead. */
  export const outboundSchema = FlushPeriodSec$outboundSchema;
  /** @deprecated use `FlushPeriodSec$Outbound` instead. */
  export type Outbound = FlushPeriodSec$Outbound;
}

export function flushPeriodSecToJSON(flushPeriodSec: FlushPeriodSec): string {
  return JSON.stringify(FlushPeriodSec$outboundSchema.parse(flushPeriodSec));
}

export function flushPeriodSecFromJSON(
  jsonString: string,
): SafeParseResult<FlushPeriodSec, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FlushPeriodSec$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FlushPeriodSec' from JSON`,
  );
}

/** @internal */
export const OutputGooglePubsubBackpressureBehavior$inboundSchema:
  z.ZodNativeEnum<typeof OutputGooglePubsubBackpressureBehavior> = z.nativeEnum(
    OutputGooglePubsubBackpressureBehavior,
  );

/** @internal */
export const OutputGooglePubsubBackpressureBehavior$outboundSchema:
  z.ZodNativeEnum<typeof OutputGooglePubsubBackpressureBehavior> =
    OutputGooglePubsubBackpressureBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputGooglePubsubBackpressureBehavior$ {
  /** @deprecated use `OutputGooglePubsubBackpressureBehavior$inboundSchema` instead. */
  export const inboundSchema =
    OutputGooglePubsubBackpressureBehavior$inboundSchema;
  /** @deprecated use `OutputGooglePubsubBackpressureBehavior$outboundSchema` instead. */
  export const outboundSchema =
    OutputGooglePubsubBackpressureBehavior$outboundSchema;
}

/** @internal */
export const OutputGooglePubsubCompression$inboundSchema: z.ZodNativeEnum<
  typeof OutputGooglePubsubCompression
> = z.nativeEnum(OutputGooglePubsubCompression);

/** @internal */
export const OutputGooglePubsubCompression$outboundSchema: z.ZodNativeEnum<
  typeof OutputGooglePubsubCompression
> = OutputGooglePubsubCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputGooglePubsubCompression$ {
  /** @deprecated use `OutputGooglePubsubCompression$inboundSchema` instead. */
  export const inboundSchema = OutputGooglePubsubCompression$inboundSchema;
  /** @deprecated use `OutputGooglePubsubCompression$outboundSchema` instead. */
  export const outboundSchema = OutputGooglePubsubCompression$outboundSchema;
}

/** @internal */
export const OutputGooglePubsubQueueFullBehavior$inboundSchema: z.ZodNativeEnum<
  typeof OutputGooglePubsubQueueFullBehavior
> = z.nativeEnum(OutputGooglePubsubQueueFullBehavior);

/** @internal */
export const OutputGooglePubsubQueueFullBehavior$outboundSchema:
  z.ZodNativeEnum<typeof OutputGooglePubsubQueueFullBehavior> =
    OutputGooglePubsubQueueFullBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputGooglePubsubQueueFullBehavior$ {
  /** @deprecated use `OutputGooglePubsubQueueFullBehavior$inboundSchema` instead. */
  export const inboundSchema =
    OutputGooglePubsubQueueFullBehavior$inboundSchema;
  /** @deprecated use `OutputGooglePubsubQueueFullBehavior$outboundSchema` instead. */
  export const outboundSchema =
    OutputGooglePubsubQueueFullBehavior$outboundSchema;
}

/** @internal */
export const OutputGooglePubsubMode$inboundSchema: z.ZodNativeEnum<
  typeof OutputGooglePubsubMode
> = z.nativeEnum(OutputGooglePubsubMode);

/** @internal */
export const OutputGooglePubsubMode$outboundSchema: z.ZodNativeEnum<
  typeof OutputGooglePubsubMode
> = OutputGooglePubsubMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputGooglePubsubMode$ {
  /** @deprecated use `OutputGooglePubsubMode$inboundSchema` instead. */
  export const inboundSchema = OutputGooglePubsubMode$inboundSchema;
  /** @deprecated use `OutputGooglePubsubMode$outboundSchema` instead. */
  export const outboundSchema = OutputGooglePubsubMode$outboundSchema;
}

/** @internal */
export const OutputGooglePubsubPqControls$inboundSchema: z.ZodType<
  OutputGooglePubsubPqControls,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type OutputGooglePubsubPqControls$Outbound = {};

/** @internal */
export const OutputGooglePubsubPqControls$outboundSchema: z.ZodType<
  OutputGooglePubsubPqControls$Outbound,
  z.ZodTypeDef,
  OutputGooglePubsubPqControls
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputGooglePubsubPqControls$ {
  /** @deprecated use `OutputGooglePubsubPqControls$inboundSchema` instead. */
  export const inboundSchema = OutputGooglePubsubPqControls$inboundSchema;
  /** @deprecated use `OutputGooglePubsubPqControls$outboundSchema` instead. */
  export const outboundSchema = OutputGooglePubsubPqControls$outboundSchema;
  /** @deprecated use `OutputGooglePubsubPqControls$Outbound` instead. */
  export type Outbound = OutputGooglePubsubPqControls$Outbound;
}

export function outputGooglePubsubPqControlsToJSON(
  outputGooglePubsubPqControls: OutputGooglePubsubPqControls,
): string {
  return JSON.stringify(
    OutputGooglePubsubPqControls$outboundSchema.parse(
      outputGooglePubsubPqControls,
    ),
  );
}

export function outputGooglePubsubPqControlsFromJSON(
  jsonString: string,
): SafeParseResult<OutputGooglePubsubPqControls, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputGooglePubsubPqControls$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputGooglePubsubPqControls' from JSON`,
  );
}

/** @internal */
export const OutputGooglePubsub$inboundSchema: z.ZodType<
  OutputGooglePubsub,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: OutputGooglePubsubTypeGooglePubsub$inboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  topicName: z.string(),
  createTopic: z.boolean().default(false),
  orderedDelivery: z.boolean().default(false),
  region: z.string().optional(),
  googleAuthMethod: OutputGooglePubsubGoogleAuthenticationMethod$inboundSchema
    .default("manual"),
  serviceAccountCredentials: z.string().optional(),
  secret: z.string().optional(),
  batchSize: z.number().default(1000),
  batchTimeout: z.number().default(100),
  maxQueueSize: z.number().default(100),
  maxRecordSizeKB: z.number().default(256),
  flushPeriodSec: z.lazy(() => FlushPeriodSec$inboundSchema).optional(),
  maxInProgress: z.number().default(10),
  onBackpressure: OutputGooglePubsubBackpressureBehavior$inboundSchema.default(
    "block",
  ),
  description: z.string().optional(),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputGooglePubsubCompression$inboundSchema.default("none"),
  pqOnBackpressure: OutputGooglePubsubQueueFullBehavior$inboundSchema.default(
    "block",
  ),
  pqMode: OutputGooglePubsubMode$inboundSchema.default("error"),
  pqControls: z.lazy(() => OutputGooglePubsubPqControls$inboundSchema)
    .optional(),
});

/** @internal */
export type OutputGooglePubsub$Outbound = {
  id?: string | undefined;
  type: string;
  pipeline?: string | undefined;
  systemFields?: Array<string> | undefined;
  environment?: string | undefined;
  streamtags?: Array<string> | undefined;
  topicName: string;
  createTopic: boolean;
  orderedDelivery: boolean;
  region?: string | undefined;
  googleAuthMethod: string;
  serviceAccountCredentials?: string | undefined;
  secret?: string | undefined;
  batchSize: number;
  batchTimeout: number;
  maxQueueSize: number;
  maxRecordSizeKB: number;
  flushPeriodSec?: FlushPeriodSec$Outbound | undefined;
  maxInProgress: number;
  onBackpressure: string;
  description?: string | undefined;
  pqMaxFileSize: string;
  pqMaxSize: string;
  pqPath: string;
  pqCompress: string;
  pqOnBackpressure: string;
  pqMode: string;
  pqControls?: OutputGooglePubsubPqControls$Outbound | undefined;
};

/** @internal */
export const OutputGooglePubsub$outboundSchema: z.ZodType<
  OutputGooglePubsub$Outbound,
  z.ZodTypeDef,
  OutputGooglePubsub
> = z.object({
  id: z.string().optional(),
  type: OutputGooglePubsubTypeGooglePubsub$outboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  topicName: z.string(),
  createTopic: z.boolean().default(false),
  orderedDelivery: z.boolean().default(false),
  region: z.string().optional(),
  googleAuthMethod: OutputGooglePubsubGoogleAuthenticationMethod$outboundSchema
    .default("manual"),
  serviceAccountCredentials: z.string().optional(),
  secret: z.string().optional(),
  batchSize: z.number().default(1000),
  batchTimeout: z.number().default(100),
  maxQueueSize: z.number().default(100),
  maxRecordSizeKB: z.number().default(256),
  flushPeriodSec: z.lazy(() => FlushPeriodSec$outboundSchema).optional(),
  maxInProgress: z.number().default(10),
  onBackpressure: OutputGooglePubsubBackpressureBehavior$outboundSchema.default(
    "block",
  ),
  description: z.string().optional(),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputGooglePubsubCompression$outboundSchema.default("none"),
  pqOnBackpressure: OutputGooglePubsubQueueFullBehavior$outboundSchema.default(
    "block",
  ),
  pqMode: OutputGooglePubsubMode$outboundSchema.default("error"),
  pqControls: z.lazy(() => OutputGooglePubsubPqControls$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputGooglePubsub$ {
  /** @deprecated use `OutputGooglePubsub$inboundSchema` instead. */
  export const inboundSchema = OutputGooglePubsub$inboundSchema;
  /** @deprecated use `OutputGooglePubsub$outboundSchema` instead. */
  export const outboundSchema = OutputGooglePubsub$outboundSchema;
  /** @deprecated use `OutputGooglePubsub$Outbound` instead. */
  export type Outbound = OutputGooglePubsub$Outbound;
}

export function outputGooglePubsubToJSON(
  outputGooglePubsub: OutputGooglePubsub,
): string {
  return JSON.stringify(
    OutputGooglePubsub$outboundSchema.parse(outputGooglePubsub),
  );
}

export function outputGooglePubsubFromJSON(
  jsonString: string,
): SafeParseResult<OutputGooglePubsub, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputGooglePubsub$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputGooglePubsub' from JSON`,
  );
}
