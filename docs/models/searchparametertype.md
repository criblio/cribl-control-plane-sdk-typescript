# SearchParameterType

## Example Usage

```typescript
import { SearchParameterType } from "cribl-control-plane/models";

let value: SearchParameterType = "string";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"string" | "number" | "boolean" | Unrecognized<string>
```