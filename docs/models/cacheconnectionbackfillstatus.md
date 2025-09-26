# CacheConnectionBackfillStatus

## Example Usage

```typescript
import { CacheConnectionBackfillStatus } from "cribl-control-plane/models";

let value: CacheConnectionBackfillStatus = "scheduled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"scheduled" | "pending" | "started" | "finished" | "incomplete" | Unrecognized<string>
```