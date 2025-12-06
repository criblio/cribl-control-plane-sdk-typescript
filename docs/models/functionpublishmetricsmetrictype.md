# FunctionPublishMetricsMetricType

## Example Usage

```typescript
import { FunctionPublishMetricsMetricType } from "cribl-control-plane/models";

let value: FunctionPublishMetricsMetricType = "summary";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"counter" | "timer" | "gauge" | "distribution" | "summary" | "histogram" | Unrecognized<string>
```