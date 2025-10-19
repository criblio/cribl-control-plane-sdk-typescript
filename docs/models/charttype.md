# ChartType

## Example Usage

```typescript
import { ChartType } from "cribl-control-plane/models";

let value: ChartType = "area";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"area" | "column" | "events" | "funnel" | "gauge" | "horizontalBar" | "line" | "map" | "pie" | "scatter" | "single" | "table" | Unrecognized<string>
```