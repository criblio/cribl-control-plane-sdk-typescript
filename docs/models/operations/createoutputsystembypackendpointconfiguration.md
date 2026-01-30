# CreateOutputSystemByPackEndpointConfiguration

Enter the data collection endpoint URL or the individual ID

## Example Usage

```typescript
import { CreateOutputSystemByPackEndpointConfiguration } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackEndpointConfiguration = "url";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"url" | "ID" | Unrecognized<string>
```