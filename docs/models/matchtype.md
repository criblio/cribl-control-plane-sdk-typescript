# MatchType

Further defines how to handle multiple matches: return the first match, the most specific match, or all matches

## Example Usage

```typescript
import { MatchType } from "cribl-control-plane/models";

let value: MatchType = "first";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"first" | "specific" | "all" | Unrecognized<string>
```