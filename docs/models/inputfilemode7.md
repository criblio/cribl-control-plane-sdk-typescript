# InputFileMode7

Choose how to discover files to monitor

## Example Usage

```typescript
import { InputFileMode7 } from "cribl-control-plane/models";

let value: InputFileMode7 = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "auto" | Unrecognized<string>
```