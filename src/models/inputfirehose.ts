/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const InputFirehoseType = {
  Firehose: "firehose",
} as const;
export type InputFirehoseType = ClosedEnum<typeof InputFirehoseType>;

export type InputFirehoseConnection = {
  pipeline?: string | undefined;
  output: string;
};

/**
 * With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.
 */
export const InputFirehoseMode = {
  Smart: "smart",
  Always: "always",
} as const;
/**
 * With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.
 */
export type InputFirehoseMode = ClosedEnum<typeof InputFirehoseMode>;

/**
 * Codec to use to compress the persisted data
 */
export const InputFirehoseCompression = {
  None: "none",
  Gzip: "gzip",
} as const;
/**
 * Codec to use to compress the persisted data
 */
export type InputFirehoseCompression = ClosedEnum<
  typeof InputFirehoseCompression
>;

export type InputFirehosePq = {
  /**
   * With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.
   */
  mode?: InputFirehoseMode | undefined;
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
  compress?: InputFirehoseCompression | undefined;
};

export const InputFirehoseMinimumTLSVersion = {
  TLSv1: "TLSv1",
  TLSv11: "TLSv1.1",
  TLSv12: "TLSv1.2",
  TLSv13: "TLSv1.3",
} as const;
export type InputFirehoseMinimumTLSVersion = ClosedEnum<
  typeof InputFirehoseMinimumTLSVersion
>;

export const InputFirehoseMaximumTLSVersion = {
  TLSv1: "TLSv1",
  TLSv11: "TLSv1.1",
  TLSv12: "TLSv1.2",
  TLSv13: "TLSv1.3",
} as const;
export type InputFirehoseMaximumTLSVersion = ClosedEnum<
  typeof InputFirehoseMaximumTLSVersion
>;

export type InputFirehoseTLSSettingsServerSide = {
  disabled?: boolean | undefined;
  /**
   * The name of the predefined certificate
   */
  certificateName?: string | undefined;
  /**
   * Path on server containing the private key to use. PEM format. Can reference $ENV_VARS.
   */
  privKeyPath?: string | undefined;
  /**
   * Passphrase to use to decrypt private key
   */
  passphrase?: string | undefined;
  /**
   * Path on server containing certificates to use. PEM format. Can reference $ENV_VARS.
   */
  certPath?: string | undefined;
  /**
   * Path on server containing CA certificates to use. PEM format. Can reference $ENV_VARS.
   */
  caPath?: string | undefined;
  /**
   * Require clients to present their certificates. Used to perform client authentication using SSL certs.
   */
  requestCert?: boolean | undefined;
  rejectUnauthorized?: any | undefined;
  commonNameRegex?: any | undefined;
  minVersion?: InputFirehoseMinimumTLSVersion | undefined;
  maxVersion?: InputFirehoseMaximumTLSVersion | undefined;
};

export type InputFirehoseMetadatum = {
  name: string;
  /**
   * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.)
   */
  value: string;
};

