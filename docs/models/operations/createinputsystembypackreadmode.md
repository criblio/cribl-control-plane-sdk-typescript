# CreateInputSystemByPackReadMode

Read all stored and future event logs, or only future events

## Example Usage

```typescript
import { CreateInputSystemByPackReadMode } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackReadMode = "newest";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oldest" | "newest" | Unrecognized<string>
```