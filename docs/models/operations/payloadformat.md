# PayloadFormat

Format to use when sending payload. Defaults to Text.

## Example Usage

```typescript
import { PayloadFormat } from "cribl-control-plane/models/operations";

let value: PayloadFormat = "text";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "json" | Unrecognized<string>
```