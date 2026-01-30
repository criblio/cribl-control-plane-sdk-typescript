# CreateInputSystemByPackSystemModeSystemMetrics

Select the level of detail for system metrics

## Example Usage

```typescript
import { CreateInputSystemByPackSystemModeSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackSystemModeSystemMetrics = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```