/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const InputKubeMetricsType = {
  KubeMetrics: "kube_metrics",
} as const;
export type InputKubeMetricsType = ClosedEnum<typeof InputKubeMetricsType>;

export type InputKubeMetricsConnection = {
  pipeline?: string | undefined;
  output: string;
};

/**
 * With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.
 */
export const InputKubeMetricsMode = {
  Smart: "smart",
  Always: "always",
} as const;
/**
 * With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.
 */
export type InputKubeMetricsMode = ClosedEnum<typeof InputKubeMetricsMode>;

/**
 * Codec to use to compress the persisted data
 */
export const InputKubeMetricsCompression = {
  None: "none",
  Gzip: "gzip",
} as const;
/**
 * Codec to use to compress the persisted data
 */
export type InputKubeMetricsCompression = ClosedEnum<
  typeof InputKubeMetricsCompression
>;

export type InputKubeMetricsPq = {
  /**
   * With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.
   */
  mode?: InputKubeMetricsMode | undefined;
  /**
   * The maximum number of events to hold in memory before writing the events to disk
   */
  maxBufferSize?: number | undefined;
  /**
   * The number of events to send downstream before committing that Stream has read them
   */
  commitFrequency?: number | undefined;
  /**
   * The maximum size to store in each queue file before closing and optionally compressing. Enter a numeral with units of KB, MB, etc.
   */
  maxFileSize?: string | undefined;
  /**
   * The maximum disk space that the queue can consume (as an average per Worker Process) before queueing stops. Enter a numeral with units of KB, MB, etc.
   */
  maxSize?: string | undefined;
  /**
   * The location for the persistent queue files. To this field's value, the system will append: /<worker-id>/inputs/<input-id>
   */
  path?: string | undefined;
  /**
   * Codec to use to compress the persisted data
   */
  compress?: InputKubeMetricsCompression | undefined;
};

export type InputKubeMetricsRule = {
  /**
   * JavaScript expression applied to Kubernetes objects. Return 'true' to include it.
   */
  filter: string;
  /**
   * Optional description of this rule's purpose
   */
  description?: string | undefined;
};

export type InputKubeMetricsMetadatum = {
  name: string;
  /**
   * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.)
   */
  value: string;
};

export const InputKubeMetricsDataCompressionFormat = {
  None: "none",
  Gzip: "gzip",
} as const;
export type InputKubeMetricsDataCompressionFormat = ClosedEnum<
  typeof InputKubeMetricsDataCompressionFormat
>;

export type InputKubeMetricsPersistence = {
  /**
   * Spool metrics on disk for Cribl Search
   */
  enable?: boolean | undefined;
  /**
   * Time span for each file bucket
   */
  timeWindow?: string | undefined;
  /**
   * Maximum disk space allowed to be consumed (examples: 420MB, 4GB). When limit is reached, older data will be deleted.
   */
  maxDataSize?: string | undefined;
  /**
   * Maximum amount of time to retain data (examples: 2h, 4d). When limit is reached, older data will be deleted.
   */
  maxDataTime?: string | undefined;
  compress?: InputKubeMetricsDataCompressionFormat | undefined;
  /**
   * Path to use to write metrics. Defaults to $CRIBL_HOME/state/<id>
   */
  destPath?: string | undefined;
};

export type InputKubeMetrics = {
  /**
   * Unique ID for this input
   */
  id: string;
  type: InputKubeMetricsType;
  disabled?: boolean | undefined;
  /**
   * Pipeline to process data from this Source before sending it through the Routes
   */
  pipeline?: string | undefined;
  /**
   * Select whether to send data to Routes, or directly to Destinations.
   */
  sendToRoutes?: boolean | undefined;
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere.
   */
  environment?: string | undefined;
  /**
   * Use a disk queue to minimize data loss when connected services block. See [Cribl Docs](https://docs.cribl.io/stream/persistent-queues) for PQ defaults (Cribl-managed Cloud Workers) and configuration options (on-prem and hybrid Workers).
   */
  pqEnabled?: boolean | undefined;
  /**
   * Tags for filtering and grouping in @{product}
   */
  streamtags?: Array<string> | undefined;
  /**
   * Direct connections to Destinations, and optionally via a Pipeline or a Pack
   */
  connections?: Array<InputKubeMetricsConnection> | undefined;
  pq?: InputKubeMetricsPq | undefined;
  /**
   * Time, in seconds, between consecutive metrics collections. Default is 15 secs.
   */
  interval?: number | undefined;
  /**
   * Add rules to decide which Kubernetes objects to generate metrics for. Events are generated if no rules are given or of all the rules' expressions evaluate to true.
   */
  rules?: Array<InputKubeMetricsRule> | undefined;
  /**
   * Fields to add to events from this input
   */
  metadata?: Array<InputKubeMetricsMetadatum> | undefined;
  persistence?: InputKubeMetricsPersistence | undefined;
  description?: string | undefined;
};

