# EstimatedIngestRate

## Example Usage

```typescript
import { EstimatedIngestRate } from "cribl-control-plane/models";

let value: EstimatedIngestRate = 5120;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
1024 | 4096 | 10240 | 2048 | 3072 | 5120 | 7168 | 13312 | 15360 | Unrecognized<number>
```