export type InputFirehose = {
  /**
   * Unique ID for this input
   */
  id?: string | undefined;
  type?: InputFirehoseType | undefined;
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
  connections?: Array<InputFirehoseConnection> | undefined;
  pq?: InputFirehosePq | undefined;
  /**
   * Address to bind on. Defaults to 0.0.0.0 (all addresses).
   */
  host?: string | undefined;
  /**
   * Port to listen on
   */
  port: number;
  /**
   * Shared secrets to be provided by any client (Authorization: <token>). If empty, unauthorized access is permitted.
   */
  authTokens?: Array<string> | undefined;
  tls?: InputFirehoseTLSSettingsServerSide | undefined;
  /**
   * Maximum number of active requests allowed per Worker Process. Set to 0 for unlimited. Caution: Increasing the limit above the default value, or setting it to unlimited, may degrade performance and reduce throughput.
   */
  maxActiveReq?: number | undefined;
  /**
   * Maximum number of requests per socket before @{product} instructs the client to close the connection. Default is 0 (unlimited).
   */
  maxRequestsPerSocket?: number | undefined;
  /**
   * Extract the client IP and port from PROXY protocol v1/v2. When enabled, the X-Forwarded-For header is ignored. Disable to use the X-Forwarded-For header for client IP extraction.
   */
  enableProxyHeader?: boolean | undefined;
  /**
   * Add request headers to events, in the __headers field
   */
  captureHeaders?: boolean | undefined;
  /**
   * How often request activity is logged at the `info` level. A value of 1 would log every request, 10 every 10th request, etc.
   */
  activityLogSampleRate?: number | undefined;
  /**
   * How long to wait for an incoming request to complete before aborting it. Use 0 to disable.
   */
  requestTimeout?: number | undefined;
  /**
   * How long @{product} should wait before assuming that an inactive socket has timed out. To wait forever, set to 0.
   */
  socketTimeout?: number | undefined;
  /**
   * After the last response is sent, @{product} will wait this long for additional data before closing the socket connection. Minimum 1 second, maximum 600 seconds (10 minutes).
   */
  keepAliveTimeout?: number | undefined;
  /**
   * Expose the /cribl_health endpoint, which returns 200 OK when this Source is healthy
   */
  enableHealthCheck?: boolean | undefined;
  /**
   * Messages from matched IP addresses will be processed, unless also matched by the denylist
   */
  ipAllowlistRegex?: string | undefined;
  /**
   * Messages from matched IP addresses will be ignored. This takes precedence over the allowlist.
   */
  ipDenylistRegex?: string | undefined;
  /**
   * Fields to add to events from this input
   */
  metadata?: Array<InputFirehoseMetadatum> | undefined;
  description?: string | undefined;
};

/** @internal */
export const InputFirehoseType$inboundSchema: z.ZodNativeEnum<
  typeof InputFirehoseType
> = z.nativeEnum(InputFirehoseType);

/** @internal */
export const InputFirehoseType$outboundSchema: z.ZodNativeEnum<
  typeof InputFirehoseType
> = InputFirehoseType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputFirehoseType$ {
  /** @deprecated use `InputFirehoseType$inboundSchema` instead. */
  export const inboundSchema = InputFirehoseType$inboundSchema;
  /** @deprecated use `InputFirehoseType$outboundSchema` instead. */
  export const outboundSchema = InputFirehoseType$outboundSchema;
}

/** @internal */
export const InputFirehoseConnection$inboundSchema: z.ZodType<
  InputFirehoseConnection,
  z.ZodTypeDef,
  unknown
> = z.object({
  pipeline: z.string().optional(),
  output: z.string(),
});

/** @internal */
export type InputFirehoseConnection$Outbound = {
  pipeline?: string | undefined;
  output: string;
};

/** @internal */
export const InputFirehoseConnection$outboundSchema: z.ZodType<
  InputFirehoseConnection$Outbound,
  z.ZodTypeDef,
  InputFirehoseConnection
> = z.object({
  pipeline: z.string().optional(),
  output: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputFirehoseConnection$ {
  /** @deprecated use `InputFirehoseConnection$inboundSchema` instead. */
  export const inboundSchema = InputFirehoseConnection$inboundSchema;
  /** @deprecated use `InputFirehoseConnection$outboundSchema` instead. */
  export const outboundSchema = InputFirehoseConnection$outboundSchema;
  /** @deprecated use `InputFirehoseConnection$Outbound` instead. */
  export type Outbound = InputFirehoseConnection$Outbound;
}

export function inputFirehoseConnectionToJSON(
  inputFirehoseConnection: InputFirehoseConnection,
): string {
  return JSON.stringify(
    InputFirehoseConnection$outboundSchema.parse(inputFirehoseConnection),
  );
}

export function inputFirehoseConnectionFromJSON(
  jsonString: string,
): SafeParseResult<InputFirehoseConnection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputFirehoseConnection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputFirehoseConnection' from JSON`,
  );
}

