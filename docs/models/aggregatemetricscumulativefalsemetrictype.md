# AggregateMetricsCumulativeFalseMetricType

The output metric type

## Example Usage

```typescript
import { AggregateMetricsCumulativeFalseMetricType } from "cribl-control-plane/models";

let value: AggregateMetricsCumulativeFalseMetricType = "automatic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"automatic" | "counter" | "distribution" | "gauge" | "histogram" | "summary" | "timer" | Unrecognized<string>
```