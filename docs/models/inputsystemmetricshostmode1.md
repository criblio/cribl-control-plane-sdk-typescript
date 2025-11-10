# InputSystemMetricsHostMode1

Select level of detail for host metrics

## Example Usage

```typescript
import { InputSystemMetricsHostMode1 } from "cribl-control-plane/models";

let value: InputSystemMetricsHostMode1 = "basic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```