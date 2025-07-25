/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const OutputTcpjsonType = {
  Tcpjson: "tcpjson",
} as const;
export type OutputTcpjsonType = ClosedEnum<typeof OutputTcpjsonType>;

/**
 * Codec to use to compress the data before sending
 */
export const OutputTcpjsonCompression = {
  None: "none",
  Gzip: "gzip",
} as const;
/**
 * Codec to use to compress the data before sending
 */
export type OutputTcpjsonCompression = ClosedEnum<
  typeof OutputTcpjsonCompression
>;

export const OutputTcpjsonMinimumTLSVersion = {
  TLSv1: "TLSv1",
  TLSv11: "TLSv1.1",
  TLSv12: "TLSv1.2",
  TLSv13: "TLSv1.3",
} as const;
export type OutputTcpjsonMinimumTLSVersion = ClosedEnum<
  typeof OutputTcpjsonMinimumTLSVersion
>;

export const OutputTcpjsonMaximumTLSVersion = {
  TLSv1: "TLSv1",
  TLSv11: "TLSv1.1",
  TLSv12: "TLSv1.2",
  TLSv13: "TLSv1.3",
} as const;
export type OutputTcpjsonMaximumTLSVersion = ClosedEnum<
  typeof OutputTcpjsonMaximumTLSVersion
>;

export type OutputTcpjsonTLSSettingsClientSide = {
  disabled?: boolean | undefined;
  /**
   * Reject certificates that are not authorized by a CA in the CA certificate path, or by another
   *
   * @remarks
   *                     trusted CA (such as the system's). Defaults to Enabled. Overrides the toggle from Advanced Settings, when also present.
   */
  rejectUnauthorized?: boolean | undefined;
  /**
   * Server name for the SNI (Server Name Indication) TLS extension. It must be a host name, and not an IP address.
   */
  servername?: string | undefined;
  /**
   * The name of the predefined certificate
   */
  certificateName?: string | undefined;
  /**
   * Path on client in which to find CA certificates to verify the server's cert. PEM format. Can reference $ENV_VARS.
   */
  caPath?: string | undefined;
  /**
   * Path on client in which to find the private key to use. PEM format. Can reference $ENV_VARS.
   */
  privKeyPath?: string | undefined;
  /**
   * Path on client in which to find certificates to use. PEM format. Can reference $ENV_VARS.
   */
  certPath?: string | undefined;
  /**
   * Passphrase to use to decrypt private key
   */
  passphrase?: string | undefined;
  minVersion?: OutputTcpjsonMinimumTLSVersion | undefined;
  maxVersion?: OutputTcpjsonMaximumTLSVersion | undefined;
};

/**
 * How to handle events when all receivers are exerting backpressure
 */
export const OutputTcpjsonBackpressureBehavior = {
  Block: "block",
  Drop: "drop",
  Queue: "queue",
} as const;
/**
 * How to handle events when all receivers are exerting backpressure
 */
export type OutputTcpjsonBackpressureBehavior = ClosedEnum<
  typeof OutputTcpjsonBackpressureBehavior
>;

/**
 * Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate
 */
export const OutputTcpjsonAuthenticationMethod = {
  Manual: "manual",
  Secret: "secret",
} as const;
/**
 * Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate
 */
export type OutputTcpjsonAuthenticationMethod = ClosedEnum<
  typeof OutputTcpjsonAuthenticationMethod
>;

/**
 * Whether to inherit TLS configs from group setting or disable TLS
 */
export const OutputTcpjsonTLS = {
  Inherit: "inherit",
  Off: "off",
} as const;
/**
 * Whether to inherit TLS configs from group setting or disable TLS
 */
export type OutputTcpjsonTLS = ClosedEnum<typeof OutputTcpjsonTLS>;

