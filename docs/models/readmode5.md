# ReadMode5

Read all stored and future event logs, or only future events

## Example Usage

```typescript
import { ReadMode5 } from "cribl-control-plane/models";

let value: ReadMode5 = "oldest";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"oldest" | "newest" | Unrecognized<string>
```