/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export const OutputCriblLakeType = {
  CriblLake: "cribl_lake",
} as const;
export type OutputCriblLakeType = ClosedEnum<typeof OutputCriblLakeType>;

/**
 * Signature version to use for signing S3 requests
 */
export const OutputCriblLakeSignatureVersion = {
  V2: "v2",
  V4: "v4",
} as const;
/**
 * Signature version to use for signing S3 requests
 */
export type OutputCriblLakeSignatureVersion = ClosedEnum<
  typeof OutputCriblLakeSignatureVersion
>;

/**
 * Object ACL to assign to uploaded objects
 */
export const OutputCriblLakeObjectACL = {
  Private: "private",
  PublicRead: "public-read",
  PublicReadWrite: "public-read-write",
  AuthenticatedRead: "authenticated-read",
  AwsExecRead: "aws-exec-read",
  BucketOwnerRead: "bucket-owner-read",
  BucketOwnerFullControl: "bucket-owner-full-control",
} as const;
/**
 * Object ACL to assign to uploaded objects
 */
export type OutputCriblLakeObjectACL = ClosedEnum<
  typeof OutputCriblLakeObjectACL
>;

/**
 * Storage class to select for uploaded objects
 */
export const OutputCriblLakeStorageClass = {
  Standard: "STANDARD",
  ReducedRedundancy: "REDUCED_REDUNDANCY",
  StandardIa: "STANDARD_IA",
  OnezoneIa: "ONEZONE_IA",
  IntelligentTiering: "INTELLIGENT_TIERING",
  Glacier: "GLACIER",
  GlacierIr: "GLACIER_IR",
  DeepArchive: "DEEP_ARCHIVE",
} as const;
/**
 * Storage class to select for uploaded objects
 */
export type OutputCriblLakeStorageClass = ClosedEnum<
  typeof OutputCriblLakeStorageClass
>;

export const OutputCriblLakeServerSideEncryptionForUploadedObjects = {
  Aes256: "AES256",
  AwsKms: "aws:kms",
} as const;
export type OutputCriblLakeServerSideEncryptionForUploadedObjects = ClosedEnum<
  typeof OutputCriblLakeServerSideEncryptionForUploadedObjects
>;

/**
 * How to handle events when all receivers are exerting backpressure
 */
export const OutputCriblLakeBackpressureBehavior = {
  Block: "block",
  Drop: "drop",
} as const;
/**
 * How to handle events when all receivers are exerting backpressure
 */
export type OutputCriblLakeBackpressureBehavior = ClosedEnum<
  typeof OutputCriblLakeBackpressureBehavior
>;

/**
 * How to handle events when disk space is below the global 'Min free disk space' limit
 */
export const OutputCriblLakeDiskSpaceProtection = {
  Block: "block",
  Drop: "drop",
} as const;
/**
 * How to handle events when disk space is below the global 'Min free disk space' limit
 */
export type OutputCriblLakeDiskSpaceProtection = ClosedEnum<
  typeof OutputCriblLakeDiskSpaceProtection
>;

export const AwsAuthenticationMethod = {
  Auto: "auto",
  AutoRpc: "auto_rpc",
  Manual: "manual",
} as const;
export type AwsAuthenticationMethod = ClosedEnum<
  typeof AwsAuthenticationMethod
>;

export const OutputCriblLakeFormat = {
  Json: "json",
  Parquet: "parquet",
  Ddss: "ddss",
} as const;
export type OutputCriblLakeFormat = ClosedEnum<typeof OutputCriblLakeFormat>;