export type OutputTcpjsonHost = {
  /**
   * The hostname of the receiver
   */
  host: string;
  /**
   * The port to connect to on the provided host
   */
  port: number;
  /**
   * Whether to inherit TLS configs from group setting or disable TLS
   */
  tls?: OutputTcpjsonTLS | undefined;
  /**
   * Servername to use if establishing a TLS connection. If not specified, defaults to connection host (if not an IP); otherwise, uses the global TLS settings.
   */
  servername?: string | undefined;
  /**
   * Assign a weight (>0) to each endpoint to indicate its traffic-handling capability
   */
  weight?: number | undefined;
};

/**
 * Codec to use to compress the persisted data
 */
export const OutputTcpjsonPqCompressCompression = {
  None: "none",
  Gzip: "gzip",
} as const;
/**
 * Codec to use to compress the persisted data
 */
export type OutputTcpjsonPqCompressCompression = ClosedEnum<
  typeof OutputTcpjsonPqCompressCompression
>;

/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export const OutputTcpjsonQueueFullBehavior = {
  Block: "block",
  Drop: "drop",
} as const;
/**
 * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
 */
export type OutputTcpjsonQueueFullBehavior = ClosedEnum<
  typeof OutputTcpjsonQueueFullBehavior
>;

/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export const OutputTcpjsonMode = {
  Error: "error",
  Backpressure: "backpressure",
  Always: "always",
} as const;
/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export type OutputTcpjsonMode = ClosedEnum<typeof OutputTcpjsonMode>;

export type OutputTcpjsonPqControls = {};

export type OutputTcpjson = {
  /**
   * Unique ID for this output
   */
  id: string;
  type: OutputTcpjsonType;
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
   * Use load-balanced destinations
   */
  loadBalanced?: boolean | undefined;
  /**
   * Codec to use to compress the data before sending
   */
  compression?: OutputTcpjsonCompression | undefined;
  /**
   * Use to troubleshoot issues with sending data
   */
  logFailedRequests?: boolean | undefined;
  /**
   * Rate (in bytes per second) to throttle while writing to an output. Accepts values with multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no throttling.
   */
  throttleRatePerSec?: string | undefined;
  tls?: OutputTcpjsonTLSSettingsClientSide | undefined;
  /**
   * Amount of time (milliseconds) to wait for the connection to establish before retrying
   */
  connectionTimeout?: number | undefined;
  /**
   * Amount of time (milliseconds) to wait for a write to complete before assuming connection is dead
   */
  writeTimeout?: number | undefined;
  /**
   * The number of minutes before the internally generated authentication token expires, valid values between 1 and 60
   */
  tokenTTLMinutes?: number | undefined;
  /**
   * Upon connection, send a header-like record containing the auth token and other metadata.This record will not contain an actual event – only subsequent records will.
   */
  sendHeader?: boolean | undefined;
  /**
   * How to handle events when all receivers are exerting backpressure
   */
  onBackpressure?: OutputTcpjsonBackpressureBehavior | undefined;
  /**
   * Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate
   */
  authType?: OutputTcpjsonAuthenticationMethod | undefined;
  description?: string | undefined;
  /**
   * The hostname of the receiver
   */
  host?: string | undefined;
  /**
   * The port to connect to on the provided host
   */
  port?: number | undefined;
  /**
   * Exclude all IPs of the current host from the list of any resolved hostnames
   */
  excludeSelf?: boolean | undefined;
  /**
   * Set of hosts to load-balance data to
   */
  hosts?: Array<OutputTcpjsonHost> | undefined;
  /**
   * The interval in which to re-resolve any hostnames and pick up destinations from A records
   */
  dnsResolvePeriodSec?: number | undefined;
  /**
   * How far back in time to keep traffic stats for load balancing purposes
   */
  loadBalanceStatsPeriodSec?: number | undefined;
  /**
   * Maximum number of concurrent connections (per Worker Process). A random set of IPs will be picked on every DNS resolution period. Use 0 for unlimited.
   */
  maxConcurrentSenders?: number | undefined;
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
  pqCompress?: OutputTcpjsonPqCompressCompression | undefined;
  /**
   * How to handle events when the queue is exerting backpressure (full capacity or low disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data, while leaving the contents of the PQ unchanged.
   */
  pqOnBackpressure?: OutputTcpjsonQueueFullBehavior | undefined;
  /**
   * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the Destination. In Always On mode, PQ always writes events to the filesystem.
   */
  pqMode?: OutputTcpjsonMode | undefined;
  pqControls?: OutputTcpjsonPqControls | undefined;
  /**
   * Optional authentication token to include as part of the connection header
   */
  authToken?: string | undefined;
  /**
   * Select or create a stored text secret
   */
  textSecret?: string | undefined;
};