/** @internal */
export const InputFirehoseMode$inboundSchema: z.ZodNativeEnum<
  typeof InputFirehoseMode
> = z.nativeEnum(InputFirehoseMode);

/** @internal */
export const InputFirehoseMode$outboundSchema: z.ZodNativeEnum<
  typeof InputFirehoseMode
> = InputFirehoseMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputFirehoseMode$ {
  /** @deprecated use `InputFirehoseMode$inboundSchema` instead. */
  export const inboundSchema = InputFirehoseMode$inboundSchema;
  /** @deprecated use `InputFirehoseMode$outboundSchema` instead. */
  export const outboundSchema = InputFirehoseMode$outboundSchema;
}

/** @internal */
export const InputFirehoseCompression$inboundSchema: z.ZodNativeEnum<
  typeof InputFirehoseCompression
> = z.nativeEnum(InputFirehoseCompression);

/** @internal */
export const InputFirehoseCompression$outboundSchema: z.ZodNativeEnum<
  typeof InputFirehoseCompression
> = InputFirehoseCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputFirehoseCompression$ {
  /** @deprecated use `InputFirehoseCompression$inboundSchema` instead. */
  export const inboundSchema = InputFirehoseCompression$inboundSchema;
  /** @deprecated use `InputFirehoseCompression$outboundSchema` instead. */
  export const outboundSchema = InputFirehoseCompression$outboundSchema;
}

/** @internal */
export const InputFirehosePq$inboundSchema: z.ZodType<
  InputFirehosePq,
  z.ZodTypeDef,
  unknown
> = z.object({
  mode: InputFirehoseMode$inboundSchema.default("always"),
  maxBufferSize: z.number().default(1000),
  commitFrequency: z.number().default(42),
  maxFileSize: z.string().default("1 MB"),
  maxSize: z.string().default("5GB"),
  path: z.string().default("$CRIBL_HOME/state/queues"),
  compress: InputFirehoseCompression$inboundSchema.default("none"),
});

/** @internal */
export type InputFirehosePq$Outbound = {
  mode: string;
  maxBufferSize: number;
  commitFrequency: number;
  maxFileSize: string;
  maxSize: string;
  path: string;
  compress: string;
};

/** @internal */
export const InputFirehosePq$outboundSchema: z.ZodType<
  InputFirehosePq$Outbound,
  z.ZodTypeDef,
  InputFirehosePq
