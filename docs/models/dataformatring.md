# DataFormatRing

Format of the output data.

## Example Usage

```typescript
import { DataFormatRing } from "cribl-control-plane/models";

let value: DataFormatRing = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "raw" | Unrecognized<string>
```