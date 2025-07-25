# OutputSplunkCompressCompression

Controls whether the sender should send compressed data to the server. Select 'Disabled' to reject compressed connections or 'Always' to ignore server's configuration and send compressed data.

## Example Usage

```typescript
import { OutputSplunkCompressCompression } from "cribl-control-plane/models";

let value: OutputSplunkCompressCompression = "auto";
```

## Values

```typescript
"disabled" | "auto" | "always"
```