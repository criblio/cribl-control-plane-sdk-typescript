# InputTypeType

## Example Usage

```typescript
import { InputTypeType } from "cribl-control-plane/models";

let value: InputTypeType = "collection";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"collection" | Unrecognized<string>
```