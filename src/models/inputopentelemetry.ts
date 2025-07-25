/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const InputOpenTelemetryType = {
  OpenTelemetry: "open_telemetry",
} as const;
export type InputOpenTelemetryType = ClosedEnum<typeof InputOpenTelemetryType>;

export type InputOpenTelemetryConnection = {
  pipeline?: string | undefined;
  output: string;
};

/**
 * With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.
 */
export const InputOpenTelemetryMode = {
  Smart: "smart",
  Always: "always",
} as const;
/**
 * With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.
 */
export type InputOpenTelemetryMode = ClosedEnum<typeof InputOpenTelemetryMode>;

/**
 * Codec to use to compress the persisted data
 */
export const InputOpenTelemetryCompression = {
  None: "none",
  Gzip: "gzip",
} as const;
/**
 * Codec to use to compress the persisted data
 */
export type InputOpenTelemetryCompression = ClosedEnum<
  typeof InputOpenTelemetryCompression
>;

export type InputOpenTelemetryPq = {
  /**
   * With Smart mode, PQ will write events to the filesystem only when it detects backpressure from the processing engine. With Always On mode, PQ will always write events directly to the queue before forwarding them to the processing engine.
   */
  mode?: InputOpenTelemetryMode | undefined;
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
  compress?: InputOpenTelemetryCompression | undefined;
};

export const InputOpenTelemetryMinimumTLSVersion = {
  TLSv1: "TLSv1",
  TLSv11: "TLSv1.1",
  TLSv12: "TLSv1.2",
  TLSv13: "TLSv1.3",
} as const;
export type InputOpenTelemetryMinimumTLSVersion = ClosedEnum<
  typeof InputOpenTelemetryMinimumTLSVersion
>;

export const InputOpenTelemetryMaximumTLSVersion = {
  TLSv1: "TLSv1",
  TLSv11: "TLSv1.1",
  TLSv12: "TLSv1.2",
  TLSv13: "TLSv1.3",
} as const;
export type InputOpenTelemetryMaximumTLSVersion = ClosedEnum<
  typeof InputOpenTelemetryMaximumTLSVersion
>;

export type InputOpenTelemetryTLSSettingsServerSide = {
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
  minVersion?: InputOpenTelemetryMinimumTLSVersion | undefined;
  maxVersion?: InputOpenTelemetryMaximumTLSVersion | undefined;
};

/**
 * Select whether to leverage gRPC or HTTP for OpenTelemetry
 */
export const InputOpenTelemetryProtocol = {
  Grpc: "grpc",
  Http: "http",
} as const;
/**
 * Select whether to leverage gRPC or HTTP for OpenTelemetry
 */
export type InputOpenTelemetryProtocol = ClosedEnum<
  typeof InputOpenTelemetryProtocol
>;

/**
 * The version of OTLP Protobuf definitions to use when interpreting received data
 */
export const InputOpenTelemetryOTLPVersion = {
  ZeroDot10Dot0: "0.10.0",
  OneDot3Dot1: "1.3.1",
} as const;
/**
 * The version of OTLP Protobuf definitions to use when interpreting received data
 */
export type InputOpenTelemetryOTLPVersion = ClosedEnum<
  typeof InputOpenTelemetryOTLPVersion
>;

/**
 * OpenTelemetry authentication type
 */
export const InputOpenTelemetryAuthenticationType = {
  None: "none",
  Basic: "basic",
  CredentialsSecret: "credentialsSecret",
  Token: "token",
  TextSecret: "textSecret",
  Oauth: "oauth",
} as const;
/**
 * OpenTelemetry authentication type
 */
export type InputOpenTelemetryAuthenticationType = ClosedEnum<
  typeof InputOpenTelemetryAuthenticationType
>;

export type InputOpenTelemetryMetadatum = {
  name: string;
  /**
   * JavaScript expression to compute field's value, enclosed in quotes or backticks. (Can evaluate to a constant.)
   */
  value: string;
};

export type InputOpenTelemetryOauthParam = {
  /**
   * OAuth parameter name
   */
  name: string;
  /**
   * OAuth parameter value
   */
  value: string;
};

export type InputOpenTelemetryOauthHeader = {
  /**
   * OAuth header name
   */
  name: string;
  /**
   * OAuth header value
   */
  value: string;
};

