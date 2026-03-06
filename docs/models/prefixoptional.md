# PrefixOptional

## Example Usage

```typescript
import { PrefixOptional } from "cribl-control-plane/models";

let value: PrefixOptional = "ingestBy";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"dropBy" | "ingestBy" | Unrecognized<string>
```