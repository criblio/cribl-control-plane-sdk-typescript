# CreateInputSystemByPackCpuModeWindowsMetrics

Select the level of details for CPU metrics

## Example Usage

```typescript
import { CreateInputSystemByPackCpuModeWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackCpuModeWindowsMetrics = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```