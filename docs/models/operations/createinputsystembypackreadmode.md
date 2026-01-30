# CreateInputSystemByPackReadMode

Read all stored and future event logs, or only future events

## Example Usage

```typescript
import { CreateInputSystemByPackReadMode } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackReadMode = "newest";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"oldest" | "newest" | Unrecognized<string>
```