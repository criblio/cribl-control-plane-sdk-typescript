# CreateOutputSystemByPackGoogleAuthenticationMethod

Choose Auto to use Google Application Default Credentials (ADC). Choose Secret to select or create a stored secret that references Google service account credentials.

## Example Usage

```typescript
import { CreateOutputSystemByPackGoogleAuthenticationMethod } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackGoogleAuthenticationMethod = "secret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"auto" | "secret" | Unrecognized<string>
```