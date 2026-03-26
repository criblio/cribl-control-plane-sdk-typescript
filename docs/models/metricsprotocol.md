# MetricsProtocol

Protocol to use when collecting metrics

## Example Usage

```typescript
import { MetricsProtocol } from "cribl-control-plane/models";

let value: MetricsProtocol = "https";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"http" | "https" | Unrecognized<string>
```