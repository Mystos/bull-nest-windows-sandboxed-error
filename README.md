## How to test

```
npm i

npm start

curl -v http://localhost:3000/
```

## What you should get

The error you should get in the nestJS console 

```
Error: Only URLs with a scheme in: file, data, and node are supported by the default ESM loader. On Windows, absolute paths must be valid file:// URLs. Received protocol 'd:'
    at throwIfUnsupportedURLScheme (node:internal/modules/esm/load:239:11)
    at defaultLoad (node:internal/modules/esm/load:130:3)
    at ModuleLoader.load (node:internal/modules/esm/loader:409:13)
    at ModuleLoader.moduleProvider (node:internal/modules/esm/loader:291:56)
    at new ModuleJob (node:internal/modules/esm/module_job:65:26)
    at ModuleLoader.#createModuleJob (node:internal/modules/esm/loader:303:17)
    at ModuleLoader.getJobFromResolveResult (node:internal/modules/esm/loader:260:34)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:241:17)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at ModuleLoader.import (node:internal/modules/esm/loader:328:23)
```