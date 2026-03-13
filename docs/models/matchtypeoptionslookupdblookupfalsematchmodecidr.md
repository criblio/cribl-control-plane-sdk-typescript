# MatchTypeOptionsLookupDbLookupFalseMatchModeCidr

Further defines how to handle multiple matches: return the first match, the most specific match, or all matches

## Example Usage

```typescript
import { MatchTypeOptionsLookupDbLookupFalseMatchModeCidr } from "cribl-control-plane/models";

let value: MatchTypeOptionsLookupDbLookupFalseMatchModeCidr = "first";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"first" | "specific" | "all" | Unrecognized<string>
```