/** @internal */
export const OutputTcpjsonType$inboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonType
> = z.nativeEnum(OutputTcpjsonType);

/** @internal */
export const OutputTcpjsonType$outboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonType
> = OutputTcpjsonType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonType$ {
  /** @deprecated use `OutputTcpjsonType$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonType$inboundSchema;
  /** @deprecated use `OutputTcpjsonType$outboundSchema` instead. */
  export const outboundSchema = OutputTcpjsonType$outboundSchema;
}

/** @internal */
export const OutputTcpjsonCompression$inboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonCompression
> = z.nativeEnum(OutputTcpjsonCompression);

/** @internal */
export const OutputTcpjsonCompression$outboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonCompression
> = OutputTcpjsonCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonCompression$ {
  /** @deprecated use `OutputTcpjsonCompression$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonCompression$inboundSchema;
  /** @deprecated use `OutputTcpjsonCompression$outboundSchema` instead. */
  export const outboundSchema = OutputTcpjsonCompression$outboundSchema;
}

/** @internal */
export const OutputTcpjsonMinimumTLSVersion$inboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonMinimumTLSVersion
> = z.nativeEnum(OutputTcpjsonMinimumTLSVersion);

/** @internal */
export const OutputTcpjsonMinimumTLSVersion$outboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonMinimumTLSVersion
> = OutputTcpjsonMinimumTLSVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonMinimumTLSVersion$ {
  /** @deprecated use `OutputTcpjsonMinimumTLSVersion$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonMinimumTLSVersion$inboundSchema;
  /** @deprecated use `OutputTcpjsonMinimumTLSVersion$outboundSchema` instead. */
  export const outboundSchema = OutputTcpjsonMinimumTLSVersion$outboundSchema;
}

/** @internal */
export const OutputTcpjsonMaximumTLSVersion$inboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonMaximumTLSVersion
> = z.nativeEnum(OutputTcpjsonMaximumTLSVersion);

/** @internal */
export const OutputTcpjsonMaximumTLSVersion$outboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonMaximumTLSVersion
> = OutputTcpjsonMaximumTLSVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonMaximumTLSVersion$ {
  /** @deprecated use `OutputTcpjsonMaximumTLSVersion$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonMaximumTLSVersion$inboundSchema;
  /** @deprecated use `OutputTcpjsonMaximumTLSVersion$outboundSchema` instead. */
  export const outboundSchema = OutputTcpjsonMaximumTLSVersion$outboundSchema;
}

/** @internal */
export const OutputTcpjsonTLSSettingsClientSide$inboundSchema: z.ZodType<
  OutputTcpjsonTLSSettingsClientSide,
  z.ZodTypeDef,
  unknown
> = z.object({
  disabled: z.boolean().default(true),
  rejectUnauthorized: z.boolean().default(true),
  servername: z.string().optional(),
  certificateName: z.string().optional(),
  caPath: z.string().optional(),
  privKeyPath: z.string().optional(),
  certPath: z.string().optional(),
  passphrase: z.string().optional(),
  minVersion: OutputTcpjsonMinimumTLSVersion$inboundSchema.optional(),
  maxVersion: OutputTcpjsonMaximumTLSVersion$inboundSchema.optional(),
});