export type InputOpenTelemetry = {
  /**
   * Unique ID for this input
   */
  id?: string | undefined;
  type?: InputOpenTelemetryType | undefined;
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
  connections?: Array<InputOpenTelemetryConnection> | undefined;
  pq?: InputOpenTelemetryPq | undefined;
  /**
   * Address to bind on. Defaults to 0.0.0.0 (all addresses).
   */
  host?: string | undefined;
  /**
   * Port to listen on
   */
  port?: number | undefined;
  tls?: InputOpenTelemetryTLSSettingsServerSide | undefined;
  /**
   * Maximum number of active requests allowed per Worker Process. Set to 0 for unlimited. Caution: Increasing the limit above the default value, or setting it to unlimited, may degrade performance and reduce throughput.
   */
  maxActiveReq?: number | undefined;
  /**
   * Maximum number of requests per socket before @{product} instructs the client to close the connection. Default is 0 (unlimited).
   */
  maxRequestsPerSocket?: number | undefined;
  enableProxyHeader?: any | undefined;
  captureHeaders?: any | undefined;
  activityLogSampleRate?: any | undefined;
  /**
   * How long to wait for an incoming request to complete before aborting it. Use 0 to disable.
   */
  requestTimeout?: number | undefined;
  /**
   * How long @{product} should wait before assuming that an inactive socket has timed out. To wait forever, set to 0.
   */
  socketTimeout?: number | undefined;
  /**
   * After the last response is sent, @{product} will wait this long for additional data before closing the socket connection. Minimum 1 sec.; maximum 600 sec. (10 min.).
   */
  keepAliveTimeout?: number | undefined;
  /**
   * Enable to expose the /cribl_health endpoint, which returns 200 OK when this Source is healthy
   */
  enableHealthCheck?: boolean | undefined;
  /**
   * Messages from matched IP addresses will be processed, unless also matched by the denylist.
   */
  ipAllowlistRegex?: string | undefined;
  /**
   * Messages from matched IP addresses will be ignored. This takes precedence over the allowlist.
   */
  ipDenylistRegex?: string | undefined;
  /**
   * Select whether to leverage gRPC or HTTP for OpenTelemetry
   */
  protocol?: InputOpenTelemetryProtocol | undefined;
  /**
   * Enable to extract each incoming span to a separate event
   */
  extractSpans?: boolean | undefined;
  /**
   * Enable to extract each incoming Gauge or IntGauge metric to multiple events, one per data point
   */
  extractMetrics?: boolean | undefined;
  /**
   * The version of OTLP Protobuf definitions to use when interpreting received data
   */
  otlpVersion?: InputOpenTelemetryOTLPVersion | undefined;
  /**
   * OpenTelemetry authentication type
   */
  authType?: InputOpenTelemetryAuthenticationType | undefined;
  /**
   * Fields to add to events from this input
   */
  metadata?: Array<InputOpenTelemetryMetadatum> | undefined;
  /**
   * Maximum number of active connections allowed per Worker Process. Use 0 for unlimited.
   */
  maxActiveCxn?: number | undefined;
  description?: string | undefined;
  username?: string | undefined;
  password?: string | undefined;
  /**
   * Bearer token to include in the authorization header
   */
  token?: string | undefined;
  /**
   * Select or create a secret that references your credentials
   */
  credentialsSecret?: string | undefined;
  /**
   * Select or create a stored text secret
   */
  textSecret?: string | undefined;
  /**
   * URL for OAuth
   */
  loginUrl?: string | undefined;
  /**
   * Secret parameter name to pass in request body
   */
  secretParamName?: string | undefined;
  /**
   * Secret parameter value to pass in request body
   */
  secret?: string | undefined;
  /**
   * Name of the auth token attribute in the OAuth response. Can be top-level (e.g., 'token'); or nested, using a period (e.g., 'data.token').
   */
  tokenAttributeName?: string | undefined;
  /**
   * JavaScript expression to compute the Authorization header value to pass in requests. The value `${token}` is used to reference the token obtained from authentication, e.g.: `Bearer ${token}`.
   */
  authHeaderExpr?: string | undefined;
  /**
   * How often the OAuth token should be refreshed.
   */
  tokenTimeoutSecs?: number | undefined;
  /**
   * Additional parameters to send in the OAuth login request. @{product} will combine the secret with these parameters, and will send the URL-encoded result in a POST request to the endpoint specified in the 'Login URL'. We'll automatically add the content-type header 'application/x-www-form-urlencoded' when sending this request.
   */
  oauthParams?: Array<InputOpenTelemetryOauthParam> | undefined;
  /**
   * Additional headers to send in the OAuth login request. @{product} will automatically add the content-type header 'application/x-www-form-urlencoded' when sending this request.
   */
  oauthHeaders?: Array<InputOpenTelemetryOauthHeader> | undefined;
  /**
   * Enable to extract each incoming log record to a separate event
   */
  extractLogs?: boolean | undefined;
};

