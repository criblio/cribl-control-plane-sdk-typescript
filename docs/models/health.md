# Health

Health status of the persistent queue.

## Example Usage

```typescript
import { Health } from "cribl-control-plane/models";

let value: Health = "Unknown";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Green" | "Red" | "Unknown" | "Yellow" | Unrecognized<string>
```