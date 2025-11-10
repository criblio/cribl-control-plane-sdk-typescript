# PrefixOptional4

## Example Usage

```typescript
import { PrefixOptional4 } from "cribl-control-plane/models";

let value: PrefixOptional4 = "dropBy";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"dropBy" | "ingestBy" | Unrecognized<string>
```