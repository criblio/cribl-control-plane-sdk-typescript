# PrefixOptional7

## Example Usage

```typescript
import { PrefixOptional7 } from "cribl-control-plane/models";

let value: PrefixOptional7 = "dropBy";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"dropBy" | "ingestBy" | Unrecognized<string>
```