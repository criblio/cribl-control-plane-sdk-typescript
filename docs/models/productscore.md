# ProductsCore

## Example Usage

```typescript
import { ProductsCore } from "cribl-control-plane/models";

let value: ProductsCore = "edge";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"stream" | "edge" | Unrecognized<string>
```