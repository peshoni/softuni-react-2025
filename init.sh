echo 'Apply migration and seeds'

cd graphql

npx hasura migrate apply --database-name "default" --skip-update-check
npx hasura metadata apply --skip-update-check
npx hasura metadata reload --skip-update-check
npx hasura seed apply --database-name "default" --skip-update-check

echo 'App is ready.'
exit 0