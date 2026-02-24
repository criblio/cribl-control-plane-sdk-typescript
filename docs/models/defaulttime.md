# DefaultTime

How to set the time field if no timestamp is found

## Example Usage

```typescript
import { DefaultTime } from "cribl-control-plane/models";

let value: DefaultTime = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"now" | "last" | "none" | Unrecognized<string>
```