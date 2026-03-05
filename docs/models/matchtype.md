# MatchType

Further defines how to handle multiple matches: return the first match, the most specific match, or all matches

## Example Usage

```typescript
import { MatchType } from "cribl-control-plane/models";

let value: MatchType = "first";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"first" | "specific" | "all" | Unrecognized<string>
```