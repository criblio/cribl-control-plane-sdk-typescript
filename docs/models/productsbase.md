# ProductsBase

## Example Usage

```typescript
import { ProductsBase } from "cribl-control-plane/models";

let value: ProductsBase = "stream";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"stream" | "edge" | Unrecognized<string>
```