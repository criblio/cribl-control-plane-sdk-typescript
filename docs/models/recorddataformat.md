# RecordDataFormat

Format of data inside the Kinesis Stream records. Gzip compression is automatically detected.

## Example Usage

```typescript
import { RecordDataFormat } from "cribl-control-plane/models";

let value: RecordDataFormat = "line";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"cribl" | "ndjson" | "cloudwatch" | "line" | Unrecognized<string>
```