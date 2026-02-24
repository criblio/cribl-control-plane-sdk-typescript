# CreateInputSystemByPackMemoryModeWindowsMetrics

Select the level of details for memory metrics

## Example Usage

```typescript
import { CreateInputSystemByPackMemoryModeWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackMemoryModeWindowsMetrics = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```