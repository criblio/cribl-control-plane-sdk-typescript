# DefaultTime

How to set the time field if no timestamp is found

## Example Usage

```typescript
import { DefaultTime } from "cribl-control-plane/models";

let value: DefaultTime = "none";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"now" | "last" | "none" | Unrecognized<string>
```