# DiskModeWindowsMetrics

Select the level of details for disk metrics

## Example Usage

```typescript
import { DiskModeWindowsMetrics } from "cribl-control-plane/models";

let value: DiskModeWindowsMetrics = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```