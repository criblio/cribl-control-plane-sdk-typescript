# InputSystemMetricsMemoryMode

Select the level of detail for memory metrics

## Example Usage

```typescript
import { InputSystemMetricsMemoryMode } from "cribl-control-plane/models";

let value: InputSystemMetricsMemoryMode = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"basic" | "all" | "custom" | "disabled" | Unrecognized<string>
```