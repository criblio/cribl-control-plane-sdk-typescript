# S3PartitioningSchemeNonePartitioningScheme

Partitioning scheme used for this dataset. Using a known scheme like DDSS enables more efficient data reading and retrieval.

## Example Usage

```typescript
import { S3PartitioningSchemeNonePartitioningScheme } from "cribl-control-plane/models";

let value: S3PartitioningSchemeNonePartitioningScheme = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "ddss" | Unrecognized<string>
```