/** @internal */
export type OutputTcpjsonTLSSettingsClientSide$Outbound = {
  disabled: boolean;
  rejectUnauthorized: boolean;
  servername?: string | undefined;
  certificateName?: string | undefined;
  caPath?: string | undefined;
  privKeyPath?: string | undefined;
  certPath?: string | undefined;
  passphrase?: string | undefined;
  minVersion?: string | undefined;
  maxVersion?: string | undefined;
};

/** @internal */
export const OutputTcpjsonTLSSettingsClientSide$outboundSchema: z.ZodType<
  OutputTcpjsonTLSSettingsClientSide$Outbound,
  z.ZodTypeDef,
  OutputTcpjsonTLSSettingsClientSide
> = z.object({
  disabled: z.boolean().default(true),
  rejectUnauthorized: z.boolean().default(true),
  servername: z.string().optional(),
  certificateName: z.string().optional(),
  caPath: z.string().optional(),
  privKeyPath: z.string().optional(),
  certPath: z.string().optional(),
  passphrase: z.string().optional(),
  minVersion: OutputTcpjsonMinimumTLSVersion$outboundSchema.optional(),
  maxVersion: OutputTcpjsonMaximumTLSVersion$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonTLSSettingsClientSide$ {
  /** @deprecated use `OutputTcpjsonTLSSettingsClientSide$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonTLSSettingsClientSide$inboundSchema;
  /** @deprecated use `OutputTcpjsonTLSSettingsClientSide$outboundSchema` instead. */
  export const outboundSchema =
    OutputTcpjsonTLSSettingsClientSide$outboundSchema;
  /** @deprecated use `OutputTcpjsonTLSSettingsClientSide$Outbound` instead. */
  export type Outbound = OutputTcpjsonTLSSettingsClientSide$Outbound;
}

export function outputTcpjsonTLSSettingsClientSideToJSON(
  outputTcpjsonTLSSettingsClientSide: OutputTcpjsonTLSSettingsClientSide,
): string {
  return JSON.stringify(
    OutputTcpjsonTLSSettingsClientSide$outboundSchema.parse(
      outputTcpjsonTLSSettingsClientSide,
    ),
  );
}

export function outputTcpjsonTLSSettingsClientSideFromJSON(
  jsonString: string,
): SafeParseResult<OutputTcpjsonTLSSettingsClientSide, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      OutputTcpjsonTLSSettingsClientSide$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputTcpjsonTLSSettingsClientSide' from JSON`,
  );
}

/** @internal */
export const OutputTcpjsonBackpressureBehavior$inboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonBackpressureBehavior
> = z.nativeEnum(OutputTcpjsonBackpressureBehavior);

/** @internal */
export const OutputTcpjsonBackpressureBehavior$outboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonBackpressureBehavior
> = OutputTcpjsonBackpressureBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonBackpressureBehavior$ {
  /** @deprecated use `OutputTcpjsonBackpressureBehavior$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonBackpressureBehavior$inboundSchema;
  /** @deprecated use `OutputTcpjsonBackpressureBehavior$outboundSchema` instead. */
  export const outboundSchema =
    OutputTcpjsonBackpressureBehavior$outboundSchema;
}

/** @internal */
export const OutputTcpjsonAuthenticationMethod$inboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonAuthenticationMethod
> = z.nativeEnum(OutputTcpjsonAuthenticationMethod);

/** @internal */
export const OutputTcpjsonAuthenticationMethod$outboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonAuthenticationMethod
> = OutputTcpjsonAuthenticationMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonAuthenticationMethod$ {
  /** @deprecated use `OutputTcpjsonAuthenticationMethod$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonAuthenticationMethod$inboundSchema;
  /** @deprecated use `OutputTcpjsonAuthenticationMethod$outboundSchema` instead. */
  export const outboundSchema =
    OutputTcpjsonAuthenticationMethod$outboundSchema;
}