/** @internal */
export const InputOpenTelemetryType$inboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryType
> = z.nativeEnum(InputOpenTelemetryType);

/** @internal */
export const InputOpenTelemetryType$outboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryType
> = InputOpenTelemetryType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryType$ {
  /** @deprecated use `InputOpenTelemetryType$inboundSchema` instead. */
  export const inboundSchema = InputOpenTelemetryType$inboundSchema;
  /** @deprecated use `InputOpenTelemetryType$outboundSchema` instead. */
  export const outboundSchema = InputOpenTelemetryType$outboundSchema;
}

/** @internal */
export const InputOpenTelemetryConnection$inboundSchema: z.ZodType<
  InputOpenTelemetryConnection,
  z.ZodTypeDef,
  unknown
> = z.object({
  pipeline: z.string().optional(),
  output: z.string(),
});

/** @internal */
export type InputOpenTelemetryConnection$Outbound = {
  pipeline?: string | undefined;
  output: string;
};

/** @internal */
export const InputOpenTelemetryConnection$outboundSchema: z.ZodType<
  InputOpenTelemetryConnection$Outbound,
  z.ZodTypeDef,
  InputOpenTelemetryConnection
> = z.object({
  pipeline: z.string().optional(),
  output: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryConnection$ {
  /** @deprecated use `InputOpenTelemetryConnection$inboundSchema` instead. */
  export const inboundSchema = InputOpenTelemetryConnection$inboundSchema;
  /** @deprecated use `InputOpenTelemetryConnection$outboundSchema` instead. */
  export const outboundSchema = InputOpenTelemetryConnection$outboundSchema;
  /** @deprecated use `InputOpenTelemetryConnection$Outbound` instead. */
  export type Outbound = InputOpenTelemetryConnection$Outbound;
}

export function inputOpenTelemetryConnectionToJSON(
  inputOpenTelemetryConnection: InputOpenTelemetryConnection,
): string {
  return JSON.stringify(
    InputOpenTelemetryConnection$outboundSchema.parse(
      inputOpenTelemetryConnection,
    ),
  );
}

export function inputOpenTelemetryConnectionFromJSON(
  jsonString: string,
): SafeParseResult<InputOpenTelemetryConnection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputOpenTelemetryConnection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputOpenTelemetryConnection' from JSON`,
  );
}

/** @internal */
export const InputOpenTelemetryMode$inboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryMode
> = z.nativeEnum(InputOpenTelemetryMode);

/** @internal */
export const InputOpenTelemetryMode$outboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryMode
> = InputOpenTelemetryMode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryMode$ {
  /** @deprecated use `InputOpenTelemetryMode$inboundSchema` instead. */
  export const inboundSchema = InputOpenTelemetryMode$inboundSchema;
  /** @deprecated use `InputOpenTelemetryMode$outboundSchema` instead. */
  export const outboundSchema = InputOpenTelemetryMode$outboundSchema;
}

/** @internal */
export const InputOpenTelemetryCompression$inboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryCompression
> = z.nativeEnum(InputOpenTelemetryCompression);

/** @internal */
export const InputOpenTelemetryCompression$outboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryCompression
> = InputOpenTelemetryCompression$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryCompression$ {
  /** @deprecated use `InputOpenTelemetryCompression$inboundSchema` instead. */
  export const inboundSchema = InputOpenTelemetryCompression$inboundSchema;
  /** @deprecated use `InputOpenTelemetryCompression$outboundSchema` instead. */
  export const outboundSchema = InputOpenTelemetryCompression$outboundSchema;
}

/** @internal */
export const InputOpenTelemetryPq$inboundSchema: z.ZodType<
  InputOpenTelemetryPq,
  z.ZodTypeDef,
  unknown
> = z.object({
  mode: InputOpenTelemetryMode$inboundSchema.default("always"),
  maxBufferSize: z.number().default(1000),
  commitFrequency: z.number().default(42),
  maxFileSize: z.string().default("1 MB"),
  maxSize: z.string().default("5GB"),
  path: z.string().default("$CRIBL_HOME/state/queues"),
  compress: InputOpenTelemetryCompression$inboundSchema.default("none"),
});

