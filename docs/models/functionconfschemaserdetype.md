# FunctionConfSchemaSerdeType

Parser or formatter type to use

## Example Usage

```typescript
import { FunctionConfSchemaSerdeType } from "cribl-control-plane/models";

let value: FunctionConfSchemaSerdeType = "delim";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"csv" | "elff" | "clf" | "kvp" | "json" | "delim" | "regex" | "grok" | Unrecognized<string>
```