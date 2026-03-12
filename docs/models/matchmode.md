# MatchMode

Specifies the matching method based on the format and logic used in the lookup file

## Example Usage

```typescript
import { MatchMode } from "cribl-control-plane/models";

let value: MatchMode = "exact";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"exact" | "cidr" | "regex" | Unrecognized<string>
```