# ServerSideEncryption

Server-side encryption for uploaded objects

## Example Usage

```typescript
import { ServerSideEncryption } from "cribl-control-plane/models/operations";

let value: ServerSideEncryption = "AES256";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AES256" | Unrecognized<string>
```