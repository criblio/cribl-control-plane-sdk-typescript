# SystemModeWindowsMetrics

Select the level of details for system metrics

## Example Usage

```typescript
import { SystemModeWindowsMetrics } from "cribl-control-plane/models";

let value: SystemModeWindowsMetrics = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```