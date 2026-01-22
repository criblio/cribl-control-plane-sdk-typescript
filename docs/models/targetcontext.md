# TargetContext

## Example Usage

```typescript
import { TargetContext } from "cribl-control-plane/models";

let value: TargetContext = "group";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"group" | "pack" | Unrecognized<string>
```