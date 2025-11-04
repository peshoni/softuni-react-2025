
alter table "public"."users" drop constraint "users_role_fkey";

alter table "public"."users" drop constraint "users_gender_fkey";

alter table "public"."users" rename column "gender" to "gender_enum";

alter table "public"."users" rename column "role" to "role_enum";

alter table "public"."users" rename column "gender_enum" to "gender";

alter table "public"."users" rename column "role_enum" to "role";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."users" add column "gender" text
--  not null;

DELETE FROM "public"."genders" WHERE "value" = 'other';

DELETE FROM "public"."genders" WHERE "value" = 'female';

DELETE FROM "public"."genders" WHERE "value" = 'male';

DROP TABLE "public"."genders";

DROP TABLE "public"."users";

DELETE FROM "public"."user_roles" WHERE "value" = 'autoMechanic';

DELETE FROM "public"."user_roles" WHERE "value" = 'serviceSpecialist';

DELETE FROM "public"."user_roles" WHERE "value" = 'customer';

DROP TABLE "public"."user_roles";
