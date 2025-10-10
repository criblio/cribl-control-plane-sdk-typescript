# RemoteEnum

## Example Usage

```typescript
import { RemoteEnum } from "cribl-control-plane/models";

let value: RemoteEnum = "false";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"false" | Unrecognized<string>
```