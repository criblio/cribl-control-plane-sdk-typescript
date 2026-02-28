# CreateInputSystemByPackDiskModeSystemMetrics

Select the level of detail for disk metrics

## Example Usage

```typescript
import { CreateInputSystemByPackDiskModeSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackDiskModeSystemMetrics = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```