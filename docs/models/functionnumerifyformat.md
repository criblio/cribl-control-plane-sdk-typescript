# FunctionNumerifyFormat

## Example Usage

```typescript
import { FunctionNumerifyFormat } from "cribl-control-plane/models";

let value: FunctionNumerifyFormat = "ceil";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "fix" | "floor" | "ceil" | Unrecognized<string>
```