# OutputMode1

Format of the returned output

## Example Usage

```typescript
import { OutputMode1 } from "cribl-control-plane/models";

let value: OutputMode1 = "csv";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"csv" | "json" | Unrecognized<string>
```