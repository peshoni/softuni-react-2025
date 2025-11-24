echo 'Apply migration and seeds'

cd graphql

npx hasura migrate apply --database-name "default" 
npx hasura metadata apply
npx hasura metadata reload
npx hasura seed apply --database-name "default"

echo 'App is ready.'
exit 0