# Id

## Example Usage

```typescript
import { Id } from "cribl-control-plane/models";

let value: Id = "eval";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"eval" | Unrecognized<string>
```