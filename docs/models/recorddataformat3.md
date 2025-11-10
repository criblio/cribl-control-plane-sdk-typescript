# RecordDataFormat3

Format of data inside the Kinesis Stream records. Gzip compression is automatically detected.

## Example Usage

```typescript
import { RecordDataFormat3 } from "cribl-control-plane/models";

let value: RecordDataFormat3 = "line";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cribl" | "ndjson" | "cloudwatch" | "line" | Unrecognized<string>
```