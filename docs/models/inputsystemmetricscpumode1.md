# InputSystemMetricsCpuMode1

Select the level of detail for CPU metrics

## Example Usage

```typescript
import { InputSystemMetricsCpuMode1 } from "cribl-control-plane/models";

let value: InputSystemMetricsCpuMode1 = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```