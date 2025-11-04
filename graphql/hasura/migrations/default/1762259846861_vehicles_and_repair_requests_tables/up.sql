


CREATE TABLE "public"."vehicle_statuses" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "value" text NOT NULL, "content" text NOT NULL, "weight" integer NOT NULL, "color" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("value"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

INSERT INTO "public"."vehicle_statuses"("id", "value", "content", "weight", "color") VALUES (E'8e99adc2-028d-4d03-af45-41973d0bf129', E'repair-request', E'repair-request', 100, E'#3254a8');

INSERT INTO "public"."vehicle_statuses"("id", "value", "content", "weight", "color") VALUES (E'6cb7019f-89bb-48c0-b9d7-433ed6d8a3f1', E'canceled-request', E'canceled-request', 150, E'#bd5642');

INSERT INTO "public"."vehicle_statuses"("id", "value", "content", "weight", "color") VALUES (E'f42c7900-d047-4a78-baac-ae78056d30e1', E'appointed-date', E'appointed-date', 200, E'#7e98d9');

INSERT INTO "public"."vehicle_statuses"("id", "value", "content", "weight", "color") VALUES (E'c50e1e92-cb10-4eb6-813c-bf4322686ee1', E'received', E'received', 250, E'#cfe4e8');

INSERT INTO "public"."vehicle_statuses"("id", "value", "content", "weight", "color") VALUES (E'7c620074-436d-4048-b1e2-6369162d17f8', E'under-repair', E'under-repair', 300, E'#8e9394');

INSERT INTO "public"."vehicle_statuses"("id", "value", "content", "weight", "color") VALUES (E'2213a042-581f-4295-b2b3-0ed213343a0d', E'repaired', E'repaired', 350, E'#64a369');

INSERT INTO "public"."vehicle_statuses"("id", "value", "content", "weight", "color") VALUES (E'6bcd6854-0741-40ae-bd5e-60d01260e658', E'awaiting-receipt', E'awaiting-receipt', 400, E'#e1e36b');

INSERT INTO "public"."vehicle_statuses"("id", "value", "content", "weight", "color") VALUES (E'0fa6435e-50c4-48ba-8d8f-34e4ecfedb26', E'delivered', E'delivered', 450, E'#21db31');

CREATE TABLE "public"."vehicles" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "vin" text NOT NULL, "plate" text NOT NULL, "make" text NOT NULL, "model" text NOT NULL, "year" integer NOT NULL, "color" text NOT NULL, "fuel" text NOT NULL, "mileage" integer NOT NULL, PRIMARY KEY ("id") , UNIQUE ("vin"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

alter table "public"."vehicles" add column "status_id" uuid
 not null;

alter table "public"."vehicles"
  add constraint "vehicles_status_id_fkey"
  foreign key ("status_id")
  references "public"."vehicle_statuses"
  ("id") on update restrict on delete restrict;

CREATE TABLE "public"."repair_requests" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "vehcile_id" uuid NOT NULL, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_repair_requests_updated_at"
BEFORE UPDATE ON "public"."repair_requests"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_repair_requests_updated_at" ON "public"."repair_requests"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

alter table "public"."repair_requests"
  add constraint "repair_requests_vehcile_id_fkey"
  foreign key ("vehcile_id")
  references "public"."vehicles"
  ("id") on update restrict on delete restrict;

CREATE TABLE "public"."requests_logs" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "editable" boolean NOT NULL DEFAULT true, "created_by" uuid NOT NULL, "short_description" text NOT NULL, "long_description" text NOT NULL, PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_requests_logs_updated_at"
BEFORE UPDATE ON "public"."requests_logs"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_requests_logs_updated_at" ON "public"."requests_logs"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

alter table "public"."requests_logs"
  add constraint "requests_logs_created_by_fkey"
  foreign key ("created_by")
  references "public"."users"
  ("id") on update restrict on delete restrict;

alter table "public"."repair_requests" add column "mechanic_id" uuid
 null;

alter table "public"."repair_requests"
  add constraint "repair_requests_mechanic_id_fkey"
  foreign key ("mechanic_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;

CREATE TABLE "public"."fuel_types" ("value" text NOT NULL, "content" text NOT NULL, PRIMARY KEY ("value") , UNIQUE ("value"), UNIQUE ("content"));

INSERT INTO "public"."fuel_types"("value", "content") VALUES (E'petrol', E'fuel-petrol');

INSERT INTO "public"."fuel_types"("value", "content") VALUES (E'diesel', E'fuel-diesel');

INSERT INTO "public"."fuel_types"("value", "content") VALUES (E'electricity', E'fuel-electricity');

INSERT INTO "public"."fuel_types"("value", "content") VALUES (E'propane', E'fuel-propane');

INSERT INTO "public"."fuel_types"("value", "content") VALUES (E'biodiesel', E'fuel-biodiesel');

INSERT INTO "public"."fuel_types"("value", "content") VALUES (E'ethanol', E'fuel-ethanol');

alter table "public"."vehicles"
  add constraint "vehicles_fuel_fkey"
  foreign key ("fuel")
  references "public"."fuel_types"
  ("value") on update restrict on delete restrict;