/** @internal */
export const OutputTcpjsonTLS$inboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonTLS
> = z.nativeEnum(OutputTcpjsonTLS);

/** @internal */
export const OutputTcpjsonTLS$outboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonTLS
> = OutputTcpjsonTLS$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonTLS$ {
  /** @deprecated use `OutputTcpjsonTLS$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonTLS$inboundSchema;
  /** @deprecated use `OutputTcpjsonTLS$outboundSchema` instead. */
  export const outboundSchema = OutputTcpjsonTLS$outboundSchema;
}

/** @internal */
export const OutputTcpjsonHost$inboundSchema: z.ZodType<
  OutputTcpjsonHost,
  z.ZodTypeDef,
  unknown
> = z.object({
  host: z.string(),
  port: z.number(),
  tls: OutputTcpjsonTLS$inboundSchema.default("inherit"),
  servername: z.string().optional(),
  weight: z.number().default(1),
});

/** @internal */
export type OutputTcpjsonHost$Outbound = {
  host: string;
  port: number;
  tls: string;
  servername?: string | undefined;
  weight: number;
};

/** @internal */
export const OutputTcpjsonHost$outboundSchema: z.ZodType<
  OutputTcpjsonHost$Outbound,
  z.ZodTypeDef,
  OutputTcpjsonHost
> = z.object({
  host: z.string(),
  port: z.number(),
  tls: OutputTcpjsonTLS$outboundSchema.default("inherit"),
  servername: z.string().optional(),
  weight: z.number().default(1),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonHost$ {
  /** @deprecated use `OutputTcpjsonHost$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonHost$inboundSchema;
  /** @deprecated use `OutputTcpjsonHost$outboundSchema` instead. */
  export const outboundSchema = OutputTcpjsonHost$outboundSchema;
  /** @deprecated use `OutputTcpjsonHost$Outbound` instead. */
  export type Outbound = OutputTcpjsonHost$Outbound;
}

export function outputTcpjsonHostToJSON(
  outputTcpjsonHost: OutputTcpjsonHost,
): string {
  return JSON.stringify(
    OutputTcpjsonHost$outboundSchema.parse(outputTcpjsonHost),
  );
}

export function outputTcpjsonHostFromJSON(
  jsonString: string,
): SafeParseResult<OutputTcpjsonHost, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputTcpjsonHost$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputTcpjsonHost' from JSON`,
  );
}

/** @internal */
export const OutputTcpjsonPqCompressCompression$inboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonPqCompressCompression
> = z.nativeEnum(OutputTcpjsonPqCompressCompression);

/** @internal */
export const OutputTcpjsonPqCompressCompression$outboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonPqCompressCompression
> = OutputTcpjsonPqCompressCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonPqCompressCompression$ {
  /** @deprecated use `OutputTcpjsonPqCompressCompression$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonPqCompressCompression$inboundSchema;
  /** @deprecated use `OutputTcpjsonPqCompressCompression$outboundSchema` instead. */
  export const outboundSchema =
    OutputTcpjsonPqCompressCompression$outboundSchema;
}

/** @internal */
export const OutputTcpjsonQueueFullBehavior$inboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonQueueFullBehavior
> = z.nativeEnum(OutputTcpjsonQueueFullBehavior);

/** @internal */
export const OutputTcpjsonQueueFullBehavior$outboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonQueueFullBehavior
> = OutputTcpjsonQueueFullBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonQueueFullBehavior$ {
  /** @deprecated use `OutputTcpjsonQueueFullBehavior$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonQueueFullBehavior$inboundSchema;
  /** @deprecated use `OutputTcpjsonQueueFullBehavior$outboundSchema` instead. */
  export const outboundSchema = OutputTcpjsonQueueFullBehavior$outboundSchema;
}

/** @internal */
export const OutputTcpjsonMode$inboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonMode
> = z.nativeEnum(OutputTcpjsonMode);