export type OutputCriblLake = {
  /**
   * Unique ID for this output
   */
  id: string;
  type: OutputCriblLakeType;
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
   * Name of the destination S3 bucket. Must be a JavaScript expression (which can evaluate to a constant value), enclosed in quotes or backticks. Can be evaluated only at initialization time. Example referencing a Global Variable: `myBucket-${C.vars.myVar}`
   */
  bucket?: string | undefined;
  /**
   * Region where the S3 bucket is located
   */
  region?: string | undefined;
  /**
   * Secret key. This value can be a constant or a JavaScript expression. Example: `${C.env.SOME_SECRET}`)
   */
  awsSecretKey?: string | undefined;
  /**
   * S3 service endpoint. If empty, defaults to the AWS Region-specific endpoint. Otherwise, it must point to S3-compatible endpoint.
   */
  endpoint?: string | undefined;
  /**
   * Signature version to use for signing S3 requests
   */
  signatureVersion?: OutputCriblLakeSignatureVersion | undefined;
  /**
   * Reuse connections between requests, which can improve performance
   */
  reuseConnections?: boolean | undefined;
  /**
   * Reject certificates that cannot be verified against a valid CA, such as self-signed certificates
   */
  rejectUnauthorized?: boolean | undefined;
  /**
   * Use Assume Role credentials to access S3
   */
  enableAssumeRole?: boolean | undefined;
  /**
   * Amazon Resource Name (ARN) of the role to assume
   */
  assumeRoleArn?: string | undefined;
  /**
   * External ID to use when assuming role
   */
  assumeRoleExternalId?: string | undefined;
  /**
   * Duration of the assumed role's session, in seconds. Minimum is 900 (15 minutes), default is 3600 (1 hour), and maximum is 43200 (12 hours).
   */
  durationSeconds?: number | undefined;
  /**
   * Filesystem location in which to buffer files, before compressing and moving to final destination. Use performant and stable storage.
   */
  stagePath?: string | undefined;
  /**
   * Add the Output ID value to staging location
   */
  addIdToStagePath?: boolean | undefined;
  /**
   * Lake dataset to send the data to.
   */
  destPath?: string | undefined;
  /**
   * Object ACL to assign to uploaded objects
   */
  objectACL?: OutputCriblLakeObjectACL | undefined;
  /**
   * Storage class to select for uploaded objects
   */
  storageClass?: OutputCriblLakeStorageClass | undefined;
  serverSideEncryption?:
    | OutputCriblLakeServerSideEncryptionForUploadedObjects
    | undefined;
  /**
   * ID or ARN of the KMS customer-managed key to use for encryption
   */
  kmsKeyId?: string | undefined;
  /**
   * Remove empty staging directories after moving files
   */
  removeEmptyDirs?: boolean | undefined;
  /**
   * JavaScript expression to define the output filename prefix (can be constant)
   */
  baseFileName?: string | undefined;
  /**
   * JavaScript expression to define the output filename suffix (can be constant).  The `__format` variable refers to the value of the `Data format` field (`json` or `raw`).  The `__compression` field refers to the kind of compression being used (`none` or `gzip`).
   */
  fileNameSuffix?: string | undefined;
  /**
   * Maximum uncompressed output file size. Files of this size will be closed and moved to final output location.
   */
  maxFileSizeMB?: number | undefined;
  /**
   * Maximum number of files to keep open concurrently. When exceeded, @{product} will close the oldest open files and move them to the final output location.
   */
  maxOpenFiles?: number | undefined;
  /**
   * If set, this line will be written to the beginning of each output file
   */
  headerLine?: string | undefined;
  /**
   * Buffer size used to write to a file
   */
  writeHighWaterMark?: number | undefined;
  /**
   * How to handle events when all receivers are exerting backpressure
   */
  onBackpressure?: OutputCriblLakeBackpressureBehavior | undefined;
  /**
   * If a file fails to move to its final destination after the maximum number of retries, move it to a designated directory to prevent further errors
   */
  deadletterEnabled?: boolean | undefined;
  /**
   * How to handle events when disk space is below the global 'Min free disk space' limit
   */
  onDiskFullBackpressure?: OutputCriblLakeDiskSpaceProtection | undefined;
  /**
   * Maximum amount of time to write to a file. Files open for longer than this will be closed and moved to final output location.
   */
  maxFileOpenTimeSec?: number | undefined;
  /**
   * Maximum amount of time to keep inactive files open. Files open for longer than this will be closed and moved to final output location.
   */
  maxFileIdleTimeSec?: number | undefined;
  /**
   * Disable if you can access files within the bucket but not the bucket itself
   */
  verifyPermissions?: boolean | undefined;
  /**
   * Maximum number of files that can be waiting for upload before backpressure is applied
   */
  maxClosingFilesToBackpressure?: number | undefined;
  awsAuthenticationMethod?: AwsAuthenticationMethod | undefined;
  format?: OutputCriblLakeFormat | undefined;
  /**
   * Maximum number of parts to upload in parallel per file. Minimum part size is 5MB.
   */
  maxConcurrentFileParts?: number | undefined;
  description?: string | undefined;
  /**
   * How frequently, in seconds, to clean up empty directories
   */
  emptyDirCleanupSec?: number | undefined;
  /**
   * Storage location for files that fail to reach their final destination after maximum retries are exceeded
   */
  deadletterPath?: string | undefined;
  /**
   * The maximum number of times a file will attempt to move to its final destination before being dead-lettered
   */
  maxRetryNum?: number | undefined;
};

