# InputWindowsMetricsSystemMode1

Select the level of details for system metrics

## Example Usage

```typescript
import { InputWindowsMetricsSystemMode1 } from "cribl-control-plane/models";

let value: InputWindowsMetricsSystemMode1 = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```