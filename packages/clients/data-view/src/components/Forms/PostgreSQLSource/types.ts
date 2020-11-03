export interface PostgreSQLSourceFormProps {
  data?: PostgreSQLSourceFormData
}

export interface PostgreSQLSourceFormData {
  name: string
  host: string
  port: string
  user: string
  pass: string
  database: string
  connectionURL: string
}
