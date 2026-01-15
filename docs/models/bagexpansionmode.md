# BagExpansionMode

decides if bag-values are expanded to bags or arrays

## Example Usage

```typescript
import { BagExpansionMode } from "cribl-control-plane/models";

let value: BagExpansionMode = "array";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"bag" | "array" | Unrecognized<string>
```