# InputSystemMetricsCpuMode

Select the level of detail for CPU metrics

## Example Usage

```typescript
import { InputSystemMetricsCpuMode } from "cribl-control-plane/models";

let value: InputSystemMetricsCpuMode = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```