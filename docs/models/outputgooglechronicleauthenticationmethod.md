# OutputGoogleChronicleAuthenticationMethod

## Example Usage

```typescript
import { OutputGoogleChronicleAuthenticationMethod } from "cribl-control-plane/models";

let value: OutputGoogleChronicleAuthenticationMethod = "serviceAccount";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"manual" | "secret" | "serviceAccount" | "serviceAccountSecret" | Unrecognized<string>
```