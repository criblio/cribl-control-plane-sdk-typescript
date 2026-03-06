# SerdeTypeDelimOperationMode

Extract creates new fields. Reserialize extracts and filters fields, and then reserializes.

## Example Usage

```typescript
import { SerdeTypeDelimOperationMode } from "cribl-control-plane/models";

let value: SerdeTypeDelimOperationMode = "reserialize";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"extract" | "reserialize" | Unrecognized<string>
```