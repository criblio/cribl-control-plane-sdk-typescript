# InputWindowsMetricsMemoryMode

Select the level of details for memory metrics

## Example Usage

```typescript
import { InputWindowsMetricsMemoryMode } from "cribl-control-plane/models/operations";

let value: InputWindowsMetricsMemoryMode = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```