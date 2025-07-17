# MetricsProtocol

Protocol to use when collecting metrics

## Example Usage

```typescript
import { MetricsProtocol } from "cribl-control-plane/models";

let value: MetricsProtocol = "https";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"http" | "https" | Unrecognized<string>
```