/** @internal */
export const InputKubeMetricsType$inboundSchema: z.ZodNativeEnum<
  typeof InputKubeMetricsType
> = z.nativeEnum(InputKubeMetricsType);

/** @internal */
export const InputKubeMetricsType$outboundSchema: z.ZodNativeEnum<
  typeof InputKubeMetricsType
> = InputKubeMetricsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputKubeMetricsType$ {
  /** @deprecated use `InputKubeMetricsType$inboundSchema` instead. */
  export const inboundSchema = InputKubeMetricsType$inboundSchema;
  /** @deprecated use `InputKubeMetricsType$outboundSchema` instead. */
  export const outboundSchema = InputKubeMetricsType$outboundSchema;
}

/** @internal */
export const InputKubeMetricsConnection$inboundSchema: z.ZodType<
  InputKubeMetricsConnection,
  z.ZodTypeDef,
  unknown
> = z.object({
  pipeline: z.string().optional(),
  output: z.string(),
});

/** @internal */
export type InputKubeMetricsConnection$Outbound = {
  pipeline?: string | undefined;
  output: string;
};

/** @internal */
export const InputKubeMetricsConnection$outboundSchema: z.ZodType<
  InputKubeMetricsConnection$Outbound,
  z.ZodTypeDef,
  InputKubeMetricsConnection
> = z.object({
  pipeline: z.string().optional(),
  output: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputKubeMetricsConnection$ {
  /** @deprecated use `InputKubeMetricsConnection$inboundSchema` instead. */
  export const inboundSchema = InputKubeMetricsConnection$inboundSchema;
  /** @deprecated use `InputKubeMetricsConnection$outboundSchema` instead. */
  export const outboundSchema = InputKubeMetricsConnection$outboundSchema;
  /** @deprecated use `InputKubeMetricsConnection$Outbound` instead. */
  export type Outbound = InputKubeMetricsConnection$Outbound;
}

export function inputKubeMetricsConnectionToJSON(
  inputKubeMetricsConnection: InputKubeMetricsConnection,
): string {
  return JSON.stringify(
    InputKubeMetricsConnection$outboundSchema.parse(inputKubeMetricsConnection),
  );
}

export function inputKubeMetricsConnectionFromJSON(
  jsonString: string,
): SafeParseResult<InputKubeMetricsConnection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputKubeMetricsConnection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputKubeMetricsConnection' from JSON`,
  );
}

/** @internal */
export const InputKubeMetricsMode$inboundSchema: z.ZodNativeEnum<
  typeof InputKubeMetricsMode
> = z.nativeEnum(InputKubeMetricsMode);

/** @internal */
export const InputKubeMetricsMode$outboundSchema: z.ZodNativeEnum<
  typeof InputKubeMetricsMode
> = InputKubeMetricsMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputKubeMetricsMode$ {
  /** @deprecated use `InputKubeMetricsMode$inboundSchema` instead. */
  export const inboundSchema = InputKubeMetricsMode$inboundSchema;
  /** @deprecated use `InputKubeMetricsMode$outboundSchema` instead. */
  export const outboundSchema = InputKubeMetricsMode$outboundSchema;
}

/** @internal */
export const InputKubeMetricsCompression$inboundSchema: z.ZodNativeEnum<
  typeof InputKubeMetricsCompression
> = z.nativeEnum(InputKubeMetricsCompression);

/** @internal */
export const InputKubeMetricsCompression$outboundSchema: z.ZodNativeEnum<
  typeof InputKubeMetricsCompression
> = InputKubeMetricsCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputKubeMetricsCompression$ {
  /** @deprecated use `InputKubeMetricsCompression$inboundSchema` instead. */
  export const inboundSchema = InputKubeMetricsCompression$inboundSchema;
  /** @deprecated use `InputKubeMetricsCompression$outboundSchema` instead. */
  export const outboundSchema = InputKubeMetricsCompression$outboundSchema;
}

