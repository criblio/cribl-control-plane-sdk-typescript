# SerdeTypeGrokOperationMode

Extract creates new fields. Reserialize extracts and filters fields, and then reserializes.

## Example Usage

```typescript
import { SerdeTypeGrokOperationMode } from "cribl-control-plane/models";

let value: SerdeTypeGrokOperationMode = "extract";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"extract" | "reserialize" | Unrecognized<string>
```