# CreateOutputSystemByPackTimestampPrecision

Sets the precision for the supplied Unix time values. Defaults to milliseconds.

## Example Usage

```typescript
import { CreateOutputSystemByPackTimestampPrecision } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackTimestampPrecision = "s";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ns" | "u" | "ms" | "s" | "m" | "h" | Unrecognized<string>
```