/** @internal */
export const InputKubeMetricsPq$inboundSchema: z.ZodType<
  InputKubeMetricsPq,
  z.ZodTypeDef,
  unknown
> = z.object({
  mode: InputKubeMetricsMode$inboundSchema.default("always"),
  maxBufferSize: z.number().default(1000),
  commitFrequency: z.number().default(42),
  maxFileSize: z.string().default("1 MB"),
  maxSize: z.string().default("5GB"),
  path: z.string().default("$CRIBL_HOME/state/queues"),
  compress: InputKubeMetricsCompression$inboundSchema.default("none"),
});

/** @internal */
export type InputKubeMetricsPq$Outbound = {
  mode: string;
  maxBufferSize: number;
  commitFrequency: number;
  maxFileSize: string;
  maxSize: string;
  path: string;
  compress: string;
};

/** @internal */
export const InputKubeMetricsPq$outboundSchema: z.ZodType<
  InputKubeMetricsPq$Outbound,
  z.ZodTypeDef,
  InputKubeMetricsPq
> = z.object({
  mode: InputKubeMetricsMode$outboundSchema.default("always"),
  maxBufferSize: z.number().default(1000),
  commitFrequency: z.number().default(42),
  maxFileSize: z.string().default("1 MB"),
  maxSize: z.string().default("5GB"),
  path: z.string().default("$CRIBL_HOME/state/queues"),
  compress: InputKubeMetricsCompression$outboundSchema.default("none"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputKubeMetricsPq$ {
  /** @deprecated use `InputKubeMetricsPq$inboundSchema` instead. */
  export const inboundSchema = InputKubeMetricsPq$inboundSchema;
  /** @deprecated use `InputKubeMetricsPq$outboundSchema` instead. */
  export const outboundSchema = InputKubeMetricsPq$outboundSchema;
  /** @deprecated use `InputKubeMetricsPq$Outbound` instead. */
  export type Outbound = InputKubeMetricsPq$Outbound;
}

export function inputKubeMetricsPqToJSON(
  inputKubeMetricsPq: InputKubeMetricsPq,
): string {
  return JSON.stringify(
    InputKubeMetricsPq$outboundSchema.parse(inputKubeMetricsPq),
  );
}

export function inputKubeMetricsPqFromJSON(
  jsonString: string,
): SafeParseResult<InputKubeMetricsPq, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputKubeMetricsPq$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputKubeMetricsPq' from JSON`,
  );
}

/** @internal */
export const InputKubeMetricsRule$inboundSchema: z.ZodType<
  InputKubeMetricsRule,
  z.ZodTypeDef,
  unknown
> = z.object({
  filter: z.string(),
  description: z.string().optional(),
});

/** @internal */
export type InputKubeMetricsRule$Outbound = {
  filter: string;
  description?: string | undefined;
};

/** @internal */
export const InputKubeMetricsRule$outboundSchema: z.ZodType<
  InputKubeMetricsRule$Outbound,
  z.ZodTypeDef,
  InputKubeMetricsRule
> = z.object({
  filter: z.string(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputKubeMetricsRule$ {
  /** @deprecated use `InputKubeMetricsRule$inboundSchema` instead. */
  export const inboundSchema = InputKubeMetricsRule$inboundSchema;
  /** @deprecated use `InputKubeMetricsRule$outboundSchema` instead. */
  export const outboundSchema = InputKubeMetricsRule$outboundSchema;
  /** @deprecated use `InputKubeMetricsRule$Outbound` instead. */
  export type Outbound = InputKubeMetricsRule$Outbound;
}

export function inputKubeMetricsRuleToJSON(
  inputKubeMetricsRule: InputKubeMetricsRule,
): string {
  return JSON.stringify(
    InputKubeMetricsRule$outboundSchema.parse(inputKubeMetricsRule),
  );
}

export function inputKubeMetricsRuleFromJSON(
  jsonString: string,
): SafeParseResult<InputKubeMetricsRule, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputKubeMetricsRule$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputKubeMetricsRule' from JSON`,
  );
}

/** @internal */
export const InputKubeMetricsMetadatum$inboundSchema: z.ZodType<
  InputKubeMetricsMetadatum,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  value: z.string(),
});

