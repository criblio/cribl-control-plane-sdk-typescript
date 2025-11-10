# InputFileMode8

Choose how to discover files to monitor

## Example Usage

```typescript
import { InputFileMode8 } from "cribl-control-plane/models";

let value: InputFileMode8 = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "auto" | Unrecognized<string>
```