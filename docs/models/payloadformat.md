# PayloadFormat

Format to use when sending payload. Defaults to Text.

## Example Usage

```typescript
import { PayloadFormat } from "cribl-control-plane/models";

let value: PayloadFormat = "text";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"text" | "json" | Unrecognized<string>
```