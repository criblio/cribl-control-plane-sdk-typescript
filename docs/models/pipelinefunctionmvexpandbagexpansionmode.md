# PipelineFunctionMvExpandBagExpansionMode

decides if bag-values are expanded to bags or arrays

## Example Usage

```typescript
import { PipelineFunctionMvExpandBagExpansionMode } from "cribl-control-plane/models";

let value: PipelineFunctionMvExpandBagExpansionMode = "bag";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"bag" | "array" | Unrecognized<string>
```