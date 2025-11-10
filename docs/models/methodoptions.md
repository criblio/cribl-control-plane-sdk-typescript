# MethodOptions

## Example Usage

```typescript
import { MethodOptions } from "cribl-control-plane/models";

let value: MethodOptions = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "auto" | "auto_rpc" | Unrecognized<string>
```