/** @internal */
export type InputOpenTelemetryPq$Outbound = {
  mode: string;
  maxBufferSize: number;
  commitFrequency: number;
  maxFileSize: string;
  maxSize: string;
  path: string;
  compress: string;
};

/** @internal */
export const InputOpenTelemetryPq$outboundSchema: z.ZodType<
  InputOpenTelemetryPq$Outbound,
  z.ZodTypeDef,
  InputOpenTelemetryPq
> = z.object({
  mode: InputOpenTelemetryMode$outboundSchema.default("always"),
  maxBufferSize: z.number().default(1000),
  commitFrequency: z.number().default(42),
  maxFileSize: z.string().default("1 MB"),
  maxSize: z.string().default("5GB"),
  path: z.string().default("$CRIBL_HOME/state/queues"),
  compress: InputOpenTelemetryCompression$outboundSchema.default("none"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryPq$ {
  /** @deprecated use `InputOpenTelemetryPq$inboundSchema` instead. */
  export const inboundSchema = InputOpenTelemetryPq$inboundSchema;
  /** @deprecated use `InputOpenTelemetryPq$outboundSchema` instead. */
  export const outboundSchema = InputOpenTelemetryPq$outboundSchema;
  /** @deprecated use `InputOpenTelemetryPq$Outbound` instead. */
  export type Outbound = InputOpenTelemetryPq$Outbound;
}

export function inputOpenTelemetryPqToJSON(
  inputOpenTelemetryPq: InputOpenTelemetryPq,
): string {
  return JSON.stringify(
    InputOpenTelemetryPq$outboundSchema.parse(inputOpenTelemetryPq),
  );
}

export function inputOpenTelemetryPqFromJSON(
  jsonString: string,
): SafeParseResult<InputOpenTelemetryPq, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputOpenTelemetryPq$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputOpenTelemetryPq' from JSON`,
  );
}

/** @internal */
export const InputOpenTelemetryMinimumTLSVersion$inboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryMinimumTLSVersion
> = z.nativeEnum(InputOpenTelemetryMinimumTLSVersion);

/** @internal */
export const InputOpenTelemetryMinimumTLSVersion$outboundSchema:
  z.ZodNativeEnum<typeof InputOpenTelemetryMinimumTLSVersion> =
    InputOpenTelemetryMinimumTLSVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryMinimumTLSVersion$ {
  /** @deprecated use `InputOpenTelemetryMinimumTLSVersion$inboundSchema` instead. */
  export const inboundSchema =
    InputOpenTelemetryMinimumTLSVersion$inboundSchema;
  /** @deprecated use `InputOpenTelemetryMinimumTLSVersion$outboundSchema` instead. */
  export const outboundSchema =
    InputOpenTelemetryMinimumTLSVersion$outboundSchema;
}

/** @internal */
export const InputOpenTelemetryMaximumTLSVersion$inboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryMaximumTLSVersion
> = z.nativeEnum(InputOpenTelemetryMaximumTLSVersion);

/** @internal */
export const InputOpenTelemetryMaximumTLSVersion$outboundSchema:
  z.ZodNativeEnum<typeof InputOpenTelemetryMaximumTLSVersion> =
    InputOpenTelemetryMaximumTLSVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryMaximumTLSVersion$ {
  /** @deprecated use `InputOpenTelemetryMaximumTLSVersion$inboundSchema` instead. */
  export const inboundSchema =
    InputOpenTelemetryMaximumTLSVersion$inboundSchema;
  /** @deprecated use `InputOpenTelemetryMaximumTLSVersion$outboundSchema` instead. */
  export const outboundSchema =
    InputOpenTelemetryMaximumTLSVersion$outboundSchema;
}

/** @internal */
export const InputOpenTelemetryTLSSettingsServerSide$inboundSchema: z.ZodType<
  InputOpenTelemetryTLSSettingsServerSide,
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
  minVersion: InputOpenTelemetryMinimumTLSVersion$inboundSchema.optional(),
  maxVersion: InputOpenTelemetryMaximumTLSVersion$inboundSchema.optional(),
});

