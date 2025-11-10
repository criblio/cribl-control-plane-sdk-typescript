# PrefixOptional5

## Example Usage

```typescript
import { PrefixOptional5 } from "cribl-control-plane/models";

let value: PrefixOptional5 = "ingestBy";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"dropBy" | "ingestBy" | Unrecognized<string>
```