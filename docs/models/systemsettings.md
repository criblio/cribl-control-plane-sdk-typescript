# SystemSettings

## Example Usage

```typescript
import { SystemSettings } from "cribl-control-plane/models";

let value: SystemSettings = {
  api: {
    baseUrl: "https://crushing-intervention.net/",
    disableApiCache: false,
    disabled: false,
    headers: {
      "key": "<value>",
      "key1": "<value>",
    },
    host: "beloved-suv.net",
    idleSessionTTL: 8362.31,
    listenOnPort: false,
    loginRateLimit: "<value>",
    port: 3905.62,
    protocol: "<value>",
    scripts: true,
    sensitiveFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    ssl: {
      caPath: "<value>",
      certPath: "<value>",
      disabled: false,
      passphrase: "<value>",
      privKeyPath: "<value>",
    },
    ssoRateLimit: "<value>",
    workerRemoteAccess: false,
  },
  auth: {
    fallback: false,
    fallbackBadLogin: true,
    filterType: "<value>",
    host: "rundown-summer.info",
    port: 7523.03,
    ssl: false,
    type: "splunk",
  },
  backups: {
    backupPersistence: "<value>",
    backupsDirectory: "<value>",
  },
  customLogo: {
    enabled: true,
    logoDescription: "<value>",
    logoImage: "<value>",
  },
  distributed: {
    mode: "single",
  },
  fips: true,
  git: {
    authType: "<value>",
    autoAction: "<value>",
    autoActionMessage: "<value>",
    autoActionSchedule: "<value>",
    branch: "<value>",
    commitDeploySingleAction: true,
    copilotAutoGitCommitMessages: false,
    defaultCommitMessage: "<value>",
    gitOps: "none",
    password: "m6brH3inWpyfKI6",
    remote: "<value>",
    sshKey: "<value>",
    strictHostKeyChecking: true,
    timeout: 8353.81,
    user: "Suzanne22",
  },
  jobLimits: {
    concurrentJobLimit: 8245.31,
    concurrentScheduledJobLimit: 3483.37,
    concurrentSystemJobLimit: 5367.36,
    concurrentSystemTaskLimit: 5853.34,
    concurrentTaskLimit: 2427.17,
    disableTasks: false,
    finishedJobArtifactsLimit: 5339.33,
    finishedTaskArtifactsLimit: 5374.97,
    jobArtifactsReaperPeriod: "<value>",
    jobTimeout: "<value>",
    maxTaskPerc: 5191.29,
    schedulingPolicy: "<value>",
    taskHeartbeatPeriod: 3527.04,
    taskManifestFlushPeriodMs: 3428.83,
    taskManifestMaxBufferSize: 6680.89,
    taskManifestReadBufferSize: "<value>",
    taskPollTimeoutMs: 2578.02,
  },
  limits: {
    cpuProfileTTL: "<value>",
    disableMetricsAccessorCache: false,
    edgeMetricsCustomExpression: "<value>",
    edgeMetricsMode: "minimal",
    edgeNodesCount: 2185.44,
    enableMetricsPersistence: false,
    enableWorkerPersistence: false,
    eventsMetadataSources: [
      "<value 1>",
      "<value 2>",
    ],
    largeEventsThreshold: "<value>",
    lookupMaxSize: "<value>",
    lookupMaxTotalSize: "<value>",
    maxDimensionValueSize: 2867.08,
    maxMetrics: 7892.1,
    maxPQSize: "<value>",
    maxReconnectInterval: "<value>",
    metricsDirectory: "<value>",
    metricsDropList: [
      "<value 1>",
      "<value 2>",
    ],
    metricsFieldsBlacklist: [
      "<value 1>",
      "<value 2>",
    ],
    metricsGCPeriod: "<value>",
    metricsMaxCardinality: 4933,
    metricsMaxDiskSpace: "<value>",
    metricsNeverDropList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    metricsWorkerIdBlacklist: [],
    minFreeSpace: "<value>",
    minReconnectInterval: "<value>",
    netFlowTemplateFlushInterval: 2933.84,
    randomReconnectInterval: "<value>",
    samples: {
      maxSize: "<value>",
    },
    workerMaxMetrics: 3454.03,
  },
  pii: {
    enablePiiDetection: true,
  },
  proxy: {
    useEnvVars: true,
  },
  redisCacheLimits: {
    clientTrackingMechanism: "<value>",
    enableServerAssist: true,
    keyTTLSecs: 5714.83,
    maxCacheSize: 8814.23,
    maxNumKeys: 3162.71,
    servicePeriodSecs: 3023.9,
  },
  redisLimits: {
    connections: {
      disabled: true,
      maxConnections: 9453.02,
    },
  },
  rollback: {
    rollbackEnabled: false,
    rollbackRetries: 528.65,
    rollbackTimeout: 4633.52,
  },
  searchLimits: {
    compressObjectCacheArtifacts: false,
    fieldSummaryMaxFields: 8570.16,
    fieldSummaryMaxNestedDepth: 8635.05,
    maxConcurrentSearches: 2506.23,
    maxExecutorsPerSearch: 9318.6,
    maxResultsPerSearch: 9327.03,
    maxSearchDuration: "<value>",
    searchHistoryMaxJobs: 6660.56,
    searchHistoryTTL: "<value>",
    searchQueueLength: "<value>",
    warmPoolSize: 9291.32,
    writeOnlyProviderSecrets: false,
  },
  servicesLimits: {
    connections: {
      memoryLimit: "<value>",
      procs: "auto",
    },
    metrics: {
      memoryLimit: "<value>",
      procs: 1275.01,
    },
    notifications: {
      memoryLimit: "<value>",
      procs: 5172.91,
    },
  },
  shutdown: {
    drainTimeout: 7276.98,
  },
  sni: {
    disableSNIRouting: false,
  },
  sockets: {
    directory: "/root",
  },
  support: {
    featureFlagOverrides: [
      {
        disabled: false,
        flagId: "<id>",
      },
    ],
  },
  system: {
    intercom: true,
    upgrade: "api",
  },
  tls: {
    defaultCipherList: "<value>",
    defaultEcdhCurve: "<value>",
    maxVersion: "<value>",
    minVersion: "<value>",
    rejectUnauthorized: true,
  },
  upgradeGroupSettings: {
    isRolling: false,
    quantity: 4087.94,
    retryCount: 6166.12,
    retryDelay: 17.98,
  },
  upgradeSettings: {
    automaticUpgradeCheckPeriod: "<value>",
    disableAutomaticUpgrade: true,
    enableLegacyEdgeUpgrade: true,
    packageUrls: [
      {
        packageHashUrl: "https://utilized-equal.org",
        packageUrl: "https://raw-bidet.com",
      },
    ],
    upgradeSource: "<value>",
  },
  workers: {
    count: 8687.03,
    enableHeapSnapshots: true,
    loadThrottlePerc: 3636.52,
    memory: 5805.06,
    minimum: 7288.22,
    startupMaxConns: 7272.44,
    startupThrottleTimeout: 2133.84,
    v8SingleThread: false,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `api`                                                                    | [models.SystemSettingsApi](../models/systemsettingsapi.md)               | :heavy_check_mark:                                                       | N/A                                                                      |
| `auth`                                                                   | [models.AuthConfig](../models/authconfig.md)                             | :heavy_check_mark:                                                       | N/A                                                                      |
| `backups`                                                                | [models.SystemSettingsBackups](../models/systemsettingsbackups.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `customLogo`                                                             | [models.SystemSettingsCustomLogo](../models/systemsettingscustomlogo.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `distributed`                                                            | [models.Distributed](../models/distributed.md)                           | :heavy_check_mark:                                                       | N/A                                                                      |
| `fips`                                                                   | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `git`                                                                    | [models.GitSettings](../models/gitsettings.md)                           | :heavy_check_mark:                                                       | N/A                                                                      |
| `jobLimits`                                                              | [models.JobSettings](../models/jobsettings.md)                           | :heavy_check_mark:                                                       | N/A                                                                      |
| `limits`                                                                 | [models.Limits](../models/limits.md)                                     | :heavy_check_mark:                                                       | N/A                                                                      |
| `pii`                                                                    | [models.SystemSettingsPii](../models/systemsettingspii.md)               | :heavy_check_mark:                                                       | N/A                                                                      |
| `proxy`                                                                  | [models.SystemSettingsProxy](../models/systemsettingsproxy.md)           | :heavy_check_mark:                                                       | N/A                                                                      |
| `redisCacheLimits`                                                       | [models.RedisCacheLimits](../models/rediscachelimits.md)                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `redisLimits`                                                            | [models.RedisLimits](../models/redislimits.md)                           | :heavy_check_mark:                                                       | N/A                                                                      |
| `rollback`                                                               | [models.SystemSettingsRollback](../models/systemsettingsrollback.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `searchLimits`                                                           | [models.SearchSettings](../models/searchsettings.md)                     | :heavy_check_mark:                                                       | N/A                                                                      |
| `servicesLimits`                                                         | [models.ServicesLimits](../models/serviceslimits.md)                     | :heavy_check_mark:                                                       | N/A                                                                      |
| `shutdown`                                                               | [models.SystemSettingsShutdown](../models/systemsettingsshutdown.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `sni`                                                                    | [models.SystemSettingsSni](../models/systemsettingssni.md)               | :heavy_check_mark:                                                       | N/A                                                                      |
| `sockets`                                                                | [models.SystemSettingsSockets](../models/systemsettingssockets.md)       | :heavy_minus_sign:                                                       | N/A                                                                      |
| `support`                                                                | [models.SystemSettingsSupport](../models/systemsettingssupport.md)       | :heavy_minus_sign:                                                       | N/A                                                                      |
| `system`                                                                 | [models.SystemSettingsSystem](../models/systemsettingssystem.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `tls`                                                                    | [models.SystemSettingsTls](../models/systemsettingstls.md)               | :heavy_check_mark:                                                       | N/A                                                                      |
| `upgradeGroupSettings`                                                   | [models.UpgradeGroupSettings](../models/upgradegroupsettings.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `upgradeSettings`                                                        | [models.UpgradeSettings](../models/upgradesettings.md)                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `workers`                                                                | [models.SystemSettingsWorkers](../models/systemsettingsworkers.md)       | :heavy_check_mark:                                                       | N/A                                                                      |