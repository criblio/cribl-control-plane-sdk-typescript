# ExistingOrNew

## Example Usage

```typescript
import { ExistingOrNew } from "cribl-control-plane/models";

let value: ExistingOrNew = "new";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"existing" | "new" | Unrecognized<string>
```