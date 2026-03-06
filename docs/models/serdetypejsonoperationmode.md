# SerdeTypeJsonOperationMode

Extract creates new fields. Reserialize extracts and filters fields, and then reserializes.

## Example Usage

```typescript
import { SerdeTypeJsonOperationMode } from "cribl-control-plane/models";

let value: SerdeTypeJsonOperationMode = "extract";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"extract" | "reserialize" | Unrecognized<string>
```