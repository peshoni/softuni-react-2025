import type { CodegenConfig } from '@graphql-codegen/cli'; 
const config: CodegenConfig = {
    overwrite: true,
    schema: [{
        'http://127.0.0.1:8080/v1/graphql': {
            // "headers": {
            //     "x-hasura-admin-secret": 'softuniReactAdminSecret'
            // }
        }
    }],
    documents: ['src/**/*.graphql'],
    ignoreNoDocuments: true, // for better experience with the watcher
    config: {
        skipTypename: true,
        // constEnums: false,
        enumsAsTypes: true,
        constEnums: true,
        namingConvention: {
            enumValues: "keep",
        },
        preResolveTypes: true,
        //   # Generate hooks (default behavior) and avoid components/HOCs
        withComponent: false,
        withHOC: false,
        //   # Keep documents as gql-tagged template strings (good for Apollo)
        documentMode: 'graphQLTag',
        //   # Prefer `import type {}` for purely-type imports
        useTypeImports: true,
        //   # Add __typename as non-optional if you want stricter typings (optional)
        nonOptionalTypename: false,
        apolloReactCommonImportFrom: "@apollo/client",
        apolloReactHooksImportFrom: "@apollo/client",
        withHooks: true
    },
    generates: {
        './graphql/generated.ts': {
            // preset: 'client',
            plugins: [
                {
                    typescript: {
                    },
                },
                {
                    "typescript-operations": {
                    },
                },
                {
                    "typescript-react-apollo": {
                        withHooks: true,
                        apolloReactHooksImportFrom: "@apollo/client/react"
                    },
                },
            ],
        },

    }
};

//           preset: 'client',
//, 'typescript-react-apollo', 'typescript-operations'

export default config;