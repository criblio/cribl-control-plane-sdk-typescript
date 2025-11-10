# InputWindowsMetricsCpuMode1

Select the level of details for CPU metrics

## Example Usage

```typescript
import { InputWindowsMetricsCpuMode1 } from "cribl-control-plane/models";

let value: InputWindowsMetricsCpuMode1 = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```