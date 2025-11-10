# EstimatedIngestRateOptions

Maximum expected volume of data ingested by the @{group}. (This setting is available only on @{group}s consisting of Cribl-managed Cribl.Cloud @{node}s.)

## Example Usage

```typescript
import { EstimatedIngestRateOptions } from "cribl-control-plane/models";

let value: EstimatedIngestRateOptions = 2048;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
1024 | 2048 | 3072 | 4096 | 5120 | 7168 | 10240 | 13312 | 15360 | Unrecognized<number>
```