/** @internal */
export const OutputCriblLakeType$inboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeType
> = z.nativeEnum(OutputCriblLakeType);

/** @internal */
export const OutputCriblLakeType$outboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeType
> = OutputCriblLakeType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputCriblLakeType$ {
  /** @deprecated use `OutputCriblLakeType$inboundSchema` instead. */
  export const inboundSchema = OutputCriblLakeType$inboundSchema;
  /** @deprecated use `OutputCriblLakeType$outboundSchema` instead. */
  export const outboundSchema = OutputCriblLakeType$outboundSchema;
}

/** @internal */
export const OutputCriblLakeSignatureVersion$inboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeSignatureVersion
> = z.nativeEnum(OutputCriblLakeSignatureVersion);

/** @internal */
export const OutputCriblLakeSignatureVersion$outboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeSignatureVersion
> = OutputCriblLakeSignatureVersion$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputCriblLakeSignatureVersion$ {
  /** @deprecated use `OutputCriblLakeSignatureVersion$inboundSchema` instead. */
  export const inboundSchema = OutputCriblLakeSignatureVersion$inboundSchema;
  /** @deprecated use `OutputCriblLakeSignatureVersion$outboundSchema` instead. */
  export const outboundSchema = OutputCriblLakeSignatureVersion$outboundSchema;
}

/** @internal */
export const OutputCriblLakeObjectACL$inboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeObjectACL
> = z.nativeEnum(OutputCriblLakeObjectACL);

/** @internal */
export const OutputCriblLakeObjectACL$outboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeObjectACL
> = OutputCriblLakeObjectACL$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputCriblLakeObjectACL$ {
  /** @deprecated use `OutputCriblLakeObjectACL$inboundSchema` instead. */
  export const inboundSchema = OutputCriblLakeObjectACL$inboundSchema;
  /** @deprecated use `OutputCriblLakeObjectACL$outboundSchema` instead. */
  export const outboundSchema = OutputCriblLakeObjectACL$outboundSchema;
}

/** @internal */
export const OutputCriblLakeStorageClass$inboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeStorageClass
> = z.nativeEnum(OutputCriblLakeStorageClass);

/** @internal */
export const OutputCriblLakeStorageClass$outboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeStorageClass
> = OutputCriblLakeStorageClass$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputCriblLakeStorageClass$ {
  /** @deprecated use `OutputCriblLakeStorageClass$inboundSchema` instead. */
  export const inboundSchema = OutputCriblLakeStorageClass$inboundSchema;
  /** @deprecated use `OutputCriblLakeStorageClass$outboundSchema` instead. */
  export const outboundSchema = OutputCriblLakeStorageClass$outboundSchema;
}

/** @internal */
export const OutputCriblLakeServerSideEncryptionForUploadedObjects$inboundSchema:
  z.ZodNativeEnum<
    typeof OutputCriblLakeServerSideEncryptionForUploadedObjects
  > = z.nativeEnum(OutputCriblLakeServerSideEncryptionForUploadedObjects);

