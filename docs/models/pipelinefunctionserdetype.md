# PipelineFunctionSerdeType

Parser or formatter type to use

## Example Usage

```typescript
import { PipelineFunctionSerdeType } from "cribl-control-plane/models";

let value: PipelineFunctionSerdeType = "elff";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"csv" | "elff" | "clf" | "kvp" | "json" | "delim" | "regex" | "grok" | Unrecognized<string>
```