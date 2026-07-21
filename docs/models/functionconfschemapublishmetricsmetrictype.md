# FunctionConfSchemaPublishMetricsMetricType

The type of metric to publish (counter, timer, gauge, distribution, summary, or histogram).

## Example Usage

```typescript
import { FunctionConfSchemaPublishMetricsMetricType } from "cribl-control-plane/models";

let value: FunctionConfSchemaPublishMetricsMetricType = "distribution";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"counter" | "timer" | "gauge" | "distribution" | "summary" | "histogram" | Unrecognized<string>
```