# CreateInputSystemByPackDiskModeWindowsMetrics

Select the level of details for disk metrics

## Example Usage

```typescript
import { CreateInputSystemByPackDiskModeWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackDiskModeWindowsMetrics = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```