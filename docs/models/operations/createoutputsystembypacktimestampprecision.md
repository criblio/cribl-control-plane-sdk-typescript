# CreateOutputSystemByPackTimestampPrecision

Sets the precision for the supplied Unix time values. Defaults to milliseconds.

## Example Usage

```typescript
import { CreateOutputSystemByPackTimestampPrecision } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackTimestampPrecision = "s";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ns" | "u" | "ms" | "s" | "m" | "h" | Unrecognized<string>
```