
CREATE TABLE "public"."user_roles" ("value" text NOT NULL, "content" text NOT NULL, PRIMARY KEY ("value") , UNIQUE ("value"), UNIQUE ("content"));

INSERT INTO "public"."user_roles"("value", "content") VALUES (E'customer', E'user-role-customer');

INSERT INTO "public"."user_roles"("value", "content") VALUES (E'serviceSpecialist', E'user-role-service-specialist');

INSERT INTO "public"."user_roles"("value", "content") VALUES (E'autoMechanic', E'user-role-auto-mechanic');

CREATE TABLE "public"."users" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "email" text NOT NULL, "password" text NOT NULL, "name" text NOT NULL, "surname" text NOT NULL, "family" text NOT NULL, "role" text NOT NULL, PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_users_updated_at"
BEFORE UPDATE ON "public"."users"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_users_updated_at" ON "public"."users"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."genders" ("value" text NOT NULL, "content" text NOT NULL, PRIMARY KEY ("value") , UNIQUE ("value"), UNIQUE ("content"));

INSERT INTO "public"."genders"("value", "content") VALUES (E'male', E'gender-male');

INSERT INTO "public"."genders"("value", "content") VALUES (E'female', E'gender-female');

INSERT INTO "public"."genders"("value", "content") VALUES (E'other', E'gender-other');

alter table "public"."users" add column "gender" text
 not null;

alter table "public"."users" rename column "role" to "role_enum";

alter table "public"."users" rename column "gender" to "gender_enum";

alter table "public"."users" rename column "role_enum" to "role";

alter table "public"."users" rename column "gender_enum" to "gender";

alter table "public"."users"
  add constraint "users_gender_fkey"
  foreign key ("gender")
  references "public"."genders"
  ("value") on update restrict on delete restrict;

alter table "public"."users"
  add constraint "users_role_fkey"
  foreign key ("role")
  references "public"."user_roles"
  ("value") on update restrict on delete restrict;
