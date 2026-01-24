# EstimatedIngestRateOptionsConfigGroup

Estimated ingest rate for Cloud Groups, in GB/sec.

## Example Usage

```typescript
import { EstimatedIngestRateOptionsConfigGroup } from "cribl-control-plane/models";

let value: EstimatedIngestRateOptionsConfigGroup = 4096;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<number>` branded type.

```typescript
1024 | 2048 | 3072 | 4096 | 5120 | 7168 | 10240 | 13312 | 15360 | Unrecognized<number>
```