/** @internal */
export const OutputCriblLakeServerSideEncryptionForUploadedObjects$outboundSchema:
  z.ZodNativeEnum<
    typeof OutputCriblLakeServerSideEncryptionForUploadedObjects
  > = OutputCriblLakeServerSideEncryptionForUploadedObjects$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputCriblLakeServerSideEncryptionForUploadedObjects$ {
  /** @deprecated use `OutputCriblLakeServerSideEncryptionForUploadedObjects$inboundSchema` instead. */
  export const inboundSchema =
    OutputCriblLakeServerSideEncryptionForUploadedObjects$inboundSchema;
  /** @deprecated use `OutputCriblLakeServerSideEncryptionForUploadedObjects$outboundSchema` instead. */
  export const outboundSchema =
    OutputCriblLakeServerSideEncryptionForUploadedObjects$outboundSchema;
}

/** @internal */
export const OutputCriblLakeBackpressureBehavior$inboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeBackpressureBehavior
> = z.nativeEnum(OutputCriblLakeBackpressureBehavior);

/** @internal */
export const OutputCriblLakeBackpressureBehavior$outboundSchema:
  z.ZodNativeEnum<typeof OutputCriblLakeBackpressureBehavior> =
    OutputCriblLakeBackpressureBehavior$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputCriblLakeBackpressureBehavior$ {
  /** @deprecated use `OutputCriblLakeBackpressureBehavior$inboundSchema` instead. */
  export const inboundSchema =
    OutputCriblLakeBackpressureBehavior$inboundSchema;
  /** @deprecated use `OutputCriblLakeBackpressureBehavior$outboundSchema` instead. */
  export const outboundSchema =
    OutputCriblLakeBackpressureBehavior$outboundSchema;
}

/** @internal */
export const OutputCriblLakeDiskSpaceProtection$inboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeDiskSpaceProtection
> = z.nativeEnum(OutputCriblLakeDiskSpaceProtection);

/** @internal */
export const OutputCriblLakeDiskSpaceProtection$outboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeDiskSpaceProtection
> = OutputCriblLakeDiskSpaceProtection$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputCriblLakeDiskSpaceProtection$ {
  /** @deprecated use `OutputCriblLakeDiskSpaceProtection$inboundSchema` instead. */
  export const inboundSchema = OutputCriblLakeDiskSpaceProtection$inboundSchema;
  /** @deprecated use `OutputCriblLakeDiskSpaceProtection$outboundSchema` instead. */
  export const outboundSchema =
    OutputCriblLakeDiskSpaceProtection$outboundSchema;
}

/** @internal */
export const AwsAuthenticationMethod$inboundSchema: z.ZodNativeEnum<
  typeof AwsAuthenticationMethod
> = z.nativeEnum(AwsAuthenticationMethod);

/** @internal */
export const AwsAuthenticationMethod$outboundSchema: z.ZodNativeEnum<
  typeof AwsAuthenticationMethod
> = AwsAuthenticationMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AwsAuthenticationMethod$ {
  /** @deprecated use `AwsAuthenticationMethod$inboundSchema` instead. */
  export const inboundSchema = AwsAuthenticationMethod$inboundSchema;
  /** @deprecated use `AwsAuthenticationMethod$outboundSchema` instead. */
  export const outboundSchema = AwsAuthenticationMethod$outboundSchema;
}

/** @internal */
export const OutputCriblLakeFormat$inboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeFormat
> = z.nativeEnum(OutputCriblLakeFormat);

/** @internal */
export const OutputCriblLakeFormat$outboundSchema: z.ZodNativeEnum<
  typeof OutputCriblLakeFormat
> = OutputCriblLakeFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputCriblLakeFormat$ {
  /** @deprecated use `OutputCriblLakeFormat$inboundSchema` instead. */
  export const inboundSchema = OutputCriblLakeFormat$inboundSchema;
  /** @deprecated use `OutputCriblLakeFormat$outboundSchema` instead. */
  export const outboundSchema = OutputCriblLakeFormat$outboundSchema;
}

