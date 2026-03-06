# BagExpansionMode

decides if bag-values are expanded to bags or arrays

## Example Usage

```typescript
import { BagExpansionMode } from "cribl-control-plane/models";

let value: BagExpansionMode = "array";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"bag" | "array" | Unrecognized<string>
```