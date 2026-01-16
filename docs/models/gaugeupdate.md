# GaugeUpdate

The operation to use when rolling up gauge metrics. Defaults to last.

## Example Usage

```typescript
import { GaugeUpdate } from "cribl-control-plane/models";

let value: GaugeUpdate = "last";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"last" | "max" | "min" | "avg" | Unrecognized<string>
```