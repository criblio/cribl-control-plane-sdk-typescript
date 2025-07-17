# InputWindowsMetricsSystemMode

Select the level of details for system metrics

## Example Usage

```typescript
import { InputWindowsMetricsSystemMode } from "cribl-control-plane/models";

let value: InputWindowsMetricsSystemMode = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```