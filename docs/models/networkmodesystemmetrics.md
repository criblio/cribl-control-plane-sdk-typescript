# NetworkModeSystemMetrics

Select the level of detail for network metrics

## Example Usage

```typescript
import { NetworkModeSystemMetrics } from "cribl-control-plane/models";

let value: NetworkModeSystemMetrics = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```