# CollectorS3AuthenticationMethod4

AWS authentication method. Choose Auto to use IAM roles.

## Example Usage

```typescript
import { CollectorS3AuthenticationMethod4 } from "cribl-control-plane/models";

let value: CollectorS3AuthenticationMethod4 = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | "secret" | Unrecognized<string>
```