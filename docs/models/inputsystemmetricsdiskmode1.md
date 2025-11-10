# InputSystemMetricsDiskMode1

Select the level of detail for disk metrics

## Example Usage

```typescript
import { InputSystemMetricsDiskMode1 } from "cribl-control-plane/models";

let value: InputSystemMetricsDiskMode1 = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```