/** @internal */
export type InputKubeMetricsMetadatum$Outbound = {
  name: string;
  value: string;
};

/** @internal */
export const InputKubeMetricsMetadatum$outboundSchema: z.ZodType<
  InputKubeMetricsMetadatum$Outbound,
  z.ZodTypeDef,
  InputKubeMetricsMetadatum
> = z.object({
  name: z.string(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputKubeMetricsMetadatum$ {
  /** @deprecated use `InputKubeMetricsMetadatum$inboundSchema` instead. */
  export const inboundSchema = InputKubeMetricsMetadatum$inboundSchema;
  /** @deprecated use `InputKubeMetricsMetadatum$outboundSchema` instead. */
  export const outboundSchema = InputKubeMetricsMetadatum$outboundSchema;
  /** @deprecated use `InputKubeMetricsMetadatum$Outbound` instead. */
  export type Outbound = InputKubeMetricsMetadatum$Outbound;
}

export function inputKubeMetricsMetadatumToJSON(
  inputKubeMetricsMetadatum: InputKubeMetricsMetadatum,
): string {
  return JSON.stringify(
    InputKubeMetricsMetadatum$outboundSchema.parse(inputKubeMetricsMetadatum),
  );
}

export function inputKubeMetricsMetadatumFromJSON(
  jsonString: string,
): SafeParseResult<InputKubeMetricsMetadatum, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputKubeMetricsMetadatum$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputKubeMetricsMetadatum' from JSON`,
  );
}

/** @internal */
export const InputKubeMetricsDataCompressionFormat$inboundSchema:
  z.ZodNativeEnum<typeof InputKubeMetricsDataCompressionFormat> = z.nativeEnum(
    InputKubeMetricsDataCompressionFormat,
  );

/** @internal */
export const InputKubeMetricsDataCompressionFormat$outboundSchema:
  z.ZodNativeEnum<typeof InputKubeMetricsDataCompressionFormat> =
    InputKubeMetricsDataCompressionFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputKubeMetricsDataCompressionFormat$ {
  /** @deprecated use `InputKubeMetricsDataCompressionFormat$inboundSchema` instead. */
  export const inboundSchema =
    InputKubeMetricsDataCompressionFormat$inboundSchema;
  /** @deprecated use `InputKubeMetricsDataCompressionFormat$outboundSchema` instead. */
  export const outboundSchema =
    InputKubeMetricsDataCompressionFormat$outboundSchema;
}

/** @internal */
export const InputKubeMetricsPersistence$inboundSchema: z.ZodType<
  InputKubeMetricsPersistence,
  z.ZodTypeDef,
  unknown
> = z.object({
  enable: z.boolean().default(false),
  timeWindow: z.string().default("10m"),
  maxDataSize: z.string().default("1GB"),
  maxDataTime: z.string().default("24h"),
  compress: InputKubeMetricsDataCompressionFormat$inboundSchema.default("gzip"),
  destPath: z.string().default("$CRIBL_HOME/state/kube_metrics"),
});

/** @internal */
export type InputKubeMetricsPersistence$Outbound = {
  enable: boolean;
  timeWindow: string;
  maxDataSize: string;
  maxDataTime: string;
  compress: string;
  destPath: string;
};

/** @internal */
export const InputKubeMetricsPersistence$outboundSchema: z.ZodType<
  InputKubeMetricsPersistence$Outbound,
  z.ZodTypeDef,
  InputKubeMetricsPersistence
> = z.object({
  enable: z.boolean().default(false),
  timeWindow: z.string().default("10m"),
  maxDataSize: z.string().default("1GB"),
  maxDataTime: z.string().default("24h"),
  compress: InputKubeMetricsDataCompressionFormat$outboundSchema.default(
    "gzip",
  ),
  destPath: z.string().default("$CRIBL_HOME/state/kube_metrics"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputKubeMetricsPersistence$ {
  /** @deprecated use `InputKubeMetricsPersistence$inboundSchema` instead. */
  export const inboundSchema = InputKubeMetricsPersistence$inboundSchema;
  /** @deprecated use `InputKubeMetricsPersistence$outboundSchema` instead. */
  export const outboundSchema = InputKubeMetricsPersistence$outboundSchema;
  /** @deprecated use `InputKubeMetricsPersistence$Outbound` instead. */
  export type Outbound = InputKubeMetricsPersistence$Outbound;
}

export function inputKubeMetricsPersistenceToJSON(
  inputKubeMetricsPersistence: InputKubeMetricsPersistence,
): string {
  return JSON.stringify(
    InputKubeMetricsPersistence$outboundSchema.parse(
      inputKubeMetricsPersistence,
    ),
  );
}

export function inputKubeMetricsPersistenceFromJSON(
  jsonString: string,
): SafeParseResult<InputKubeMetricsPersistence, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputKubeMetricsPersistence$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputKubeMetricsPersistence' from JSON`,
  );
}

/** @internal */
export const InputKubeMetrics$inboundSchema: z.ZodType<
  InputKubeMetrics,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: InputKubeMetricsType$inboundSchema,
  disabled: z.boolean().default(false),
  pipeline: z.string().optional(),
  sendToRoutes: z.boolean().default(true),
  environment: z.string().optional(),
  pqEnabled: z.boolean().default(false),
  streamtags: z.array(z.string()).optional(),
  connections: z.array(z.lazy(() => InputKubeMetricsConnection$inboundSchema))
    .optional(),
  pq: z.lazy(() => InputKubeMetricsPq$inboundSchema).optional(),
  interval: z.number().default(15),
  rules: z.array(z.lazy(() => InputKubeMetricsRule$inboundSchema)).optional(),
  metadata: z.array(z.lazy(() => InputKubeMetricsMetadatum$inboundSchema))
    .optional(),
  persistence: z.lazy(() => InputKubeMetricsPersistence$inboundSchema)
    .optional(),
  description: z.string().optional(),
});

