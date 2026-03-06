# ReadMode

Read all stored and future event logs, or only future events

## Example Usage

```typescript
import { ReadMode } from "cribl-control-plane/models";

let value: ReadMode = "newest";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oldest" | "newest" | Unrecognized<string>
```