# InputWindowsMetricsMode4

Select level of detail for host metrics

## Example Usage

```typescript
import { InputWindowsMetricsMode4 } from "cribl-control-plane/models";

let value: InputWindowsMetricsMode4 = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```