> = z.object({
  mode: InputFirehoseMode$outboundSchema.default("always"),
  maxBufferSize: z.number().default(1000),
  commitFrequency: z.number().default(42),
  maxFileSize: z.string().default("1 MB"),
  maxSize: z.string().default("5GB"),
  path: z.string().default("$CRIBL_HOME/state/queues"),
  compress: InputFirehoseCompression$outboundSchema.default("none"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputFirehosePq$ {
  /** @deprecated use `InputFirehosePq$inboundSchema` instead. */
  export const inboundSchema = InputFirehosePq$inboundSchema;
  /** @deprecated use `InputFirehosePq$outboundSchema` instead. */
  export const outboundSchema = InputFirehosePq$outboundSchema;
  /** @deprecated use `InputFirehosePq$Outbound` instead. */
  export type Outbound = InputFirehosePq$Outbound;
}

export function inputFirehosePqToJSON(
  inputFirehosePq: InputFirehosePq,
): string {
  return JSON.stringify(InputFirehosePq$outboundSchema.parse(inputFirehosePq));
}

export function inputFirehosePqFromJSON(
  jsonString: string,
): SafeParseResult<InputFirehosePq, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputFirehosePq$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputFirehosePq' from JSON`,
  );
}

/** @internal */
export const InputFirehoseMinimumTLSVersion$inboundSchema: z.ZodNativeEnum<
  typeof InputFirehoseMinimumTLSVersion
> = z.nativeEnum(InputFirehoseMinimumTLSVersion);

/** @internal */
export const InputFirehoseMinimumTLSVersion$outboundSchema: z.ZodNativeEnum<
  typeof InputFirehoseMinimumTLSVersion
> = InputFirehoseMinimumTLSVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputFirehoseMinimumTLSVersion$ {
  /** @deprecated use `InputFirehoseMinimumTLSVersion$inboundSchema` instead. */
  export const inboundSchema = InputFirehoseMinimumTLSVersion$inboundSchema;
  /** @deprecated use `InputFirehoseMinimumTLSVersion$outboundSchema` instead. */
  export const outboundSchema = InputFirehoseMinimumTLSVersion$outboundSchema;
}

/** @internal */
export const InputFirehoseMaximumTLSVersion$inboundSchema: z.ZodNativeEnum<
  typeof InputFirehoseMaximumTLSVersion
> = z.nativeEnum(InputFirehoseMaximumTLSVersion);

/** @internal */
export const InputFirehoseMaximumTLSVersion$outboundSchema: z.ZodNativeEnum<
  typeof InputFirehoseMaximumTLSVersion
> = InputFirehoseMaximumTLSVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputFirehoseMaximumTLSVersion$ {
  /** @deprecated use `InputFirehoseMaximumTLSVersion$inboundSchema` instead. */
  export const inboundSchema = InputFirehoseMaximumTLSVersion$inboundSchema;
  /** @deprecated use `InputFirehoseMaximumTLSVersion$outboundSchema` instead. */
  export const outboundSchema = InputFirehoseMaximumTLSVersion$outboundSchema;
}

/** @internal */
export const InputFirehoseTLSSettingsServerSide$inboundSchema: z.ZodType<
  InputFirehoseTLSSettingsServerSide,
  z.ZodTypeDef,
  unknown
> = z.object({
  disabled: z.boolean().default(true),
  certificateName: z.string().optional(),
  privKeyPath: z.string().optional(),
  passphrase: z.string().optional(),
  certPath: z.string().optional(),
  caPath: z.string().optional(),
  requestCert: z.boolean().default(false),
  rejectUnauthorized: z.any().optional(),
  commonNameRegex: z.any().optional(),
  minVersion: InputFirehoseMinimumTLSVersion$inboundSchema.optional(),
  maxVersion: InputFirehoseMaximumTLSVersion$inboundSchema.optional(),
});

/** @internal */
export type InputFirehoseTLSSettingsServerSide$Outbound = {
  disabled: boolean;
  certificateName?: string | undefined;
  privKeyPath?: string | undefined;
  passphrase?: string | undefined;
  certPath?: string | undefined;
  caPath?: string | undefined;
  requestCert: boolean;
  rejectUnauthorized?: any | undefined;
  commonNameRegex?: any | undefined;
  minVersion?: string | undefined;
  maxVersion?: string | undefined;
};

/** @internal */
export const InputFirehoseTLSSettingsServerSide$outboundSchema: z.ZodType<
  InputFirehoseTLSSettingsServerSide$Outbound,
  z.ZodTypeDef,
  InputFirehoseTLSSettingsServerSide
> = z.object({
  disabled: z.boolean().default(true),
  certificateName: z.string().optional(),
  privKeyPath: z.string().optional(),
  passphrase: z.string().optional(),
  certPath: z.string().optional(),
  caPath: z.string().optional(),
  requestCert: z.boolean().default(false),
  rejectUnauthorized: z.any().optional(),
  commonNameRegex: z.any().optional(),
  minVersion: InputFirehoseMinimumTLSVersion$outboundSchema.optional(),
  maxVersion: InputFirehoseMaximumTLSVersion$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputFirehoseTLSSettingsServerSide$ {
  /** @deprecated use `InputFirehoseTLSSettingsServerSide$inboundSchema` instead. */
  export const inboundSchema = InputFirehoseTLSSettingsServerSide$inboundSchema;
  /** @deprecated use `InputFirehoseTLSSettingsServerSide$outboundSchema` instead. */
  export const outboundSchema =
    InputFirehoseTLSSettingsServerSide$outboundSchema;
  /** @deprecated use `InputFirehoseTLSSettingsServerSide$Outbound` instead. */
  export type Outbound = InputFirehoseTLSSettingsServerSide$Outbound;
}

export function inputFirehoseTLSSettingsServerSideToJSON(
  inputFirehoseTLSSettingsServerSide: InputFirehoseTLSSettingsServerSide,
): string {
  return JSON.stringify(
    InputFirehoseTLSSettingsServerSide$outboundSchema.parse(
      inputFirehoseTLSSettingsServerSide,
    ),
  );
}

export function inputFirehoseTLSSettingsServerSideFromJSON(
  jsonString: string,
): SafeParseResult<InputFirehoseTLSSettingsServerSide, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      InputFirehoseTLSSettingsServerSide$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputFirehoseTLSSettingsServerSide' from JSON`,
  );
}

/** @internal */
export const InputFirehoseMetadatum$inboundSchema: z.ZodType<
  InputFirehoseMetadatum,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  value: z.string(),
});

