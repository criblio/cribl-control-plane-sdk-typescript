# OutputGoogleBigqueryGoogleAuthenticationMethod

Choose Auto to use Google Application Default Credentials (ADC), or Secret to select or create a stored secret that references Google service account credentials

## Example Usage

```typescript
import { OutputGoogleBigqueryGoogleAuthenticationMethod } from "cribl-control-plane/models";

let value: OutputGoogleBigqueryGoogleAuthenticationMethod = "secret";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"auto" | "secret" | Unrecognized<string>
```