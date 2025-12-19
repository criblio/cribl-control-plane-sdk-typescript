# CpuModeSystemMetrics

Select the level of detail for CPU metrics

## Example Usage

```typescript
import { CpuModeSystemMetrics } from "cribl-control-plane/models/operations";

let value: CpuModeSystemMetrics = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```