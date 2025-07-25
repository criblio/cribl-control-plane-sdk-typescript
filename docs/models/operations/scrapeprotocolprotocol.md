# ScrapeProtocolProtocol

Protocol to use when collecting metrics

## Example Usage

```typescript
import { ScrapeProtocolProtocol } from "cribl-control-plane/models/operations";

let value: ScrapeProtocolProtocol = "http";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"http" | "https" | Unrecognized<string>
```