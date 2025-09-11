# InputFileType

## Example Usage

```typescript
import { InputFileType } from "cribl-control-plane/models";

let value: InputFileType = "file";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"file" | Unrecognized<string>
```