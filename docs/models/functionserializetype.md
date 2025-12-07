# FunctionSerializeType

Data output format

## Example Usage

```typescript
import { FunctionSerializeType } from "cribl-control-plane/models";

let value: FunctionSerializeType = "csv";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"csv" | "elff" | "clf" | "kvp" | "json" | "delim" | Unrecognized<string>
```