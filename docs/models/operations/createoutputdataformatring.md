# CreateOutputDataFormatRing

Format of the output data.

## Example Usage

```typescript
import { CreateOutputDataFormatRing } from "cribl-control-plane/models/operations";

let value: CreateOutputDataFormatRing = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | Unrecognized<string>
```