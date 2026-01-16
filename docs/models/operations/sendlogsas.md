# SendLogsAs

The content type to use when sending logs

## Example Usage

```typescript
import { SendLogsAs } from "cribl-control-plane/models/operations";

let value: SendLogsAs = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "json" | Unrecognized<string>
```