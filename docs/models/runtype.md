# RunType

## Example Usage

```typescript
import { RunType } from "cribl-control-plane/models";

let value: RunType = "scheduled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"adhoc" | "scheduled" | "system" | Unrecognized<string>
```