/** @internal */
export const OutputTcpjsonMode$outboundSchema: z.ZodNativeEnum<
  typeof OutputTcpjsonMode
> = OutputTcpjsonMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonMode$ {
  /** @deprecated use `OutputTcpjsonMode$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonMode$inboundSchema;
  /** @deprecated use `OutputTcpjsonMode$outboundSchema` instead. */
  export const outboundSchema = OutputTcpjsonMode$outboundSchema;
}

/** @internal */
export const OutputTcpjsonPqControls$inboundSchema: z.ZodType<
  OutputTcpjsonPqControls,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type OutputTcpjsonPqControls$Outbound = {};

/** @internal */
export const OutputTcpjsonPqControls$outboundSchema: z.ZodType<
  OutputTcpjsonPqControls$Outbound,
  z.ZodTypeDef,
  OutputTcpjsonPqControls
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjsonPqControls$ {
  /** @deprecated use `OutputTcpjsonPqControls$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjsonPqControls$inboundSchema;
  /** @deprecated use `OutputTcpjsonPqControls$outboundSchema` instead. */
  export const outboundSchema = OutputTcpjsonPqControls$outboundSchema;
  /** @deprecated use `OutputTcpjsonPqControls$Outbound` instead. */
  export type Outbound = OutputTcpjsonPqControls$Outbound;
}

export function outputTcpjsonPqControlsToJSON(
  outputTcpjsonPqControls: OutputTcpjsonPqControls,
): string {
  return JSON.stringify(
    OutputTcpjsonPqControls$outboundSchema.parse(outputTcpjsonPqControls),
  );
}

export function outputTcpjsonPqControlsFromJSON(
  jsonString: string,
): SafeParseResult<OutputTcpjsonPqControls, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputTcpjsonPqControls$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputTcpjsonPqControls' from JSON`,
  );
}

/** @internal */
export const OutputTcpjson$inboundSchema: z.ZodType<
  OutputTcpjson,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: OutputTcpjsonType$inboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  loadBalanced: z.boolean().default(true),
  compression: OutputTcpjsonCompression$inboundSchema.default("gzip"),
  logFailedRequests: z.boolean().default(false),
  throttleRatePerSec: z.string().default("0"),
  tls: z.lazy(() => OutputTcpjsonTLSSettingsClientSide$inboundSchema)
    .optional(),
  connectionTimeout: z.number().default(10000),
  writeTimeout: z.number().default(60000),
  tokenTTLMinutes: z.number().default(60),
  sendHeader: z.boolean().default(true),
  onBackpressure: OutputTcpjsonBackpressureBehavior$inboundSchema.default(
    "block",
  ),
  authType: OutputTcpjsonAuthenticationMethod$inboundSchema.default("manual"),
  description: z.string().optional(),
  host: z.string().optional(),
  port: z.number().optional(),
  excludeSelf: z.boolean().default(false),
  hosts: z.array(z.lazy(() => OutputTcpjsonHost$inboundSchema)).optional(),
  dnsResolvePeriodSec: z.number().default(600),
  loadBalanceStatsPeriodSec: z.number().default(300),
  maxConcurrentSenders: z.number().default(0),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputTcpjsonPqCompressCompression$inboundSchema.default("none"),
  pqOnBackpressure: OutputTcpjsonQueueFullBehavior$inboundSchema.default(
    "block",
  ),
  pqMode: OutputTcpjsonMode$inboundSchema.default("error"),
  pqControls: z.lazy(() => OutputTcpjsonPqControls$inboundSchema).optional(),
  authToken: z.string().default(""),
  textSecret: z.string().optional(),
});

