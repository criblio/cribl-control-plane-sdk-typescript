# OutputHumioHecRequestFormat

When set to JSON, the event is automatically formatted with required fields before sending. When set to Raw, only the event's `_raw` value is sent.

## Example Usage

```typescript
import { OutputHumioHecRequestFormat } from "cribl-control-plane/models";

let value: OutputHumioHecRequestFormat = "JSON";
```

## Values

```typescript
"JSON" | "raw"
```