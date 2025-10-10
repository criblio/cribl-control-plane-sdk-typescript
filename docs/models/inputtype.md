# InputType

## Example Usage

```typescript
import { InputType } from "cribl-control-plane/models";

let value: InputType = "collection";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"collection" | Unrecognized<string>
```