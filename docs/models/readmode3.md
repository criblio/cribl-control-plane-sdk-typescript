# ReadMode3

Read all stored and future event logs, or only future events

## Example Usage

```typescript
import { ReadMode3 } from "cribl-control-plane/models";

let value: ReadMode3 = "oldest";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"oldest" | "newest" | Unrecognized<string>
```