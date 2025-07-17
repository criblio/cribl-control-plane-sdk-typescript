# InputWindowsMetricsNetworkMode

Select the level of details for network metrics

## Example Usage

```typescript
import { InputWindowsMetricsNetworkMode } from "cribl-control-plane/models";

let value: InputWindowsMetricsNetworkMode = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```