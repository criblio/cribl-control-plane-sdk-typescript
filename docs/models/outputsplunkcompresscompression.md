# OutputSplunkCompressCompression

Controls whether the sender should send compressed data to the server. Select 'Disabled' to reject compressed connections or 'Always' to ignore server's configuration and send compressed data.

## Example Usage

```typescript
import { OutputSplunkCompressCompression } from "cribl-control-plane/models";

let value: OutputSplunkCompressCompression = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"disabled" | "auto" | "always" | Unrecognized<string>
```