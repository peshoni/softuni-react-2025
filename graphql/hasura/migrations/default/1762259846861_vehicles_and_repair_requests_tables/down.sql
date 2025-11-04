
alter table "public"."vehicles" drop constraint "vehicles_fuel_fkey";

DELETE FROM "public"."fuel_types" WHERE "value" = 'ethanol';

DELETE FROM "public"."fuel_types" WHERE "value" = 'biodiesel';

DELETE FROM "public"."fuel_types" WHERE "value" = 'propane';

DELETE FROM "public"."fuel_types" WHERE "value" = 'electricity';

DELETE FROM "public"."fuel_types" WHERE "value" = 'diesel';

DELETE FROM "public"."fuel_types" WHERE "value" = 'petrol';

DROP TABLE "public"."fuel_types";


alter table "public"."repair_requests" drop constraint "repair_requests_mechanic_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."repair_requests" add column "mechanic_id" uuid
--  null;

alter table "public"."requests_logs" drop constraint "requests_logs_created_by_fkey";

DROP TABLE "public"."requests_logs";

alter table "public"."repair_requests" drop constraint "repair_requests_vehcile_id_fkey";

DROP TABLE "public"."repair_requests";

alter table "public"."vehicles" drop constraint "vehicles_status_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."vehicles" add column "status_id" uuid
--  not null;

DROP TABLE "public"."vehicles";


DELETE FROM "public"."vehicle_statuses" WHERE "id" = '0fa6435e-50c4-48ba-8d8f-34e4ecfedb26';

DELETE FROM "public"."vehicle_statuses" WHERE "id" = '6bcd6854-0741-40ae-bd5e-60d01260e658';

DELETE FROM "public"."vehicle_statuses" WHERE "id" = '2213a042-581f-4295-b2b3-0ed213343a0d';

DELETE FROM "public"."vehicle_statuses" WHERE "id" = '7c620074-436d-4048-b1e2-6369162d17f8';

DELETE FROM "public"."vehicle_statuses" WHERE "id" = 'c50e1e92-cb10-4eb6-813c-bf4322686ee1';

DELETE FROM "public"."vehicle_statuses" WHERE "id" = 'f42c7900-d047-4a78-baac-ae78056d30e1';

DELETE FROM "public"."vehicle_statuses" WHERE "id" = '6cb7019f-89bb-48c0-b9d7-433ed6d8a3f1';

DELETE FROM "public"."vehicle_statuses" WHERE "id" = '8e99adc2-028d-4d03-af45-41973d0bf129';

DROP TABLE "public"."vehicle_statuses";
