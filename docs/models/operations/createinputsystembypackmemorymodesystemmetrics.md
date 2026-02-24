# CreateInputSystemByPackMemoryModeSystemMetrics

Select the level of detail for memory metrics

## Example Usage

```typescript
import { CreateInputSystemByPackMemoryModeSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackMemoryModeSystemMetrics = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```