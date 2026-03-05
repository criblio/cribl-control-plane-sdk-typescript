# SerdeTypeCsvOperationMode

Extract creates new fields. Reserialize extracts and filters fields, and then reserializes.

## Example Usage

```typescript
import { SerdeTypeCsvOperationMode } from "cribl-control-plane/models";

let value: SerdeTypeCsvOperationMode = "reserialize";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"extract" | "reserialize" | Unrecognized<string>
```