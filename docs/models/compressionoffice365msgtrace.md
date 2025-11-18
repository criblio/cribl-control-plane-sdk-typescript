# CompressionOffice365MsgTrace

Codec to use to compress the persisted data

## Example Usage

```typescript
import { CompressionOffice365MsgTrace } from "cribl-control-plane/models";

let value: CompressionOffice365MsgTrace = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```