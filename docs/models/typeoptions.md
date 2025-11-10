# TypeOptions

## Example Usage

```typescript
import { TypeOptions } from "cribl-control-plane/models";

let value: TypeOptions = "riptide";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"lake_access" | "riptide" | Unrecognized<string>
```