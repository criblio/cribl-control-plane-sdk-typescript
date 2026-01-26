# FunctionConfSchemaPublishMetricsMetricType

## Example Usage

```typescript
import { FunctionConfSchemaPublishMetricsMetricType } from "cribl-control-plane/models";

let value: FunctionConfSchemaPublishMetricsMetricType = "distribution";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"counter" | "timer" | "gauge" | "distribution" | "summary" | "histogram" | Unrecognized<string>
```