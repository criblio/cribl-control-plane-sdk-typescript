# InputFileMode3

Choose how to discover files to monitor

## Example Usage

```typescript
import { InputFileMode3 } from "cribl-control-plane/models";

let value: InputFileMode3 = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "auto" | Unrecognized<string>
```