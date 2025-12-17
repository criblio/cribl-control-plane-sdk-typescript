# FunctionConfSchemaSerializeType

Data output format

## Example Usage

```typescript
import { FunctionConfSchemaSerializeType } from "cribl-control-plane/models";

let value: FunctionConfSchemaSerializeType = "delim";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"csv" | "elff" | "clf" | "kvp" | "json" | "delim" | Unrecognized<string>
```