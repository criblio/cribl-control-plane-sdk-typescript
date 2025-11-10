# InputWindowsMetricsMode3

Select level of detail for host metrics

## Example Usage

```typescript
import { InputWindowsMetricsMode3 } from "cribl-control-plane/models";

let value: InputWindowsMetricsMode3 = "all";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```