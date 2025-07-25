# OutputSplunkLbCompressCompression

Controls whether the sender should send compressed data to the server. Select 'Disabled' to reject compressed connections or 'Always' to ignore server's configuration and send compressed data.

## Example Usage

```typescript
import { OutputSplunkLbCompressCompression } from "cribl-control-plane/models/operations";

let value: OutputSplunkLbCompressCompression = "always";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"disabled" | "auto" | "always" | Unrecognized<string>
```