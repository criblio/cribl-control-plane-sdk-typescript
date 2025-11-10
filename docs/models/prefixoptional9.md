# PrefixOptional9

## Example Usage

```typescript
import { PrefixOptional9 } from "cribl-control-plane/models";

let value: PrefixOptional9 = "dropBy";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"dropBy" | "ingestBy" | Unrecognized<string>
```