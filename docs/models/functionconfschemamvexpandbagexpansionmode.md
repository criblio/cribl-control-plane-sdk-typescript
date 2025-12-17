# FunctionConfSchemaMvExpandBagExpansionMode

decides if bag-values are expanded to bags or arrays

## Example Usage

```typescript
import { FunctionConfSchemaMvExpandBagExpansionMode } from "cribl-control-plane/models";

let value: FunctionConfSchemaMvExpandBagExpansionMode = "array";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"bag" | "array" | Unrecognized<string>
```