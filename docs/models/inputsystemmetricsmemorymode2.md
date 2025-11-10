# InputSystemMetricsMemoryMode2

Select the level of detail for memory metrics

## Example Usage

```typescript
import { InputSystemMetricsMemoryMode2 } from "cribl-control-plane/models";

let value: InputSystemMetricsMemoryMode2 = "disabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```