/** @internal */
export const OutputCriblLake$inboundSchema: z.ZodType<
  OutputCriblLake,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: OutputCriblLakeType$inboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  bucket: z.string().optional(),
  region: z.string().optional(),
  awsSecretKey: z.string().optional(),
  endpoint: z.string().optional(),
  signatureVersion: OutputCriblLakeSignatureVersion$inboundSchema.default("v4"),
  reuseConnections: z.boolean().default(true),
  rejectUnauthorized: z.boolean().default(true),
  enableAssumeRole: z.boolean().default(false),
  assumeRoleArn: z.string().optional(),
  assumeRoleExternalId: z.string().optional(),
  durationSeconds: z.number().default(3600),
  stagePath: z.string().default("$CRIBL_HOME/state/outputs/staging"),
  addIdToStagePath: z.boolean().default(true),
  destPath: z.string().optional(),
  objectACL: OutputCriblLakeObjectACL$inboundSchema.default("private"),
  storageClass: OutputCriblLakeStorageClass$inboundSchema.optional(),
  serverSideEncryption:
    OutputCriblLakeServerSideEncryptionForUploadedObjects$inboundSchema
      .optional(),
  kmsKeyId: z.string().optional(),
  removeEmptyDirs: z.boolean().default(true),
  baseFileName: z.string().default("`CriblOut`"),
  fileNameSuffix: z.string().default(
    "`.${C.env[\"CRIBL_WORKER_ID\"]}.${__format}${__compression === \"gzip\" ? \".gz\" : \"\"}`",
  ),
  maxFileSizeMB: z.number().default(64),
  maxOpenFiles: z.number().default(100),
  headerLine: z.string().default(""),
  writeHighWaterMark: z.number().default(64),
  onBackpressure: OutputCriblLakeBackpressureBehavior$inboundSchema.default(
    "block",
  ),
  deadletterEnabled: z.boolean().default(false),
  onDiskFullBackpressure: OutputCriblLakeDiskSpaceProtection$inboundSchema
    .default("block"),
  maxFileOpenTimeSec: z.number().default(300),
  maxFileIdleTimeSec: z.number().default(300),
  verifyPermissions: z.boolean().default(true),
  maxClosingFilesToBackpressure: z.number().default(100),
  awsAuthenticationMethod: AwsAuthenticationMethod$inboundSchema.default(
    "auto",
  ),
  format: OutputCriblLakeFormat$inboundSchema.optional(),
  maxConcurrentFileParts: z.number().default(1),
  description: z.string().optional(),
  emptyDirCleanupSec: z.number().default(300),
  deadletterPath: z.string().default("$CRIBL_HOME/state/outputs/dead-letter"),
  maxRetryNum: z.number().default(20),
});

/** @internal */
export type OutputCriblLake$Outbound = {
  id: string;
  type: string;
  pipeline?: string | undefined;
  systemFields?: Array<string> | undefined;
  environment?: string | undefined;
  streamtags?: Array<string> | undefined;
  bucket?: string | undefined;
  region?: string | undefined;
  awsSecretKey?: string | undefined;
  endpoint?: string | undefined;
  signatureVersion: string;
  reuseConnections: boolean;
  rejectUnauthorized: boolean;
  enableAssumeRole: boolean;
  assumeRoleArn?: string | undefined;
  assumeRoleExternalId?: string | undefined;
  durationSeconds: number;
  stagePath: string;
  addIdToStagePath: boolean;
  destPath?: string | undefined;
  objectACL: string;
  storageClass?: string | undefined;
  serverSideEncryption?: string | undefined;
  kmsKeyId?: string | undefined;
  removeEmptyDirs: boolean;
  baseFileName: string;
  fileNameSuffix: string;
  maxFileSizeMB: number;
  maxOpenFiles: number;
  headerLine: string;
  writeHighWaterMark: number;
  onBackpressure: string;
  deadletterEnabled: boolean;
  onDiskFullBackpressure: string;
  maxFileOpenTimeSec: number;
  maxFileIdleTimeSec: number;
  verifyPermissions: boolean;
  maxClosingFilesToBackpressure: number;
  awsAuthenticationMethod: string;
  format?: string | undefined;
  maxConcurrentFileParts: number;
  description?: string | undefined;
  emptyDirCleanupSec: number;
  deadletterPath: string;
  maxRetryNum: number;
};

