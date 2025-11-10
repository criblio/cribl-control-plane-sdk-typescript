# Type1Options

## Example Usage

```typescript
import { Type1Options } from "cribl-control-plane/models";

let value: Type1Options = "executor";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"collection" | "executor" | "scheduledSearch" | Unrecognized<string>
```