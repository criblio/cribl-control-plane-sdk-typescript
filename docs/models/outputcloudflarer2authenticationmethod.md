# OutputCloudflareR2AuthenticationMethod

AWS authentication method. Choose Auto to use IAM roles.

## Example Usage

```typescript
import { OutputCloudflareR2AuthenticationMethod } from "cribl-control-plane/models";

let value: OutputCloudflareR2AuthenticationMethod = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "secret" | Unrecognized<string>
```