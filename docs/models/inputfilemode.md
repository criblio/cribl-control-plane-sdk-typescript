# InputFileMode

Choose how to discover files to monitor

## Example Usage

```typescript
import { InputFileMode } from "cribl-control-plane/models";

let value: InputFileMode = "manual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | Unrecognized<string>
```