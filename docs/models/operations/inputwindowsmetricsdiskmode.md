# InputWindowsMetricsDiskMode

Select the level of details for disk metrics

## Example Usage

```typescript
import { InputWindowsMetricsDiskMode } from "cribl-control-plane/models/operations";

let value: InputWindowsMetricsDiskMode = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```