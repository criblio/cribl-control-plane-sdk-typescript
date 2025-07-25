# CreateOutputGoogleAuthenticationMethodGooglePubsub

Choose Auto to use Google Application Default Credentials (ADC), Manual to enter Google service account credentials directly, or Secret to select or create a stored secret that references Google service account credentials.

## Example Usage

```typescript
import { CreateOutputGoogleAuthenticationMethodGooglePubsub } from "cribl-control-plane/models/operations";

let value: CreateOutputGoogleAuthenticationMethodGooglePubsub = "auto";
```

## Values

```typescript
"auto" | "manual" | "secret"
```