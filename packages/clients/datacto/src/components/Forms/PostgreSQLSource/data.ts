import { PostgreSQLSourceFormData } from "./types";

export const defaultData: PostgreSQLSourceFormData = {
  name: 'New PostgreSQL Source',
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  pass: 'root',
  database: 'postgres',
  connectionURL: 'postgres://postgres:root@localhost:5432/postgres'
}