/** @internal */
export type InputOpenTelemetryTLSSettingsServerSide$Outbound = {
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
export const InputOpenTelemetryTLSSettingsServerSide$outboundSchema: z.ZodType<
  InputOpenTelemetryTLSSettingsServerSide$Outbound,
  z.ZodTypeDef,
  InputOpenTelemetryTLSSettingsServerSide
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
  minVersion: InputOpenTelemetryMinimumTLSVersion$outboundSchema.optional(),
  maxVersion: InputOpenTelemetryMaximumTLSVersion$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryTLSSettingsServerSide$ {
  /** @deprecated use `InputOpenTelemetryTLSSettingsServerSide$inboundSchema` instead. */
  export const inboundSchema =
    InputOpenTelemetryTLSSettingsServerSide$inboundSchema;
  /** @deprecated use `InputOpenTelemetryTLSSettingsServerSide$outboundSchema` instead. */
  export const outboundSchema =
    InputOpenTelemetryTLSSettingsServerSide$outboundSchema;
  /** @deprecated use `InputOpenTelemetryTLSSettingsServerSide$Outbound` instead. */
  export type Outbound = InputOpenTelemetryTLSSettingsServerSide$Outbound;
}

export function inputOpenTelemetryTLSSettingsServerSideToJSON(
  inputOpenTelemetryTLSSettingsServerSide:
    InputOpenTelemetryTLSSettingsServerSide,
): string {
  return JSON.stringify(
    InputOpenTelemetryTLSSettingsServerSide$outboundSchema.parse(
      inputOpenTelemetryTLSSettingsServerSide,
    ),
  );
}

export function inputOpenTelemetryTLSSettingsServerSideFromJSON(
  jsonString: string,
): SafeParseResult<
  InputOpenTelemetryTLSSettingsServerSide,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      InputOpenTelemetryTLSSettingsServerSide$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'InputOpenTelemetryTLSSettingsServerSide' from JSON`,
  );
}

/** @internal */
export const InputOpenTelemetryProtocol$inboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryProtocol
> = z.nativeEnum(InputOpenTelemetryProtocol);

/** @internal */
export const InputOpenTelemetryProtocol$outboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryProtocol
> = InputOpenTelemetryProtocol$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryProtocol$ {
  /** @deprecated use `InputOpenTelemetryProtocol$inboundSchema` instead. */
  export const inboundSchema = InputOpenTelemetryProtocol$inboundSchema;
  /** @deprecated use `InputOpenTelemetryProtocol$outboundSchema` instead. */
  export const outboundSchema = InputOpenTelemetryProtocol$outboundSchema;
}

/** @internal */
export const InputOpenTelemetryOTLPVersion$inboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryOTLPVersion
> = z.nativeEnum(InputOpenTelemetryOTLPVersion);

/** @internal */
export const InputOpenTelemetryOTLPVersion$outboundSchema: z.ZodNativeEnum<
  typeof InputOpenTelemetryOTLPVersion
> = InputOpenTelemetryOTLPVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryOTLPVersion$ {
  /** @deprecated use `InputOpenTelemetryOTLPVersion$inboundSchema` instead. */
  export const inboundSchema = InputOpenTelemetryOTLPVersion$inboundSchema;
  /** @deprecated use `InputOpenTelemetryOTLPVersion$outboundSchema` instead. */
  export const outboundSchema = InputOpenTelemetryOTLPVersion$outboundSchema;
}

/** @internal */
export const InputOpenTelemetryAuthenticationType$inboundSchema:
  z.ZodNativeEnum<typeof InputOpenTelemetryAuthenticationType> = z.nativeEnum(
    InputOpenTelemetryAuthenticationType,
  );

/** @internal */
export const InputOpenTelemetryAuthenticationType$outboundSchema:
  z.ZodNativeEnum<typeof InputOpenTelemetryAuthenticationType> =
    InputOpenTelemetryAuthenticationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryAuthenticationType$ {
  /** @deprecated use `InputOpenTelemetryAuthenticationType$inboundSchema` instead. */
  export const inboundSchema =
    InputOpenTelemetryAuthenticationType$inboundSchema;
  /** @deprecated use `InputOpenTelemetryAuthenticationType$outboundSchema` instead. */
  export const outboundSchema =
    InputOpenTelemetryAuthenticationType$outboundSchema;
}

/** @internal */
export const InputOpenTelemetryMetadatum$inboundSchema: z.ZodType<
  InputOpenTelemetryMetadatum,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  value: z.string(),
});

/** @internal */
export type InputOpenTelemetryMetadatum$Outbound = {
  name: string;
  value: string;
};

/** @internal */
export const InputOpenTelemetryMetadatum$outboundSchema: z.ZodType<
  InputOpenTelemetryMetadatum$Outbound,
  z.ZodTypeDef,
  InputOpenTelemetryMetadatum
> = z.object({
  name: z.string(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryMetadatum$ {
  /** @deprecated use `InputOpenTelemetryMetadatum$inboundSchema` instead. */
  export const inboundSchema = InputOpenTelemetryMetadatum$inboundSchema;
  /** @deprecated use `InputOpenTelemetryMetadatum$outboundSchema` instead. */
  export const outboundSchema = InputOpenTelemetryMetadatum$outboundSchema;
  /** @deprecated use `InputOpenTelemetryMetadatum$Outbound` instead. */
  export type Outbound = InputOpenTelemetryMetadatum$Outbound;
}

export function inputOpenTelemetryMetadatumToJSON(
  inputOpenTelemetryMetadatum: InputOpenTelemetryMetadatum,
): string {
  return JSON.stringify(
    InputOpenTelemetryMetadatum$outboundSchema.parse(
      inputOpenTelemetryMetadatum,
    ),
  );
}

export function inputOpenTelemetryMetadatumFromJSON(
  jsonString: string,
): SafeParseResult<InputOpenTelemetryMetadatum, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputOpenTelemetryMetadatum$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputOpenTelemetryMetadatum' from JSON`,
  );
}

