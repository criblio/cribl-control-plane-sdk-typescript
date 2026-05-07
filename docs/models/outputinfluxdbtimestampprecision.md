# OutputInfluxdbTimestampPrecision

Sets the precision for the supplied Unix time values. Defaults to milliseconds.

## Example Usage

```typescript
import { OutputInfluxdbTimestampPrecision } from "cribl-control-plane/models";

let value: OutputInfluxdbTimestampPrecision = "s";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ns" | "u" | "ms" | "s" | "m" | "h" | Unrecognized<string>
```