/** @internal */
export const OutputCriblLake$outboundSchema: z.ZodType<
  OutputCriblLake$Outbound,
  z.ZodTypeDef,
  OutputCriblLake
> = z.object({
  id: z.string(),
  type: OutputCriblLakeType$outboundSchema,
  pipeline: z.string().optional(),
  systemFields: z.array(z.string()).optional(),
  environment: z.string().optional(),
  streamtags: z.array(z.string()).optional(),
  bucket: z.string().optional(),
  region: z.string().optional(),
  awsSecretKey: z.string().optional(),
  endpoint: z.string().optional(),
  signatureVersion: OutputCriblLakeSignatureVersion$outboundSchema.default(
    "v4",
  ),
  reuseConnections: z.boolean().default(true),
  rejectUnauthorized: z.boolean().default(true),
  enableAssumeRole: z.boolean().default(false),
  assumeRoleArn: z.string().optional(),
  assumeRoleExternalId: z.string().optional(),
  durationSeconds: z.number().default(3600),
  stagePath: z.string().default("$CRIBL_HOME/state/outputs/staging"),
  addIdToStagePath: z.boolean().default(true),
  destPath: z.string().optional(),
  objectACL: OutputCriblLakeObjectACL$outboundSchema.default("private"),
  storageClass: OutputCriblLakeStorageClass$outboundSchema.optional(),
  serverSideEncryption:
    OutputCriblLakeServerSideEncryptionForUploadedObjects$outboundSchema
      .optional(),
  kmsKeyId: z.string().optional(),
  removeEmptyDirs: z.boolean().default(true),
  baseFileName: z.string().default("`CriblOut`"),
  fileNameSuffix: z.string().default(
    "`.${C.env[\"CRIBL_WORKER_ID\"]}.${__format}${__compression === \"gzip\" ? \".gz\" : \"\"}`",
  ),
  maxFileSizeMB: z.number().default(64),
  maxOpenFiles: z.number().default(100),
  headerLine: z.string().default(""),
  writeHighWaterMark: z.number().default(64),
  onBackpressure: OutputCriblLakeBackpressureBehavior$outboundSchema.default(
    "block",
  ),
  deadletterEnabled: z.boolean().default(false),
  onDiskFullBackpressure: OutputCriblLakeDiskSpaceProtection$outboundSchema
    .default("block"),
  maxFileOpenTimeSec: z.number().default(300),
  maxFileIdleTimeSec: z.number().default(300),
  verifyPermissions: z.boolean().default(true),
  maxClosingFilesToBackpressure: z.number().default(100),
  awsAuthenticationMethod: AwsAuthenticationMethod$outboundSchema.default(
    "auto",
  ),
  format: OutputCriblLakeFormat$outboundSchema.optional(),
  maxConcurrentFileParts: z.number().default(1),
  description: z.string().optional(),
  emptyDirCleanupSec: z.number().default(300),
  deadletterPath: z.string().default("$CRIBL_HOME/state/outputs/dead-letter"),
  maxRetryNum: z.number().default(20),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutputCriblLake$ {
  /** @deprecated use `OutputCriblLake$inboundSchema` instead. */
  export const inboundSchema = OutputCriblLake$inboundSchema;
  /** @deprecated use `OutputCriblLake$outboundSchema` instead. */
  export const outboundSchema = OutputCriblLake$outboundSchema;
  /** @deprecated use `OutputCriblLake$Outbound` instead. */
  export type Outbound = OutputCriblLake$Outbound;
}

export function outputCriblLakeToJSON(
  outputCriblLake: OutputCriblLake,
): string {
  return JSON.stringify(OutputCriblLake$outboundSchema.parse(outputCriblLake));
}

export function outputCriblLakeFromJSON(
  jsonString: string,
): SafeParseResult<OutputCriblLake, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutputCriblLake$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutputCriblLake' from JSON`,
  );
}
