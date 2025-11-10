# InputFileMode2

Choose how to discover files to monitor

## Example Usage

```typescript
import { InputFileMode2 } from "cribl-control-plane/models";

let value: InputFileMode2 = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "auto" | Unrecognized<string>
```