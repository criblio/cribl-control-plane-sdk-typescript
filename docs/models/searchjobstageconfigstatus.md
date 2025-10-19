# SearchJobStageConfigStatus

## Example Usage

```typescript
import { SearchJobStageConfigStatus } from "cribl-control-plane/models";

let value: SearchJobStageConfigStatus = "queued";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"failed" | "new" | "running" | "completed" | "canceled" | "queued" | Unrecognized<string>
```