/** @internal */
export type InputFirehoseMetadatum$Outbound = {
  name: string;
  value: string;
};

/** @internal */
export const InputFirehoseMetadatum$outboundSchema: z.ZodType<
  InputFirehoseMetadatum$Outbound,
  z.ZodTypeDef,
  InputFirehoseMetadatum
> = z.object({
  name: z.string(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputFirehoseMetadatum$ {
  /** @deprecated use `InputFirehoseMetadatum$inboundSchema` instead. */
  export const inboundSchema = InputFirehoseMetadatum$inboundSchema;
  /** @deprecated use `InputFirehoseMetadatum$outboundSchema` instead. */
  export const outboundSchema = InputFirehoseMetadatum$outboundSchema;
  /** @deprecated use `InputFirehoseMetadatum$Outbound` instead. */
  export type Outbound = InputFirehoseMetadatum$Outbound;
}

export function inputFirehoseMetadatumToJSON(
  inputFirehoseMetadatum: InputFirehoseMetadatum,
): string {
  return JSON.stringify(
    InputFirehoseMetadatum$outboundSchema.parse(inputFirehoseMetadatum),
  );
}

export function inputFirehoseMetadatumFromJSON(
  jsonString: string,
): SafeParseResult<InputFirehoseMetadatum, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputFirehoseMetadatum$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputFirehoseMetadatum' from JSON`,
  );
}

/** @internal */
export const InputFirehose$inboundSchema: z.ZodType<
  InputFirehose,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: InputFirehoseType$inboundSchema.optional(),
  disabled: z.boolean().default(false),
  pipeline: z.string().optional(),
  sendToRoutes: z.boolean().default(true),
  environment: z.string().optional(),
  pqEnabled: z.boolean().default(false),
  streamtags: z.array(z.string()).optional(),
  connections: z.array(z.lazy(() => InputFirehoseConnection$inboundSchema))
    .optional(),
  pq: z.lazy(() => InputFirehosePq$inboundSchema).optional(),
  host: z.string().default("0.0.0.0"),
  port: z.number(),
  authTokens: z.array(z.string()).optional(),
  tls: z.lazy(() => InputFirehoseTLSSettingsServerSide$inboundSchema)
    .optional(),
  maxActiveReq: z.number().default(256),
  maxRequestsPerSocket: z.number().int().default(0),
  enableProxyHeader: z.boolean().default(false),
  captureHeaders: z.boolean().default(false),
  activityLogSampleRate: z.number().default(100),
  requestTimeout: z.number().default(0),
  socketTimeout: z.number().default(0),
  keepAliveTimeout: z.number().default(5),
  enableHealthCheck: z.boolean().default(false),
  ipAllowlistRegex: z.string().default("/.*/"),
  ipDenylistRegex: z.string().default("/^$/"),
  metadata: z.array(z.lazy(() => InputFirehoseMetadatum$inboundSchema))
    .optional(),
  description: z.string().optional(),
});

