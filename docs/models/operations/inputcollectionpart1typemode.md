# InputCollectionPart1TypeMode

Choose how to discover files to monitor

## Example Usage

```typescript
import { InputCollectionPart1TypeMode } from "cribl-control-plane/models/operations";

let value: InputCollectionPart1TypeMode = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "auto" | Unrecognized<string>
```