alter table "public"."vehicles" add column "created_at" timestamptz
 null default now();
