# CpuModeWindowsMetrics

Select the level of details for CPU metrics

## Example Usage

```typescript
import { CpuModeWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CpuModeWindowsMetrics = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```