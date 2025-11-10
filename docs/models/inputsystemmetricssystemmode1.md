# InputSystemMetricsSystemMode1

Select the level of detail for system metrics

## Example Usage

```typescript
import { InputSystemMetricsSystemMode1 } from "cribl-control-plane/models";

let value: InputSystemMetricsSystemMode1 = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```