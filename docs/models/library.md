# Library

## Example Usage

```typescript
import { Library } from "cribl-control-plane/models";

let value: Library = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"custom" | "cribl-custom" | Unrecognized<string>
```