# CreateOutputSystemByPackPayloadFormat

Format to use when sending payload. Defaults to Text.

## Example Usage

```typescript
import { CreateOutputSystemByPackPayloadFormat } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackPayloadFormat = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "json" | Unrecognized<string>
```