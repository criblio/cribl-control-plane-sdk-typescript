# AutoApplyMode

## Example Usage

```typescript
import { AutoApplyMode } from "cribl-control-plane/models";

let value: AutoApplyMode = "metric";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"off" | "metric" | "all" | Unrecognized<string>
```