/** @internal */
export const InputOpenTelemetryOauthParam$inboundSchema: z.ZodType<
  InputOpenTelemetryOauthParam,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  value: z.string(),
});

/** @internal */
export type InputOpenTelemetryOauthParam$Outbound = {
  name: string;
  value: string;
};

/** @internal */
export const InputOpenTelemetryOauthParam$outboundSchema: z.ZodType<
  InputOpenTelemetryOauthParam$Outbound,
  z.ZodTypeDef,
  InputOpenTelemetryOauthParam
> = z.object({
  name: z.string(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryOauthParam$ {
  /** @deprecated use `InputOpenTelemetryOauthParam$inboundSchema` instead. */
  export const inboundSchema = InputOpenTelemetryOauthParam$inboundSchema;
  /** @deprecated use `InputOpenTelemetryOauthParam$outboundSchema` instead. */
  export const outboundSchema = InputOpenTelemetryOauthParam$outboundSchema;
  /** @deprecated use `InputOpenTelemetryOauthParam$Outbound` instead. */
  export type Outbound = InputOpenTelemetryOauthParam$Outbound;
}

export function inputOpenTelemetryOauthParamToJSON(
  inputOpenTelemetryOauthParam: InputOpenTelemetryOauthParam,
): string {
  return JSON.stringify(
    InputOpenTelemetryOauthParam$outboundSchema.parse(
      inputOpenTelemetryOauthParam,
    ),
  );
}

export function inputOpenTelemetryOauthParamFromJSON(
  jsonString: string,
): SafeParseResult<InputOpenTelemetryOauthParam, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputOpenTelemetryOauthParam$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputOpenTelemetryOauthParam' from JSON`,
  );
}

/** @internal */
export const InputOpenTelemetryOauthHeader$inboundSchema: z.ZodType<
  InputOpenTelemetryOauthHeader,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  value: z.string(),
});

/** @internal */
export type InputOpenTelemetryOauthHeader$Outbound = {
  name: string;
  value: string;
};

/** @internal */
export const InputOpenTelemetryOauthHeader$outboundSchema: z.ZodType<
  InputOpenTelemetryOauthHeader$Outbound,
  z.ZodTypeDef,
  InputOpenTelemetryOauthHeader
