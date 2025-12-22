# HostModeSystemMetrics

Select level of detail for host metrics

## Example Usage

```typescript
import { HostModeSystemMetrics } from "cribl-control-plane/models/operations";

let value: HostModeSystemMetrics = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```