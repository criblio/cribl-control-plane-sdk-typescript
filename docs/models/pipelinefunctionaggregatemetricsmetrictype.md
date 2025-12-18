# PipelineFunctionAggregateMetricsMetricType

The output metric type

## Example Usage

```typescript
import { PipelineFunctionAggregateMetricsMetricType } from "cribl-control-plane/models";

let value: PipelineFunctionAggregateMetricsMetricType = "automatic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"automatic" | "counter" | "distribution" | "gauge" | "histogram" | "summary" | "timer" | Unrecognized<string>
```