> = z.object({
  name: z.string(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetryOauthHeader$ {
  /** @deprecated use `InputOpenTelemetryOauthHeader$inboundSchema` instead. */
  export const inboundSchema = InputOpenTelemetryOauthHeader$inboundSchema;
  /** @deprecated use `InputOpenTelemetryOauthHeader$outboundSchema` instead. */
  export const outboundSchema = InputOpenTelemetryOauthHeader$outboundSchema;
  /** @deprecated use `InputOpenTelemetryOauthHeader$Outbound` instead. */
  export type Outbound = InputOpenTelemetryOauthHeader$Outbound;
}

export function inputOpenTelemetryOauthHeaderToJSON(
  inputOpenTelemetryOauthHeader: InputOpenTelemetryOauthHeader,
): string {
  return JSON.stringify(
    InputOpenTelemetryOauthHeader$outboundSchema.parse(
      inputOpenTelemetryOauthHeader,
    ),
  );
}

export function inputOpenTelemetryOauthHeaderFromJSON(
  jsonString: string,
): SafeParseResult<InputOpenTelemetryOauthHeader, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputOpenTelemetryOauthHeader$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputOpenTelemetryOauthHeader' from JSON`,
  );
}

/** @internal */
export const InputOpenTelemetry$inboundSchema: z.ZodType<
  InputOpenTelemetry,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  type: InputOpenTelemetryType$inboundSchema.optional(),
  disabled: z.boolean().default(false),
  pipeline: z.string().optional(),
  sendToRoutes: z.boolean().default(true),
  environment: z.string().optional(),
  pqEnabled: z.boolean().default(false),
  streamtags: z.array(z.string()).optional(),
  connections: z.array(z.lazy(() => InputOpenTelemetryConnection$inboundSchema))
    .optional(),
  pq: z.lazy(() => InputOpenTelemetryPq$inboundSchema).optional(),
  host: z.string().default("0.0.0.0"),
  port: z.number().default(4317),
  tls: z.lazy(() => InputOpenTelemetryTLSSettingsServerSide$inboundSchema)
    .optional(),
  maxActiveReq: z.number().default(256),
  maxRequestsPerSocket: z.number().int().default(0),
  enableProxyHeader: z.any().optional(),
  captureHeaders: z.any().optional(),
  activityLogSampleRate: z.any().optional(),
  requestTimeout: z.number().default(0),
  socketTimeout: z.number().default(0),
  keepAliveTimeout: z.number().default(15),
  enableHealthCheck: z.boolean().default(false),
  ipAllowlistRegex: z.string().default("/.*/"),
  ipDenylistRegex: z.string().default("/^$/"),
  protocol: InputOpenTelemetryProtocol$inboundSchema.default("grpc"),
  extractSpans: z.boolean().default(false),
  extractMetrics: z.boolean().default(false),
  otlpVersion: InputOpenTelemetryOTLPVersion$inboundSchema.default("0.10.0"),
  authType: InputOpenTelemetryAuthenticationType$inboundSchema.default("none"),
  metadata: z.array(z.lazy(() => InputOpenTelemetryMetadatum$inboundSchema))
    .optional(),
  maxActiveCxn: z.number().default(1000),
  description: z.string().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
  token: z.string().optional(),
  credentialsSecret: z.string().optional(),
  textSecret: z.string().optional(),
  loginUrl: z.string().optional(),
  secretParamName: z.string().optional(),
  secret: z.string().optional(),
  tokenAttributeName: z.string().optional(),
  authHeaderExpr: z.string().default("`Bearer ${token}`"),
  tokenTimeoutSecs: z.number().default(3600),
  oauthParams: z.array(z.lazy(() => InputOpenTelemetryOauthParam$inboundSchema))
    .optional(),
  oauthHeaders: z.array(
    z.lazy(() => InputOpenTelemetryOauthHeader$inboundSchema),
  ).optional(),
  extractLogs: z.boolean().default(false),
});

/** @internal */
export type InputOpenTelemetry$Outbound = {
  id?: string | undefined;
  type?: string | undefined;
  disabled: boolean;
  pipeline?: string | undefined;
  sendToRoutes: boolean;
  environment?: string | undefined;
  pqEnabled: boolean;
  streamtags?: Array<string> | undefined;
  connections?: Array<InputOpenTelemetryConnection$Outbound> | undefined;
  pq?: InputOpenTelemetryPq$Outbound | undefined;
  host: string;
  port: number;
  tls?: InputOpenTelemetryTLSSettingsServerSide$Outbound | undefined;
  maxActiveReq: number;
  maxRequestsPerSocket: number;
  enableProxyHeader?: any | undefined;
  captureHeaders?: any | undefined;
  activityLogSampleRate?: any | undefined;
  requestTimeout: number;
  socketTimeout: number;
  keepAliveTimeout: number;
  enableHealthCheck: boolean;
  ipAllowlistRegex: string;
  ipDenylistRegex: string;
  protocol: string;
  extractSpans: boolean;
  extractMetrics: boolean;
  otlpVersion: string;
  authType: string;
  metadata?: Array<InputOpenTelemetryMetadatum$Outbound> | undefined;
  maxActiveCxn: number;
  description?: string | undefined;
  username?: string | undefined;
  password?: string | undefined;
  token?: string | undefined;
  credentialsSecret?: string | undefined;
  textSecret?: string | undefined;
  loginUrl?: string | undefined;
  secretParamName?: string | undefined;
  secret?: string | undefined;
  tokenAttributeName?: string | undefined;
  authHeaderExpr: string;
  tokenTimeoutSecs: number;
  oauthParams?: Array<InputOpenTelemetryOauthParam$Outbound> | undefined;
  oauthHeaders?: Array<InputOpenTelemetryOauthHeader$Outbound> | undefined;
  extractLogs: boolean;
};

