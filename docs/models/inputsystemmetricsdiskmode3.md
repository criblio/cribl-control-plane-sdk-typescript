# InputSystemMetricsDiskMode3

Select the level of detail for disk metrics

## Example Usage

```typescript
import { InputSystemMetricsDiskMode3 } from "cribl-control-plane/models";

let value: InputSystemMetricsDiskMode3 = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```