# PipelineFunctionSerializeType

Data output format

## Example Usage

```typescript
import { PipelineFunctionSerializeType } from "cribl-control-plane/models";

let value: PipelineFunctionSerializeType = "elff";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"csv" | "elff" | "clf" | "kvp" | "json" | "delim" | Unrecognized<string>
```