# TimestampPrecision8

Sets the precision for the supplied Unix time values. Defaults to milliseconds.

## Example Usage

```typescript
import { TimestampPrecision8 } from "cribl-control-plane/models";

let value: TimestampPrecision8 = "m";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ns" | "u" | "ms" | "s" | "m" | "h" | Unrecognized<string>
```