# MemoryModeWindowsMetrics

Select the level of details for memory metrics

## Example Usage

```typescript
import { MemoryModeWindowsMetrics } from "cribl-control-plane/models";

let value: MemoryModeWindowsMetrics = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```