/** @internal */
export type InputKubeMetrics$Outbound = {
  id: string;
  type: string;
  disabled: boolean;
  pipeline?: string | undefined;
  sendToRoutes: boolean;
  environment?: string | undefined;
  pqEnabled: boolean;
  streamtags?: Array<string> | undefined;
  connections?: Array<InputKubeMetricsConnection$Outbound> | undefined;
  pq?: InputKubeMetricsPq$Outbound | undefined;
  interval: number;
  rules?: Array<InputKubeMetricsRule$Outbound> | undefined;
  metadata?: Array<InputKubeMetricsMetadatum$Outbound> | undefined;
  persistence?: InputKubeMetricsPersistence$Outbound | undefined;
  description?: string | undefined;
};

/** @internal */
export const InputKubeMetrics$outboundSchema: z.ZodType<
  InputKubeMetrics$Outbound,
  z.ZodTypeDef,
  InputKubeMetrics
> = z.object({
  id: z.string(),
  type: InputKubeMetricsType$outboundSchema,
  disabled: z.boolean().default(false),
  pipeline: z.string().optional(),
  sendToRoutes: z.boolean().default(true),
  environment: z.string().optional(),
  pqEnabled: z.boolean().default(false),
  streamtags: z.array(z.string()).optional(),
  connections: z.array(z.lazy(() => InputKubeMetricsConnection$outboundSchema))
    .optional(),
  pq: z.lazy(() => InputKubeMetricsPq$outboundSchema).optional(),
  interval: z.number().default(15),
  rules: z.array(z.lazy(() => InputKubeMetricsRule$outboundSchema)).optional(),
  metadata: z.array(z.lazy(() => InputKubeMetricsMetadatum$outboundSchema))
    .optional(),
  persistence: z.lazy(() => InputKubeMetricsPersistence$outboundSchema)
    .optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputKubeMetrics$ {
  /** @deprecated use `InputKubeMetrics$inboundSchema` instead. */
  export const inboundSchema = InputKubeMetrics$inboundSchema;
  /** @deprecated use `InputKubeMetrics$outboundSchema` instead. */
  export const outboundSchema = InputKubeMetrics$outboundSchema;
  /** @deprecated use `InputKubeMetrics$Outbound` instead. */
  export type Outbound = InputKubeMetrics$Outbound;
}

export function inputKubeMetricsToJSON(
  inputKubeMetrics: InputKubeMetrics,
): string {
  return JSON.stringify(
    InputKubeMetrics$outboundSchema.parse(inputKubeMetrics),
  );
}

export function inputKubeMetricsFromJSON(
  jsonString: string,
): SafeParseResult<InputKubeMetrics, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputKubeMetrics$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputKubeMetrics' from JSON`,
  );
}
