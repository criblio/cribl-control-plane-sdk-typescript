# PartitioningScheme

Partitioning scheme used for this dataset. Using a known scheme like DDSS enables more efficient data reading and retrieval.

## Example Usage

```typescript
import { PartitioningScheme } from "cribl-control-plane/models";

let value: PartitioningScheme = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "ddss" | Unrecognized<string>
```