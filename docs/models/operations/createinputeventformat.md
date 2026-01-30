# CreateInputEventFormat

Format of individual events

## Example Usage

```typescript
import { CreateInputEventFormat } from "cribl-control-plane/models/operations";

let value: CreateInputEventFormat = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "xml" | Unrecognized<string>
```