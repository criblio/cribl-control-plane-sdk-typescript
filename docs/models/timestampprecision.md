# TimestampPrecision

Sets the precision for the supplied Unix time values. Defaults to milliseconds.

## Example Usage

```typescript
import { TimestampPrecision } from "cribl-control-plane/models";

let value: TimestampPrecision = "m";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ns" | "u" | "ms" | "s" | "m" | "h" | Unrecognized<string>
```