/** @internal */
export type InputFirehose$Outbound = {
  id?: string | undefined;
  type?: string | undefined;
  disabled: boolean;
  pipeline?: string | undefined;
  sendToRoutes: boolean;
  environment?: string | undefined;
  pqEnabled: boolean;
  streamtags?: Array<string> | undefined;
  connections?: Array<InputFirehoseConnection$Outbound> | undefined;
  pq?: InputFirehosePq$Outbound | undefined;
  host: string;
  port: number;
  authTokens?: Array<string> | undefined;
  tls?: InputFirehoseTLSSettingsServerSide$Outbound | undefined;
  maxActiveReq: number;
  maxRequestsPerSocket: number;
  enableProxyHeader: boolean;
  captureHeaders: boolean;
  activityLogSampleRate: number;
  requestTimeout: number;
  socketTimeout: number;
  keepAliveTimeout: number;
  enableHealthCheck: boolean;
  ipAllowlistRegex: string;
  ipDenylistRegex: string;
  metadata?: Array<InputFirehoseMetadatum$Outbound> | undefined;
  description?: string | undefined;
};

/** @internal */
export const InputFirehose$outboundSchema: z.ZodType<
  InputFirehose$Outbound,
  z.ZodTypeDef,
  InputFirehose
> = z.object({
  id: z.string().optional(),
  type: InputFirehoseType$outboundSchema.optional(),
  disabled: z.boolean().default(false),
  pipeline: z.string().optional(),
  sendToRoutes: z.boolean().default(true),
  environment: z.string().optional(),
  pqEnabled: z.boolean().default(false),
  streamtags: z.array(z.string()).optional(),
  connections: z.array(z.lazy(() => InputFirehoseConnection$outboundSchema))
    .optional(),
  pq: z.lazy(() => InputFirehosePq$outboundSchema).optional(),
  host: z.string().default("0.0.0.0"),
  port: z.number(),
  authTokens: z.array(z.string()).optional(),
  tls: z.lazy(() => InputFirehoseTLSSettingsServerSide$outboundSchema)
    .optional(),
  maxActiveReq: z.number().default(256),
  maxRequestsPerSocket: z.number().int().default(0),
  enableProxyHeader: z.boolean().default(false),
  captureHeaders: z.boolean().default(false),
  activityLogSampleRate: z.number().default(100),
  requestTimeout: z.number().default(0),
  socketTimeout: z.number().default(0),
  keepAliveTimeout: z.number().default(5),
  enableHealthCheck: z.boolean().default(false),
  ipAllowlistRegex: z.string().default("/.*/"),
  ipDenylistRegex: z.string().default("/^$/"),
  metadata: z.array(z.lazy(() => InputFirehoseMetadatum$outboundSchema))
    .optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputFirehose$ {
  /** @deprecated use `InputFirehose$inboundSchema` instead. */
  export const inboundSchema = InputFirehose$inboundSchema;
  /** @deprecated use `InputFirehose$outboundSchema` instead. */
  export const outboundSchema = InputFirehose$outboundSchema;
  /** @deprecated use `InputFirehose$Outbound` instead. */
  export type Outbound = InputFirehose$Outbound;
}

export function inputFirehoseToJSON(inputFirehose: InputFirehose): string {
  return JSON.stringify(InputFirehose$outboundSchema.parse(inputFirehose));
}

export function inputFirehoseFromJSON(
  jsonString: string,
): SafeParseResult<InputFirehose, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputFirehose$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputFirehose' from JSON`,
  );
}
