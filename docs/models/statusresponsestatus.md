# StatusResponseStatus

## Example Usage

```typescript
import { StatusResponseStatus } from "cribl-control-plane/models";

let value: StatusResponseStatus = "new";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"failed" | "new" | "running" | "completed" | "canceled" | "queued" | Unrecognized<string>
```