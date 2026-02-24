# CreateInputSystemByPackCpuModeSystemMetrics

Select the level of detail for CPU metrics

## Example Usage

```typescript
import { CreateInputSystemByPackCpuModeSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackCpuModeSystemMetrics = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```