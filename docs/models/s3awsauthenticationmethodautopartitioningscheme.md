# S3AwsAuthenticationMethodAutoPartitioningScheme

Partitioning scheme used for this dataset. Using a known scheme like DDSS enables more efficient data reading and retrieval.

## Example Usage

```typescript
import { S3AwsAuthenticationMethodAutoPartitioningScheme } from "cribl-control-plane/models";

let value: S3AwsAuthenticationMethodAutoPartitioningScheme = "ddss";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "ddss" | Unrecognized<string>
```