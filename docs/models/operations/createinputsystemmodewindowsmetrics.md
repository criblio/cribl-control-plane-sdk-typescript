# CreateInputSystemModeWindowsMetrics

Select the level of details for system metrics

## Example Usage

```typescript
import { CreateInputSystemModeWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemModeWindowsMetrics = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```