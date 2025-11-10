# PrefixOptional8

## Example Usage

```typescript
import { PrefixOptional8 } from "cribl-control-plane/models";

let value: PrefixOptional8 = "ingestBy";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"dropBy" | "ingestBy" | Unrecognized<string>
```