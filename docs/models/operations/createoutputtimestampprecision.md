# CreateOutputTimestampPrecision

Sets the precision for the supplied Unix time values. Defaults to milliseconds.

## Example Usage

```typescript
import { CreateOutputTimestampPrecision } from "cribl-control-plane/models/operations";

let value: CreateOutputTimestampPrecision = "ms";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ns" | "u" | "ms" | "s" | "m" | "h" | Unrecognized<string>
```