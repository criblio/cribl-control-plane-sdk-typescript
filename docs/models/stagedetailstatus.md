# StageDetailStatus

## Example Usage

```typescript
import { StageDetailStatus } from "cribl-control-plane/models";

let value: StageDetailStatus = "failed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"failed" | "new" | "running" | "completed" | "canceled" | "queued" | Unrecognized<string>
```