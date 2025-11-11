alter table "public"."requests_logs"
  add constraint "requests_logs_repair_request_id_fkey"
  foreign key ("repair_request_id")
  references "public"."repair_requests"
  ("id") on update cascade on delete cascade;
