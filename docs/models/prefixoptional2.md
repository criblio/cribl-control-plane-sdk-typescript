# PrefixOptional2

## Example Usage

```typescript
import { PrefixOptional2 } from "cribl-control-plane/models";

let value: PrefixOptional2 = "ingestBy";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"dropBy" | "ingestBy" | Unrecognized<string>
```