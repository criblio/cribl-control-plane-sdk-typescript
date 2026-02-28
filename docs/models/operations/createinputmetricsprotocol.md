# CreateInputMetricsProtocol

Protocol to use when collecting metrics

## Example Usage

```typescript
import { CreateInputMetricsProtocol } from "cribl-control-plane/models/operations";

let value: CreateInputMetricsProtocol = "https";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"http" | "https" | Unrecognized<string>
```