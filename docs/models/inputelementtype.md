# InputElementType

## Example Usage

```typescript
import { InputElementType } from "cribl-control-plane/models";

let value: InputElementType = "input.timerange";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"input.timerange" | "input.dropdown" | "input.text" | "input.number" | Unrecognized<string>
```