# InputSystemMetricsNetworkMode

Select the level of detail for network metrics

## Example Usage

```typescript
import { InputSystemMetricsNetworkMode } from "cribl-control-plane/models";

let value: InputSystemMetricsNetworkMode = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```