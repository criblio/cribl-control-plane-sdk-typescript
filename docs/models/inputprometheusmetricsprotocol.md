# InputPrometheusMetricsProtocol

Protocol to use when collecting metrics

## Example Usage

```typescript
import { InputPrometheusMetricsProtocol } from "cribl-control-plane/models";

let value: InputPrometheusMetricsProtocol = "https";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"http" | "https" | Unrecognized<string>
```