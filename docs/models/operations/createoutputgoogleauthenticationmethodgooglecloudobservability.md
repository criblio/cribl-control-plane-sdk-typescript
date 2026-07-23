# CreateOutputGoogleAuthenticationMethodGoogleCloudObservability

Choose Auto to use Google Application Default Credentials (ADC). Choose Secret to select or create a stored secret that references Google service account credentials.

## Example Usage

```typescript
import { CreateOutputGoogleAuthenticationMethodGoogleCloudObservability } from "cribl-control-plane/models/operations";

let value: CreateOutputGoogleAuthenticationMethodGoogleCloudObservability =
  "auto";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"auto" | "secret" | Unrecognized<string>
```