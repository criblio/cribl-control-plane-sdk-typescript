# CreateInputReadMode

Read all stored and future event logs, or only future events

## Example Usage

```typescript
import { CreateInputReadMode } from "cribl-control-plane/models/operations";

let value: CreateInputReadMode = "newest";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oldest" | "newest" | Unrecognized<string>
```