/** @internal */
export type OutputTcpjson$Outbound = {
  id: string;
  type: string;
  pipeline?: string | undefined;
  systemFields?: Array<string> | undefined;
  environment?: string | undefined;
  streamtags?: Array<string> | undefined;
  loadBalanced: boolean;
  compression: string;
  logFailedRequests: boolean;
  throttleRatePerSec: string;
  tls?: OutputTcpjsonTLSSettingsClientSide$Outbound | undefined;
  connectionTimeout: number;
  writeTimeout: number;
  tokenTTLMinutes: number;
  sendHeader: boolean;
  onBackpressure: string;
  authType: string;
  description?: string | undefined;
  host?: string | undefined;
  port?: number | undefined;
  excludeSelf: boolean;
  hosts?: Array<OutputTcpjsonHost$Outbound> | undefined;
  dnsResolvePeriodSec: number;
  loadBalanceStatsPeriodSec: number;
  maxConcurrentSenders: number;
  pqMaxFileSize: string;
  pqMaxSize: string;
  pqPath: string;
  pqCompress: string;
  pqOnBackpressure: string;
  pqMode: string;
  pqControls?: OutputTcpjsonPqControls$Outbound | undefined;
  authToken: string;
  textSecret?: string | undefined;
};

/** @internal */
export const OutputTcpjson$outboundSchema: z.ZodType<
  OutputTcpjson$Outbound,
  z.ZodTypeDef,
  OutputTcpjson
> = z.object({
  id: z.string(),
  type: OutputTcpjsonType$outboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  loadBalanced: z.boolean().default(true),
  compression: OutputTcpjsonCompression$outboundSchema.default("gzip"),
  logFailedRequests: z.boolean().default(false),
  throttleRatePerSec: z.string().default("0"),
  tls: z.lazy(() => OutputTcpjsonTLSSettingsClientSide$outboundSchema)
    .optional(),
  connectionTimeout: z.number().default(10000),
  writeTimeout: z.number().default(60000),
  tokenTTLMinutes: z.number().default(60),
  sendHeader: z.boolean().default(true),
  onBackpressure: OutputTcpjsonBackpressureBehavior$outboundSchema.default(
    "block",
  ),
  authType: OutputTcpjsonAuthenticationMethod$outboundSchema.default("manual"),
  description: z.string().optional(),
  host: z.string().optional(),
  port: z.number().optional(),
  excludeSelf: z.boolean().default(false),
  hosts: z.array(z.lazy(() => OutputTcpjsonHost$outboundSchema)).optional(),
  dnsResolvePeriodSec: z.number().default(600),
  loadBalanceStatsPeriodSec: z.number().default(300),
  maxConcurrentSenders: z.number().default(0),
  pqMaxFileSize: z.string().default("1 MB"),
  pqMaxSize: z.string().default("5GB"),
  pqPath: z.string().default("$CRIBL_HOME/state/queues"),
  pqCompress: OutputTcpjsonPqCompressCompression$outboundSchema.default("none"),
  pqOnBackpressure: OutputTcpjsonQueueFullBehavior$outboundSchema.default(
    "block",
  ),
  pqMode: OutputTcpjsonMode$outboundSchema.default("error"),
  pqControls: z.lazy(() => OutputTcpjsonPqControls$outboundSchema).optional(),
  authToken: z.string().default(""),
  textSecret: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputTcpjson$ {
  /** @deprecated use `OutputTcpjson$inboundSchema` instead. */
  export const inboundSchema = OutputTcpjson$inboundSchema;
  /** @deprecated use `OutputTcpjson$outboundSchema` instead. */
  export const outboundSchema = OutputTcpjson$outboundSchema;
  /** @deprecated use `OutputTcpjson$Outbound` instead. */
  export type Outbound = OutputTcpjson$Outbound;
}

export function outputTcpjsonToJSON(outputTcpjson: OutputTcpjson): string {
  return JSON.stringify(OutputTcpjson$outboundSchema.parse(outputTcpjson));
}

export function outputTcpjsonFromJSON(
  jsonString: string,
): SafeParseResult<OutputTcpjson, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputTcpjson$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputTcpjson' from JSON`,
  );
}
