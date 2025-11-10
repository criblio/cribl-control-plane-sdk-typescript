# InputSystemMetricsDiskMode4

Select the level of detail for disk metrics

## Example Usage

```typescript
import { InputSystemMetricsDiskMode4 } from "cribl-control-plane/models";

let value: InputSystemMetricsDiskMode4 = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```