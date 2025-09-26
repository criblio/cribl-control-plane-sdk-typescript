# PrefixOptional

## Example Usage

```typescript
import { PrefixOptional } from "cribl-control-plane/models";

let value: PrefixOptional = "ingestBy";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"dropBy" | "ingestBy" | Unrecognized<string>
```