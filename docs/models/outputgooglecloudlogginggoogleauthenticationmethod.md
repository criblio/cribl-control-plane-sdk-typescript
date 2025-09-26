# OutputGoogleCloudLoggingGoogleAuthenticationMethod

Choose Auto to use Google Application Default Credentials (ADC), Manual to enter Google service account credentials directly, or Secret to select or create a stored secret that references Google service account credentials.

## Example Usage

```typescript
import { OutputGoogleCloudLoggingGoogleAuthenticationMethod } from "cribl-control-plane/models";

let value: OutputGoogleCloudLoggingGoogleAuthenticationMethod = "secret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | "secret" | Unrecognized<string>
```