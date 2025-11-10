# InputFileMode4

Choose how to discover files to monitor

## Example Usage

```typescript
import { InputFileMode4 } from "cribl-control-plane/models";

let value: InputFileMode4 = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "auto" | Unrecognized<string>
```