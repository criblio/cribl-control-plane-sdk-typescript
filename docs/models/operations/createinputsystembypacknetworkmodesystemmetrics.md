# CreateInputSystemByPackNetworkModeSystemMetrics

Select the level of detail for network metrics

## Example Usage

```typescript
import { CreateInputSystemByPackNetworkModeSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackNetworkModeSystemMetrics = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```