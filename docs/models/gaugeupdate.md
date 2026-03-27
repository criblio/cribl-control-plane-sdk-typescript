# GaugeUpdate

The operation to use when rolling up gauge metrics. Defaults to last.

## Example Usage

```typescript
import { GaugeUpdate } from "cribl-control-plane/models";

let value: GaugeUpdate = "last";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"last" | "max" | "min" | "avg" | Unrecognized<string>
```