/** @internal */
export const InputOpenTelemetry$outboundSchema: z.ZodType<
  InputOpenTelemetry$Outbound,
  z.ZodTypeDef,
  InputOpenTelemetry
> = z.object({
  id: z.string().optional(),
  type: InputOpenTelemetryType$outboundSchema.optional(),
  disabled: z.boolean().default(false),
  pipeline: z.string().optional(),
  sendToRoutes: z.boolean().default(true),
  environment: z.string().optional(),
  pqEnabled: z.boolean().default(false),
  streamtags: z.array(z.string()).optional(),
  connections: z.array(
    z.lazy(() => InputOpenTelemetryConnection$outboundSchema),
  ).optional(),
  pq: z.lazy(() => InputOpenTelemetryPq$outboundSchema).optional(),
  host: z.string().default("0.0.0.0"),
  port: z.number().default(4317),
  tls: z.lazy(() => InputOpenTelemetryTLSSettingsServerSide$outboundSchema)
    .optional(),
  maxActiveReq: z.number().default(256),
  maxRequestsPerSocket: z.number().int().default(0),
  enableProxyHeader: z.any().optional(),
  captureHeaders: z.any().optional(),
  activityLogSampleRate: z.any().optional(),
  requestTimeout: z.number().default(0),
  socketTimeout: z.number().default(0),
  keepAliveTimeout: z.number().default(15),
  enableHealthCheck: z.boolean().default(false),
  ipAllowlistRegex: z.string().default("/.*/"),
  ipDenylistRegex: z.string().default("/^$/"),
  protocol: InputOpenTelemetryProtocol$outboundSchema.default("grpc"),
  extractSpans: z.boolean().default(false),
  extractMetrics: z.boolean().default(false),
  otlpVersion: InputOpenTelemetryOTLPVersion$outboundSchema.default("0.10.0"),
  authType: InputOpenTelemetryAuthenticationType$outboundSchema.default("none"),
  metadata: z.array(z.lazy(() => InputOpenTelemetryMetadatum$outboundSchema))
    .optional(),
  maxActiveCxn: z.number().default(1000),
  description: z.string().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
  token: z.string().optional(),
  credentialsSecret: z.string().optional(),
  textSecret: z.string().optional(),
  loginUrl: z.string().optional(),
  secretParamName: z.string().optional(),
  secret: z.string().optional(),
  tokenAttributeName: z.string().optional(),
  authHeaderExpr: z.string().default("`Bearer ${token}`"),
  tokenTimeoutSecs: z.number().default(3600),
  oauthParams: z.array(
    z.lazy(() => InputOpenTelemetryOauthParam$outboundSchema),
  ).optional(),
  oauthHeaders: z.array(
    z.lazy(() => InputOpenTelemetryOauthHeader$outboundSchema),
  ).optional(),
  extractLogs: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InputOpenTelemetry$ {
  /** @deprecated use `InputOpenTelemetry$inboundSchema` instead. */
  export const inboundSchema = InputOpenTelemetry$inboundSchema;
  /** @deprecated use `InputOpenTelemetry$outboundSchema` instead. */
  export const outboundSchema = InputOpenTelemetry$outboundSchema;
  /** @deprecated use `InputOpenTelemetry$Outbound` instead. */
  export type Outbound = InputOpenTelemetry$Outbound;
}

export function inputOpenTelemetryToJSON(
  inputOpenTelemetry: InputOpenTelemetry,
): string {
  return JSON.stringify(
    InputOpenTelemetry$outboundSchema.parse(inputOpenTelemetry),
  );
}

export function inputOpenTelemetryFromJSON(
  jsonString: string,
): SafeParseResult<InputOpenTelemetry, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InputOpenTelemetry$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InputOpenTelemetry' from JSON`,
  );
}
