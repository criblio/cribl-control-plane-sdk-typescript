# CreateInputSystemByPackMetricsProtocol

Protocol to use when collecting metrics

## Example Usage

```typescript
import { CreateInputSystemByPackMetricsProtocol } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackMetricsProtocol = "https";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"http" | "https" | Unrecognized<string>
```