# InputResponseMetricsProtocol

Protocol to use when collecting metrics

## Example Usage

```typescript
import { InputResponseMetricsProtocol } from "cribl-control-plane/models";

let value: InputResponseMetricsProtocol = "https";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"http" | "https" | Unrecognized<string>
```